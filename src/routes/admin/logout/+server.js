import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies }) {
	cookies.set('access_token', '', {
		httpOnly: true,
		secure: true,
		path: '/',
		maxAge: 0
	});

	cookies.set('refresh_token', '', {
		httpOnly: true,
		secure: true,
		path: '/',
		maxAge: 0
	});

	return json({
		type: 'redirect',
		location: '/login',
		status: 302
	});
}
