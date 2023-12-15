<script>
	import { page } from '$app/stores';
	import { allshnavs } from '$lib/sh/navbar/allshnavs';
	$: routeID = Number($page.params.navs);
	$: console.log(routeID);
	allshnavs;
</script>

<svelte:component this={allshnavs[routeID].component} />
