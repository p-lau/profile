<script lang="ts">
	import { page } from "$app/stores";
	import { fade, fly } from 'svelte/transition';
	const items = [
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Projects',
			href: '/projects'
		},
		{
			title: 'Blog',
			href: '/blog'
		}
	];
</script>

<h1 in:fly={{ duration: 100, y: -20, opacity: 0, delay: 100 }} out:fly={{duration: 100, y: -20, opacity: 0}}><a href="/">Panhavuth Lau</a></h1>
<nav in:fly={{ duration: 100, y: 20, opacity: 0, delay: 100 }} out:fly={{ duration: 100, y: 20, opacity: 0}}>
	<ul>
		{#each items as { href, title }, i (title)}
			<li in:fade={{duration: 100, delay: i * 150}}>
				<a href={href} title={title} class:active={href === $page.url.pathname}>
					{title}
				</a>
			</li>
		{/each}
	</ul>
</nav>


<style>
	nav {
		position: sticky;
	}

	h1 {
		text-align: center;
	}

	ul {
		margin: 0;
		padding: 0 1rem;
		display: flex;
		justify-content: center;
	}

	li {
		list-style: none;
		display: flex;
		flex-shrink: 1;
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
		border-bottom: 1px solid dodgerblue;
	}
</style>
