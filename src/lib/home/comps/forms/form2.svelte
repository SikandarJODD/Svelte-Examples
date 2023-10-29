<script>
	let formData = {
		img: 'https://i.pinimg.com/564x/0b/ce/0e/0bce0e8387e5d0a785949534bcbc9790.jpg',
		title: 'Sign in to your account',
		email: '',
		password: ''
	};
</script>

<div class="bg-gray-900 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img class="mx-auto h-14 w-auto rounded-md " src={formData.img} alt="Your Company" />
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
			{formData.title}
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="#" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-white"
					>Email address</label
				>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						bind:value={formData.email}
						required
						class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6 text-white"
						>Password</label
					>
					<div class="text-sm">
						<a href="/" class="font-semibold text-indigo-400 hover:text-indigo-300"
							>Forgot password?</a
						>
					</div>
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						bind:value={formData.password}
						required
						class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>Sign in</button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-gray-400">
			Not a member?
			<a href="/" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
				>Start a 14 day free trial</a
			>
		</p>
	</div>
</div>
