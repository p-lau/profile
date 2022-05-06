<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch}) => {
		const res = await fetch(`/api/blogs`);
        const posts = await res.json();
        console.log(posts);

        return {
            cache:{
                private: false,
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
    export let posts: Post[];

    interface Post {
        slug: string;
        categories: string[];
        title: string;
        image: string;
        summary: string;
    }
</script>

<h1>Blogs</h1>
<div class="posts">
    {#each posts as post}
        <Post {...post} />
    {/each}
</div>

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
</style>