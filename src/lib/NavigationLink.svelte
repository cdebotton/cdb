<script>
	import HeaderLink from './HeaderLink.svelte';
	import NavigationActiveIndicator from './NavigationActiveIndicator.svelte';

	/** @type {string} */
	export let href;
</script>

<li>
	<HeaderLink {href} let:active>
		<span>
			<slot />
		</span>
		{#if active}
			<NavigationActiveIndicator />
		{/if}
	</HeaderLink>
</li>

<style>
	li {
		position: relative;
	}

	li:nth-of-type(n + 2)::before {
		display: inline;
		padding: 0 var(--space-1);
		content: '・';
		font-size: 1em;
		font-weight: 900;
		line-height: 1;
	}

	span {
		font-size: var(--font-size-3);
		font-weight: 300;
		text-transform: uppercase;
	}
</style>
