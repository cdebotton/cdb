/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let refreshToken = event.cookies.get('refresh_token');
	let accessToken = event.cookies.get('access_token');

	if (refreshToken && !accessToken) {
		try {
			let result = await fetch('http://localhost:3000/accounts/revalidate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ refresh_token: refreshToken })
			}).then((res) => res.json());

			console.log(result, '!!!');
			// Request endpoint to set new access token and update refresh token.
		} catch (err) {
			console.log(err);
			// Yikes. Delete both tokens.
		}
	}

	event.locals.accessToken = accessToken;
	event.locals.refreshToken = refreshToken;

	let response = await resolve(event);

	return response;
}
