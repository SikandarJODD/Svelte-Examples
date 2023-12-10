<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	$: isActive = $page.route.id?.split('/')[1];
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

{#if isActive !== 'components' && isActive !== 'sh' && isActive !== 'sidebar'}
	<Navbar />
{/if}
<slot />
