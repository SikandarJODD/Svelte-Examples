<script>
	import { slide } from 'svelte/transition';
	import { allNavs } from '../navbars/nav';

	let allData = {
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
		navs: [
			{
				name: 'Products',
				link: '/'
			},
			{
				name: 'Features',
				link: '/'
			},
			{
				name: 'Marketplace',
				link: '/'
			},
			{
				name: 'Company',
				link: '/'
			}
		]
	};
	let isOpen = false;
</script>

<header class="bg-white">
	<nav
		class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
		aria-label="Global"
	>
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img class="h-8 w-auto" src={allData.img} alt="" />
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each allData.navs as item}
				<a href={item.link} class="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
			{/each}
		</div>
		<div class="flex flex-1 items-center justify-end gap-x-6">
			<a href="/" class="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
				>Log in</a
			>
			<a
				href="/"
				class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Sign up</a
			>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => (isOpen = true)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="{isOpen ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="{isOpen ? 'visible' : 'hidden'} fixed inset-0 z-10" />
		<div
			class="fixed inset-y-0 right-0 top-10 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center gap-x-6">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img class="h-8 w-auto" src={allData.img} alt="" />
				</a>
				<a
					href="/"
					class="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Sign up</a
				>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
					on:click={() => (isOpen = false)}
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				{#key isOpen}
					<div class="-my-6 divide-y divide-gray-500/10" in:slide={{ duration: 600 }}>
						<div class="space-y-2 py-6">
							{#each allData.navs as item}
								<a
									href={item.link}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>{item.name}</a
								>
							{/each}
						</div>
						<div class="py-6">
							<a
								href="/"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>
</header>
