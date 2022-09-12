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
				expires: result.expires_in
			});

			event.cookies.set('refresh_token', result.refresh_token, {
				httpOnly: true,
				secure: true,
				expires: result.refresh_token_expires
			});

			console.log('Tokens updated');
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
