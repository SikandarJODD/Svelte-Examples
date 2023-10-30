<script>
	let pricingData = {
		tag: 'Pricing',
		title: 'Pricing plans for teams of all sizes',
		desc: 'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
		plans: [
			{
				name: 'Freelancer',
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
				desc: 'Dedicated support and infrastructure for your company.',
				price: 'Custom',
				priceUnit: '',
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
			value: 'monhtly'
		},
		{
			label: 'Annually',
			value: 'annually'
		}
	];
	let selectedPlan = 'monhtly';
	$: {
		if (selectedPlan === 'annually') {
			pricingData.plans[0].price = 15 * 12;
			pricingData.plans[1].price = 30 * 12;
			pricingData.plans[0].priceUnit = 'year';
			pricingData.plans[1].priceUnit = 'year';
		} else {
			pricingData.plans[0].price = 15;
			pricingData.plans[1].price = 30;
			pricingData.plans[0].priceUnit = 'month';
			pricingData.plans[1].priceUnit = 'month';
		}
	}
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">{pricingData.tag}</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				{pricingData.title}
			</p>
		</div>
		<p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
			{pricingData.desc}
		</p>
		<div class="mt-16 flex justify-center">
			<fieldset
				class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
			>
				<legend class="sr-only">Payment frequency</legend>
				<!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
				{#each activePlan as item}
					<label
						class="{selectedPlan === item.value
							? 'bg-indigo-600 text-white'
							: 'text-gray-500'} transition-all duration-200 ease-linear cursor-pointer rounded-full px-2.5 py-1"
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
			{#each pricingData.plans.slice(0, 2) as item}
				<div class="rounded-3xl p-8 ring-1 xl:p-10 ring-gray-200">
					<h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">
						{item.name}
					</h3>
					<p class="mt-4 text-sm leading-6 text-gray-600">
						{item.desc}
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-gray-900">${item.price}</span>
						<span class="text-sm font-semibold leading-6 text-gray-600">/{item.priceUnit}</span>
					</p>
					<a
						href="/"
						aria-describedby="tier-freelancer"
						class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
						>Buy plan</a
					>
					<ul role="list" class="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600">
						{#each item.features as feature}
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600"
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
			<div class="rounded-3xl p-8 ring-1 xl:p-10 bg-gray-900 ring-gray-900">
				<h3 id="tier-enterprise" class="text-lg font-semibold leading-8 text-white">
					{pricingData.plans[2].name}
				</h3>
				<p class="mt-4 text-sm leading-6 text-gray-300">
					{pricingData.plans[2].desc}
				</p>
				<p class="mt-6 flex items-baseline gap-x-1">
					<span class="text-4xl font-bold tracking-tight text-white"
						>{pricingData.plans[2].price}</span
					>
				</p>
				<a
					href="/"
					aria-describedby="tier-enterprise"
					class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
					>Contact sales</a
				>
				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-300">
					{#each pricingData.plans[2].features as item}
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
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
