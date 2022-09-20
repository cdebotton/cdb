import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

import { dev } from '$app/environment';
import { fetcher } from '$lib/api';

let authorize = fetcher.path('/accounts/authorize').method('post').create();

/** @type import('./$types').Actions */
export const actions = {
	default: async ({ request, url, cookies }) => {
		let form = await request.formData();
		let email = form.get('email')?.toString();
		let password = form.get('password')?.toString();

		if (!email || !password) {
			throw error(401, 'Missing email and/or password');
		}

		let {
			data: { accessToken, expiresIn, refreshToken, refreshTokenExpires }
		} = await authorize({
			clientId: email,
			clientSecret: password
		});

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