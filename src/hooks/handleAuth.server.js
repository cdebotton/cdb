import { fetcher } from '$lib/api';

let revalidate = fetcher.path('/accounts/revalidate').method('post').create();

/** @type {import('@sveltejs/kit').Handle} */
export async function handleAuth({ event, resolve }) {
	let refreshToken = event.cookies.get('refreshToken') ?? undefined;
	let accessToken = event.cookies.get('accessToken') ?? undefined;

	if (refreshToken && !accessToken) {
		try {
			let { data: result } = await revalidate({ refreshToken });

			event.cookies.set('accessToken', result.accessToken, {
				httpOnly: true,
				secure: true,
				path: '/',
				expires: new Date(result.expiresIn)
			});

			event.cookies.set('refreshToken', result.refreshToken, {
				httpOnly: true,
				secure: true,
				path: '/',
				expires: new Date(result.refreshTokenExpires)
			});
		} catch (err) {
			event.cookies.delete('refreshToken');
			event.cookies.delete('accessToken');
		}
	}

	event.locals.accessToken = accessToken;
	event.locals.refreshToken = refreshToken;

	let response = await resolve(event);

	return response;
}
