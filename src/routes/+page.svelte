<script>
	import { formatDate } from '$lib/date';

	/** @type {import('./+page.server').Data} */
	export let data;
</script>

<svelte:head>
	<title>Christian de Botton</title>
	<meta
		name="description"
		content="Software engineer, photographer, and videographer based in San Francisco, CA."
	/>
</svelte:head>

<div class="container">
	<div class="page">
		{#each data.posts as post (post)}
			<div class="item">
				<a href={post.url}>
					<span class="metadata">
						<h2>{post.title}</h2>
						<h3>{post.category}</h3>
						<h4>{formatDate(post.date)}</h4>
					</span>
				</a>
			</div>
		{/each}
	</div>
	<div class="page" />
	<div class="page" />
	<div class="page" />
	<div class="page" />
</div>

<style>
	:global(html) {
		scroll-padding: var(--space-6);
		scroll-snap-type: y mandatory;
	}

	.container {
		display: grid;
		gap: var(--gap);
		grid-auto-flow: row;
		--gap: var(--space-2);
		--page-padding: var(--space-5);
		--row-count: 4;
	}

	.page {
		display: grid;
		height: calc(100vh - var(--space-8));
		padding: 0 var(--space-4);
		gap: var(--space-4);
		grid-auto-columns: calc(
			(100vh - (var(--gap) * (var(--row-count) - 1)) - (var(--page-padding) * 2)) / var(--row-count)
		);
		grid-auto-columns: calc(100vw - var(--offset-x) - 4rem);
		grid-auto-flow: column dense;
		grid-template-rows: repeat(var(--row-count), 1fr);
		scroll-snap-align: start;
	}

	.item {
		position: relative;
		background-color: hsl(var(--color-grayscale-1) / 0.2);
		grid-column: span 2;
		grid-row: span 2;
	}

	.item:nth-of-type(1) {
		grid-column: span var(--row-count);
		grid-row: span var(--row-count);
	}

	.item:nth-of-type(3n + 3) {
		grid-column: span calc(var(--row-count) - 1);
		grid-row: span calc(var(--row-count) - 1);
	}

	.item a {
		position: absolute;
		inset: 0;
	}

	.metadata {
		position: absolute;
		right: var(--space-6);
		bottom: var(--space-5);
	}

	h2 {
		font-size: var(--font-size-3);
		font-weight: 900;
	}

	h3 {
		font-size: var(--font-size-1);
		font-weight: 800;
		text-transform: capitalize;
	}

	h4 {
		font-size: var(--font-size-1);
		font-weight: 600;
	}
</style>
