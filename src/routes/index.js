import { resolvePosts } from '$lib/api';

/** @type {import('./__types/index').RequestHandler} */
export async function GET({ url }) {
	let glob = import.meta.glob('./{code,photography}/**/*.md');
	let posts = await resolvePosts(glob, url);

	posts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));

	return {
		status: 200,
		body: {
			posts
		}
	};
}
