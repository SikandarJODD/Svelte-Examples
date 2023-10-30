<script>
	import { page } from '$app/stores';
	import { allSidebar } from '$lib/home/comps/sidebars/allSidebar';

	$: console.log($page.params.id);
	$: routeId = Number($page.params.id);
</script>

<svelte:component this={allSidebar[routeId].component} />
