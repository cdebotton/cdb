<script>
	/** @type {svelte.JSX.IntrinsicElements['button']['type']} */
	export let type;

	export let round = false;
</script>

<button class:round {type} on:click>
	<slot />
</button>

<style>
	button {
		display: inline-grid;
		padding: var(--space-sm);
		border: 1px solid var(--color-border);
		border-radius: var(--radii-pill);
		background-color: var(--color-surface);
		color: var(--color-text);
		cursor: pointer;
		font-size: var(--size, 1em);
		place-content: center;
	}

	.round {
		padding: var(--space-xs);
		border-radius: var(--radii-round);
	}

	button:hover {
		border-color: var(--color-border-hover);
		background-color: var(--color-surface-hover);
	}

	button:active {
		background-color: var(--color-surface-active);
	}
</style>
