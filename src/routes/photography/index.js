import { resolvePosts } from '$lib/api';

/**
 * @typedef Post
 * @type {object}
 * @property {string} title
 * @property {Date} date
 * @property {string} url
 *
 * @typedef Body
 * @type {object}
 * @property {Post[]} posts
 * @property {number} total
 */

/**
 * @type {import('./__types').RequestHandler<Body>}
 * */
export async function GET({ url }) {
	let glob = import.meta.glob('./**/*.md');
	let posts = await resolvePosts(glob, url);

	posts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));

	let total = posts.length;

	return {
		status: 200,
		body: {
			total,
			posts
		}
	};
}
