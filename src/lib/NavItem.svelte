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
	import * as styles from './NavItem.css';

	import { animation } from '$lib/animation';

	/** @type {string} */
	export let label;
	export let active = false;

	/** @type {import('$lib/animation').AnimationConfig} */
	export let config;
</script>

<span class:active class={styles.label}>{label}</span>
<span use:animation={config} class={styles.text}>
	{#if active}
		<span class={styles.indicator} in:receive={{ key }} out:send={{ key }} />
	{/if}
	<span class={styles.content}>
		<slot />
	</span>
</span>
