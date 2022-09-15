import { error } from '@sveltejs/kit';

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

/**
 * @typedef HttpMethod
 * @type {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'}
 */

/**
 * An Api Builder class
 * @class
 * @public
 */
export class Api {
	/**
	 * The endpoint to fetch
	 * @param {string} endpoint
	 * @returns {Api}
	 */
	static get(endpoint) {
		return new Api(endpoint, 'GET');
	}

	/**
	 *
	 * @param {string} endpoint
	 * @returns {Api}
	 */
	static post(endpoint) {
		return new Api(endpoint, 'POST');
	}

	/**
	 * Construct a new Get API builder around an endpoint.
	 * @param {string} endpoint
	 * @param {HttpMethod} method
	 */
	constructor(endpoint, method) {
		this.endpoint = endpoint;
		this.method = method;
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
	 * Set the content to serialize to the endpoint.
	 * @param {any} content
	 * @returns {Api}
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
	 * @returns {Api}
	 */
	formData(form) {
		if (this.content) {
			throw new Error('Cannot set body or formData multiple times.');
		}

		if (
			this.headers.get('Content-Type') &&
			this.headers.get('Content-Type') === 'application/json'
		) {
			this.headers.delete('Content-Type');
		}

		this.content = new FormData(form);
		return this;
	}

	/**
	 * @template T
	 * @returns {Promise<T>}
	 */
	async json() {
		let response = await fetch(`${PUBLIC_API_URL}/${this.endpoint}`, {
			method: this.method,
			headers: this.headers,
			body: this.content
		});

		if (!response.ok) {
			throw error(response.status, response.statusText);
		}

		/** @type {T} */
		let json = await response.json();

		return json;
	}
}
