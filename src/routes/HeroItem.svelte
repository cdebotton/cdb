<script>
	/** @type {string} The title of the post */
	export let title;

	/** @type {string} The post category*/
	export let category;

	/** @type {string} The date of the post */
	export let date;
</script>

<div>
	<h2>{title}</h2>
	<h3>{category}</h3>
	<h4>{date}</h4>
</div>

<style>
	div {
		width: 100vw;
		padding: var(--space-4);
		aspect-ratio: 16 / 9;
	}

	h2 {
		font-size: var(--font-size-3);
		font-weight: 900;
	}

	h3 {
		font-size: var(--font-size-1);
		font-weight: 800;
		text-transform: capitalize;
	}

	h4 {
		font-size: var(--font-size-1);
		font-weight: 600;
	}
</style>
