<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/**
	 * Format a date for the grid
	 * @param {Date|null} date
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
		}).format(date);
	}
</script>

<div>
	<h2>Users</h2>

	<ul>
		{#each data.users as user (user.id)}
			{@const fullName = `${user.firstName} ${user.lastName}`}
			<li>
				<a title={fullName} href={`/admin/users/${user.id}`}>
					<span class="field primary">
						<span class="label">{user.account.email}</span>
						<span class="value">{fullName}</span>
					</span>
					<span class="field">
						<span class="label">Created</span>
						<span class="value">{formatDate(user.createdAt)}</span>
					</span>
					<span class="field">
						<span class="label">Last updated</span>
						<span class="value">{formatDate(user.updatedAt)}</span>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		padding: 0 var(--space-6);
	}

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
