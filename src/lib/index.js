import {
    LayoutPanelTopIcon,
    Home,
    GalleryVerticalEnd,
    PanelTop,
    BoomBoxIcon,
    Download,
    FileCode2,
    GalleryThumbnails,
    Videotape,
    Diamond,
    DollarSign,
    Layout
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
        name: 'Sidebar - Responsive ',
        link: '/components/sidebar',
        icon: Layout
    },
    {
        name: 'Navbar',
        link: '/components/navbar',
        icon: LayoutPanelTopIcon
    },
    {
        name: 'Cool Navs - Flyouts',
        link: '/components/headnavs',
        icon: Diamond
    },
    {
        name: 'Pricing Section',
        link: '/components/pricing',
        icon: DollarSign
    },
    // {
    //     name: 'Footer',
    //     link: '/components/footer',
    //     icon: GalleryVerticalEnd
    // },
    // {
    //     name: 'CTA',
    //     link: '/components/cta',
    //     icon: PanelTop
    // },
    // {
    //     name: 'Hero',
    //     link: '/components/hero',
    //     icon: BoomBoxIcon
    // },
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
    {
        name: 'News Letter',
        link: '/components/newsletter',
        icon: Videotape
    },
];