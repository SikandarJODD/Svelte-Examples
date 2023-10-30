<script>
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	let nav = {
		title: 'Svelte Tailwinds',
		img: 'https://cdn-icons-png.flaticon.com/512/5769/5769490.png',
		listnavs: [
			{
				name: 'Home',
				link: '/'
			},
			{
				name: 'Blogs',
				link: '/blogs'
			},
			{
				name: 'Products',
				link: '/products'
			},
			{
				name: 'About',
				link: '/about'
			}
		]
	};

	let profileNavs = [
		{
			name: 'Your Profile',
			link: '/'
		},
		{
			name: 'Settings',
			link: '/'
		},
		{
			name: 'Sign out',
			link: '/'
		}
	];
	$: isActive = $page.route.id?.split('/')[1];

	let isProfileMenu = false;
	let isMobileMenu = false;
</script>

<nav class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex md:w-[80%]">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
							class="{isMobileMenu ? 'hidden' : 'block'} h-6 w-6"
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
							class="{isMobileMenu ? 'block' : 'hidden'} h-6 w-6"
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
				<div class="flex flex-shrink-0 items-center">
					<img class="h-8 w-auto" src={nav.img} alt="Your Company" />
				</div>
				<!-- Change Justify-Start to Center, End -->
				<div class="hidden md:ml-6 md:flex md:space-x-8 w-full justify-center mr-4">
					{#each nav.listnavs as item}
						<a
							href={item.link}
							class="{isActive === item.link.split('/')[1]
								? 'border-indigo-500 text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							>{item.name}</a
						>
					{/each}
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<button
						type="button"
						class="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
							/>
						</svg>
						New Job
					</button>
				</div>
				<div class="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
					<button
						type="button"
						class="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<span class="absolute -inset-1.5" />
						<span class="sr-only">View notifications</span>
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
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
							/>
						</svg>
					</button>

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								type="button"
								class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
								on:click={() => (isProfileMenu = !isProfileMenu)}
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>

						<!--
                  Dropdown menu, show/hide based on menu state.
    
                  Entering: "transition ease-out duration-200"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
						<div
							class="{isProfileMenu
								? 'transform opacity-100 scale-100'
								: 'hidden transform opacity-0 scale-95'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-100", Not Active: "" -->
							{#each profileNavs as item}
								<a
									href={item.link}
									class="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">{item.name}</a
								>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#key isMobileMenu}
		<div
			class="md:hidden {isMobileMenu ? 'block' : 'hidden'}"
			id="mobile-menu"
			in:slide={{ duration: 300, delay: 50 }}
			out:slide={{ duration: 300 }}
		>
			<div class="space-y-1 pb-3 pt-2">
				{#each nav.listnavs as item}
					<a
						href={item.link}
						class="{isActive === item.link.split('/')[1]
							? 'bg-indigo-50 border-indigo-500 text-indigo-700'
							: 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6"
						>{item.name}</a
					>
				{/each}
			</div>
			<div class="border-t border-gray-200 pb-3 pt-4">
				<div class="flex items-center px-4 sm:px-6">
					<div class="flex-shrink-0">
						<img
							class="h-10 w-10 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<div class="text-base font-medium text-gray-800">Tom Cook</div>
						<div class="text-sm font-medium text-gray-500">tom@example.com</div>
					</div>
					<button
						type="button"
						class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<span class="absolute -inset-1.5" />
						<span class="sr-only">View notifications</span>
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
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
							/>
						</svg>
					</button>
				</div>
				<div class="mt-3 space-y-1">
					{#each profileNavs as item}
						<a
							href={item.link}
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
							>{item.name}</a
						>
					{/each}
				</div>
			</div>
		</div>
	{/key}
</nav>
