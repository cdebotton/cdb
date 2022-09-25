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

	/**
	 * @typedef Grid
	 * @type {object}
	 * @property {import('csstype').Property.GridArea} [area]
	 * @property {import('csstype').Property.GridRow} [row]
	 * @property {import('csstype').Property.GridColumn} [column]
	 */

	/** @type {Grid} */
	export let grid = {};

	/** @type {svelte.JSX.FormEventHandler<HTMLInputElement>} */
	function handleInput(event) {
		value = type.match(/^(number|range)/)
			? parseFloat(event.currentTarget?.value)
			: event.currentTarget?.value;
	}
</script>

<div style:gridArea={grid.area} style:gridColumn={grid.column} style:gridRow={grid.row}>
	<span class="input-wrapper">
		<span class="input-field">
			{#if $$slots.default}
				<span class="icon">
					<slot />
				</span>
			{/if}
			<input {name} {id} {type} {placeholder} {value} on:input={handleInput} />
		</span>
		<span class="input-underline" />
	</span>
	<label for={id}>{label}</label>
</div>

<style>
	div {
		display: grid;
	}

	.input-wrapper {
		position: relative;
		display: flex;
		flex-flow: column;
	}

	.input-field {
		display: grid;
		width: 100%;
		align-items: baseline;
		border-left: 1px solid hsl(0 0% 84%);
		grid-auto-flow: columns;
		grid-template-columns: min-content auto;
	}

	.icon {
		width: 1rem;
		margin: 0 1rem;
		aspect-ratio: 1;
	}

	input {
		padding: 8px 4px;
		border: none;
		background-color: transparent;
		font-size: 16px;
		font-weight: 400;
	}

	input:focus {
		outline: none;
	}

	.input-underline {
		display: inline-block;
		width: 100%;
		height: 1px;
		background-color: hsl(0 0% 84%);
	}

	label {
		padding: 2px 52px;
		font-size: 12px;
		font-weight: 900;
		letter-spacing: -0.05em;
		opacity: 0;
		text-transform: uppercase;
		transform: translate3d(0, -12px, 0);
		transition: all 175ms ease-in-out;
	}

	.input-wrapper:not(:has(input:placeholder-shown)) + label {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
</style>
