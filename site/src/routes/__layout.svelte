<script lang="ts">
	import 'normalize.css/normalize.css';
	import '../app.css';
	import Theme from 'svelte-themes/SvelteTheme.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

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
