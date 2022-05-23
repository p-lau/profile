<script lang="ts">
	import { onMount } from 'svelte';
    import type { SvelteComponent } from 'svelte';
	import { loadFull } from 'tsparticles';
	import theme from 'svelte-themes'

	let ParticlesComponent: Partial<SvelteComponent>;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

    $: stars = $theme.theme === 'dark' ? '#000' : '#fff';

    let particlesConfig = {
		particles: {
			color: {
				value: 'currentColor'
			},
			links: {
				enable: true,
				color: 'currentColor'
			},
			move: {
				enable: true
			}
		}
	};

	// @ts-ignore
	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	// @ts-ignore
	let particlesInit = async (main) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/>
