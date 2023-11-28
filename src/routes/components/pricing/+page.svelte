<script>
	import CopyCode from '$lib/home/copyCode.svelte';
	import Button from '$components/ui/button/button.svelte';
	import { allPrices } from '$lib/home/comps/pricing/allPrice';
	let isClicked = false;
</script>

<svelte:head>
	<title>Svelte - Pricing</title>
</svelte:head>

<div class="prose lg:max-w-full dark:prose-invert">
	<h1>Pricing Sections - Tailwind CSS</h1>

	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm">Svelte Inbuilt</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Responsive</Button>
		<Button size="sm">Inbuilt Transition</Button>
	</div>
	<div>
		{#each allPrices as nav, index}
			<div class="my-2 lg:my-7">
				<div class="flex justify-between items-center">
					<h3 class="my-2">{index + 1}. {nav.name}</h3>
					<div class="mr-2">
						<CopyCode code={nav.code} {isClicked} />
					</div>
				</div>
				<div class="not-prose border border-primary rounded-xl overflow-hidden">
					<svelte:component this={nav.component} />
				</div>
			</div>
		{/each}
	</div>
</div>
