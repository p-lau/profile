<script>
	import Theme from '$lib/components/Theme.svelte';
	import { fade, crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const [send, receive] = crossfade({
		duration:1500,
		easing: quintOut
	});
</script>

<svelte:head>
	<title>Panhavuth Lau</title>
</svelte:head>

<main transition:fade={{ duration: 200 }}>
	<div>
		<small>
			Developer
		</small>
	</div>
	<h1><a href="/about" in:send={{key:'/'}}>Panhavuth Lau</a></h1>
	<nav>
		<a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
		<a href="/resume">Resume</a>
	</nav>
	<Theme/>
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

	div {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	small {
		font-size: 1.5rem;
	}

	nav > a {
		padding: 0.5em 1em;
		font-size: 1.4em;
		font-weight: 400;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	nav > * + * {
		border-left: #888 1px solid;
	}
</style>
