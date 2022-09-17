<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<form method="POST" use:enhance>
		<legend>User {data.user.id}</legend>
		<Input label="First name" name="firstName" bind:value={data.user.firstName} />
		<Input label="Last name" name="lastName" bind:value={data.user.lastName} />
		<button type="Submit">Save</button>
		<button type="reset">Reset</button>
	</form>
</div>

<style>
	form {
		display: grid;
		width: 100%;
		max-width: 40rem;
		gap: var(--space-2);
	}

	legend {
		font-size: var(--font-size-3);
		font-weight: 800;
	}

	div {
		padding: 0 var(--space-6);
	}
</style>
