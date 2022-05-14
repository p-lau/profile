<script lang="ts">
	import { fade } from 'svelte/transition';
	export let slug: string;
	export let categories: string[];
	export let title: string;
	export let image: string;
	export let summary: string;
	export let type: string;
</script>

<a sveltekit:prefetch href={`/${type}/${slug}`}>
	{#if image}
		<figure>
			<img src={image} alt={title} />
		</figure>
	{/if}
	<article>
		<h2>{title}</h2>
		{#if categories}
			<div class="categories">
				{#each categories as category}
					<small>{category}</small>
				{/each}
			</div>
		{/if}
		<p>{summary || ''}</p>
	</article>
</a>

<style>

	a {
		aspect-ratio: 16/9;
		position: relative;
		padding: 1rem;
		width: 100%;
		display: flex;
		color: var(--text-color);
		border: 1px solid;
		border-radius: 5px;
		box-sizing: border-box;
		box-shadow: 0 2px 4px #1234;
	}

	article {
		overflow: hidden;
	}

	p {
		/* text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; */
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	a:hover {
		box-shadow: 0 0 5px dodgerblue;
		border-color: dodgerblue;
	}

	small {
		padding: 2px;
		box-sizing: border-box;
		border: 1px solid;
		border-radius: 5px;
	}

	figure {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		margin: 0;
		z-index: -1;
	}

	figure img {
		border-radius: 5px;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		object-fit: cover;
	}

	.categories {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		grid-gap: 0.5em;
	}

    @media (max-width: 40rem) {
		h2 {
			font-size: 1.5rem;
		}

        p {
            -webkit-line-clamp: 2;
        }
	}
</style>
