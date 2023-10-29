import {
    LayoutPanelTopIcon,
    Home,
    GalleryVerticalEnd,
    PanelTop,
    BoomBoxIcon,
    Download,
    FileCode2,
    GalleryThumbnails
} from 'lucide-svelte';
export let codeComponents = [
    {
        name: 'Home',
        link: '/components',
        icon: Home
    },
    {
        name: 'Install Library',
        link: '/components/install',
        icon: Download
    },
    {
        name: 'Navbar',
        link: '/components/navbar',
        icon: LayoutPanelTopIcon
    },
    {
        name: 'Footer',
        link: '/components/footer',
        icon: GalleryVerticalEnd
    },
    {
        name: 'CTA',
        link: '/components/cta',
        icon: PanelTop
    },
    {
        name: 'Hero',
        link: '/components/hero',
        icon: BoomBoxIcon
    },
    {
        name: 'Forms',
        link: '/components/forms',
        icon: FileCode2
    },
    {
        name: 'Header',
        link: '/components/header',
        icon: GalleryThumbnails
    },
];