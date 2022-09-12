import { error } from '@sveltejs/kit';

import { Api, ApiError } from '$lib/api';

/**
 * @typedef User
 * @type {object}
 * @property {string} firstName
 * @property {string} lastName
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		/** @type {User} */
		let user = await Api.get(`users/${params.userId}`).json();

		return {
			user
		};
	} catch (err) {
		if (err instanceof ApiError) {
			throw error(err.status, { message: err.message });
		}

		throw error(500, { message: 'Uh oh, something happened' });
	}
}
