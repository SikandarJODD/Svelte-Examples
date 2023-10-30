import Sidebar1 from "./sidebar1.svelte";
import Sidebar2 from "./sidebar2.svelte";
import Sidebar3 from "./sidebar3.svelte";
import Sidebar4 from "./sidebar4.svelte";

export let allSidebar = [
    {
        name: 'Sidebar -- Dark Mode',
        component: Sidebar1,
        link: '/sidebar/0',
        code: ``
    },
    {
        name: 'Resposive Sidebar -- Light Mode',
        component: Sidebar2,
        link: '/sidebar/1',
        code: ``
    },
    {
        name: 'Sidebar - Search - Dark Mode',
        component: Sidebar3,
        link: '/sidebar/2',
        code: ``
    },
    {
        name: 'Sidebar - Search - Light Mode',
        component: Sidebar4,
        link: '/sidebar/3',
        code: ``
    },
]