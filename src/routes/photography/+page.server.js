import { resolvePosts } from '$lib/api';

/**
 * @typedef Post
 * @type {object}
 * @property {string} title
 * @property {Date} date
 * @property {string} url
 *
 * @typedef Data
 * @type {object}
 * @property {Post[]} posts
 * @property {number} total
 */

/**
 * @type {import('./$types').PageServerLoad<Data>}
 * */
export async function load({ url }) {
	let glob = import.meta.glob('./**/*.md');
	let posts = await resolvePosts(glob, url);

	posts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));

	let total = posts.length;

	return {
		total,
		posts
	};
}
