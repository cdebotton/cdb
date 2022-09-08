/**
 * @typedef User
 * @type {object}
 * @property {string} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {Date} created_at
 * @property {Date|null} updated_at
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	/** @type {User[]} */
	let users = await fetch('http://localhost:3000/users', {
		headers: {
			Authorization: `Bearer ${locals.accessToken}`
		}
	}).then((res) => res.json());

	return {
		users
	};
}
