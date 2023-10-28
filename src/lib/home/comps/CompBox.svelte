<script>
	export let text = 'Navbar';
	export let link = '/';
	export let icon = '';
</script>

<a href={link}>
	<div
		class="flex gap-2 items-center box w-fit p-3 lg:p-7 my-2 border border-primary rounded-lg font-semibold text-md lg:text-2xl"
	>
		<svelte:component this={icon} class="w-5 lg:w-7 lg:h-7" strokeWidth="1.2" />
		{text}
	</div>
</a>

<style>
	.box {
		transition: all 0.2s ease-in-out;
		transform: translate(-5px, -5px);
		box-shadow: 5px 5px 0px 0px #000;
	}
	.box:hover {
		transition: all 0.2s ease-in-out;
		transform: translate(-2px, 1px);
		box-shadow: 0px 0px 0px 0px #000;
	}
</style>
