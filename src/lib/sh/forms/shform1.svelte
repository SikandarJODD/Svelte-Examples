<script>
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';
	import Label from '$components/ui/label/label.svelte';
	import { User } from 'lucide-svelte';
</script>

<div
	class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-slate-950"
>
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			class="mx-auto h-14 rounded-md w-auto object-cover object-center dark:border dark:border-primary/40 outline-none overflow-hidden p-px"
			src="https://i.pinimg.com/564x/c0/9f/11/c09f11c596910d57c886c3a733655a0a.jpg"
			alt="Your Company"
		/>
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
			Sign in to your account
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" method="POST">
			<div>
				<Label for="email">Email Address</Label>
				<div class="mt-2">
					<Input type="text" id="email" name="email" placeholder="name@gmail.com" />
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<Label for="password">Password</Label>
					<div class="text-sm">
						<a href="/forgot-password" class="text-primary/60">Forgot password?</a>
					</div>
				</div>
				<div class="mt-2">
					<Input type="password" name="password" id="password" placeholder="Your Password " />
				</div>
			</div>

			<div>
				<Button class="w-full" type="submit">
					<User size="20" strokeWidth="1.4" class="mr-1" />
					Sign In</Button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-gray-500">
			Not a member?
			<a href="/" class="font-semibold leading-6 text-primary/80">Start a 14 day free trial</a>
		</p>
	</div>
</div>
