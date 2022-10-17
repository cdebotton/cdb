<script>
	/** @type {svelte.JSX.IntrinsicElements['button']['type']} */
	export let type;

	export let round = false;
	export let disabled = false;
</script>

<button class:round {disabled} {type} on:click>
	<slot />
</button>

<style>
	button {
		display: inline-grid;
		padding: var(--space-xs) var(--space-md);
		border: 1px solid var(--color-border);
		border-radius: var(--radii-pill);
		background-color: var(--color-surface);
		color: var(--color-text);
		cursor: pointer;
		font-size: var(--size, var(--text-body-sm));
		font-weight: var(--text-black);
		place-content: center;
		text-transform: uppercase;
	}

	button:hover {
		border-color: var(--color-border-hover);
		background-color: var(--color-surface-hover);
	}

	button:disabled {
		cursor: default;
	}

	.round {
		padding: var(--space-xs);
		border-radius: var(--radii-round);
	}
</style>
