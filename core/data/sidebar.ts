interface sidebar {
    title: string
    menu: {
        title: string,
        bagde?: string
        bagdeColor?: string
        isPinned: boolean,
        bookmark?: boolean
        icon: string,
        type: string,
        path?: string
        children?: {
            title: string,
            path?: string,
            type: string,
            children?: {
                title: string,
                path: string,
                type: string
            }[]
        }[]
    }[]
}
export const sidebar: sidebar[] = [
    {
        title: '- General',
        menu: [
            {
                bagde: '3',
                bagdeColor: 'primary',
                title: 'Dashboard',
                isPinned: false,
                icon: 'home',
                type: 'sub',
                children: [
                    {
                        title: 'Default',
                        path: '/dashboard/default',
                        type: 'link'
                    },
                    {
                        title: 'Ecommerce',
                        path: '/dashboard/ecommerce',
                        type: 'link'
                    },
                    {
                        title: 'project',
                        path: '/dashboard/project',
                        type: 'link'
                    }
                ]
            },
        ]
    },
    {
        title: 'Pemasangan',
        menu: [
            {
                title: 'Pemasangan',
                isPinned: false,
                icon: 'home',
                type: 'sub',
                children: [
                    {
                        title: 'List Pemasangan',
                        path: '/pemasangan/list',
                        type: 'link'
                    },
                    {
                        title: 'Tambah Pemasangan',
                        path: '/pemasangan/tambah',
                        type: 'link'
                    },
                    {
                        title: 'Pemasangan Status',
                        path: '/pemasangan/status',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Laporan Pemasangan',
                isPinned: false,
                icon: 'report',
                path: '/pemasangan/laporan',
                type: 'link'
            },
        ]
    },
]