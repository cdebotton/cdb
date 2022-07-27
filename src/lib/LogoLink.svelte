<script>
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	import HeaderLink from './HeaderLink.svelte';

	/** @type {string} */
	export let href;
	/** @type {string} */
	export let label;
	/** @type {boolean} */
	export let exact = false;

	/** @type {HTMLSpanElement} */
	let heading;
	/** @type {HTMLSpanElement} */
	let annotation;

	onMount(() => {
		animate(
			[heading, annotation],
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

<h1 bind:this={heading}>
	<HeaderLink let:active {exact} {href}>
		<svelte:fragment slot="annotation">
			<span class:active bind:this={annotation} class="annotation" lang="ja">{label}</span>
		</svelte:fragment>
		<slot />
	</HeaderLink>
</h1>

<style>
	h1 {
		--local-padding: var(--space-2);
		display: inline-block;
		padding: var(--local-padding) 0;
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
		font-size: var(--font-size-5);
		font-weight: 900;
		letter-spacing: var(--tracking--3);
		text-align: center;
		text-transform: uppercase;
	}

	.annotation {
		position: absolute;
		bottom: calc(100% + var(--local-padding) + var(--space-1));
		padding: 0 var(--space-2);
		background: linear-gradient(
			to bottom right,
			hsl(200 100% 46.6%) 0%,
			hsl(288.73 100% 55%) 45%,
			hsl(288.73 100% 55%) 55%,
			hsl(200 100% 46.6%) 100%
		);
		-webkit-background-clip: text;
		background-clip: text;
		background-size: 400vw 400vh;
		color: transparent;
		font-size: var(--font-size-2, 0.5em);
		font-weight: 600;
		letter-spacing: var(--tracking-1);
		line-height: 1;
		opacity: 0;
		pointer-events: none;
		transform: translateY(var(--space-1));
		transition: all 275ms ease-out;
		user-select: none;
	}

	.annotation.active {
		opacity: 1;
		transform: translateY(0);
		transition: all 175ms ease-in;
	}
</style>
