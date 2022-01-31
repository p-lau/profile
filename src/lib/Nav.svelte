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

<nav class="sticky w-full border-b border-b-slate-400 hidden sm:flex place-content-center top-0 backdrop-blur">
	{#each items as item}
		<a class="mx-4 my-2 text-xl no-underline text-stone-300 hover:text-white" href={item.href}>{item.title}</a>
	{/each}
</nav>
