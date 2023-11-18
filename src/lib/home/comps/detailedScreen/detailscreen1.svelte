<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-50">
  <body class="h-full overflow-hidden">
  ```
-->
<div class="flex h-full">
    <!-- Narrow sidebar -->
    <div class="hidden w-28 overflow-y-auto bg-indigo-700 md:block">
      <div class="flex w-full flex-col items-center py-6">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
        </div>
        <div class="mt-6 w-full flex-1 space-y-1 px-2">
          <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->
          <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium">
            <!-- Current: "text-white", Default: "text-indigo-300 group-hover:text-white" -->
            <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span class="mt-2">Home</span>
          </a>
          <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium">
            <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            <span class="mt-2">All Files</span>
          </a>
          <a href="#" class="bg-indigo-800 text-white group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium" aria-current="page">
            <svg class="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span class="mt-2">Photos</span>
          </a>
          <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium">
            <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <span class="mt-2">Shared</span>
          </a>
          <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium">
            <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <span class="mt-2">Albums</span>
          </a>
          <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium">
            <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
            </svg>
            <span class="mt-2">Settings</span>
          </a>
        </div>
      </div>
    </div>
  
    <!--
      Mobile menu
  
      Off-canvas menu for mobile, show/hide based on off-canvas menu state.
    -->
    <div class="relative z-40 md:hidden" role="dialog" aria-modal="true">
      <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
  
      <div class="fixed inset-0 z-40 flex">
        <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
        <div class="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pb-4 pt-5">
          <!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="absolute right-0 top-1 -mr-14 p-1">
            <button type="button" class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="sr-only">Close sidebar</span>
            </button>
          </div>
  
          <div class="flex flex-shrink-0 items-center px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
          </div>
          <div class="mt-5 h-0 flex-1 overflow-y-auto px-2">
            <nav class="flex h-full flex-col">
              <div class="space-y-1">
                <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->
                <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex items-center rounded-md py-2 px-3 text-sm font-medium">
                  <!-- Current: "text-white", Default: "text-indigo-300 group-hover:text-white" -->
                  <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span>Home</span>
                </a>
                <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex items-center rounded-md py-2 px-3 text-sm font-medium">
                  <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  <span>All Files</span>
                </a>
                <a href="#" class="bg-indigo-800 text-white group flex items-center rounded-md py-2 px-3 text-sm font-medium" aria-current="page">
                  <svg class="text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span>Photos</span>
                </a>
                <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex items-center rounded-md py-2 px-3 text-sm font-medium">
                  <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <span>Shared</span>
                </a>
                <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex items-center rounded-md py-2 px-3 text-sm font-medium">
                  <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                  </svg>
                  <span>Albums</span>
                </a>
                <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group flex items-center rounded-md py-2 px-3 text-sm font-medium">
                  <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                  <span>Settings</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
  
        <div class="w-14 flex-shrink-0" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>
  
    <!-- Content area -->
    <div class="flex flex-1 flex-col overflow-hidden">
      <header class="w-full">
        <div class="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
          <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
            <span class="sr-only">Open sidebar</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </button>
          <div class="flex flex-1 justify-between px-4 sm:px-6">
            <div class="flex flex-1">
              <form class="flex w-full md:ml-0" action="#" method="GET">
                <label for="desktop-search-field" class="sr-only">Search all files</label>
                <label for="mobile-search-field" class="sr-only">Search all files</label>
                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input name="mobile-search-field" id="mobile-search-field" class="h-full w-full border-0 py-2 pl-8 pr-3 text-base text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:hidden" placeholder="Search" type="search">
                  <input name="desktop-search-field" id="desktop-search-field" class="hidden h-full w-full border-0 py-2 pl-8 pr-3 text-sm text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:block" placeholder="Search all files" type="search">
                </div>
              </form>
            </div>
            <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
              <!-- Profile dropdown -->
              <div class="relative flex-shrink-0">
                <div>
                  <button type="button" class="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
                  </button>
                </div>
  
                <!--
                  Dropdown menu, show/hide based on menu state.
  
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Sign out</a>
                </div>
              </div>
  
              <button type="button" class="relative rounded-full bg-indigo-600 p-1.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span class="absolute -inset-1.5"></span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                <span class="sr-only">Add file</span>
              </button>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Main content -->
      <div class="flex flex-1 items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div class="flex">
              <h1 class="flex-1 text-2xl font-bold text-gray-900">Photos</h1>
              <div class="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button type="button" class="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Use list view</span>
                </button>
                <button type="button" class="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Use grid view</span>
                </button>
              </div>
            </div>
  
            <!-- Tabs -->
            <div class="mt-3 sm:mt-2">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                <select id="tabs" name="tabs" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <option selected>Recently Viewed</option>
                  <option>Recently Added</option>
                  <option>Favorited</option>
                </select>
              </div>
              <div class="hidden sm:block">
                <div class="flex items-center border-b border-gray-200">
                  <nav class="-mb-px flex flex-1 space-x-6 xl:space-x-8" aria-label="Tabs">
                    <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                    <a href="#" aria-current="page" class="border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Recently Viewed</a>
                    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Recently Added</a>
                    <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Favorited</a>
                  </nav>
                  <div class="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                    <button type="button" class="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">Use list view</span>
                    </button>
                    <button type="button" class="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                      </svg>
                      <span class="sr-only">Use grid view</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Gallery -->
            <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
              <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <li class="relative">
                  <!-- Current: "ring-2 ring-indigo-500 ring-offset-2", Default: "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100" -->
                  <div class="ring-2 ring-indigo-500 ring-offset-2 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100">
                    <!-- Current: "", Default: "group-hover:opacity-75" -->
                    <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="pointer-events-none object-cover">
                    <button type="button" class="absolute inset-0 focus:outline-none">
                      <span class="sr-only">View details for IMG_4985.HEIC</span>
                    </button>
                  </div>
                  <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">IMG_4985.HEIC</p>
                  <p class="pointer-events-none block text-sm font-medium text-gray-500">3.9 MB</p>
                </li>
  
                <!-- More files... -->
              </ul>
            </section>
          </div>
        </main>
  
        <!-- Details sidebar -->
        <aside class="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
          <div class="space-y-6 pb-16">
            <div>
              <div class="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="object-cover">
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div>
                  <h2 class="text-lg font-medium text-gray-900"><span class="sr-only">Details for </span>IMG_4985.HEIC</h2>
                  <p class="text-sm font-medium text-gray-500">3.9 MB</p>
                </div>
                <button type="button" class="relative ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span class="absolute -inset-1.5"></span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <span class="sr-only">Favorite</span>
                </button>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">Information</h3>
              <dl class="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                <div class="flex justify-between py-3 text-sm font-medium">
                  <dt class="text-gray-500">Uploaded by</dt>
                  <dd class="whitespace-nowrap text-gray-900">Marie Culver</dd>
                </div>
                <div class="flex justify-between py-3 text-sm font-medium">
                  <dt class="text-gray-500">Created</dt>
                  <dd class="whitespace-nowrap text-gray-900">June 8, 2020</dd>
                </div>
                <div class="flex justify-between py-3 text-sm font-medium">
                  <dt class="text-gray-500">Last modified</dt>
                  <dd class="whitespace-nowrap text-gray-900">June 8, 2020</dd>
                </div>
                <div class="flex justify-between py-3 text-sm font-medium">
                  <dt class="text-gray-500">Dimensions</dt>
                  <dd class="whitespace-nowrap text-gray-900">4032 x 3024</dd>
                </div>
                <div class="flex justify-between py-3 text-sm font-medium">
                  <dt class="text-gray-500">Resolution</dt>
                  <dd class="whitespace-nowrap text-gray-900">72 x 72</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">Description</h3>
              <div class="mt-2 flex items-center justify-between">
                <p class="text-sm italic text-gray-500">Add a description to this image.</p>
                <button type="button" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <span class="absolute -inset-1.5"></span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                  </svg>
                  <span class="sr-only">Add description</span>
                </button>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">Shared with</h3>
              <ul role="list" class="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
                <li class="flex items-center justify-between py-3">
                  <div class="flex items-center">
                    <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80" alt="" class="h-8 w-8 rounded-full">
                    <p class="ml-4 text-sm font-medium text-gray-900">Aimee Douglas</p>
                  </div>
                  <button type="button" class="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Remove<span class="sr-only"> Aimee Douglas</span></button>
                </li>
                <li class="flex items-center justify-between py-3">
                  <div class="flex items-center">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-8 w-8 rounded-full">
                    <p class="ml-4 text-sm font-medium text-gray-900">Andrea McMillan</p>
                  </div>
                  <button type="button" class="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Remove<span class="sr-only"> Andrea McMillan</span></button>
                </li>
  
                <li class="flex items-center justify-between py-2">
                  <button type="button" class="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </span>
                    <span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">Share</span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="flex gap-x-3">
              <button type="button" class="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download</button>
              <button type="button" class="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Delete</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  