<script>
	/** @type {string|number|null} */
	export let value = null;

	/** @type {string} */
	export let label;

	/** @type {string} */
	export let name;

	/** @type {string} */
	export let placeholder = label;

	/** @type {string} */
	export let type = 'text';

	/** @type {string} */
	export let id = name;

	/** @type {svelte.JSX.FormEventHandler<HTMLInputElement>} */
	function handleInput(event) {
		value = type.match(/^(number|range)/)
			? parseFloat(event.currentTarget?.value)
			: event.currentTarget?.value;
	}
</script>

<div>
	<label for={id}>{label}</label>
	<input {name} {id} {type} {placeholder} {value} on:input={handleInput} />
</div>

<style>
	div {
		display: inline-grid;
		overflow: hidden;
		align-items: baseline;
		padding: var(--space-none) var(--space-none) var(--space-none) 0;
		border: 1px solid var(--color-border);
		border-radius: var(--radii-subtle);
		background-color: var(--color-surface);
		box-shadow: 0 0 10px var(--color-subtle-border);
		grid-auto-flow: column;
		grid-template-columns: min-content auto;
	}

	label {
		padding: var(--space-sm) var(--space-sm) var(--space-sm);
		border-right: 1px solid var(--color-subtle-border);
		background-color: var(--color-subtle-background);
		font-size: var(--text-body-sm);
		font-weight: var(--text-black);
		opacity: 0;
		text-align: end;
		text-transform: uppercase;
	}

	div:has(input:not(:placeholder-shown)) label {
		opacity: 1;
	}

	input {
		height: 100%;
		padding: var(--space-xs) var(--space-md);
		border: none;
		background-color: transparent;
		color: currentColor;
	}
</style>
