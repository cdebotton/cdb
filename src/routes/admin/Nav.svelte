<script>
	import NavItem from './NavItem.svelte';
</script>

<nav>
	<ul>
		<NavItem href="/admin/users" title="Users">Users</NavItem>
	</ul>
</nav>

<style>
	ul {
		display: grid;
		padding: 0;
		margin: 0;
		list-style: none;
	}
</style>
