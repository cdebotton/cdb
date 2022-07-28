<script>
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	import HeaderLink from './HeaderLink.svelte';

	/** @type {string} */
	export let href;
	/** @type {boolean} */
	export let exact = false;

	/** @type {HTMLElement} */
	let el;

	onMount(() => {
		animate(
			el,
			{
				backgroundPosition: '0 -300vh'
			},
			{
				duration: 15,
				easing: 'linear',
				repeat: Infinity,
				direction: 'alternate'
			}
		);
	});
</script>

<HeaderLink let:active {exact} {href}>
	<h1 class:active bind:this={el}>
		<slot />
	</h1>
</HeaderLink>

<style>
	h1 {
		display: inline-block;
		padding: var(--space-2) var(--space-3);
		background: linear-gradient(
			to bottom right,
			hsl(200 100% 46.6%) 0%,
			hsl(288.73 100% 55%) 45%,
			hsl(288.73 100% 55%) 55%,
			hsl(200 100% 46.6%) 100%
		);
		background-position: 0 0;
		background-repeat: repeat;
		background-size: 400vw 400vh;
		color: var(--cdb-page-background);
		font-size: var(--font-size-4);
		font-weight: 900;
		letter-spacing: var(--tracking--4);
		text-align: center;
		text-transform: uppercase;
	}

	h1:not(.active) {
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
</style>
