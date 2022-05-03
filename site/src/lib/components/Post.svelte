<script lang="ts">
    export let slug: string;
    export let categories: string[];
    export let title: string;
    export let image: string;
</script>

<a href={`/${slug}`}>
    <p>{title}</p>
    {#if categories}
        <div class='categories'>
            {#each categories as category}
                <small>{category}</small>
            {/each}
        </div>
    {/if}
</a>

<style>
    a {
        /* style:background-image={`url(${image})`} */
        place-self: center;
        display: flex;
        flex-direction: column;

        padding: 1em;

        aspect-ratio: 16 / 9;
        height: minmax(10em, 10vh);
        width: minmax(10em, 10wh);

        border: 1px solid;
        border-radius: 5px;
        box-sizing: border-box;
    }

    a:hover {
        box-shadow: 0 0 5px dodgerblue;
    }

    small {
        padding: 2px;
        box-sizing: border-box;
        background-color: rgb(95, 71, 40);
        border-radius: 5px;
    }

    .categories {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        grid-gap: 0.5em;
    }

</style>