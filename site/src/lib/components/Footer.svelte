<script lang="ts">
	import { VERSION } from 'svelte/compiler'
	import { fade } from 'svelte/transition'
	import Theme from './Theme.svelte'
</script>

<footer in:fade={{duration: 100}}>
	<small>Using Svelte {VERSION}</small>
	<Theme/>
</footer>

<style>
	footer {
		display: flex;
		place-content: center;
		gap: 1rem;
		text-align: center;
		padding: 1rem;
		border-top: 1px solid var(--border-color);
		transition: border 100ms linear;
	}

	small {
		align-self: center;
	}
</style>