<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import 'normalize.css/normalize.css';
	import '../app.css';
	import { themeAction, themeStore } from '$lib/utils/theme';
	import { fly } from 'svelte/transition';
    import Nav from "$lib/components/Nav.svelte";

	export let url: string;
</script>

<svelte:window use:themeAction={$themeStore} />

<Nav/>

{#key url}
	<main in:fly={{ duration: 100, delay: 300, y: -20 }} out:fly={{ duration: 100, y: -20 }}>
		<slot />
	</main>
{/key}