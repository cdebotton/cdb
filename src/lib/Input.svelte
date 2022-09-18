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

	/** @type {string|undefined} */
	let className = undefined;

	export { className as class };
</script>

<div class={className}>
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
		border-bottom: 1px solid currentColor;
		background: transparent;
		border-radius: 3px;
		color: hsl(var(--color-text));
		font-size: var(--font-size-3);
		font-weight: 100;
	}

	input:focus {
		outline: none;
	}

	label {
		padding: 0 0 0 var(--space-2);
		font-size: var(--font-size-1);
		font-weight: 900;
		letter-spacing: var(--tracking--3);
		text-transform: uppercase;
	}
</style>
