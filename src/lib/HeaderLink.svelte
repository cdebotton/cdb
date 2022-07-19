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

	.label {
		display: contents;
		font-size: var(--cdb-header-link-label-size);
		letter-spacing: var(--cdb-header-label-tracking);
		line-height: 1;
	}
</style>
