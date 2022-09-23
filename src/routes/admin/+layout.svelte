<script>
	import LogoutButton from './LogoutButton.svelte';

	import Link from '$lib/Link.svelte';
	import NavItem from '$lib/NavItem.svelte';
	import { animation } from '$lib/animation';
	import ImageIcon from '$lib/icons/ImageIcon.svelte';
	import UsersIcon from '$lib/icons/UsersIcon.svelte';

	/** @type {import('$lib/animation').AnimationConfig}*/
	let gradient = {
		backgroundPosition: '0 -300vh',
		options: {
			duration: 7.5,
			easing: 'ease-in-out',
			repeat: Infinity,
			direction: 'alternate'
		}
	};
</script>

<div class="container">
	<header>
		<h1 use:animation={gradient}>
			<a data-sveltekit-prefetch href="/admin">Admin</a>
		</h1>
		<nav>
			<ul>
				<li>
					<Link let:active href="/admin/users">
						<NavItem tight {active} config={gradient} label="ユーザー">
							<UsersIcon />
						</NavItem>
					</Link>
				</li>
				<li>
					<Link let:active href="/admin/media">
						<NavItem tight {active} config={gradient} label="メディア">
							<ImageIcon />
						</NavItem>
					</Link>
				</li>
			</ul>
			<LogoutButton />
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: min-content auto;
	}
	header {
		display: flex;
		flex-flow: column;
		padding: var(--space-6) var(--space-4);
		gap: var(--space-2);
	}

	h1 {
		-webkit-background-clip: text;
		background-clip: text;
		background-image: var(--brand-gradient);
		background-size: 400vw 400vh;
		color: transparent;
		font-weight: 900;
		letter-spacing: var(--tracking--4);
		text-transform: uppercase;
		writing-mode: vertical-lr;
	}

	h1 a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		color: hsl(var(--color-grayscale-1));
		list-style: none;
	}

	li {
		position: relative;
		display: flex;
		flex-flow: row-reverse;
		align-items: start;
		gap: var(--space-1);
		--size: 1.25rem;
	}
</style>
