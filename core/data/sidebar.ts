interface Sidebar {
    title: string;
    menu: {
        title: string;
        badge?: string;
        badgeColor?: string;
        isPinned: boolean;
        bookmark?: boolean;
        icon: string;
        type: string;
        path?: string;
        children?: {
            title: string;
            path?: string;
            type: string;
            children?: {
                title: string;
                path: string;
                type: string;
            }[];
        }[];
    }[];
}

export const sidebar: Sidebar[] = [
    {
        title: 'General',
        menu: [
            {
                title: 'Beranda',
                isPinned: false,
                icon: 'home',
                type: 'link',
                path: '/monev',
            },
            {
                title: 'Kementrian PKP',
                isPinned: false,
                icon: 'home',
                type: 'link',
                path: '/kpkp',
            },
            {
                title: 'Bank',
                isPinned: false,
                icon: 'home',
                type: 'link',
                path: '/bank',
            },
            {
                title: 'BP Tapera',
                isPinned: false,
                icon: 'money-bill-wave',
                type: 'link',
                path: '/monev/tapera',
            },
            {
                title: 'Re-Distribusi',
                isPinned: false,
                icon: 'redo',
                type: 'link',
                path: '/monev/redistribusi',
            },
            {
                title: 'Pelaporan',
                isPinned: false,
                icon: 'clipboard-list',
                type: 'link',
                path: '/monev/pelaporan',
            },
            {
                title: 'Pengaturan',
                isPinned: false,
                icon: 'cogs',
                type: 'link',
                path: '/monev/pengaturan',
            },
        ],
    },
];
