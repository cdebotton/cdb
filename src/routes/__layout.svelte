<script>
	import Navigation from '$lib/Navigation.svelte';
	import NavigationLink from '$lib/NavigationLink.svelte';
	import Page from '$lib/Page.svelte';

	import '../css/app.css';
	import LogoLink from '$lib/LogoLink.svelte';
</script>

<Page>
	<header>
		<LogoLink label="クリスチャン・デバッタン" exact href="/">Christian de Botton</LogoLink>
		<Navigation>
			<NavigationLink href="/code">Code</NavigationLink>
			<NavigationLink href="/photography">Photography</NavigationLink>
			<NavigationLink href="/video">Video</NavigationLink>
		</Navigation>
	</header>
	<main>
		<slot />
	</main>
</Page>

<style>
	:root {
		--cdb-header-tracking: var(--cdb-semantic-tracking-tight);
	}

	header {
		display: grid;
		align-items: baseline;
		padding: calc(var(--cdb-page-padding) * 1.5) 0;
		gap: var(--cdb-nav-gap);
		grid-auto-flow: row;
		justify-items: center;
	}

	main {
		padding: 0 var(--cdb-page-padding) var(--cdb-page-padding);
	}
</style>
