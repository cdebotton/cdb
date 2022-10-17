<script>
	import Logo from './Logo.svelte';

	import Link from '$lib/Link.svelte';
	import NavItem from '$lib/NavItem.svelte';
	import ThemeButton from '$lib/ThemeButton.svelte';

	/** @type {import('$lib/animation').AnimationConfig} */
	let config = {
		backgroundPosition: '0 -300vh',
		options: {
			duration: 7.5,
			easing: 'ease-in-out',
			repeat: Infinity,
			direction: 'alternate'
		}
	};
</script>

<div>
	<header>
		<Link let:active href="/" exact>
			<Logo {config} {active} />
		</Link>
		<nav>
			<ul>
				<li>
					<Link let:active href="/code">
						<NavItem {config} {active} label="コード">Code</NavItem>
					</Link>
				</li>
				<li>
					<Link let:active href="/photography">
						<NavItem {config} {active} label="写真撮影">Photography</NavItem>
					</Link>
				</li>
				<li>
					<Link let:active href="/video">
						<NavItem {config} {active} label="ビデオ">Video</NavItem>
					</Link>
				</li>
			</ul>
			<ThemeButton />
		</nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: grid;
		width: 100%;
		max-width: 1280px;
		height: 100%;
		align-items: start;
		padding: var(--space-xl) var(--space-lg);
		gap: var(--space-xl);
		grid-template-columns: min-content auto;
	}

	header {
		position: sticky;
		display: grid;
		height: 100%;
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
		gap: var(--space-xs);
		grid-auto-flow: row;
		grid-template-rows: min-content auto;
	}

	nav {
		display: grid;
		align-content: space-between;
		padding: 0 0 0 var(--space-2xs);
		justify-items: start;
	}

	ul {
		display: grid;
		align-content: start;
		gap: var(--space-2xs);
		list-style: none;
	}

	li {
		position: relative;
		display: flex;
		flex-flow: row-reverse;
		align-items: flex-start;
		padding: 0 var(--space-2xs);
		color: var(--color-text);
		gap: var(--space-2xs);
		text-decoration: none;
	}

	main {
		position: relative;
		display: grid;
		isolation: isolate;
	}
</style>
