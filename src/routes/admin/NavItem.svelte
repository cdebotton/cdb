<script>
	/** @type {string} */
	export let title;

	/** @type {string} */
	export let href;
</script>

<li>
	<a {title} data-sveltekit-prefetch {href}>
		<slot />
	</a>
</li>

<style>
	a {
		font-weight: 700;
		letter-spacing: var(--tracking--3);
		text-decoration: none;
		text-transform: uppercase;
	}
</style>
