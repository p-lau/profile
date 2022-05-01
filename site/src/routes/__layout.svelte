<script>
	import 'normalize.css/normalize.css';
	import '../app.css'
	import { themeAction, themeStore} from '$lib/utils/theme';
</script>

<svelte:window use:themeAction={$themeStore}/>
<slot/>