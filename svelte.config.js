import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
		alias: {
			$css: 'src/css',
			$hooks: 'src/hooks',
			$msw: 'msw'
		}
	}
};

export default config;
