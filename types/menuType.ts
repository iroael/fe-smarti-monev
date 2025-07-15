export interface MenuItem {
    title: string
    menu: {
        title: string,
        bagde?: string
        bagdeColor?: string
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
