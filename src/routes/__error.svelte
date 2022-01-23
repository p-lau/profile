<script lang="ts" context="module">
    import type { ErrorLoad } from '@sveltejs/kit'
    export const load: ErrorLoad = ({status, error}) => {
        return {
            props: {
                status,
                message: error.message
            }
        }
    }
</script>

<script lang="ts">
    export let status: number;
    export let message: string;
</script>

<h1>{status}</h1>
<p>{message}</p>
