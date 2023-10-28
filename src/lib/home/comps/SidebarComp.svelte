<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full">
  ```
-->
<script>
	let isMenuOpen = true;
	import Logo from '$lib/images/logo.png';
	import {
		LayoutPanelTopIcon,
		Home,
		GalleryVerticalEnd,
		PanelTop,
		BoomBoxIcon,
		Download
	} from 'lucide-svelte';
	let codeComponents = [
		{
			name: 'Home',
			link: '/components',
			icon: Home
		},
		{
			name: 'Install Library',
			link: '/components/install',
			icon: Download
		},
		{
			name: 'Navbar',
			link: '/components/navbar',
			icon: LayoutPanelTopIcon
		},
		{
			name: 'Footer',
			link: '/components/footer',
			icon: GalleryVerticalEnd
		},
		{
			name: 'CTA',
			link: '/components/cta',
			icon: PanelTop
		},
		{
			name: 'Hero',
			link: '/components/hero',
			icon: BoomBoxIcon
		}
	];
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div
		class="{isMenuOpen
			? ' opacity-100 transition-opacity ease-linear duration-300'
			: ' opacity-0 transition-opacity ease-linear duration-300 '} relative z-50 lg:hidden"
		role="dialog"
		aria-modal="true"
	>
		<!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
		<div
			class="{isMenuOpen
				? ' opacity-100 transition-opacity ease-linear duration-300'
				: ' opacity-0 transition-opacity ease-linear duration-300 hidden'} fixed inset-0 bg-gray-900/80"
		/>

		<div
			class="{isMenuOpen
				? 'translate-x-0 transition ease-in-out duration-300 transform '
				: ' -translate-x-full transition ease-in-out duration-300 transform '} fixed inset-0 flex"
		>
			<!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
			<div
				class="{isMenuOpen
					? ' opacity-100 ease-in-out duration-300'
					: ' opacity-0 ease-in-out duration-300 '} relative mr-16 flex w-full max-w-xs flex-1"
			>
				<!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
				<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
					<button type="button" class="-m-2.5 p-2.5" on:click={() => (isMenuOpen = false)}>
						<span class="sr-only">Close sidebar</span>
						<svg
							class="h-6 w-6 text-white"
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

				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
					<div class="flex h-16 shrink-0 items-center text-primary">
						<!-- <img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/> -->
						<h1 class="text-primary font-bold">Svelte - Components</h1>
					</div>
					<nav class="flex flex-1 flex-col">
						<ul role="list" class="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" class="-mx-2 space-y-1">
									{#each codeComponents as item}
										<li>
											<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
											<a
												href={item.link}
												class="bg-gray-50 text-indigo-600 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											>
												<svelte:component
													this={item.icon}
													size="19"
													class="mr-2"
													strokeWidth="1.37"
												/>
												{item.name}
											</a>
										</li>
									{/each}
									<!-- <li>
										<a
											href="#"
											class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
										>
											<svg
												class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
												/>
											</svg>
											Reports
										</a>
									</li> -->
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- Static sidebar for desktop -->
	<div
		class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col md:border-r border-slate-300"
	>
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
			<div class="flex h-16 shrink-0 items-center gap-2">
				<img class="h-6 w-auto" src={Logo} alt="Your Company" />
				<h1 class="font-semibold">Svelte - Components</h1>
			</div>
			<nav class="flex flex-1 flex-col">
				<ul role="list" class="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" class="-mx-2 space-y-1">
							{#each codeComponents as item}
								<li>
									<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
									<a
										href={item.link}
										class=" text-gray-800 hover:text-indigo-600 hover:bg-gray-100/80 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:translate-x-1 duration-150 transition-all"
									>
										<svelte:component this={item.icon} size="22" class="mr-2" strokeWidth="1.37" />
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div
		class="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"
	>
		<button
			type="button"
			class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
			on:click={() => (isMenuOpen = true)}
		>
			<span class="sr-only">Open sidebar</span>
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
		<div class="flex-1 text-sm font-semibold leading-6 text-gray-900">Svelte - Components</div>
	</div>

	<main class="py-10 lg:pl-64">
		<div class="px-4 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</div>
