import Price1 from "./price1.svelte";
import Price2 from "./price2.svelte";
import Price3 from "./price3.svelte";
import Price4 from "./price4.svelte";
import Price5 from "./price5.svelte";
import Price6 from "./price6.svelte";

export let allPrices = [
    {
        name: 'Three Tier Pricing',
        component: Price1,
        code: `<script>
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
                            <span class="text-4xl font-bold tracking-tight text-gray-900">$`+`{item.price}</span>
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
    `
    },
    {
        name: 'Three tiers with emphasized tier',
        component: Price2,
        code: `<script>
        let pdata = {
            tag: 'Pricing',
            title: 'Pricing plans for teams of all sizes',
            desc: 'Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.',
            plans: [
                {
                    name: 'Freelancer',
                    desc: 'The essentials to provide your best work for clients.',
                    price: 24,
                    period: 'month',
                    features: [
                        '5 products',
                        'Up to 1,000 subscribers',
                        'Basic analytics',
                        '48-hour support response time'
                    ],
                    link: '#'
                },
                {
                    name: 'Startup',
                    desc: 'A plan that scales with your rapidly growing business.',
                    price: 32,
                    period: 'month',
                    features: [
                        '25 products',
                        'Up to 10,000 subscribers',
                        'Advanced analytics',
                        '24-hour support response time',
                        'Marketing automations'
                    ],
                    link: '/'
                },
                {
                    name: 'Enterprise',
                    desc: 'Dedicated support and infrastructure for your company.',
                    price: 48,
                    period: 'month',
                    features: [
                        'Unlimited products',
                        'Unlimited subscribers',
                        'Advanced analytics',
                        '1-hour, dedicated support response time',
                        'Marketing automations'
                    ],
                    link: '/'
                }
            ]
        };
    </script>
    
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-base font-semibold leading-7 text-indigo-600">{pdata.tag}</h2>
                <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {pdata.title}
                </p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                {pdata.desc}
            </p>
            <div
                class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                {#each pdata.plans as item, index}
                    <div
                        class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 {index %
                            2 ==
                        0
                            ? 'lg:mt-8'
                            : 'lg:z-10 lg:rounded-b-none'}  {index === 0 ? 'lg:rounded-r-none' : ''} {index === 2
                            ? 'lg:rounded-l-none'
                            : ''}"
                    >
                        <div>
                            <div class="flex items-center justify-between gap-x-4">
                                <h3
                                    id="tier-{item.name}"
                                    class="text-lg font-semibold leading-8 text-gray-900 {index == 1
                                        ? 'text-indigo-600'
                                        : 'text-gray-900'} "
                                >
                                    {item.name}
                                </h3>
                                {#if index === 1}
                                    <p
                                        class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600"
                                    >
                                        Most popular
                                    </p>
                                {/if}
                            </div>
                            <p class="mt-4 text-sm leading-6 text-gray-600">
                                {item.desc}
                            </p>
                            <p class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-gray-900">$`+`{item.price}</span>
                                <span class="text-sm font-semibold leading-6 text-gray-600">/{item.period}</span>
                            </p>
                            <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
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
                        {#if index === 1}
                            <a
                                href={item.link}
                                aria-describedby="tier-startup"
                                class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                                >Buy plan</a
                            >
                        {:else}
                            <a
                                href={item.link}
                                aria-describedby="tier-freelancer"
                                class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                                >Buy plan</a
                            >
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
    `
    },
    {
        name: 'Three tiers with toggle',
        component: Price3,
        code: `<script>
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
                {#each pricingData.plans as item, index}
                    <div
                        class="rounded-3xl p-8 xl:p-10 {index === 1
                            ? 'ring-2 ring-indigo-600'
                            : 'ring-1 ring-gray-200 '}"
                    >
                        <div class="flex items-center justify-between gap-x-4">
                            <h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">
                                {item.name}
                            </h3>
                        </div>
                        <p class="mt-4 text-sm leading-6 text-gray-600">
                            {item.desc}
                        </p>
                        <p class="mt-6 flex items-baseline gap-x-1">
                            <span class="text-4xl font-bold tracking-tight text-gray-900">$`+`{item.price}</span>
                            <span class="text-sm font-semibold leading-6 text-gray-600">/{item.priceUnit}</span>
                        </p>
                        {#if index === 1}
                            <a
                                href={item.link}
                                aria-describedby="tier-startup"
                                class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                                >Buy plan</a
                            >
                        {:else}
                            <a
                                href={item.link}
                                aria-describedby="tier-freelancer"
                                class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                                >Buy plan</a
                            >
                        {/if}
                        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
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
            </div>
        </div>
    </div>
    `
    },
    {
        name: 'Dark Mode Center Focus',
        component: Price4,
        code: `<script>
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
                            <span class="text-4xl font-bold tracking-tight text-white">$`+ `{item.price}</span>
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
    `
    },
    {
        name: 'Pricing Dark Mode 2 Tiers',
        component: Price6,
        code: `<script>
        let pdata = {
            tag: 'Pricing',
            title: 'The right price for you, whoever you are',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.',
            plans: [
                {
                    name: 'Hobby',
                    desc: 'The essentials to provide your best work for clients.',
                    price: 50,
                    period: 'month',
                    features: [
                        '5 products',
                        'Up to 1,000 subscribers',
                        'Basic analytics',
                        '48-hour support response time'
                    ],
                    link: '/'
                },
                {
                    name: 'Team',
                    desc: 'A plan that scales with your rapidly growing business.',
                    price: 80,
                    period: 'month',
                    features: [
                        '25 products',
                        'Up to 10,000 subscribers',
                        'Advanced analytics',
                        '24-hour support response time',
                        'Marketing automations'
                    ],
                    link: '/'
                }
            ],
            discount: {
                name: 'Discounted',
                desc: 'Get early Discount doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.',
                btnName: 'Buy discounted license',
                link: '/'
            }
        };
    </script>
    
    <div class="isolate overflow-hidden bg-gray-900">
        <div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
            <div class="mx-auto max-w-4xl">
                <h2 class="text-base font-semibold leading-7 text-indigo-400">{pdata.tag}</h2>
                <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {pdata.title}
                </p>
            </div>
            <div class="relative mt-6">
                <p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                    {pdata.desc}
                </p>
                <svg
                    viewBox="0 0 1208 1024"
                    class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                >
                    <ellipse
                        cx="604"
                        cy="512"
                        fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                        rx="604"
                        ry="512"
                    />
                    <defs>
                        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="flow-root bg-white pb-24 sm:pb-32">
            <div class="-mt-80">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                        {#each pdata.plans as item}
                            <div
                                class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                            >
                                <div>
                                    <h3 id="tier-hobby" class="text-base font-semibold leading-7 text-indigo-600">
                                        {item.name}
                                    </h3>
                                    <div class="mt-4 flex items-baseline gap-x-2">
                                        <span class="text-5xl font-bold tracking-tight text-gray-900">$`+ `{item.price}</span>
                                        <span class="text-base font-semibold leading-7 text-gray-600">/{item.period}</span
                                        >
                                    </div>
                                    <p class="mt-6 text-base leading-7 text-gray-600">
                                        {item.desc}
                                    </p>
                                    <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
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
                                <a
                                    href={item.link}
                                    aria-describedby="tier-hobby"
                                    class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >Get started today</a
                                >
                            </div>
                        {/each}
    
                        <div
                            class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center"
                        >
                            <div class="lg:min-w-0 lg:flex-1">
                                <h3 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                                    {pdata.discount.name}
                                </h3>
                                <p class="mt-1 text-base leading-7 text-gray-600">
                                    {pdata.discount.desc}
                                </p>
                            </div>
                            <a
                                href={pdata.discount.link}
                                class="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >{pdata.discount.btnName} <span aria-hidden="true">&rarr;</span></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    },
]