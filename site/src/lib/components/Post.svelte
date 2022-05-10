<script lang="ts">
    import { fade } from "svelte/transition";
    export let slug: string;
    export let categories: string[];
    export let title: string;
    export let image: string;
    export let summary: string;
    export let type: string;
</script>

<a href={`/${type}/${slug}`} style:background-image={`url(${image})`}>
    <h3>{title}</h3>
    {#if categories}
        <div class='categories'>
            {#each categories as category}
                <small>{category}</small>
            {/each}
        </div>
    {/if}
    <p>{summary || ''}</p>
</a>

<style>
    a {
        background-position: center;
        background-size: cover;
        color: var(--text-color);
        display: flex;
        flex-direction: column;

        padding: 1em;

        aspect-ratio: 16/9;

        border: 1px solid;
        border-radius: 5px;
        box-sizing: border-box;
    }

    h3 {
        text-overflow: ellipsis;
        word-wrap: break-word;
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

    .categories {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        grid-gap: 0.5em;
    }

</style>