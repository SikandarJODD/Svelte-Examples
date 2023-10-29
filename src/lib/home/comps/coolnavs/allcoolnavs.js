import Coolnv1 from "./coolnv1.svelte";
import Coolnv2 from "./coolnv2.svelte";
import Coolnv3 from "./coolnv3.svelte";
import Coolnv4 from "./coolnv4.svelte";
import Coolnv5 from "./coolnv5.svelte";

export let allCoolNavs = [
    {
        name: 'Cool Navbars Flyouts',
        component: Coolnv1,
        code: `<script>
        import { slide } from 'svelte/transition';
        import { allNavs } from '../navbars/nav';
    
        let isFlyoutOpen = false;
        let isMobileFlyoutOpen = true;
        let isMenuBarOpen = false;
        let navData = {
            img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
            products: [
                {
                    name: 'Analytics',
                    desc: 'Get a better understanding of your traffic',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
                                    </svg>`+ `,
                    link: '/'
                },
                {
                    name: 'Engagement',
                    desc: 'Speak directly to your customers',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                                        />
                                    </svg>`+ `,
                    link: '/'
                },
                {
                    name: 'Security',
                    desc: 'Your customers’ data will be safe and secure',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                        />
                                    </svg>`+ `,
                    link: '/'
                },
                {
                    name: 'Integrations',
                    desc: 'Connect with third-party tools',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>`+ `,
                    link: '/'
                },
                {
                    name: 'Automations',
                    desc: 'Build strategic funnels that will convert',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                        />
                                    </svg>`+ `,
                    link: '/'
                }
            ],
            navs: [
                {
                    name: 'Features',
                    link: '/'
                },
                {
                    name: 'Marketplace',
                    link: '/about'
                },
                {
                    name: 'Company',
                    link: '/about'
                }
            ]
        };
    </script>
    
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src={navData.img} alt="" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    on:click={() => (isMenuBarOpen = !isMenuBarOpen)}
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
            <div class="hidden lg:flex lg:gap-x-12">
                <div class="relative">
                    <button
                        type="button"
                        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none outline-none"
                        aria-expanded="false"
                        on:click={() => (isFlyoutOpen = !isFlyoutOpen)}
                    >
                        Product
                        <svg
                            class="{isFlyoutOpen ? "rotate-180 transition-all duration-200":"transition-all duration-200"} h-5 w-5 flex-none text-gray-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        class="{isFlyoutOpen
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 translate-y-1 hidden'} absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                        <div class="p-4">
                            {#each navData.products as item}
                                <div
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 z-50"
                                >
                                    <div
                                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                                    >
                                        {@html item.icon}
                                    </div>
                                    <div class="flex-auto">
                                        <a href={item.link} class="block font-semibold text-gray-900">
                                            {item.name}
                                            <span class="absolute inset-0" />
                                        </a>
                                        <p class="mt-1 text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            <a
                                href="/"
                                class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="h-5 w-5 flex-none text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Watch demo
                            </a>
                            <a
                                href="/"
                                class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    class="h-5 w-5 flex-none text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Contact sales
                            </a>
                        </div>
                    </div>
                </div>
                {#each navData.navs as item}
                    <a href={item.link} class="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
                {/each}
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/" class="text-sm font-semibold leading-6 text-gray-900"
                    >Log in <span aria-hidden="true">&rarr;</span></a
                >
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="{isMenuBarOpen ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="{isMenuBarOpen ? 'backdrop-blur-sm' : ''} fixed inset-0 z-10" />
            <div
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        on:click={() => (isMenuBarOpen = false)}
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
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <div class="-mx-3">
                                <button
                                    type="button"
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    aria-controls="disclosure-1"
                                    aria-expanded="false"
                                    on:click={() => (isMobileFlyoutOpen = !isMobileFlyoutOpen)}
                                >
                                    Product
                                    <!--
                        Expand/collapse icon, toggle classes based on menu open state.
      
                        Open: "rotate-180", Closed: ""
                      -->
                                    <svg
                                        class=" {isMobileFlyoutOpen
                                            ? 'rotate-180 transition-all duration-300'
                                            : 'transition-all duration-300'} h-5 w-5 flex-none"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                                {#key isMobileFlyoutOpen}
                                    <div
                                        in:slide={{ duration: 400 }}
                                        class="{isMobileFlyoutOpen ? 'hidden' : 'visible'} mt-2 space-y-2"
                                        id="disclosure-1"
                                    >
                                        {#each navData.products as item}
                                            <a
                                                href={item.link}
                                                class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >{item.name}</a
                                            >
                                        {/each}
                                    </div>
                                {/key}
                            </div>
                            {#each navData.navs as item}
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
                </div>
            </div>
        </div>
    </header>
    `
    },
    {
        name: 'full width flyout menu',
        component: Coolnv2,
        code: `<script>
        import { slide } from 'svelte/transition';
        let open = false;
        let isProductMobile = false;
        let isMobileMenu = false;
        let allData = {
            img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
            navs: [
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
            ],
            products: [
                {
                    name: 'Analytics',
                    link: '/',
                    desc: 'Get a better understanding where your traffic is coming from',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
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
                                    </svg>`+ `
                },
                {
                    name: 'Engagement',
                    link: '/',
                    desc: 'Speak directly to your customers with our engagement tool',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                                        />
                                    </svg>`+ `
                },
                {
                    name: 'Security',
                    link: '/',
                    desc: 'Your customers’ data will be safe and secure',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                        />
                                    </svg>`+ `
                },
                {
                    name: 'Integrations',
                    link: '/',
                    desc: 'Connect with third-party tools that you’re already using.',
                    icon: `+ `<svg
                                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>`+ `
                }
            ]
        };
    </script>
    
    <header class="relative isolate z-10 bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src={allData.img} alt="" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    on:click={() => (isMobileMenu = true)}
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
            <div class="hidden lg:flex lg:gap-x-12">
                <div>
                    <button
                        type="button"
                        class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none outline-none"
                        aria-expanded="false"
                        on:click={() => (open = !open)}
                    >
                        Product
                        <svg
                            class="{open ? "rotate-180 transition-all duration-200":"transition-all duration-200 "} h-5 w-5 flex-none text-gray-800"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
    
                    <div
                        class=" {open
                            ? 'opacity-100 visible translate-y-0 transition ease-out duration-200'
                            : 'opacity-0 hidden -translate-y-1 transition ease-out duration-200'} absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5"
                    >
                        <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                            {#each allData.products as item}
                                <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                                    <div
                                        class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                                    >
                                        {@html item.icon}
                                    </div>
                                    <a href={item.link} class="mt-6 block font-semibold text-gray-900">
                                        {item.name}
                                        <span class="absolute inset-0" />
                                    </a>
                                    <p class="mt-1 text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            {/each}
                        </div>
                        <div class="bg-gray-50">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                                    <a
                                        href="/"
                                        class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <svg
                                            class="h-5 w-5 flex-none text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        Watch demo
                                    </a>
                                    <a
                                        href="/"
                                        class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <svg
                                            class="h-5 w-5 flex-none text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        Contact sales
                                    </a>
                                    <a
                                        href="/"
                                        class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <svg
                                            class="h-5 w-5 flex-none text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        View all products
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                {#each allData.navs as item}
                    <a href={item.link} class="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
                {/each}
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/" class="text-sm font-semibold leading-6 text-gray-900"
                    >Log in <span aria-hidden="true">&rarr;</span></a
                >
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="{isMobileMenu ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="{isMobileMenu ? 'visible' : 'hidden'} fixed inset-0 z-10" />
            <div
                class="fixed inset-y-0 right-0 z-50  w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src={allData.img} alt="" />
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        on:click={() => (isMobileMenu = false)}
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
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <div class="-mx-3">
                                <button
                                    type="button"
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    aria-controls="disclosure-1"
                                    aria-expanded="false"
                                    on:click={() => (isProductMobile = !isProductMobile)}
                                >
                                    Product
                                    <!--
                        Expand/collapse icon, toggle classes based on menu open state.
      
                        Open: "rotate-180", Closed: ""
                      -->
                                    <svg
                                        class="{isProductMobile
                                            ? ' rotate-180 transition-all duration-300 '
                                            : 'transition-all duration-300 '} h-5 w-5 flex-none"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                                {#key isProductMobile}
                                    <div
                                        transition:slide={{ duration: 300 }}
                                        class="{isProductMobile ? 'visible' : 'hidden'} mt-2 space-y-2"
                                        id="disclosure-1"
                                    >
                                        {#each allData.products as item}
                                            <a
                                                href={item.link}
                                                class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >{item.name}</a
                                            >
                                        {/each}
                                    </div>
                                {/key}
                            </div>
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
                </div>
            </div>
        </div>
    </header>
    `
    },
    {
        name: 'Registration & Login Nav',
        component: Coolnv3,
        code: `<script>
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
                class="fixed inset-y-0 right-0  z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
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
    `
    },
    {
        name: 'Multiple  Flyouts - products and Company',
        component: Coolnv4,
        code: `<!-- With icons in mobile menu -->
        <script>
            import { slide } from 'svelte/transition';
            import { allNavs } from '../navbars/nav';
        
            let isCompanyOpen = false;
            let isProductOpen = false;
            let allData = {
                img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
                contactNavs: [
                    {
                        name: 'About Us',
                        link: '/',
                        desc: 'Learn more about our company values and mission to empower others'
                    },
                    {
                        name: 'Careers',
                        link: '/',
                        desc: 'Looking for you next career opportunity? See all of our open positions'
                    },
                    {
                        name: 'Blog',
                        link: '/',
                        desc: 'Read our latest announcements and get perspectives from our team'
                    },
                    {
                        name: 'Support',
                        link: '/',
                        desc: 'Get in touch with our dedicated support team or reach out on our community forums'
                    }
                ],
                productNavs: [
                    {
                        name: 'Analytics',
                        link: '/',
                        desc: 'Get a better understanding of your traffic',
                        icon: `+ `<svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>`+ `
                    },
                    {
                        name: 'Engagement',
                        link: '/',
                        desc: 'Speak directly to your customers',
                        icon: `+ `<svg
                                            class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                                            />
                                        </svg>`+ `
                    },
                    {
                        name: 'Security',
                        link: '/',
                        desc: 'Your customers’ data will be safe and secure',
                        icon: `+ `<svg
                                            class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                            />
                                        </svg>`+ `
                    },
                    {
                        name: 'Integrations',
                        link: '/',
                        desc: 'Connect with third-party tools',
                        icon: `+ `<svg
                                            class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                                            />
                                        </svg>`+ `
                    },
                    {
                        name: 'Automations',
                        link: '/',
                        desc: 'Build strategic funnels that will convert',
                        icon: `+ `<svg
                                            class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                            />
                                        </svg>`+ `
                    }
                ],
                navs: [
                    {
                        name: 'Features',
                        link: '/'
                    },
                    {
                        name: 'Marketplace',
                        link: '/'
                    }
                ]
            };
            let open = false;
        </script>
        
        <header class="bg-white">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src={allData.img} alt="" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button
                        type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        on:click={() => {
                            open = !open;
                        }}
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
                <div class="hidden lg:flex lg:gap-x-12">
                    <div class="relative">
                        <button
                            type="button"
                            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none outline-none"
                            aria-expanded="false"
                            on:click={() => {
                                isProductOpen = !isProductOpen;
                                isCompanyOpen = false;
                            }}
                        >
                            Product
                            <svg
                                class=" {isProductOpen
                                    ? 'rotate-180 transition-all duration-300 '
                                    : ' transition-all duration-300'} h-5 w-5 flex-none text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
        
                        <!--
                    'Product' flyout menu, show/hide based on flyout menu state.
          
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1"
                  -->
                        <div
                            class="{isProductOpen
                                ? 'opacity-100 visible translate-y-0 transition ease-in duration-150'
                                : 'opacity-0 hidden translate-y-1 transition ease-in duration-150'} absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                        >
                            <div class="p-4">
                                {#each allData.productNavs as item}
                                    <div
                                        class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div
                                            class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                                        >
                                            {@html item.icon}
                                        </div>
                                        <div class="flex-auto">
                                            <a href={item.link} class="block font-semibold text-gray-900">
                                                {item.name}
                                                <span class="absolute inset-0" />
                                            </a>
                                            <p class="mt-1 text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                            <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                <a
                                    href="/"
                                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        class="h-5 w-5 flex-none text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Watch demo
                                </a>
                                <a
                                    href="/"
                                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                    <svg
                                        class="h-5 w-5 flex-none text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Contact sales
                                </a>
                            </div>
                        </div>
                    </div>
        
                    <!-- <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Features</a> -->
                    {#each allData.navs as item}
                        <a href={item.link} class="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
                    {/each}
        
                    <div class="relative">
                        <button
                            type="button"
                            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none border-none"
                            aria-expanded="false"
                            on:click={() => {
                                isCompanyOpen = !isCompanyOpen;
                                isProductOpen = false;
                            }}
                        >
                            Company
                            <svg
                                class="{isCompanyOpen
                                    ? 'rotate-180 transition-all duration-300'
                                    : 'transition-all duration-300'} h-5 w-5 flex-none text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
        
                        <!--
                    'Company' flyout menu, show/hide based on flyout menu state.
          
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1"
                  -->
                        <div
                            class="{isCompanyOpen
                                ? 'opacity-100 visible translate-y-0 transition ease-out duration-300 '
                                : 'opacity-0 hidden translate-y-1 transition ease-out duration-300 '} transition ease-out duration-300 absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5"
                        >
                            {#each allData.contactNavs as item}
                                <div class="relative rounded-lg p-4 hover:bg-gray-50">
                                    <a href={item.link} class="block text-sm font-semibold leading-6 text-gray-900">
                                        {item.name}
                                        <span class="absolute inset-0" />
                                    </a>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/" class="text-sm font-semibold leading-6 text-gray-900"
                        >Log in <span aria-hidden="true">&rarr;</span></a
                    >
                </div>
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="{open ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <div class="{open ? 'visible' : 'hidden'} fixed inset-0 z-10" />
                <div
                    class="fixed inset-y-0  right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <a href="/" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto" src={allData.img} alt="" />
                            </a>
                            <button
                                type="button"
                                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                                on:click={() => (open = false)}
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
                        {#key open}
                            <div class="mt-6 flow-root" in:slide={{ duration: 500 }}>
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="space-y-2 py-6">
                                        {#each allData.productNavs as item}
                                            <a
                                                href={item.link}
                                                class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                <div
                                                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                                                >
                                                    {@html item.icon}
                                                </div>
                                                {item.name}
                                            </a>
                                        {/each}
                                    </div>
                                    <div class="space-y-2 py-6">
                                        {#each allData.contactNavs as item}
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
                            </div>
                        {/key}
                    </div>
                    <div
                        class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center"
                    >
                        <a href="/" class="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                            >Watch demo</a
                        >
                        <a href="/" class="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                            >Contact sales</a
                        >
                    </div>
                </div>
            </div>
        </header>
        `
    },
    {
        name: 'Cool Navbars Flyouts',
        component: Coolnv5,
        code: `<script>
        import { slide } from 'svelte/transition';
        let open = false;
        let allData = {
            img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
            navs: [
                {
                    name: 'Product',
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
    </script>
    
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex items-center gap-x-12">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src={allData.img} alt="" />
                </a>
                <div class="hidden lg:flex lg:gap-x-12">
                    {#each allData.navs as item}
                        <a href={item.link} class="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
                    {/each}
                </div>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    on:click={() => (open = true)}
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
            <div class="hidden lg:flex">
                <a href="/" class="text-sm font-semibold leading-6 text-gray-900"
                    >Log in <span aria-hidden="true">&rarr;</span></a
                >
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class=" {open ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="{open ? 'visible' : 'hidden'} fixed inset-0 z-10" />
            <div
                class="fixed inset-y-0  right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        on:click={() => (open = false)}
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
                    {#key open}
                        <div class="-my-6 divide-y divide-gray-500/10" in:slide={{ duration: 300 }}>
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
    `
    },
]