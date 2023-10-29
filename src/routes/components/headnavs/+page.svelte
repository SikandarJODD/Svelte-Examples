<script>
	import Button from '$components/ui/button/button.svelte';
	import Coolnv1 from '$lib/home/comps/coolnavs/coolnv1.svelte';
</script>

<div class="prose lg:max-w-full">
	<h1>Cool Navs - Flyouts</h1>
	<p>
		Easily Editable and Responsive Navbars with <span class="text-primary">Flyouts</span>
	</p>
	<div class="not-prose flex flex-wrap gap-2">
		<Button size="sm">Svelte Inbuild</Button>
		<Button size="sm">Easily Customizable</Button>
		<Button size="sm">Responsive</Button>
		<Button size="sm">Transition</Button>
	</div>
    <div class="not-prose">
        <Coolnv1 />
    </div>
</div>
