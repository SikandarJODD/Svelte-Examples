<script>
	import Badge from '$components/ui/badge/badge.svelte';
	import Button from '$components/ui/button/button.svelte';
	import Label from '$components/ui/label/label.svelte';
	import * as Select from '$lib/components/ui/select';
	import { Copy, CheckCircle } from 'lucide-svelte';
	const fruits = [
		{
			value: 'Shadcn Svelte',
			label: 'Shadcn Svelte',
			code: 'npx shadcn-svelte@latest init',
			link: 'https://www.shadcn-svelte.com/docs'
		},
		{
			value: 'Tailwind Css',
			label: 'Tailwind Css',
			code: 'npx svelte-add@latest tailwindcss',
			link: 'https://tailwindcss.com/docs/installation'
		},
		{
			value: 'Lucia Auth',
			label: 'Lucia Auth',
			code: 'npm i lucia',
			link: 'https://lucia-auth.com/getting-started/'
		},
		{
			value: 'Drizzle ORM',
			label: 'Drizzle ORM',
			code: `npm i drizzle-orm  
                   npm i -D drizzle-kit`,
			link: 'https://orm.drizzle.team/docs/overview'
		},
		{
			value: 'Lucide Svelte',
			label: 'Lucide Svelte',
			code: 'npm install lucide-svelte',
			link: 'https://lucide.dev/guide/packages/lucide-svelte'
		}
	];
	let selectedValue = 0;
	import { copy } from 'svelte-copy';
	let isClicked = false;
</script>

<svelte:head>
	<title>Svelte - Library Installation</title>
</svelte:head>
<div class="prose dark:prose-invert">
	<h1>Install Svelte Libraries</h1>
	<p>
		To install a library, you can use the <code>npm</code> or <code>yarn</code> command line tools.
	</p>
	<h3>Select a Library :</h3>
	<div class="not-prose">
		<Select.Root>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Shadcn Svelte" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Fruits</Select.Label>
					{#each fruits as fruit, index}
						<Select.Item
							on:click={() => (selectedValue = index)}
							value={fruit.value}
							label={fruit.label}>{fruit.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>
	</div>
	<div class="">
		{#if selectedValue !== undefined}
			{#if fruits[selectedValue].code}
				<div
					class="flex relative bg-gray-800 my-4 h-12 text-gray-200 font-mono items-center px-3 rounded-lg"
				>
					{fruits[selectedValue].code}<button
						on:click={() => {
							isClicked = true;
							setTimeout(() => {
								isClicked = false;
							}, 1200);
						}}
						use:copy={fruits[selectedValue].code}
					>
						{#if !isClicked}
							<Copy class="absolute top-4 right-3" strokeWidth="1.3" size="16" />
						{:else}
							<CheckCircle
								color="#3DFF57"
								class="absolute top-4 right-3"
								strokeWidth="1.3"
								size="16"
							/>
						{/if}
					</button>
				</div>
			{/if}
		{/if}
	</div>
	<div>
		Visit <a href={fruits[selectedValue].link} target="_blank" >{fruits[selectedValue].label} Docs</a> for Detailed Information.
	</div>
</div>
