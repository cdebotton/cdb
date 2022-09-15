import { json } from '@sveltejs/kit';

import { dev } from '$app/environment';

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies }) {
	cookies.set('accessToken', '', {
		httpOnly: true,
		secure: !dev,
		path: '/',
		maxAge: 0
	});

	cookies.set('refreshToken', '', {
		httpOnly: true,
		secure: !dev,
		path: '/',
		maxAge: 0
	});

	return json({
		type: 'redirect',
		location: '/login',
		status: 302
	});
}
