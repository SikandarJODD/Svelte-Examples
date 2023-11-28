<!-- Simple Dark -->
<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Logo from '$lib/images/logo.png';
	import { slide } from 'svelte/transition';
	import { ChevronRight, Home, LayoutGrid, User } from 'lucide-svelte';
	import ToggleMode from './ToggleMode.svelte';
	let nav = {
		title: 'Svelte Tailwinds',
		img: Logo,
		listnavs: [
			{
				name: 'Home',
				link: '/',
				icon: Home
			},
			{
				name: 'Shadcn Components',
				link: '/sh',
				icon: ChevronRight
			},
			{
				name: 'Taiwlind Components',
				link: '/components',
				icon: LayoutGrid
			},
			{
				name: 'About',
				link: '/about',
				icon: User
			}
		]
	};
	$: isActive = $page.route.id;

	let isProfileMenu = false;
	let isMobileMenu = false;
</script>

<nav class="border-b border-slate-400">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-14 items-center justify-between">
			<div class="flex items-center w-full">
				<div class="flex-shrink-0 flex gap-2">
					<!-- <img class="h-6 w-auto" src={nav.img} alt="Svelte Examples" /> -->
					<h1 class="font-semibold">Svelte - Components</h1>
				</div>
				<!-- Change Justify-center to end, start -->
				<div class="hidden sm:ml-6 sm:flex w-full justify-center">
					<div class="flex space-x-4">
						{#each nav.listnavs as item}
							<a
								href={item.link}
								class="{isActive === item.link
									? ' text-black transition-all duration-150 bg-gray-200/50 dark:bg-white/90'
									: 'text-gray-500 hover:text-primary transition-all duration-150 '}  rounded-md px-3 py-2 text-sm font-medium"
								>{item.name}</a
							>
						{/each}
						<ToggleMode />
					</div>
				</div>
			</div>

			<div class="-mr-2 flex sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 focus:outline-none"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (isMobileMenu = !isMobileMenu)}
				>
					<span class="absolute -inset-0.5" />
					<span class="sr-only">Open main menu</span>
					<!--
                Icon when menu is closed.
    
                Menu open: "hidden", Menu closed: "block"
              -->
					<svg
						class="{isMobileMenu ? 'hidden' : 'block'}  h-6 w-6"
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
					<!--
                Icon when menu is open.
    
                Menu open: "block", Menu closed: "hidden"
              -->
					<svg
						class="{isMobileMenu ? 'block' : 'hidden'}  h-6 w-6"
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
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden {isMobileMenu ? 'block' : 'hidden'}" id="mobile-menu">
		{#key isMobileMenu}
			<div class="space-y-1 px-2 pb-3 pt-2" in:slide={{ duration: 600, delay: 200 }}>
				{#each nav.listnavs as item}
					<a
						href={item.link}
						class="{isActive === item.link
							? 'bg-gray-900 text-white'
							: 'text-gray-600 hover:bg-gray-700 hover:text-white'}  flex items-center rounded-md px-3 py-2 text-base font-medium"
					>
						<svelte:component this={item.icon} size="18" strokeWidth="1.4" class="mr-2" />
						{item.name}</a
					>
				{/each}
				<ToggleMode />
			</div>
		{/key}
	</div>
</nav>
