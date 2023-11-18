<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	$: isActive = $page.route.id?.split('/')[1];
</script>

{#if isActive !== 'components' && isActive !== 'examples' && isActive !== 'sidebar'}
	<Navbar />
{/if}
<slot />
