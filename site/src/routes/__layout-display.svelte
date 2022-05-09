<script>
	import 'normalize.css/normalize.css';
	import '../app.css';
	import { fade } from 'svelte/transition';
</script>

<main in:fade={{ duration: 100, delay: 200 }} out:fade={{ duration: 100 }}>
	<slot />
</main>

<style>
	main {
		position: absolute;
		inset: 0;
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		justify-self: center;
		height: 100%;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
</style>