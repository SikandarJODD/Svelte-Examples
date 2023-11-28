<script>
	import Button from '$components/ui/button/button.svelte';
	import { LayoutGrid, ChevronRight } from 'lucide-svelte';

	let herosec = {
		title: 'Svelte Tailwind & Shadcn Components',
		subtitle: 'Svelte Examples',
		subtext: `Easy to Use Svelte Components with <span class="text-primary">Tailwind CSS</span> and <span class="text-primary">Shadcn</span> Components`,
		btn1: 'Dashboard',
		btn2: 'Products'
	};
</script>

<section class="bg-gray-50 dark:bg-gray-950">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[90vh] lg:items-center">
		<div class="mx-auto max-w-5xl text-center">
			<h1 class="text-3xl font-extrabold sm:text-5xl">
				{herosec.title}
				<strong class="font-extrabold text-blue-600 sm:block">
					{herosec.subtitle}
				</strong>
			</h1>

			<p class="mt-4 sm:text-lg/relaxed text-gray-600 font-light">
				{@html herosec.subtext}
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4 lg:gap-x-6">
				<Button size="lg" href="/examples">
					<ChevronRight size="19" strokeWidth="1.4" class="mr-1" />
					Examples</Button
				>
				<Button size="lg" href="/components">
					<LayoutGrid size="19" strokeWidth="1.4" class="mr-1" />
					Components</Button
				>
			</div>
		</div>
	</div>
</section>
