<!-- Theme button -->
<script lang="ts">
	import Moon from '$lib/icons/Moon.svelte';
	import Sun from '$lib/icons/Sun.svelte';
	import Screen from '$lib/icons/Screen.svelte';
	import { themeStore } from '$lib/theme';
	import Load from '$lib/icons/Load.svelte';
	const { toggle } = themeStore;
</script>

<button on:click={toggle} title={$themeStore.toUpperCase()} {...$$restProps}>
	{#if $themeStore === 'system'}
		<Screen />
	{:else if $themeStore === 'light'}
		<Sun />
	{:else if $themeStore === 'dark'}
		<Moon />
	{:else}
		<Load />
	{/if}
</button>

<style>
	button {
		padding: 0.5rem;
		background: transparent;
		color: var(--text-color);
		filter: drop-shadow(0 0 2px transparent);
		border: none;
		cursor: pointer;
		border-radius: 999px;
	}
    button :global(svg){
        transition: all 100ms ease-in-out;
    }
    button:hover :global(svg) {
		stroke: dodgerblue;
    }
</style>
