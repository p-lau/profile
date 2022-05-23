<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch}) => {
		const res = await fetch(`/api/blogs`);
        const posts = await res.json();
        return {
            cache:{
                maxage: 300
            },
            status: 200,
            props: {
                posts
            }
        }
	};
</script>

<script lang="ts">
    import Post from "$lib/components/Post.svelte";
    import { fade } from "svelte/transition";
    export let posts: Post[];

    interface Post {
        slug: string;
        categories: string[];
        title: string;
        image: string;
        summary: string;
    }
</script>

<svelte:head>
    <title>Blogs</title>
</svelte:head>

<section in:fade={{duration: 200}}>
    <h1>Blogs</h1>
    <div class="posts">
        {#each posts as post (post.slug)}
            <Post {...post} type="blog"/>
        {/each}
    </div>
</section>

<style>
    h1 {
        text-align: center;
    }
    .posts {
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 1em;
    }
    section{
        max-width: 40rem;
        border: 1px solid var(--border-color);
        transition: border 100ms linear;
        border-width: 0 1px;
        padding: 1em;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
</style>