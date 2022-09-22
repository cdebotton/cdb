// @ts-nocheck
import { error } from '@sveltejs/kit';

import { fetcher, ApiError } from '$lib/api';

let getUser = fetcher.path('/users/{id}').method('get').create();

/** @param {Parameters<import('./$types').PageServerLoad<{ user: User }>>} event */
export async function load({ params }) {
	try {
		let { data: user } = await getUser({ id: params.userId });

		return {
			user
		};
	} catch (err) {
		if (err instanceof ApiError) {
			throw error(err.status, { message: err.message });
		}

		throw err;
	}
}

/** */
export let actions = {
	default: /** @param {import('./$types').RequestEvent} event */ async ({ request, params }) => {
		let userId = params.userId;
		let form = await request.formData();
		let firstName = form.get('firstName');
		let lastName = form.get('lastName');

		console.log({ userId, firstName, lastName });

		return {};
	}
};
