/**
 * @typedef User
 * @type {object}
 * @property {string} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {Date} created_at
 * @property {Date|null} updated_at
 */

import { Api } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	/** @type {User[]} */
	let users = await Api.get('users').bearer(locals.accessToken).json();

	return {
		users
	};
}
