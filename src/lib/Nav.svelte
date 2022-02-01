<script>
	const items = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'About Me',
			href: 'about'
		},
		{
			title: 'Projects',
			href: 'projects'
		},
		{
			title: 'Contact',
			href: 'contact'
		}
	];
</script>

<nav>
	{#each items as item}
		<a href={item.href}>{item.title}</a>
	{/each}
</nav>
