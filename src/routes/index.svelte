<script>
	import { onMount } from 'svelte';

	/** @type {(event: WheelEvent) => void} */
	function transformScroll(event) {
		if (!event.deltaY) {
			return;
		}

		if (!(event.currentTarget instanceof HTMLElement)) {
			return;
		}

		event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
		event.preventDefault();
	}

	onMount(() => {
		document.documentElement.addEventListener('wheel', transformScroll, { passive: false });

		return () => {
			document.documentElement.removeEventListener('wheel', transformScroll);
		};
	});
</script>

<svelte:head>
	<title>Christian de Botton</title>
	<meta
		name="description"
		content="Software engineer, photographer, and videographer based in San Francisco, CA."
	/>
</svelte:head>

<div class="container">
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
	<div class="item" />
</div>

<style>
	.container {
		--gap: var(--space-5);
		--page-padding: var(--space-5);
		--row-count: 5;

		display: grid;
		height: 100%;
		gap: var(--gap);
		grid-auto-columns: 200px;
		grid-auto-columns: calc(
			(100vh - (var(--gap) * (var(--row-count) - 1)) - (var(--page-padding) * 2)) / var(--row-count)
		);
		grid-auto-flow: column dense;
		grid-template-rows: repeat(var(--row-count), 1fr);
	}

	.item {
		background-color: hsl(var(--color-grayscale-1) / 0.1);
		grid-column: span 2;
		grid-row: span 2;
	}

	.item:nth-of-type(1) {
		grid-column: span 4;
		grid-row: span 5;
	}

	.item:nth-of-type(3n + 3) {
		grid-column: span 3;
		grid-row: span 3;
	}
</style>
