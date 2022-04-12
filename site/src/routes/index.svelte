<script>
	import Canvas from '$lib/components/Canvas.svelte';
	import { fade } from 'svelte/transition';

	const i = ['Software', 'Backend', 'Frontend', 'Mobile', 'Fullstack', 'Web', 'Go', 'Game', 'React', 'Svelte'];
	let dev = 0;

	$: {
		setTimeout(() => {
			dev = (dev + 1) % i.length;
		}, 2000);
	}
</script>

<svelte:head>
	<title>Panhavuth Lau</title>
</svelte:head>

<Canvas />
<main transition:fade={{ duration: 200 }}>
	<div>
		
		<small>
			{i[dev]}
			Developer
		</small>
	</div>
	<h1><a href="/about">Panhavuth Lau</a></h1>
	<nav>
		<a href="/projects">Projects</a>
		<a href="/blog">Blog</a>
	</nav>
</main>

<style>
	main {
		font-family: 'IBM Plex Sans', sans-serif;
		display: flex;
		flex-direction: column;
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

	a {
		transition: all 200ms ease-in-out;
		color: var(--text-color);
		text-decoration: none;
	}

	nav > a {
		padding: .5rem;
	}

	nav {
		display: flex;
	}

	nav:hover :not(a:hover) {
		color: #8888;
	}

	nav > * + * {
		border-left: #888 1px solid;
	}
</style>
