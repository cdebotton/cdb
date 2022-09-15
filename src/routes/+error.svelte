<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
</script>

<h2>{$page.status}</h2>

{#if dev}
	<pre>{JSON.stringify($page.error, null, 2)}</pre>
{/if}
