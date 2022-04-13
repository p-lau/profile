<script>
	import Canvas from '$lib/components/Canvas.svelte';
	import { fade } from 'svelte/transition';

	const i = [
		'Software',
		'Backend',
		'Frontend',
		'Mobile',
		'Fullstack',
		'Web',
		'Go',
		'Game',
		'React',
		'Svelte'
	];
	let dev = 0;

	$: setTimeout(() => {
		dev = (dev + 1) % i.length;
	}, 516);
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
	<button>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			stroke-width="2"
			stroke-linecap="butt"
			stroke-linejoin="round"
			><circle cx="12" cy="12" r="5" /><path
				d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
			/></svg
		>
	</button>
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

	a:hover {
		color: #3ff;
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
		padding: 0.5rem;
		font-size: large;
		font-weight: 600;
	}

	nav {
		display: flex;
	}

	nav > * + * {
		border-left: #888 1px solid;
	}
</style>
