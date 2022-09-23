<script>
	import { crossfade } from 'svelte/transition';

	import { animation } from '$lib/animation';

	/** @type {string} */
	export let label;
	export let active = false;

	/** @type {import('$lib/animation').AnimationConfig} */
	export let config;

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

	export let tight = false;
</script>

<span class:active class="label" class:tight>{label}</span>
<span use:animation={config} class="text" class:tight>
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
		color: hsl(var(--color-background));
		line-height: 1;
		writing-mode: vertical-lr;
	}

	.text {
		position: relative;
		padding: var(--space-3) var(--space-2);
		background: var(--brand-gradient);
		background-position: 0 0;
		background-repeat: repeat;
		background-size: 400vw 400vh;
		font-size: var(--font-size-1);
		font-weight: 900;
		letter-spacing: var(--tracking--2);
		text-transform: uppercase;
	}

	.tight {
		padding: var(--space-2) var(--space-2);
	}

	.content {
		position: relative;
	}

	.label {
		position: relative;
		padding: var(--space-2) var(--space-1);
		background-color: hsl(var(--color-grayscale-7));
		font-size: var(--font-size-1);
		font-weight: 600;
		letter-spacing: var(--tracking-4);
		opacity: 0;
		transform: translateX(calc(-1 * var(--space-4)));
		transition: all 225ms ease-in-out;
	}

	.label.active {
		opacity: 1;
		transform: translateX(0);
	}

	.indicator {
		position: absolute;
		background-color: hsl(var(--color-grayscale-7));
		inset: 0;
		transform-origin: 0 0;
	}
</style>
