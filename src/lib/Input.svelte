<script>
	/** @type {string|number|null} */
	export let value = null;

	/** @type {string}*/
	export let label;

	/** @type {string} */
	export let placeholder = label;

	/** @type {string} */
	export let type = 'text';

	/** @type {svelte.JSX.FormEventHandler<HTMLInputElement>} */
	function handleInput(event) {
		value = type.match(/^(number|range)/)
			? parseFloat(event.currentTarget?.value)
			: event.currentTarget?.value;
	}
</script>

<label>
	{label}
	<input {type} {placeholder} {value} on:input={handleInput} />
</label>
