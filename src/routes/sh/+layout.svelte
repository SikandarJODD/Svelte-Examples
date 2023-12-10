<script>
	import { shComponents } from '$lib';
	import SidebarComp from '$lib/home/comps/SidebarComp.svelte';
</script>

<SidebarComp codeComponents={shComponents}>
	<slot />
</SidebarComp>
