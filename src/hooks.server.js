import { Api } from '$lib/api';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let refreshToken = event.cookies.get('refresh_token');
	let accessToken = event.cookies.get('access_token');

	if (refreshToken && !accessToken) {
		try {
			let result = await Api.post('accounts/revalidate')
				.body({ refresh_token: refreshToken })
				.json();

			event.cookies.set('access_token', result.access_token, {
				httpOnly: true,
				secure: true,
				expires: new Date(result.expires_in)
			});

			console.log(result.refresh_token_expires);
			event.cookies.set('refresh_token', result.refresh_token, {
				httpOnly: true,
				secure: true,
				expires: new Date(result.refresh_token_expires)
			});
		} catch (err) {
			event.cookies.delete('refresh_token');
			event.cookies.delete('access_token');
		}
	}

	event.locals.accessToken = accessToken;
	event.locals.refreshToken = refreshToken;

	let response = await resolve(event);

	return response;
}
