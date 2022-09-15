/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		accessToken?: string;
		refreshToken?: string;
	}

	interface PageError {
		message: string;
	}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
