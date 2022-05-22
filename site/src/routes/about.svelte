<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch}) => {
		const res = await fetch(`/api/author`);
        const data = await res.json();
        return {
            cache:{
                maxage: 300
            },
            status: 200,
            props: {
                ...data
            }
        }
	};
</script>

<script lang="ts">
    import { marked } from "marked";
    import { fade } from "svelte/transition";
    export let name: string;
    export let bio: string;
    export let avatar: string;
</script>

<svelte:head>
	<title>About Me - Panhavuth Lau</title>
</svelte:head>

<section in:fade|local={{duration: 200}}>
    <figure>
        <img src={`${avatar}?h=600`} alt="Me">
    </figure>
    <h1>{name}</h1>
    {@html marked(bio)}
</section>

<style>
    figure {
        display: flex;
        flex-direction: column;
        text-align: center;
        place-content: center;
        margin: 0;
    }
    figure > img {
        object-fit: cover;
        border-radius: 5px;
        aspect-ratio: 16/9;
        box-shadow: 0 2px 4px #1234;
    }
    h1 {
        text-align: center;
    }
    section{
        border: 1px solid var(--border-color);
        border-width: 0 1px;
        padding: 1em;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        max-width: 40rem;
    }
</style>