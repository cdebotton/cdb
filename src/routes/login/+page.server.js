import { redirect } from '@sveltejs/kit';

import { dev } from '$app/environment';
import { Api } from '$lib/api';

/** @type import('./$types').Actions */
export const actions = {
	default: async ({ request, url, cookies }) => {
		let form = await request.formData();
		let email = form.get('email');
		let password = form.get('password');

		let { accessToken, expiresIn, refreshToken, refreshTokenExpires } = await Api.post(
			'accounts/authorize'
		)
			.body({
				clientId: email,
				clientSecret: password
			})
			.json();

		cookies.set('accessToken', accessToken, {
			httpOnly: true,
			secure: !dev,
			path: '/',
			expires: new Date(expiresIn)
		});

		cookies.set('refreshToken', refreshToken, {
			httpOnly: true,
			secure: !dev,
			path: '/',
			expires: new Date(refreshTokenExpires)
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
