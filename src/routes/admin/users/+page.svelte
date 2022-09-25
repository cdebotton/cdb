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
