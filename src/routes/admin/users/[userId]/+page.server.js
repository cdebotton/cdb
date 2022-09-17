import { error } from '@sveltejs/kit';

import { Api, ApiError } from '$lib/api';

/**
 * @typedef User
 * @type {object}
 * @property {string} id The users uuid
 * @property {string} [firstName] Optional first name
 * @property {string} [lastName] Optional last name
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

/** @type {import('./$types').Actions} */
export let actions = {
	default: async ({ request, params }) => {
		let userId = params.userId;
		let form = await request.formData();
		let firstName = form.get('firstName');
		let lastName = form.get('lastName');

		console.log({ userId, firstName, lastName });

		return {};
	}
};
