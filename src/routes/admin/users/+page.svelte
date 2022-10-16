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
				<td>
					<a href={`/admin/users/${user.id}`}>
						{user.email}
					</a>
				</td>
				<td>
					<a href={`/admin/users/${user.id}`}>
						{fullName}
					</a>
				</td>
				<td>
					<a href={`/admin/users/${user.id}`}>
						{formatDate(user.createdAt)}
					</a>
				</td>
				<td>
					<a href={`/admin/users/${user.id}`}>
						{formatDate(user.updatedAt)}
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: var(--size-full);
		padding: Var(--space-sm) 0;
		border-spacing: 0;
	}

	td,
	th {
		padding: var(--space-xs) var(--space-sm);
		border-collapse: collapse;
	}

	td {
		border-style: solid;
		border-color: var(--color-surface);
		border-top-width: 0;
		border-right-width: 1px;
		border-bottom-width: 1px;
		border-left-width: 1px;
	}
	th {
		border-style: solid;
		border-color: var(--color-surface);
		border-top-width: 0;
		border-right-width: 0;
		border-bottom-width: 1px;
		border-left-width: 0;
		text-align: left;
	}

	th:not(:first-child) {
		border-left-width: 1px;
	}

	tr:hover {
		background-color: var(--color-surface);
	}

	a {
		display: inline-block;
		width: var(--size-full);
		height: var(--size-full);
		text-decoration: none;
	}
</style>
