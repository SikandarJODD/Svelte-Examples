<script>
	let pricingData = {
		tag: 'Pricing',
		title: 'Pricing plans for teams of all sizes',
		desc: 'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
		plans: [
			{
				name: 'Freelancer',
				link: '/',
				desc: 'The essentials to provide your best work for clients.',
				price: 15,
				priceUnit: 'month',
				features: [
					'5 products',
					'Up to 1,000 subscribers',
					'Basic analytics',
					'48-hour support response time'
				]
			},
			{
				name: 'Startup',
				link: '/',
				desc: 'A plan that scales with your rapidly growing business.',
				price: 30,
				priceUnit: 'month',
				features: [
					'25 products',
					'Up to 10,000 subscribers',
					'Advanced analytics',
					'24-hour support response time',
					'Marketing automations'
				]
			},
			{
				name: 'Enterprise',
				link: '/',
				desc: 'Dedicated support and infrastructure for your company.',
				price: 60,
				priceUnit: 'month',
				features: [
					'Unlimited products',
					'Unlimited subscribers',
					'Advanced analytics',
					'1-hour, dedicated support response time',
					'Marketing automations',
					'Custom reporting tools'
				]
			}
		]
	};
	let activePlan = [
		{
			label: 'Monthly',
			value: 'monthly'
		},
		{
			label: 'Annually',
			value: 'annually'
		}
	];
	let selectedPlan = 'monthly';
	$: {
		if (selectedPlan === 'annually') {
			pricingData.plans[0].price = 15 * 12;
			pricingData.plans[1].price = 30 * 12;
			pricingData.plans[2].price = 60 * 12;
			pricingData.plans[1].priceUnit = 'year';
			pricingData.plans[0].priceUnit = 'year';
			pricingData.plans[2].priceUnit = 'year';
		} else {
			pricingData.plans[0].price = 15;
			pricingData.plans[1].price = 30;
			pricingData.plans[2].price = 60;
			pricingData.plans[0].priceUnit = 'month';
			pricingData.plans[1].priceUnit = 'month';
			pricingData.plans[2].priceUnit = 'month';
		}
		console.log(pricingData.plans);
	}
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
				Pricing plans for teams of&nbsp;all&nbsp;sizes
			</p>
		</div>
		<p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
			Choose an affordable plan that’s packed with the best features for engaging your audience,
			creating customer loyalty, and driving sales.
		</p>
		<div class="mt-16 flex justify-center">
			<fieldset
				class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
			>
				<legend class="sr-only">Payment frequency</legend>
				{#each activePlan as item}
					<label
						class="{selectedPlan === item.value
							? 'bg-indigo-500'
							: ''} cursor-pointer rounded-full px-2.5 py-1 transition-all duration-200 ease-linear"
					>
						<input
							type="radio"
							name="frequency"
							value={item.value}
							class="sr-only"
							bind:group={selectedPlan}
						/>
						<span>{item.label}</span>
					</label>
				{/each}
			</fieldset>
		</div>
		<div
			class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each pricingData.plans as item, index}
				<div
					class="rounded-3xl p-8 xl:p-10 {index === 1
						? 'bg-white/5 ring-2 ring-indigo-500'
						: ' ring-1 ring-white/10'} "
				>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-white">
							{item.name}
						</h3>
						{#if index === 1}
							<p
								class="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white"
							>
								Most popular
							</p>
						{/if}
					</div>
					<p class="mt-4 text-sm leading-6 text-gray-300">
						{item.desc}
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<!-- Price, update based on frequency toggle state -->
						<span class="text-4xl font-bold tracking-tight text-white">${item.price}</span>
						<!-- Payment frequency, update based on frequency toggle state -->
						<span class="text-sm font-semibold leading-6 text-gray-300">/{item.priceUnit}</span>
					</p>
					{#if index === 1}
						<a
							href={item.link}
							aria-describedby="tier-startup"
							class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
							>Buy plan</a
						>
					{:else}
						<a
							href={item.link}
							aria-describedby="tier-freelancer"
							class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
							>Buy plan</a
						>
					{/if}
					<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
						{#each item.features as feature}
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-white"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"
									/>
								</svg>
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		
		</div>
	</div>
</div>
