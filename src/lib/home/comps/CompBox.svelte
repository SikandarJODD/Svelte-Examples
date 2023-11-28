<script>
	export let text = 'Navbar';
	export let link = '/';
	export let icon = '';
	import { mode } from 'mode-watcher';
	let color = $mode === 'light' ? '#000' : '#090E24FF';
	$: shadowSize = $mode === 'light' ? 5 : 0;
</script>

<a href={link}>
	<div
		class="flex gap-2 items-center box w-fit p-3 lg:p-7 my-2 border border-primary rounded-lg font-semibold text-md lg:text-2xl"
		style="box-shadow: {shadowSize}px {shadowSize}px 0px 0px {color}; transform: translate(-{shadowSize}px, -{shadowSize}px);"
	>
		<svelte:component this={icon} class="w-5 lg:w-7 lg:h-7" strokeWidth="1.2" />
		{text}
	</div>
</a>

<style>
	.box {
		transition: all 0.2s ease-in-out;
	}
	.box:hover {
		transition: all 0.2s ease-in-out;
		transform: translate(-2px, 1px);
		box-shadow: 0px 0px 0px 0px #000;
	}
</style>
