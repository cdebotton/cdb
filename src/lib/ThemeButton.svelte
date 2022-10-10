<script>
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Moon from './icons/moon.svelte';
	import Sun from './icons/sun.svelte';

	import { Theme, themeStore } from '$lib/theme';

	function toggleTheme() {
		if ($themeStore === Theme.Dark) {
			$themeStore = Theme.Light;
		} else {
			$themeStore = Theme.Dark;
		}
	}
</script>

<Button round on:click={toggleTheme} type="button">
	<span data-mode="light">
		<Icon>
			<Sun />
		</Icon>
	</span>
	<span data-mode="dark">
		<Icon>
			<Moon />
		</Icon>
	</span>
</Button>

<style>
	[data-mode='dark'] {
		display: contents;
	}

	[data-mode='light'] {
		display: none;
	}

	:global(.dark-theme) [data-mode='dark'] {
		display: none;
	}

	:global(.dark-theme) [data-mode='light'] {
		display: contents;
	}
</style>
