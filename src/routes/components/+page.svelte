<script>
	import CompBox from '$lib/home/comps/CompBox.svelte';
	import { codeComponents } from '$lib';
</script>

<svelte:head>
	<title>Svelte Components</title>
</svelte:head>
<div class="prose lg:max-w-full dark:prose-invert">
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
