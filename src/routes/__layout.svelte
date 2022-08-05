<script>
	import '../css/app.css';

	import Link from '$lib/Link.svelte';
	import Logo from '$lib/Logo.svelte';
	import NavItem from '$lib/NavItem.svelte';

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
		</nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: grid;
		height: 100%;
		padding: var(--space-5) 0;
		gap: var(--space-3);
		grid-template-columns: min-content auto;
	}

	header {
		position: sticky;
		z-index: 1;
		left: 0;
		display: flex;
		flex-flow: column;
		padding: 0 var(--space-4);
		-webkit-backdrop-filter: blur(8px);
		backdrop-filter: blur(8px);
		background-color: hsl(var(--color-background) / 0.85);
		gap: var(--space-2);
		place-items: start;
	}

	nav {
		display: contents;
	}

	ul {
		display: grid;
		padding: 0;
		gap: var(--space-1);
		list-style: none;
	}

	li {
		position: relative;
		display: flex;
		flex-flow: row-reverse;
		align-items: start;
		padding: 0 var(--space-1);
		color: hsl(var(--color-text));
		gap: var(--space-1\2);
		text-decoration: none;
	}

	main {
		position: relative;
		display: grid;
		isolation: isolate;
	}
</style>
