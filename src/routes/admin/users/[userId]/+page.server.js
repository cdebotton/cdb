import { error } from '@sveltejs/kit';

import { fetcher } from '$lib/api';

let getUser = fetcher.path('/users/{id}').method('get').create();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		let { data } = await getUser({ id: params.userId });

		return data;
	} catch (err) {
		if (err instanceof getUser.Error) {
			throw error(err.status, err.message);
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
