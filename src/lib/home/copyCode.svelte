<script>
	import { scale } from 'svelte/transition';
	import { copy } from 'svelte-copy';
	import { CheckCircle, Copy } from 'lucide-svelte';
	export let isClicked = false;
	export let code = '';
	// export let colorCode = '#fff';
	export let coText = '';
</script>

<button
	class="px-3 rounded-md flex {coText.length > 2
		? 'gap-2 font-semibold font-mono border border-primary'
		: ''} items-center text-primary dark:text-white"
	use:copy={code}
	on:click={() => {
		isClicked = true;
		setTimeout(() => {
			isClicked = false;
		}, 1200);
	}}
>
	{coText}
	{#if !isClicked}
		<Copy size="20" strokeWidth="1.4" />
	{:else}
		<div in:scale>
			<CheckCircle size="20" strokeWidth="1.4" color="#0339FFFF" />
		</div>
	{/if}
</button>
