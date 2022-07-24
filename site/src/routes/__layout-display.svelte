<script>
	import "the-new-css-reset/css/reset.css"
	import '../app.css';
</script>
<main>
	<slot />
</main>

<style>
	main {
		position: absolute;
		inset: 0;
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		justify-self: center;
		height: 100%;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
</style>