<script lang="ts">
	import { VERSION } from 'svelte/compiler'
	import { fade } from 'svelte/transition'
</script>

<footer transition:fade|local={{duration: 100}}>
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