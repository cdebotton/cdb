import { serialize } from 'cookie';

/** @type {import('./$types').RequestHandler} */
export async function POST({ setHeaders }) {
	setHeaders({
		'set-cookie': serialize('access_token', '', {
			httpOnly: true,
			secure: true,
			path: '/',
			expires: new Date(1986, 2, 8)
		})
	});

	setHeaders({
		'set-cookie': serialize('refresh_token', '', {
			httpOnly: true,
			secure: true,
			path: '/',
			expires: new Date(1986, 2, 8)
		})
	});

	return new Response(String('ok'));
}
