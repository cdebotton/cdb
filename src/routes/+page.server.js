import { resolvePosts } from '$lib/api';

/**
 * @typedef Data
 * @type {object}
 * @property {import('$lib/api').Post[]} posts
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	let glob = import.meta.glob('./{code,photography}/**/*.md');
	let posts = await resolvePosts(glob, url);
	posts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));

	return {
		posts
	};
}
