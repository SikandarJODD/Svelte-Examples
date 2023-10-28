<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	$: isActive = $page.route.id?.split('/')[1];
	$: console.log(isActive);
</script>

{#if isActive !== 'components' && isActive !== 'examples'}
	<Navbar />
{/if}
<slot />
