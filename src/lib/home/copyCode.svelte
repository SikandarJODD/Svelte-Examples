<script>
	import { scale } from 'svelte/transition';
	import { copy } from 'svelte-copy';
	import { CheckCircle, Copy } from 'lucide-svelte';
	export let isClicked = false;
	export let code = '';
</script>

<button
	class="outline-none border-none"
	use:copy={code}
	on:click={() => {
		isClicked = true;
		setTimeout(() => {
			isClicked = false;
		}, 1200);
	}}
>
	{#if !isClicked}
		<Copy size="20" strokeWidth="1.4" color="#000" />
	{:else}
		<div in:scale >
			<CheckCircle size="20" strokeWidth="1.4" color="#0339FFFF" />
		</div>
	{/if}
</button>
