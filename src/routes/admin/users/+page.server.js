/**
 * @typedef Account
 * @type {object}
 * @property {string} email
 *
 * @typedef User
 * @type {object}
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {Date} createdAt
 * @property {Date|null} updatedAt
 * @property {Account} account
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
