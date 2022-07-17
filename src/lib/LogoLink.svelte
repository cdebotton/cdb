<script>
	import HeaderLink from './HeaderLink.svelte';
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	/** @type {string} */
	export let href;
	/** @type {string} */
	export let label;
	/** @type {boolean} */
	export let exact = false;

	/** @type {HTMLHeadingElement} */
	let heading;

	onMount(() => {
		animate(
			heading,
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
	<span>
		<HeaderLink {exact} {href} {label}>
			<slot />
		</HeaderLink>
	</span>
</h1>

<style>
	h1 {
		--cdb-header-link-label-size: var(--cdb-semantic-font-size-2xl);
		--cdb-header-link-annotation-size: var(--cdb-semantic-font-size-md);
		width: 110%;
		padding: var(--cdb-core-spacing-5);
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
		color: white;
		font-weight: 900;
		letter-spacing: var(--cdb-header-tracking);
		text-align: center;
		text-transform: uppercase;
		transform: rotate(2.45deg);
	}

	span {
		display: inline-block;
		transform: rotate(-2.45deg);
	}
</style>
