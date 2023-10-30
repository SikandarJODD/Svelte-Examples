<!-- Sidebar in Light Mode - Profile icon on Right -->
<script>
	import { page } from '$app/stores';
	import { CalendarCheck2, Files, FolderClosed, Home, PieChart, Users } from 'lucide-svelte';

	let isMobileMenu = false;
	$: console.log(isMobileMenu);
	let layoutNavs = [
		{
			name: 'Dashboard',
			link: '/',
			icon: Home
		},
		{
			name: 'Projects',
			link: '',
			icon: FolderClosed
		},
		{
			name: 'Teams',
			link: '',
			icon: Users
		},
		{
			name: 'Documents',
			link: '',
			icon: Files
		},
		{
			name: 'Reports',
			link: '',
			icon: PieChart
		},
		{
			name: 'Calendar',
			link: '',
			icon: CalendarCheck2
		}
	];
	let teams = [
		{
			name: 'Frontend Team',
			link: '#',
			icon: 'F'
		},
		{
			name: 'UI Designers',
			link: '#',
			icon: 'U'
		},
		{
			name: 'System Designers',
			link: '#',
			icon: 'S'
		}
	];
	let webdata = {
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
		profileName: 'Saloni Maheshwari',
		email: 'Tom Cook',
		profileImg: 'https://i.pinimg.com/564x/f9/26/be/f926bef1490ab447798ccd012c2e8040.jpg',
		profileLink: '#',
		topic: 'Dashboard'
	};
	$: routeID = $page.route.id;
</script>

<div>
	<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
	<div
		class="{isMobileMenu
			? 'opacity-100 transition-opacity ease-linear duration-300'
			: 'opacity-0 transition-opacity ease-linear duration-300'} relative z-50 lg:hidden"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="{isMobileMenu
				? 'translate-x-0 transition ease-in-out duration-300 transform'
				: '-translate-x-full transition ease-in-out duration-300 transform'} fixed inset-0 bg-gray-900/80"
		/>

		<div
			class="{isMobileMenu
				? 'translate-x-0 transition ease-in-out duration-300 transform'
				: '-translate-x-full transition ease-in-out duration-300 transform'} fixed inset-0 flex"
		>
			<div
				class="{isMobileMenu
					? 'opacity-100 ease-in-out duration-300'
					: 'opacity-0 ease-in-out duration-300'} relative mr-16 flex w-full max-w-xs flex-1"
			>
				<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
					<button type="button" class="-m-2.5 p-2.5" on:click={() => (isMobileMenu = false)}>
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
					<div class="flex h-16 shrink-0 items-center">
						<img class="h-8 w-auto" src={webdata.img} alt="Your Company" />
					</div>
					<nav class="flex flex-1 flex-col">
						<ul role="list" class="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" class="-mx-2 space-y-1">
									{#each layoutNavs as item}
										<li>
											<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
											<a
												href={item.link}
												class="{routeID === item.link
													? 'bg-gray-50 text-indigo-600'
													: 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'}  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											>
												<svelte:component this={item.icon} strokeWidth="1.3" size="22" />
												{item.name}
											</a>
										</li>
									{/each}
								</ul>
							</li>
							<li>
								<div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
								<ul role="list" class="-mx-2 mt-2 space-y-1">
									{#each teams as item}
										<li>
											<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
											<a
												href={item.link}
												class="{routeID === item.link
													? 'bg-gray-50 text-indigo-600'
													: 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'} group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											>
												<span
													class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
													>{item.icon}</span
												>
												<span class="truncate">{item.name}</span>
											</a>
										</li>
									{/each}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<!-- Static sidebar for desktop -->
	<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
			<div class="flex h-16 shrink-0 items-center">
				<img class="h-8 w-auto" src={webdata.img} alt="Your Company" />
			</div>
			<nav class="flex flex-1 flex-col">
				<ul role="list" class="flex flex-1 flex-col gap-y-7">
					<li>
						<ul role="list" class="-mx-2 space-y-1">
							{#each layoutNavs as item}
								<li>
									<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
									<a
										href={item.link}
										class="{routeID===item.link ?"bg-gray-50 text-indigo-600 transition-all duration-150":"text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-150" }  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
									>
										<svelte:component this={item.icon} strokeWidth="1.3" size="22" />
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</li>
					<li>
						<div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
						<ul role="list" class="-mx-2 mt-2 space-y-1">
							{#each teams as item}
								<li>
									<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
									<a
										href={item.link}
										class="{routeID === item.link
											? 'bg-gray-50 text-indigo-600 transition-all duration-150'
											: 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-150'}   group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
									>
										<span
											class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600"
											>{item.icon}</span
										>
										<span class="truncate">{item.name}</span>
									</a>
								</li>
							{/each}
						</ul>
					</li>
					<li class="-mx-6 mt-auto">
						<a
							href={webdata.profileLink}
							class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
						>
							<img class="h-8 w-8 rounded-full bg-gray-50" src={webdata.profileImg} alt="" />
							<span class="sr-only">Your profile</span>
							<span aria-hidden="true">{webdata.profileName}</span>
						</a>
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
			on:click={() => (isMobileMenu = true)}
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
		<div class="flex-1 text-sm font-semibold leading-6 text-gray-900">{webdata.topic}</div>
		<a href={webdata.topic}>
			<span class="sr-only">Your profile</span>
			<img class="h-8 w-8 rounded-full bg-gray-50" src={webdata.profileImg} alt="" />
		</a>
	</div>

	<main class="py-10 lg:pl-72">
		<div class="px-4 sm:px-6 lg:px-8">
			Your content
		</div>
	</main>
</div>
