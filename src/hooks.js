import { parse } from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	/** @type {Record<string, string> | null} */
	let cookie = null;
	let headerValue = event.request.headers.get('cookie');
	if (headerValue) {
		cookie = parse(headerValue);
	}

	if (cookie?.refresh_token && !cookie?.access_token) {
		try {
			// Request endpoint to set new access token and update refresh token.
		} catch (err) {
			// Yikes. Delete both tokens.
		}
	}

	event.locals.accessToken = cookie?.access_token;
	event.locals.refreshToken = cookie?.refresh_token;

	let response = await resolve(event);

	return response;
}
