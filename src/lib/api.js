/**
 * The shape of data returned from mdsvex when parsing a markdown file.
 *
 * @typedef FrontMatter
 * @type {object}
 * @property {string} title
 * @property {Date} date
 */

/** @typedef {FrontMatter & { url: string, category: string }} Post */

/**
 * Assert that the input contains mdsvex FrontMatter
 *
 * @param {unknown} maybePost
 * @returns {asserts maybePost is { metadata: FrontMatter }}
 */
function assertFrontMatter(maybePost) {
	if (typeof maybePost !== 'object' || maybePost === null) {
		throw new Error('Not FrontMatter');
	}

	if (!Object.hasOwn(maybePost, 'metadata')) {
		throw new Error('Not FrontMatter');
	}
}

/**
 * Get url from the resolver key
 *
 * @param {URL} base
 * @param {string} path
 * @returns string
 */
function getUrl(base, path) {
	let uri = path.slice(2, -3).split('/').slice(0, -1).join('/');
	let root = base.pathname.slice(1);

	return `${root}/${uri}`;
}

/**
 * Resolve post objects from a glob of markdown files.
 *
 * @param {Record<string, () => Promise<unknown>>} glob
 * @param {URL} url
 */
export async function resolvePosts(glob, url) {
	let entries = Object.entries(glob);

	let posts = await Promise.all(
		entries.map(async ([key, resolve]) => {
			if (typeof resolve !== 'function') {
				throw new Error('Invalid resolve fn');
			}
			let data = await resolve();

			assertFrontMatter(data);

			let category = key.split('/')[1];

			return { ...data.metadata, category, url: getUrl(url, key) };
		})
	);

	return posts;
}
