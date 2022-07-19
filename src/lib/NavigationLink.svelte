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
		--cdb-header-link-label-size: var(--cdb-semantic-font-size-lg);
		--cdb-navigation-vertical-gap: var(--cdb-semantic-padding-small);

		position: relative;
	}

	li:nth-of-type(n + 2)::before {
		display: inline;
		padding: 0 var(--cdb-nav-item-gap);
		content: '・';
		font-size: var(--cdb-header-link-label-size);
		font-weight: 900;
		line-height: 1;
	}

	span {
		font-weight: 300;
		text-transform: uppercase;
	}
</style>
