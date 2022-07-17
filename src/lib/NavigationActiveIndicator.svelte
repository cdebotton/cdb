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
	:root {
		--cdb-indicator-width: var(--cdb-semantic-width-small);
		--cdb-indicator-margin: calc((var(--cdb-semantic-width-small) / 2));
	}

	span {
		position: absolute;
		top: calc(100% + 2 * var(--cdb-navigation-indicator-height));
		left: 0;
		display: inline-block;
		width: calc(100% - (var(--cdb-indicator-width)));
		height: var(--cdb-navigation-indicator-height);
		margin: 0 var(--cdb-indicator-margin);
		background-color: black;
	}
</style>
