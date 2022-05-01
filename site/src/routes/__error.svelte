<script lang="ts" context="module">
	import type { HandleError } from '@sveltejs/kit'
	export const load: HandleError = ({ error: { name, message } }) => {
		return {
			props: {
				name,
				message
			}
		};
	};
</script>

<script lang="ts">
	export let name: string;
	export let message: string;
</script>

<main>
	<h1>{name}</h1>
	<p>{message}</p>
</main>
