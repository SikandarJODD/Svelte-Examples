<script>
	import Button from '$components/ui/button/button.svelte';
	import { allCoolNavs } from '$lib/home/comps/coolnavs/allcoolnavs';
	import Coolnv1 from '$lib/home/comps/coolnavs/coolnv1.svelte';
	import Coolnv2 from '$lib/home/comps/coolnavs/coolnv2.svelte';
	import CopyCode from '$lib/home/copyCode.svelte';
	let isClicked = false;
</script>

<div class="prose lg:max-w-full">
	<h1>Cool Navs - Flyouts</h1>
	<p>
		Easily Editable and Responsive Navbars with <span class="text-primary">Flyouts</span>
	</p>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm" variant="outline" class="border border-primary">Responsive</Button>
		<Button size="sm">Svelte Inbuild</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Inbuilt Transition - Slide </Button>
	</div>
	<div>
		{#each allCoolNavs as nav, index}
			<div class="my-2 lg:my-7">
				<div class="flex justify-between items-center">
					<h3 class="my-2 capitalize">{index + 1}. {nav.name}</h3>
					<div class="mr-2">
						<CopyCode code={nav.code} {isClicked} />
					</div>
				</div>
				<div class="not-prose my-10">
					<svelte:component this={nav.component} />
				</div>
			</div>
		{/each}
		<!-- <Coolnv1 /> -->
	</div>
</div>
