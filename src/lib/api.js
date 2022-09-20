import { Fetcher } from 'openapi-typescript-fetch';

import { PUBLIC_API_URL } from '$env/static/public';

export class ApiError {
	/**
	 * Create a new Api Error
	 * @param {number} status HTTP Status Code
	 * @param {string} message The error body
	 */
	constructor(status, message) {
		this.status = status;
		this.message = message;
	}
}

/** @type {ReturnType<typeof Fetcher.for<import('./api.spec').paths>>} */
export let fetcher = Fetcher.for();

fetcher.configure({
	baseUrl: PUBLIC_API_URL
});
