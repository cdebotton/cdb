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
		display: grid;
	}

	input {
		padding: var(--space-2);
		border: none;
		border-radius: 3px;
	}
</style>
