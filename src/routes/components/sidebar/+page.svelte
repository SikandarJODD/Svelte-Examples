<script>
	import Button from '$components/ui/button/button.svelte';
	import { allSidebar } from '$lib/home/comps/sidebars/allSidebar';
	import CopyCode from '$lib/home/copyCode.svelte';
	import { ExternalLink } from 'lucide-svelte';
	let isClicked = false;
</script>

<div class="prose lg:max-w-full">
	<h1>Sidebars - Responsive</h1>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm" variant="outline" class="border border-primary">Svelte Inbuild</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Responsive</Button>
		<Button size="sm">Transition</Button>
	</div>
	<div class="not-prose flex gap-6 flex-wrap my-10">
		{#each allSidebar as nav, index}
			<div
				class="box w-full md:w-fit h-36 border border-primary rounded-lg bg-white hover:bg-gray-200/50 shdaow-md shadow-gray-500 flex flex-col justify-between px-5 py-3"
			>
				<div>
					<h3 class="font-bold text-2xl text-center text-primary">{nav.name}</h3>
				</div>
				<div class="flex justify-between">
					<CopyCode code={nav.code} coText="copy" />
					<Button size="sm" href={nav.link} target="_blank">
						Visit
						<ExternalLink class="ml-2" size="17" strokeWidth="1.3" />
					</Button>
				</div>
			</div>
		{/each}
	</div>
</div>
