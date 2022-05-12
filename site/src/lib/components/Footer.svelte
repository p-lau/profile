<script lang="ts">
	import { VERSION } from 'svelte/compiler'
	import { fade } from 'svelte/transition'
	import Theme from './Theme.svelte'
</script>

<footer in:fade|local={{duration: 100}}>
	<small>Using Svelte {VERSION}</small>
	<Theme/>
</footer>

<style>
	footer {
		display: flex;
		place-content: center;
		gap: 1rem;
		text-align: center;
		box-sizing: border-box;
		padding: 1rem;
		border-top: 1px solid var(--border-color);
	}

	small {
		align-self: center;
	}
</style>