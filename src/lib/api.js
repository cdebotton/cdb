import { env } from '$env/dynamic/public';

export class ApiError extends Error {
	/**
	 *
	 * @param {number} status
	 * @param {string} message
	 */
	constructor(status, message) {
		super(message);
		this.status = status;
	}
}

/**
 * An Api Builder class
 * @class
 * @public
 */
export class Api {
	/**
	 * The endpoint to fetch
	 * @param {string} endpoint
	 * @returns {GetApi}
	 */
	static get(endpoint) {
		return new GetApi(endpoint);
	}

	/**
	 *
	 * @param {string} endpoint
	 * @returns {PostApi}
	 */
	static post(endpoint) {
		return new PostApi(endpoint);
	}
}

class GetApi {
	/**
	 * Construct a new Get API builder around an endpoint.
	 * @param {string} endpoint
	 */
	constructor(endpoint) {
		this.endpoint = endpoint;
		this.headers = new Headers();
	}

	/**
	 * Set a header
	 * @param {string} key
	 * @param {string} value
	 * @returns
	 */
	header(key, value) {
		this.headers.set(key, value);
		return this;
	}

	/**
	 * Shortcut to set the bearer token.
	 * @param {string} [value]
	 */
	bearer(value) {
		if (value) {
			this.headers.set('Authorization', `Bearer ${value}`);
		}
		return this;
	}

	/**
	 * @template T
	 * @returns {Promise<T>}
	 */
	async json() {
		this.headers.set('Content-Type', 'application/json');

		let response = await fetch(`${env.PUBLIC_API_URL}/${this.endpoint}`, {
			method: 'GET',
			headers: this.headers
		});

		if (!response.ok) {
			throw new ApiError(response.status, response.statusText);
		}

		let json = await response.json();

		return json;
	}
}

class PostApi {
	/**
	 * Create a new Post Api Builder.
	 * @param {string} endpoint
	 */
	constructor(endpoint) {
		this.endpoint = endpoint;
		this.headers = new Headers();
	}

	/**
	 * Set the content to serialize to the endpoint.
	 * @param {any} content
	 * @returns {PostApi}
	 */
	body(content) {
		if (this.content) {
			throw new Error('Cannot set body or formData multiple times.');
		}

		this.content = JSON.stringify(content);
		this.headers.append('Content-Type', 'application/json');
		return this;
	}

	/**
	 * Set the content to serialize to the endpoint.
	 * @param {HTMLFormElement} form
	 * @returns {PostApi}
	 */
	formData(form) {
		if (this.content) {
			throw new Error('Cannot set body or formData multiple times.');
		}

		this.content = new FormData(form);
		return this;
	}

	/**
	 * @template T
	 * @returns {Promise<T>}
	 */
	async json() {
		let response = await fetch(`${env.PUBLIC_API_URL}/${this.endpoint}`, {
			method: 'POST',
			body: this.content,
			headers: this.headers
		});

		let json = await response.json();

		return json;
	}
}
