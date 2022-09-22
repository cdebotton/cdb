<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/**
	 * Format a date for the grid
	 * @param {string|null} [date]
	 * @returns {string} The formatted date
	 */
	function formatDate(date) {
		if (!date) {
			return 'Never';
		}

		return new Intl.DateTimeFormat('en-us', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(parseInt(date));
	}
</script>

<h2>Users</h2>

<table>
	<thead>
		<th>Email</th>
		<th>Name</th>
		<th>Created at</th>
		<th>Updated at</th>
	</thead>
	<tbody>
		{#each data.users as user}
			{@const fullName = `${user.firstName} ${user.lastName}`}
			<tr>
				<td>{user.account.email}</td>
				<td>{fullName}</td>
				<td>{formatDate(user.createdAt)}</td>
				<td>{formatDate(user.updatedAt)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	h2 {
		padding: 0 0 var(--space-3);
		font-size: var(--font-size-3);
		font-weight: 900;
		text-transform: uppercase;
	}

	ul {
		list-style: none;
	}

	li {
		display: grid;
		align-items: end;
		justify-content: start;
		gap: var(--space-4);
		grid-auto-flow: column;
	}

	a {
		display: contents;
		text-decoration: none;
	}

	.field {
		display: grid;
		gap: var(--space-1);
	}

	.label {
		font-size: var(--font-size-1);
		font-weight: 700;
		text-transform: uppercase;
	}

	.value {
		font-size: var(--font-size-3);
		font-weight: 300;
	}

	.primary .value {
		font-size: var(--font-size-4);
	}
</style>
