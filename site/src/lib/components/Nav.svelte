<script lang="ts">
	import { page } from "$app/stores";
	import { fade, fly } from 'svelte/transition';
	let path: string
	const items = [
		{
			title: 'Blog',
			href: '/blog'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Projects',
			href: '/project'
		},
	];
	$: {
		path = $page.url.pathname;
	}
</script>

<h1 in:fly={{ duration: 100, y: -20, opacity: 0 }}><a href="/" title="Home">Panhavuth Lau</a></h1>
<nav in:fly={{ duration: 100, y: 20, opacity: 0}}>
	<ul>
		{#each items as { href, title }, i (title)}
			<li in:fade={{duration: 100, delay: i * 100}}>
				<a sveltekit:prefetch href={href} title={title} class:active={path.includes(href)}>
					{title}
				</a>
			</li>
		{/each}
	</ul>
</nav>


<style>
	nav {
		transition: all 100ms linear;
		position: sticky;
		top: 0;
		background-color: var(--background-color);
		border-bottom: 1px solid var(--border-color);
	}

	h1 {
		text-align: center;
		font-weight: lighter;
	}

	ul {
		max-width: 40rem;
		margin: auto;
		padding: 0 1rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		place-content: center;
	}

	li {
		place-content: center;
		list-style: none;
		display: flex;
		flex-grow: 1;
	}

	nav a {
		padding: 0.25em 0.5rem;
		font-size: 1.4em;
		font-weight: 400;
	}

	ul a:hover {
		color: dodgerblue;
	}

	.active {
		border-bottom: 2px solid dodgerblue;
	}
</style>
