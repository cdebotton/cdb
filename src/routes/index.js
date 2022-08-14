/** @type {import('./__types/index').RequestHandler} */
export async function GET() {
	return {
		status: 200,
		body: {
			posts: [{ foo: 'bar' }]
		}
	};
}
