<script context="module">
	import { crossfade } from 'svelte/transition';
	let key = Symbol.for('active');
	let [send, receive] = crossfade({
		fallback() {
			return {
				duration: 75,
				css: (t) => `
				opacity: ${t};
				transform: scaleX(${t});
			`
			};
		}
	});
</script>

<script>
	import { animation } from '$lib/animation';

	/** @type {string} */
	export let label;
	export let active = false;

	/** @type {import('$lib/animation').AnimationConfig} */
	export let config;
</script>

<span class:active class="label">{label}</span>
<span use:animation={config} class="text">
	{#if active}
		<span class="indicator" in:receive={{ key }} out:send={{ key }} />
	{/if}
	<span class="content">
		<slot />
	</span>
</span>

<style>
	.label,
	.text {
		color: var(--color-background);
		line-height: 1;
		writing-mode: vertical-lr;
	}

	.text {
		position: relative;
		padding: var(--space-sm) var(--space-xs);
		border-radius: var(--radii-subtle);
		background: var(--brand-gradient);
		background-position: 0 0;
		background-repeat: repeat;
		background-size: 400vw 400vh;
		font-size: var(--text-body-sm);
		font-weight: 900;
		letter-spacing: var(--tracking--2);
		text-transform: uppercase;
	}

	.content {
		position: relative;
	}

	.label {
		position: relative;
		padding: var(--space-xs) var(--space-2xs);
		background-color: var(--color-text);
		font-size: var(--text-body-sm);
		font-weight: 600;
		letter-spacing: var(--tracking-4);
		opacity: 0;
		transform: translateX(calc(-1 * var(--space-md)));
		transition-duration: 175ms;
		transition-property: transform, opacity;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.label.active {
		opacity: 1;
		transform: translateX(0);
	}

	.indicator {
		position: absolute;
		background-color: var(--color-text);
		inset: 0;
		transform-origin: 0 0;
	}
</style>
