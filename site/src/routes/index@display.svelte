<script>
	import Theme from '$lib/components/Theme.svelte';
	import { fade, fly } from 'svelte/transition';
	import Title from '$lib/components/Title.svelte';
	import { onMount } from 'svelte';

	const roles = [
		'Frontend', 'Fullstack', 'Go', 'Java', 'Svelte', 'React'
	]
	let i = 0;

	onMount(() => {
		setInterval(() => {
			i = (i + 1) % roles.length;
		}, 2000);
	})
</script>

<svelte:head>
	<title>Panhavuth Lau</title>
</svelte:head>

<div in:fly={{ duration: 200, x: -50}}>
	<div class="roles">
			{roles[i]}
			Developer
	</div>
	<Title link='/about'/>
</div>
<nav in:fly={{ duration: 200, x: 50}}>
	<a href="/project">Projects</a>
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

	.roles {
		display: flex;
		flex-direction: row;
	}
</style>
