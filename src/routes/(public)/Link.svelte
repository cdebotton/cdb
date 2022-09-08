<script>
	import { page } from '$app/stores';

	/** @type {string} */
	export let href;
	export let exact = false;

	$: active = exact ? href === $page.url.pathname : $page.url.pathname.startsWith(href);
</script>

<a data-sveltekit-prefetch {href}>
	<slot {active} />
</a>

<style>
	a {
		display: contents;
		color: currentColor;
	}
</style>
