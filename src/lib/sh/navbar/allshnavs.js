import Nav1 from './nav1.svelte';
import Nav2 from './nav2.svelte';

export let allshnavs = [
	{
		name: 'Simple Nav',
		component: Nav1,
		extend: '/sh/nav/0',
		link: '/',
		code: ``
	},
	{
		name: 'Nav with Sign in',
		component: Nav2,
		extend: '/sh/nav/1',
		link: '/',
		code: ``
	}
];
