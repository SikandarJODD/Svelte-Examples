<script>
	import Button from '$components/ui/button/button.svelte';
	import CopyCode from '$lib/home/copyCode.svelte';
	import { allshnavs } from '$lib/sh/navbar/allshnavs';
	import { ExternalLink } from 'lucide-svelte';
	let isClicked = false;
</script>

<svelte:head>
	<title>Shadcn Navbar</title>
</svelte:head>
<div class="prose lg:max-w-full dark:prose-invert">
	<h1>Navbar</h1>
	<p>Simple Navbar using shadcn and lucide icons with built in animation</p>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm" variant="outline">Svelte Inbuild</Button>
		<Button size="sm" variant="outline">Easily Customizable</Button>
		<Button size="sm" variant="outline">Dark & Light Mode</Button>
		<Button size="sm" variant="outline">Responsive</Button>
		<Button size="sm" variant="secondary">Transitons : slide</Button>
	</div>
	<div>
		{#each allshnavs as nav, index}
			<div class="my-2 lg:my-7">
				<div class="flex justify-between items-center">
					<div class="flex items-center md:gap-x-6">
						<h2 class="my-2">{index + 1}. {nav.name}</h2>
						<div>
							<Button
								size="sm"
								variant="secondary"
								class="not-prose"
								href={nav.link}
								target="_blank">Github Code</Button
							>
							<Button
								size="sm"
								variant="secondary"
								class="not-prose"
								href={nav.extend}
								target="_blank"
								>Preview
							</Button>
						</div>
					</div>
					<div class="mr-2">
						<CopyCode code={nav.code} {isClicked} />
					</div>
				</div>
				<div class="not-prose mt-2">
					<svelte:component this={nav.component} />
				</div>
			</div>
		{/each}
	</div>
</div>
