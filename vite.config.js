import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), vanillaExtractPlugin()]
};

export default config;
