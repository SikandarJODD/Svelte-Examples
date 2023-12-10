<script>
	import Button from '$components/ui/button/button.svelte';
	import Checkbox from '$components/ui/checkbox/checkbox.svelte';
	import Input from '$components/ui/input/input.svelte';
	import Label from '$components/ui/label/label.svelte';
	import { TwitterIcon, User } from 'lucide-svelte';
</script>

<div class="flex min-h-full">
	<div
		class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<img
					class="h-14 rounded-lg object-cover object-center w-auto"
					src="https://i.pinimg.com/564x/5b/3b/72/5b3b72a002bdbf41df56108452cbaa3a.jpg"
					alt="Your Company"
				/>
				<h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-primary">
					Sign in to your account
				</h2>
				<p class="mt-2 text-sm leading-6 text-gray-500">
					Not a member?
					<a href="/" class="text-muted-foreground hover:underline underline-offset-2"
						>Start a 14 day free trial</a
					>
				</p>
			</div>

			<div class="mt-10">
				<div>
					<form action="#" method="POST" class="space-y-3">
						<div>
							<Label for="email">Email address</Label>
							<div class="mt-1">
								<Input type="email" name="email" id="email" placeholder="name@gmail.com" />
							</div>
						</div>
						<div>
							<Label for="password">Password</Label>
							<div class="mt-1">
								<Input type="password" name="password" id="password" placeholder="Your password" />
							</div>
						</div>

						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<Checkbox id="remember-me" name="remember-me" />
								<Label for="remember-me" class="ml-3 text-muted-foreground">Remember me</Label>
							</div>

							<div class="text-sm leading-6">
								<a href="/" class=" text-indigo-600 hover:text-indigo-500">Forgot password?</a>
							</div>
						</div>

						<div>
							<Button class="w-full">
								<User size="18" strokeWidth="1.4" class="mr-1" />
								Sign In</Button
							>
						</div>
					</form>
				</div>

				<div class="mt-10">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<span class="w-full border-t" />
						</div>
						<div class="relative flex justify-center text-xs uppercase">
							<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
						</div>
					</div>

					<div class="mt-6 grid grid-cols-2 gap-4">
						<Button href="/" class="bg-[#1D9BF0] text-white hover:text-white hover:bg-[#1D9BF0]">
							<TwitterIcon size="20" strokeWidth="1.4" fill="white" class="mr-3" />
							Twitter</Button
						>
						<Button href="/">
							<svg class="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
									clip-rule="evenodd"
								/>
							</svg>
							Github</Button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
			alt=""
		/>
	</div>
</div>
