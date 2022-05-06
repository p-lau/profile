<script lang="ts">
	import 'normalize.css/normalize.css';
	import '../app.css';
	import { themeAction, themeStore } from '$lib/utils/theme';
	import { fly } from 'svelte/transition';
    import Nav from "$lib/components/Nav.svelte";
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:window use:themeAction={$themeStore} />


<Nav/>
<main in:fly={{ duration: 100, delay: 300, y: -20 }} out:fly={{ duration: 100, y: -20 }}>
	<slot />
</main>
<Footer/>


<style>
	main {
		flex-grow: 1;
	}
</style>