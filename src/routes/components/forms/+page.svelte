<script>
	import Button from '$components/ui/button/button.svelte';
	import { allforms } from '$lib/home/comps/forms/allform';
	import CopyCode from '$lib/home/copyCode.svelte';
	let isClicked = false;
</script>

<svelte:head>
	<title>Svelte Forms</title>
</svelte:head>
<div class="prose lg:max-w-full">
	<h1>Forms - Login & Registration</h1>
	<p>
		<span class="text-primary">Login</span> and <span class="text-primary">Registration</span> forms
		are available in <span class="text-primary">Svelte</span> by default.
	</p>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm">Svelte Inbuild</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Easy to Edit</Button>
		<Button size="sm">Responsive</Button>
	</div>
	<div>
		{#each allforms as nav, index}
			<div class="my-2 lg:my-7">
				<div class="flex justify-between items-center">
					<h2 class="my-2">{index + 1}. {nav.name}</h2>
					<div class="mr-2">
						<CopyCode code={nav.code} {isClicked} />
					</div>
				</div>
				<div class="not-prose">
					<svelte:component this={nav.component} />
				</div>
			</div>
		{/each}
	</div>
</div>
