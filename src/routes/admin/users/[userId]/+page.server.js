import { fetcher } from '$lib/api';

let getUser = fetcher.path('/users/{id}').method('get').create();

/**
 * @typedef UserResponse
 * @type {import('openapi-typescript-fetch').FetchReturnType<typeof getUser>}
 * @typedef PageServerLoad
 * @type {import('./$types').PageServerLoad<UserResponse>}
 */

/** @type {PageServerLoad} */
export async function load({ params }) {
	let { data } = await getUser({ id: params.userId });

	return data;
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
