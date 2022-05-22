<script lang="ts">
	import "the-new-css-reset/css/reset.css"
	import '../app.css';
	import Theme from 'svelte-themes/SvelteTheme.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Panhavuth Lau</title>
</svelte:head>

<Theme attribute='theme'/>
<Nav />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		flex-grow: 1;
	}
</style>
