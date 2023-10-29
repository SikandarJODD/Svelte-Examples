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
        code: ``
    },
    {
        name: 'Three tiers with emphasized tier',
        component: Price2,
        code: ``
    },
    {
        name: 'Three tiers with toggle',
        component: Price3,
        code: ``
    },
    {
        name: 'Dark Mode Center Focus',
        component: Price4,
        code: ``
    },
    {
        name: '4 tiers - Toggle',
        component: Price5,
        code: ``
    },
    {
        name: 'Pricing Dark Mode 2 Tiers',
        component: Price6,
        code: ``
    },
]