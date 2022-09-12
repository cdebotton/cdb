import { redirect } from '@sveltejs/kit';

import { Api } from '$lib/api';

/** @type import('./$types').Actions */
export const actions = {
	default: async ({ request, url, cookies }) => {
		let form = await request.formData();
		let email = form.get('email');
		let password = form.get('password');

		let { access_token, expires_in, refresh_token, refresh_token_expires } = await Api.post(
			'accounts/authorize'
		)
			.body({
				client_id: email,
				client_secret: password
			})
			.json();

		cookies.set('access_token', access_token, {
			httpOnly: true,
			secure: true,
			path: '/',
			expires: new Date(expires_in)
		});

		cookies.set('refresh_token', refresh_token, {
			httpOnly: true,
			secure: true,
			path: '/',
			expires: new Date(refresh_token_expires)
		});

		let redirectUri = url.searchParams.get('redirect_uri') ?? '/admin';

		throw redirect(303, redirectUri);
	}
};

/** @type {import('./$types').PageServerLoad} */
export function load({ locals, url }) {
	if (locals.accessToken) {
		let redirectUri = url.searchParams.get('redirect_uri') ?? '/admin';

		throw redirect(302, redirectUri);
	}
}
