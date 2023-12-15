<script>
	import { page } from '$app/stores';
	import { shComponents } from '$lib';
	import SidebarComp from '$lib/home/comps/SidebarComp.svelte';
	import { Route } from 'lucide-svelte';
	$: routeID = $page.route.id?.split('/');
	$: console.log(routeID);
	$: lastEle = routeID?.pop();
</script>

{#if lastEle !== '[navs]'}
	<SidebarComp codeComponents={shComponents}>
		<slot />
	</SidebarComp>
{:else}
	<slot />
{/if}
