<script>
	import { applyAction, enhance } from '$app/forms';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';

	/** @type {App.Error|null} */
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

<div>
	<form method="POST" use:enhance={formEnhancer}>
		<Input name="email" label="Email" id="email" />
		<Input name="password" type="password" label="Password" id="password" />
		<p><Button type="submit">Login</Button></p>
		<div>
			{#if error}
				<p class="error">{error.message}</p>
			{/if}
		</div>
	</form>
</div>

<style>
	div {
		display: grid;
		width: var(--size-full);
		height: var(--size-full);
		place-items: center center;
	}

	p {
		justify-self: center;
	}

	form {
		display: grid;
		width: 100%;
		max-width: 32rem;
		padding: var(--space-xl);
		gap: var(--space-sm);
	}
</style>
