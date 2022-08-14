/**
 * @typedef Frontmatter
 * @type {object}
 * @property {string} title
 * @property {Date} date
 */

/**
 * @typedef Body
 * @type {object}
 * @property {(Frontmatter & { url: string })[]} posts
 * @property {number} total
 */

/**
 * Get url from the resolver key
 *
 * @param {string} path
 * @returns string
 */
function getUrl(path) {
	return `/photography/${path.slice(2, -3)}`;
}

/**
 *
 * @param {unknown} maybePost
 * @returns {maybePost is {metadata:{ title: string, date: Date}}}
 */
function isFrontmatter(maybePost) {
	if (typeof maybePost !== 'object' || maybePost === null) {
		return false;
	}

	if (!Object.hasOwn(maybePost, 'metadata')) {
		return false;
	}

	return true;
}

/** @type {import('./__types').RequestHandler<Body>} */
export async function GET() {
	/** @type {Record<string, () => Promise<unknown>} */
	let glob = import.meta.glob('./**/*.md');
	let entries = Object.entries(glob);

	let posts = await Promise.all(
		entries.map(async ([key, result]) => {
			let post = await result();

			if (!isFrontmatter(post)) {
				throw new Error('Not a post');
			}

			return { ...post.metadata, url: getUrl(key) };
		})
	);

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
