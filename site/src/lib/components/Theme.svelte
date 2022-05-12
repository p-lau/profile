<!-- Theme button -->
<script lang="ts">
	import Moon from '$lib/icons/Moon.svelte';
	import Sun from '$lib/icons/Sun.svelte';
	import Screen from '$lib/icons/Screen.svelte';
	import themeStore, { setTheme } from 'svelte-themes'
	import Load from '$lib/icons/Load.svelte';

	const toggle = () => {
		switch ($themeStore.theme) {
			case 'light': setTheme('dark'); break;
			case 'dark': setTheme('system'); break;
			case 'system': setTheme('light'); break;
			default: setTheme('system');
		}
	}
</script>

<button on:click={toggle} title={$themeStore.theme?.toUpperCase()}>
	{#if $themeStore.theme === 'system'}
		<Screen />
	{:else if $themeStore.theme === 'light'}
		<Sun />
	{:else if $themeStore.theme === 'dark'}
		<Moon />
	{:else}
		<Load />
	{/if}
</button>

<style>
	button {
		display: contents;
		cursor: pointer;
	}
    button :global(svg){
        transition: all 100ms ease-in-out;
    }
    button:hover :global(svg) {
		stroke: dodgerblue;
    }
</style>
