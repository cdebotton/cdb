<script>
	import LogoutButton from './LogoutButton.svelte';

	import Icon from '$lib/Icon.svelte';
	import Link from '$lib/Link.svelte';
	import NavItem from '$lib/NavItem.svelte';
	import { animation } from '$lib/animation';
	import Camera from '$lib/icons/camera.svelte';
	import Person from '$lib/icons/person.svelte';

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
						<NavItem {active} config={gradient} label="ユーザー">
							<Icon>
								<Person />
							</Icon>
						</NavItem>
					</Link>
				</li>
				<li>
					<Link let:active href="/admin/media">
						<NavItem {active} config={gradient} label="メディア">
							<Icon>
								<Camera />
							</Icon>
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
	.container {
		height: var(--size-full);
		padding: var(--space-sm);
	}

	h1 {
		font-size: var(--text-heading);
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}
</style>
