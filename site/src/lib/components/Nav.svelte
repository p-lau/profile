<script lang="ts">
	import { navigating } from "$app/stores";
	import { fade } from 'svelte/transition';
	import Theme from './Theme.svelte';
	const items = [
		{
			title: 'About',
			href: 'about'
		},
		{
			title: 'Projects',
			href: 'projects'
		},
		{
			title: 'Blog',
			href: 'blog'
		}
	];
</script>

<h1><a href="/">Panhavuth Lau</a></h1>
<nav transition:fade={{ duration: 200 }}>
	<ul>
		{#each items as { href, title }}
			<li>
				<a href={href} title={title}>
					{title}
				</a>
			</li>
		{/each}
		<Theme />
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
	}

	nav a {
		padding: 0.25em 0.5rem;
		font-size: 1.4em;
		font-weight: 400;
	}

	ul a:hover {
		color: dodgerblue;
	}
</style>
