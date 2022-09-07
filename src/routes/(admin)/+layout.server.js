import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, locals }) {
	let accessToken = locals.accessToken;

	if (!accessToken && url.pathname !== '/admin/logout') {
		throw redirect(307, `/login?redirect_uri=${encodeURIComponent(url.pathname)}`);
	}
}
