<script>
	import Button from '$components/ui/button/button.svelte';
	import { allHeads } from '$lib/home/comps/header/allhead';
	import CopyCode from '$lib/home/copyCode.svelte';
	let isClicked = false;
</script>

<div class="prose lg:max-w-full">
	<h1>Headers</h1>
	<p>Easy to use Headers with Variations</p>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm">Svelte Inbuild</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Responsive</Button>
		<Button size="sm">Transition</Button>
	</div>
	<div>
		{#each allHeads as nav, index}
			<div class="my-2 lg:my-7">
				<div class="flex justify-between items-center">
					<h3 class="my-2">{index + 1}. {nav.name}</h3>
					<div class="mr-2">
						<CopyCode code={nav.code} {isClicked} />
					</div>
				</div>
				<div class="not-prose border border-primary">
					<svelte:component this={nav.component} />
				</div>
			</div>
		{/each}
	</div>
</div>
