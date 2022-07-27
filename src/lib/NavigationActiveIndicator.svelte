<script context="module">
	import { crossfade } from 'svelte/transition';

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
	const key = {};
</script>

<span out:send={{ key }} in:receive={{ key }} />

<style>
	span {
		--height: var(--space-1\2);

		position: absolute;
		top: calc(100% + var(--space-1));
		left: 0;
		display: inline-block;
		width: calc(100% - var(--space-2));
		height: var(--space-1\2);
		margin: 0 var(--space-1);
		background-color: black;
	}
</style>
