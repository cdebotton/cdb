<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/Input.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<div>
	<form method="POST" use:enhance>
		<legend class="item-lg">User {data.user.id}</legend>
		<div class="item-lg">
			<Input label="Email" name="email" bind:value={data.user.account.email} />
		</div>
		<div class="item-md">
			<Input label="First name" name="firstName" bind:value={data.user.firstName} />
		</div>
		<div class="item-md">
			<Input label="Last name" name="lastName" bind:value={data.user.lastName} />
		</div>
		<div class="item-sm">
			<button type="reset">Reset</button>
		</div>
		<div class="item-sm">
			<button type="submit">Save</button>
		</div>
	</form>
</div>

<style>
	form {
		display: grid;
		width: 100%;
		max-width: 40rem;
		gap: var(--space-2);
		grid-auto-rows: min-content;
		grid-template-columns: repeat(8, 1fr);
	}

	legend {
		font-size: var(--font-size-3);
		font-weight: 800;
		grid-column: span 8;
	}

	.item-lg {
		grid-column: span 8;
	}

	.item-md {
		grid-column: span 4;
	}

	.item-sm {
		grid-column: span 2;
	}

	button {
		padding: var(--space-2);
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
</style>
