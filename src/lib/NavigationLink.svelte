<script context="module">
	import { crossfade } from 'svelte/transition';

	import HeaderLink from './HeaderLink.svelte';

	const key = Symbol.for('indicator');

	const [send, receive] = crossfade({
		fallback() {
			return {
				duration: 175,
				css: (t) => `
          transform: scaleX(${t});
        `
			};
		}
	});
</script>

<script>
	/** @type {string} */
	export let href;
</script>

<li>
	<HeaderLink {href} let:active>
		<span class="label">
			<slot />
		</span>
		{#if active}
			<span out:send={{ key }} in:receive={{ key }} class="indicator" />
		{/if}
	</HeaderLink>
</li>

<style>
	li {
		position: relative;
	}

	li:nth-of-type(n + 2)::before {
		display: inline;
		padding: 0 var(--space-1);
		content: '・';
		font-size: var(--font-size-3);
		font-weight: 900;
		line-height: 1;
	}

	.label {
		font-size: var(--font-size-3);
		font-weight: 800;
		letter-spacing: var(--tracking--3);
		text-transform: uppercase;
	}

	.indicator {
		position: absolute;
		top: calc(100% + var(--space-1\2));
		left: 0;
		display: inline-block;
		width: calc(100% - var(--space-2));
		height: var(--space-1\2);
		margin: 0 var(--space-1);
		background-color: black;
	}
</style>
