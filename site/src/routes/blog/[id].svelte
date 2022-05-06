<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch, params: {id}}) => {
		const res = await fetch(`/api/blog/${id}`);
        const posts = await res.json();
        console.log(posts);

        return {
            cache:{
                private: false,
                maxage: 300
            },
            status: 200,
            props: {
                ...posts
            }
        }
	};
</script>

<script lang="ts">
    import { marked } from 'marked'
    export let categories: string[];
    export let title: string;
    export let publishedAt: string;
    export let author: {
        name: string;
        slug: string;
    };
    export let body: string;
    export let slug: string;
</script>

{#key slug}
    <div>
        {@html marked.parse(body)}
    </div>
{/key}

<style>
    div {
        padding: 1em;
        margin: auto;
        display: flex;
        flex-direction: column;
        max-width: 40rem;
    }
</style>