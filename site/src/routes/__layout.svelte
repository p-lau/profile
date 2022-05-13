<script lang="ts">
	import 'normalize.css/normalize.css';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Theme from 'svelte-themes/SvelteTheme.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Theme attribute='theme'/>
<Nav />
<main in:fade={{ duration: 100, delay: 300 }}>
	<slot />
</main>
<Footer />

<style>
	main {
		flex-grow: 1;
		overflow: hidden;
	}
</style>
