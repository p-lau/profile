<script lang="ts">
	import { VERSION } from 'svelte/compiler'
	import { fade } from 'svelte/transition'
</script>

<footer in:fade={{duration: 100, delay: 200}} out:fade={{duration: 100}}>
	<small>Using Svelte {VERSION}</small>
</footer>

<style>
	footer {
		text-align: center;
		box-sizing: border-box;
		padding: 1rem;
		border-top: 1px solid var(--border-color);
	}
</style>