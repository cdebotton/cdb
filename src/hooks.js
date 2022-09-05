/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let response = await resolve(event);

	return response;
}
