interface drop {
    classes: string,
    title: string
}
interface item {
    classes: string,
    checked?: boolean
}
interface items {
    title: string,
    children: drop[]
}

export const button: drop[] = [
    {
        classes: "btn-primary",
        title: "Primary Button"
    },
    {
        classes: "btn-secondary",
        title: "Secondary Button"
    },
    {
        classes: "btn-success",
        title: "Success Button"
    },
    {
        classes: "btn-info",
        title: "Info Button"
    },
    {
        classes: "btn-warning",
        title: "Warning Button"
    },
    {
        classes: "btn-danger",
        title: "Danger Button"
    },
    {
        classes: "btn-light",
        title: "Light Button"
    }
]
export const size: drop[] = [
    {
        classes: "btn-light-primary btn-lg b-r-8",
        title: "Large button"
    },
    {
        classes: "btn-light-secondary b-r-8",
        title: "Default button"
    },
    {
        classes: "btn-light-warning btn-sm b-r-8",
        title: "Small button"
    },
    {
        classes: "btn-light-success btn-xs b-r-6",
        title: "Extra small button"
    },


]
export const size1: drop[] = [
    {
        classes: "btn-primary btn-lg b-r-8",
        title: "Large button"
    },
    {
        classes: "btn-secondary b-r-8",
        title: "Default button"
    },
    {
        classes: "btn-warning btn-sm b-r-8",
        title: "Small button"
    },
    {
        classes: "btn-success btn-xs b-r-6",
        title: "Extra small button"
    },

]
export const outline: drop[] = [
    {
        classes: "btn-outline-primary btn-lg b-r-8",
        title: "Large button"
    },
    {
        classes: "btn-outline-secondary b-r-8",
        title: "Default button"
    },
    {
        classes: "btn-outline-warning btn-sm b-r-8",
        title: "Small button"
    },
    {
        classes: "btn-outline-success btn-xs b-r-6",
        title: "Extra small button"
    },
]
export const rounded: drop[] = [
    {
        classes: "btn-light-primary",
        title: "Contacts"
    },
    {
        classes: "btn-light-dark",
        title: "Users"
    },
    {
        classes: "btn-light-success",
        title: "Chats"
    },
    {
        classes: "btn-light-info",
        title: "Animation"
    },
    {
        classes: "btn-light-warning",
        title: "Widgets"
    },
    {
        classes: "btn-light-danger",
        title: "Project"
    },
    {
        classes: "btn-light-light",
        title: "Icons"
    }
]
export const Disabled: drop[] = [
    {
        classes: "btn-primary disabled",
        title: "I'm disabled"
    },
    {
        classes: "btn-pill btn-warning disabled",
        title: "Having problems"
    },
    {
        classes: "btn-outline-primary disabled",
        title: "Inaccessible"
    },
    {
        classes: "btn-pill btn-outline-warning disabled",
        title: "Disabled"
    },
]
export const icons: drop[] = [
    {
        classes: "btn b-ln-height btn-primary btn-square",
        title: "mdi:help-circle-outline"
    },
    {
        classes: "btn b-ln-height btn-secondary btn-square",
        title: "ic:round-access-time"
    },
    {
        classes: "btn b-ln-height btn-warning",
        title: "lucide:loader"
    },
    {
        classes: "btn b-ln-height btn-light-primary",
        title: "lucide:radio"
    },
    {
        classes: "btn-pill btn-light-secondary",
        title: "lucide:loader"
    },
    {
        classes: "btn-pill btn-light-warning",
        title: "lucide:radio"
    },
    {
        classes: "btn b-ln-height btn-outline-primary",
        title: "lucide:radio"
    },
    {
        classes: "btn-pill btn-outline-secondary border border-secondary",
        title: "lucide:loader"
    },
    {
        classes: "btn-pill btn-outline-warning border border-warning",
        title: "lucide:radio"
    }
]
export const border: drop[] = [
    {
        classes: "btn-outline-primary-2x",
        title: "Animation"
    },
    {
        classes: "btn-outline-secondary-2x",
        title: "Icons"
    },
    {
        classes: "btn-outline-success-2x",
        title: "Blog"
    },
    {
        classes: "btn-outline-info-2x",
        title: "Widgets"
    },
    {
        classes: "btn-outline-warning-2x",
        title: "Chat"
    },
    {
        classes: "btn-outline-danger-2x",
        title: "Users"
    },
    {
        classes: "btn-outline-light-2x txt-dark",
        title: "FAQ"
    }
]
export const color1: drop[] = [
    {
        classes: "btn-outline-primary btn-air-primary",
        title: "Primary Button"
    },
    {
        classes: "btn-outline-secondary btn-air-secondary",
        title: "Secondary Button"
    },
    {
        classes: "btn-outline-success btn-air-success",
        title: "Success Button"
    },
    {
        classes: "btn-outline-info btn-air-info",
        title: "Info Button"
    },
    {
        classes: "btn-outline-warning btn-air-warning",
        title: "Warning Button"
    },
    {
        classes: "btn-outline-danger btn-air-danger",
        title: "Danger Button"
    },
    {
        classes: "btn-outline-light btn-air-light txt-dark",
        title: "Light Button"
    }
]
export const outline1: drop[] = [
    {
        classes: "btn-outline-primary",
        title: "Contacts"
    },
    {
        classes: "btn-outline-secondary",
        title: "Users"
    },
    {
        classes: "btn-outline-success",
        title: "Chats"
    },
    {
        classes: "btn-outline-info",
        title: "Animation"
    },
    {
        classes: "btn-outline-warning",
        title: "Widgets"
    },
    {
        classes: "btn-outline-danger",
        title: "Project"
    },
    {
        classes: "btn-outline-light",
        title: "Icons"
    }
]
export const gradien: items[] = [
    {
        title: "Default gradient buttons",
        children: [
            {
                classes: "btn-primary-gradien",
                title: "Icons"
            },
            {
                classes: "btn-secondary-gradien",
                title: "Animation"
            },
            {
                classes: "btn-success-gradien",
                title: "Tasks"
            },
            {
                classes: "btn-info-gradien",
                title: "Letter box"
            },
            {
                classes: "btn-warning-gradien",
                title: "Chat"
            },
            {
                classes: "btn-danger-gradien",
                title: "Blog"
            },
            {
                classes: "btn-light-gradien text-dark",
                title: "Gallery"
            }
        ]
    },
    {
        title: "Square gradient buttons",
        children: [
            {
                classes: "btn-square btn-primary-gradien",
                title: "Icons"
            },
            {
                classes: "btn-square btn-secondary-gradien",
                title: "Animation"
            },
            {
                classes: "btn-square btn-success-gradien",
                title: "Tasks"
            },
            {
                classes: "btn-square btn-info-gradien",
                title: "Letter box"
            },
            {
                classes: "btn-square btn-warning-gradien",
                title: "Chat"
            },
            {
                classes: "btn-square btn-danger-gradien",
                title: "Blog"
            },
            {
                classes: "btn-square btn-light-gradien text-dark",
                title: "Gallery"
            }
        ]
    },
    {
        title: "Rounded gradient buttons",
        children: [
            {
                classes: "btn-pill btn-air-primary btn-primary-gradien",
                title: "Icons"
            },
            {
                classes: "btn-pill btn-air-primary btn-secondary-gradien",
                title: "Animation"
            },
            {
                classes: "btn-pill btn-air-primary btn-success-gradien",
                title: "Tasks"
            },
            {
                classes: "btn-pill btn-air-primary btn-info-gradien",
                title: "Letter box"
            },
            {
                classes: "btn-pill btn-air-primary btn-warning-gradien",
                title: "Chat"
            },
            {
                classes: "btn-pill btn-air-primary btn-danger-gradien",
                title: "Blog"
            },
            {
                classes: "btn-pill btn-air-primary btn-light-gradien text-dark",
                title: "Gallery"
            }
        ]
    }
]
export const basic: item[] = [
    {
        classes: "btn-primary"
    },
    {
        classes: "btn-secondary"
    },
    {
        classes: "btn-success"
    },
    {
        classes: "btn-info"
    },
    {
        classes: "btn-warning"
    },
    {
        classes: "btn-danger"
    },
    {
        classes: "btn-light"
    },
    {
        classes: "btn-dark"
    }
]
export const flat: item[] = [
    {
        classes: "btn-primary"
    },
    {
        classes: "btn-secondary"
    },
    {
        classes: "btn-success"
    },
    {
        classes: "btn-info"
    },
    {
        classes: "btn-dark"
    },
    {
        classes: "btn-warning"
    },
    {
        classes: "btn-danger"
    },
    {
        classes: "btn-light"
    },
    {
        classes: "btn-dark"
    }
]
export const common: item[] = [
    {
        classes: "primary"
    },
    {
        classes: "secondary"
    },
    {
        classes: "success"
    },
    {
        classes: "info"
    },
    {
        classes: "warning"
    },
    {
        classes: "danger"
    },
    {
        classes: "light"
    },
    {
        classes: "dark"
    }
]
export const redio: item[] = [
    {
        classes: "primary",
        checked: true,
    },
    {
        classes: "secondary",
        checked: true
    },
    {
        classes: "success",
        checked: true
    },
    {
        classes: "info",
        checked: true
    },
    {
        classes: "warning",
        checked: true
    },
    {
        classes: "danger",
        checked: true
    },
    {
        classes: "light",
        checked: true
    },
    {
        classes: "dark",
        checked: true
    }
]