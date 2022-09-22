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
	li {
		border-bottom: 1px solid hsl(var(--color-text));
	}
	a {
		font-size: var(--font-size-3);
		font-weight: 800;
		letter-spacing: var(--tracking--3);
		text-decoration: none;
	}
</style>
