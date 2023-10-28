<script>
	import { copy } from 'svelte-copy';
	import { allNavs } from '$lib/home/comps/navbars/nav';
	import { CheckCircle, Copy } from 'lucide-svelte';
	import CopyCode from '$lib/home/copyCode.svelte';
	import Badge from '$components/ui/badge/badge.svelte';
	import Button from '$components/ui/button/button.svelte';
	let isClicked = false;
</script>

<div class="prose lg:max-w-full">
	<h1>Navbars - Tailwind</h1>
	<p>
		Change <code>justify-center</code> to <code>justify-end , justify-start</code> for Positioning the
		nav items
	</p>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm">Svelte Inbuild</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Responsive</Button>
		<Button size="sm">Transition</Button>
	</div>
	<div>
		{#each allNavs as nav, index}
			<div class="my-2 lg:my-7">
				<div class="flex justify-between items-center">
					<h3 class="my-2">{index + 1}. {nav.name}</h3>
					<div class="mr-2">
						<CopyCode code={nav.code} {isClicked} />
					</div>
				</div>
				<p class="mb-2 mt-0">{@html nav.desc}</p>
				<div class="not-prose">
					<svelte:component this={nav.component} />
				</div>
			</div>
		{/each}
	</div>
</div>
