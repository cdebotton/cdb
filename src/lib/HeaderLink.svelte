<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	/** @type {string} */
	export let href;
	/** @type {boolean} */
	export let exact = false;
	/** @type {string?} */
	export let label = null;

	$: active = exact ? href === $page.url.pathname : $page.url.pathname.startsWith(href);
</script>

<a sveltekit:prefetch {href}>
	{#if label !== null && active}
		<span transition:fly={{ x: 10 }} class="annotation" lang="ja">{label}</span>
	{/if}
	<span class="label">
		<slot {active} />
	</span>
</a>

<style>
	:root {
		--cdb-navigation-indicator-height: var(--cdb-semantic-height-small);
		--cdb-navigation-vertical-gap: var(--cdb-semantic-padding-extra-small);
		--cdb-header-label-tracking: var(--cdb-semantic-tracking-tightest);
	}

	a {
		position: relative;
		display: inline-grid;
		margin-top: calc(var(--cdb-navigation-vertical-gap) + var(--cdb-navigation-annotation-size));
		color: inherit;
		gap: var(--cdb-navigation-vertical-gap);
		grid-row: min-content var(--cdb-indicator-height);
		text-decoration: none;
	}

	.annotation {
		position: absolute;
		bottom: calc(100% + var(--cdb-navigation-vertical-gap));
		padding: 0 var(--cdb-semantic-width-xs);
		font-size: var(--cdb-header-link-annotation-size, 0.5em);
		font-weight: 300;
		line-height: 1;
	}

	.label {
		display: contents;
		font-size: var(--cdb-header-link-label-size);
		letter-spacing: var(--cdb-header-label-tracking);
		line-height: 1;
	}
</style>
