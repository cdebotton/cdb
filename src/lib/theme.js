import { writable } from 'svelte/store';

/**
 * @template T
 * @typedef ValueOf<T>
 * @type {T[keyof T]}
 */

const SESSION_KEY = 'colorMode';

export const Theme = /** @type {const} */ ({
	Light: 'light',
	Dark: 'dark'
});

/** @type {ValueOf<typeof Theme>} */
let colorMode = Theme.Light;
if (!import.meta.env.SSR && document.documentElement.classList.contains('dark-theme')) {
	colorMode = Theme.Dark;
}

export let themeStore = writable(colorMode);

themeStore.subscribe((value) => {
	if (!import.meta.env.SSR) {
		if (value === Theme.Light) {
			window.sessionStorage.setItem(SESSION_KEY, Theme.Light);
			document.documentElement.classList.remove('dark-theme');
		} else {
			window.sessionStorage.setItem(SESSION_KEY, Theme.Dark);
			document.documentElement.classList.add('dark-theme');
		}
	}
});
