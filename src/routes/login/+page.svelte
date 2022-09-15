<script>
	import { applyAction, enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';

	/** @type {App.PageError|null} */
	let error = null;

	/** @type {import('$app/forms').SubmitFunction} */
	function formEnhancer() {
		error = null;

		return async ({ result, form }) => {
			switch (result.type) {
				case 'redirect':
				case 'success':
					await applyAction(result);
					break;
				case 'error':
					form.reset();
					error = result.error;
					break;
			}
		};
	}
</script>

<div class="container">
	<form method="POST" use:enhance={formEnhancer}>
		<fieldset>
			<legend>Login</legend>
			<Input name="email" label="Email" id="email" />
			<Input name="password" type="password" label="Password" id="password" />
		</fieldset>
		<button type="submit">Go</button>
		<div>
			{#if error}
				<p class="error">{error.message}</p>
			{/if}
		</div>
	</form>
</div>

<style>
	.container {
		display: grid;
		width: 100%;
		height: 100%;
		padding: var(--space-10);
		place-content: center;
	}

	form {
		display: grid;
		gap: var(--space-2);
		grid-template-rows: min-content min-content 1rem;
	}

	fieldset {
		display: grid;
		padding: var(--space-2);
		border: none;
		gap: var(--space-2);
	}

	legend {
		padding: 0;
		font-size: var(--font-size-3);
		font-weight: 900;
	}

	.error {
		font-size: var(--font-size-1);
		font-weight: 900;
	}
</style>
