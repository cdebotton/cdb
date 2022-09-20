import { fetcher } from '$lib/api';

let getUsers = fetcher.path('/users').method('get').create();

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	let { data: users } = await getUsers(
		{},
		{ headers: { Authorization: `Bearer ${locals.accessToken}` } }
	);

	return {
		users
	};
}
