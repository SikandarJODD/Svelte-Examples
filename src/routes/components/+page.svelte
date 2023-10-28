<script>
	import CompBox from '$lib/home/comps/CompBox.svelte';
	import {
		LayoutPanelTopIcon,
		Home,
		GalleryVerticalEnd,
		PanelTop,
		BoomBoxIcon,
		Download
	} from 'lucide-svelte';
	let codeComponents = [
		{
			name: 'Home',
			link: '/components',
			icon: Home
		},
		{
			name: 'Install Library',
			link: '/components/install',
			icon: Download
		},
		{
			name: 'Navbar',
			link: '/components/navbar',
			icon: LayoutPanelTopIcon
		},
		{
			name: 'Footer',
			link: '/components/footer',
			icon: GalleryVerticalEnd
		},
		{
			name: 'CTA',
			link: '/components/cta',
			icon: PanelTop
		},
		{
			name: 'Hero',
			link: '/components/hero',
			icon: BoomBoxIcon
		}
	];
</script>

<svelte:head>
	<title>Svelte Components</title>
</svelte:head>
<div class="prose lg:max-w-full">
	<h1>Svelte Components</h1>
	<p>
		Simple components that you can use in your projects. <strong>Tailwind CSS</strong> Components.
	</p>
</div>
<section class="my-3 flex gap-x-6 justify-center md:justify-start flex-wrap lg:gap-x-8">
	{#each codeComponents as item}
		<CompBox text={item.name} link={item.link} icon={item.icon} />
	{/each}
</section>
