<script>
	import 'normalize.css/normalize.css';
	import '../app.css'
    import Nav from "$lib/components/Nav.svelte";
	import { themeAction, themeStore} from '$lib/utils/theme';
</script>

<svelte:window use:themeAction={$themeStore}/>
<Nav/>
<slot/>