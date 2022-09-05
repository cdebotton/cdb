import cookie from 'cookie';

/** @type {import('./$types').Action} */
export async function POST({ request, setHeaders }) {
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
			expires: new Date(expires_in)
		})
	});

	setHeaders({
		'set-cookie': cookie.serialize('refresh_token', refresh_token, {
			httpOnly: true,
			secure: true,
			expires: new Date(refresh_token_expires)
		})
	});

	return {
		status: 200,
		errors: []
	};
}
