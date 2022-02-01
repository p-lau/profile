<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = ({ status, error }) => {
		return {
			props: {
				status,
				message: error.message
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
</script>

<main>
	<h1>{status}</h1>
	{#if status === 404}
		<p>Sorry! Cannot find the page you are looking for.</p>
	{/if}
</main>
