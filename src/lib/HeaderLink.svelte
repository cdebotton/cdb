<script>
	import { page } from '$app/stores';

	/** @type {string} */
	export let href;
	/** @type {boolean} */
	export let exact = false;

	/** @type {boolean} */
	let active;

	$: if (exact) {
		active = href === $page.url.pathname;
	} else {
		active = $page.url.pathname.startsWith(href);
	}
</script>

<a sveltekit:prefetch {href}>
	<slot {active} name="annotation" />
	<slot {active} />
</a>

<style>
	a {
		position: relative;
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}
</style>
