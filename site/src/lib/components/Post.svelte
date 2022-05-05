<script lang="ts">
    export let slug: string;
    export let categories: string[];
    export let title: string;
    export let image: string;
    export let summary: string;
</script>

<a href={`/${slug}`} style:background={`url(#image${title})`}>
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
        /* style:background-image={`url(${image})`} */
        color: var(--text-color);
        place-self: center;
        display: flex;
        flex-direction: column;
        flex: 1;

        padding: 1em;

        aspect-ratio: 16/9;

        border: 1px solid;
        border-radius: 5px;
        box-sizing: border-box;
    }

    a * {
        text-overflow: ellipsis;
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