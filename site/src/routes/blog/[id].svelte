<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch, params: {id}}) => {
		const res = await fetch(`/api/post/${id}`);
        const posts = await res.json();
        return {
            cache:{
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
    import { PortableText } from '@portabletext/svelte'
    import { marked } from 'marked'
    export let title: string;
    export let author: {
        name: string;
        slug: string;
    };
    export let summary: string;
    export let body: unknown;
    export let slug: string;

    console.log(body)
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={summary} />
</svelte:head>

{#key slug}
    <section>
        <h1>{title}</h1>
        <small>{author.name}</small>
        <PortableText value={body}/>
    </section>
{/key}

<style>
    section {
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