import { redirect } from '@sveltejs/kit';
import cookie from 'cookie';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals, url }) {
	if (locals.accessToken) {
		let redirectUri = url.searchParams.get('redirect_uri') ?? '/admin';

		throw redirect(302, redirectUri);
	}
}

/** @type {import('./$types').Action} */
export async function POST({ request, setHeaders, url }) {
	try {
		let { email, password } = await request.json();
		let { access_token, expires_in, refresh_token, refresh_token_expires } = await fetch(
			'http://localhost:3000/accounts/authorize',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					client_id: email,
					client_secret: password
				})
			}
		).then((res) => res.json());

		setHeaders({
			'set-cookie': cookie.serialize('access_token', access_token, {
				httpOnly: true,
				secure: true,
				path: '/',
				expires: new Date(expires_in)
			})
		});

		setHeaders({
			'set-cookie': cookie.serialize('refresh_token', refresh_token, {
				httpOnly: true,
				secure: true,
				path: '/',
				expires: new Date(refresh_token_expires)
			})
		});

		let redirectUri = url.searchParams.get('redirect_uri') ?? '/admin';

		return {
			location: redirectUri
		};
	} catch (err) {
		return {
			errors: [err],
			status: 400
		};
	}
}
