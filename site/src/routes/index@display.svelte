<script>
	import Theme from '$lib/components/Theme.svelte';
	import { fade, fly } from 'svelte/transition';
	import Title from '$lib/components/Title.svelte';
</script>

<svelte:head>
	<title>Panhavuth Lau</title>
</svelte:head>

<div transition:fly={{ duration: 200, delay: 200, x: -50}}>
	<small>
		Developer
	</small>
	<Title link='/about'/>
</div>
<nav transition:fly={{ duration: 200, delay: 200, x: 50}}>
	<a href="/projects">Projects</a>
	<a href="/blog">Blog</a>
	<a href="/resume">Resume</a>
</nav>
<Theme/>

<style>
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
