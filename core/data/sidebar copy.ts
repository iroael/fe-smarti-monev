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
            {
                title: 'Widgets',
                isPinned: false,
                icon: 'widget',
                type: 'sub',
                children: [
                    {
                        title: 'General',
                        path: '/widgets/general',
                        type: 'link'
                    },
                    {
                        title: 'Chart',
                        path: '/widgets/chart',
                        type: 'link'
                    }
                ]
            }
        ]
    },
    {
        title: '- Pemasangan Device KWH',
        icon: '',
        menu: [
            {
                title: 'Pemasangan KWH Meter',
                isPinned: false,
                icon: 'electric-meter',
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
    {
        title: '- Applications',
        menu: [
            {
                title: 'project',
                bagde: 'New',
                bagdeColor: 'secondary',
                isPinned: false,
                icon: 'project',
                type: 'sub',
                children: [
                    {
                        title: 'Project List',
                        path: '/project/project_list',
                        type: 'link'
                    },
                    {
                        title: 'Create new',
                        path: '/project/project_create',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'File Manager',
                isPinned: false,
                icon: 'file',
                path: '/app/file_manager',
                type: 'link'
            },
            {
                title: 'Kanban Board',
                isPinned: false,
                icon: 'board',
                path: '/app/kanaban_board',
                type: 'link'
            },
            {
                title: 'Ecommerce',
                isPinned: false,
                icon: 'ecommerce',
                type: 'sub',
                children: [
                    {
                        title: 'Add Product',
                        path: '/ecommerce/add_product',
                        type: 'link'
                    },
                    {
                        title: 'Product',
                        path: '/ecommerce/product',
                        type: 'link'
                    },
                    {
                        title: 'Category page',
                        path: '/ecommerce/category',
                        type: 'link'
                    },
                    {
                        title: 'Product Page',
                        path: '/ecommerce/details/1',
                        type: 'link'
                    },
                    {
                        title: 'Product List',
                        path: '/ecommerce/product_list',
                        type: 'link'
                    },
                    {
                        title: 'Payment Details',
                        path: '/ecommerce/payment_details',
                        type: 'link'
                    },
                    {
                        title: 'Order History',
                        path: '/ecommerce/order_history',
                        type: 'link'
                    },
                    {
                        title: 'Invoices',
                        type: 'sub',
                        children: [
                            {
                                title: 'Invoice-1',
                                path: '/ecommerce/invoice/invoice_1',
                                type: 'link'
                            },
                            {
                                title: 'Invoice-2',
                                path: '/ecommerce/invoice/invoice_2',
                                type: 'link'
                            },
                            {
                                title: 'Invoice-3',
                                path: '/ecommerce/invoice/invoice_3',
                                type: 'link'
                            },
                            {
                                title: 'Invoice-4',
                                path: '/ecommerce/invoice/invoice_4',
                                type: 'link'
                            },
                            {
                                title: 'Invoice-5',
                                path: '/ecommerce/invoice/invoice_5',
                                type: 'link'
                            },
                            {
                                title: 'Invoice-6',
                                path: '/ecommerce/invoice/invoice_6',
                                type: 'link'
                            }
                        ]
                    },
                    {
                        title: 'Cart',
                        path: '/ecommerce/cart',
                        type: 'link'
                    },
                    {
                        title: 'Wishlist',
                        path: '/ecommerce/wishlist',
                        type: 'link'
                    },
                    {
                        title: 'Checkout',
                        path: '/ecommerce/checkout',
                        type: 'link'
                    },
                    {
                        title: 'Pricing',
                        path: '/ecommerce/pricing',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Letter Box',
                isPinned: false,
                icon: 'email',
                path: '/app/letter_box',
                type: 'link'
            },
            {
                title: 'Chat',
                isPinned: false,
                icon: 'chat',
                type: 'sub',
                children: [
                    {
                        title: 'Private Chat',
                        path: '/chat/private_chat',
                        type: 'link'
                    },
                    {
                        title: 'Group Chat',
                        path: '/chat/group_chat',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Users',
                isPinned: false,
                icon: 'user',
                type: 'sub',
                children: [
                    {
                        title: 'Users Profile',
                        path: '/user/profile',
                        type: 'link'
                    },
                    {
                        title: 'Users Edit',
                        path: '/user/edit',
                        type: 'link'
                    },
                    {
                        title: 'Users Cards',
                        path: '/user/cards',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Bookmark',
                isPinned: false,
                icon: 'bookmark',
                path: '/app/bookmark',
                type: 'link',
                bookmark: true
            },
            {
                title: 'Contacts',
                isPinned: false,
                icon: 'contact',
                path: '/app/contacts',
                type: 'link',
                bookmark: true
            },
            {
                title: 'Tasks',
                isPinned: false,
                icon: 'task',
                path: '/app/task',
                type: 'link'
            },
            {
                title: 'Calendar',
                isPinned: false,
                icon: 'calendar',
                path: '/app/calendar',
                type: 'link',
                bookmark: true
            },
            {
                title: 'Social App',
                isPinned: false,
                icon: 'social',
                path: '/pages/social_app',
                type: 'link'
            },
            {
                title: 'Todo',
                isPinned: false,
                icon: 'to-do',
                path: '/app/todo',
                type: 'link'
            },
            {
                title: 'Search Results',
                isPinned: false,
                icon: 'search',
                path: '/pages/search',
                type: 'link'
            },
        ]
    },
    {
        title: '- Forms & Table',
        menu: [
            {
                title: 'Forms',
                isPinned: false,
                icon: 'form',
                type: 'sub',
                children: [
                    {
                        title: 'Form Controls',
                        type: 'sub',
                        children: [
                            {
                                title: 'Form Validation',
                                path: '/form/validation',
                                type: 'link'
                            },
                            {
                                title: 'Base Inputs',
                                path: '/form/base_inputs',
                                type: 'link'
                            },
                            {
                                title: 'Checkbox & Radio',
                                path: '/form/checkbox_radio',
                                type: 'link'
                            },
                            {
                                title: 'Input Groups',
                                path: '/form/input_groups',
                                type: 'link'
                            },
                            {
                                title: 'Input Mask',
                                path: '/form/input_mask',
                                type: 'link'
                            },
                            {
                                title: 'Mega Options',
                                path: '/form/mega_options',
                                type: 'link'
                            }
                        ]
                    },
                    {
                        title: 'Form Widgets',
                        type: 'sub',
                        children: [
                            {
                                title: 'Datepicker',
                                path: '/form/datepicker',
                                type: 'link'
                            },
                            {
                                title: 'Touchspin',
                                path: '/form/touchspin',
                                type: 'link'
                            },
                            {
                                title: 'Select2',
                                path: '/form/select2',
                                type: 'link'
                            },
                            {
                                title: 'Switch',
                                path: '/form/switch',
                                type: 'link'
                            },
                            {
                                title: 'Typeahead',
                                path: '/form/typeahead',
                                type: 'link'
                            },
                            {
                                title: 'Clipboard',
                                path: '/form/clipboard',
                                type: 'link'
                            }
                        ]
                    },
                    {
                        title: 'Form Layout',
                        type: 'sub',
                        children: [
                            {
                                title: 'Form Wizard 1',
                                path: '/form/form_wizard',
                                type: 'link'
                            },
                            {
                                title: 'Form Wizard 2',
                                path: '/form/form_wizard_two',
                                type: 'link'
                            },
                            {
                                title: 'Two Factor',
                                path: '/form/two_actor',
                                type: 'link'
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Tables',
                isPinned: false,
                icon: 'table',
                type: 'sub',
                children: [
                    {
                        title: 'Bootstrap Tables',
                        path: '/table/bootstrap_tables',
                        type: 'link'
                    },
                    {
                        title: 'Table Components',
                        path: '/table/table_components',
                        type: 'link'
                    },
                    {
                        title: 'Basic Init',
                        path: '/table/data_table',
                        type: 'link'
                    }
                ]
            }
        ]
    },
    {
        title: '- Components',
        menu: [
            {
                title: 'UI Kits',
                isPinned: false,
                icon: 'ui-kits',
                type: 'sub',
                children: [
                    {
                        title: 'Typography',
                        path: '/uikits/typography',
                        type: 'link'
                    },
                    {
                        title: 'Avatars',
                        path: '/uikits/avatars',
                        type: 'link'
                    },
                    {
                        title: 'Helper Classes',
                        path: '/uikits/helper_classes',
                        type: 'link'
                    },
                    {
                        title: 'Grid',
                        path: '/uikits/grid',
                        type: 'link'
                    },
                    {
                        title: 'Tag & Pills',
                        path: '/uikits/tag_pills',
                        type: 'link'
                    },
                    {
                        title: 'Progress',
                        path: '/uikits/progress_bar',
                        type: 'link'
                    },
                    {
                        title: 'Modal',
                        path: '/uikits/modal',
                        type: 'link'
                    },
                    {
                        title: 'Alert',
                        path: '/uikits/alert',
                        type: 'link'
                    },
                    {
                        title: 'Popover',
                        path: '/uikits/popover',
                        type: 'link'
                    },
                    {
                        title: 'Tooltip',
                        path: '/uikits/tooltip',
                        type: 'link'
                    },
                    {
                        title: 'Dropdown',
                        path: '/uikits/dropdown',
                        type: 'link'
                    },
                    {
                        title: 'Accordian',
                        path: '/uikits/accordion',
                        type: 'link'
                    },
                    {
                        title: 'Tabs',
                        path: '/uikits/tabs',
                        type: 'link'
                    },
                    {
                        title: 'Lists',
                        path: '/uikits/lists',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Bonus UI',
                isPinned: false,
                icon: 'bonus-kit',
                type: 'sub',
                children: [
                    {
                        title: 'Scrollable',
                        path: '/advance/scrollable',
                        type: 'link'
                    },
                    {
                        title: 'Tree View',
                        path: '/advance/tree',
                        type: 'link'
                    },
                    {
                        title: 'Toasts',
                        path: '/advance/toasts',
                        type: 'link'
                    },
                    {
                        title: 'Rating',
                        path: '/advance/rating',
                        type: 'link'
                    },
                    {
                        title: 'Dropzone',
                        path: '/advance/dropzone',
                        type: 'link'
                    },
                    {
                        title: 'Tour',
                        path: '/advance/tour',
                        type: 'link'
                    },
                    {
                        title: 'SweetAlert2',
                        path: '/advance/sweetalert',
                        type: 'link'
                    },
                    {
                        title: 'Animated Modal',
                        path: '/advance/animated_modal',
                        type: 'link'
                    },
                    {
                        title: 'Owl Carousel',
                        path: '/advance/owl_carousel',
                        type: 'link'
                    },
                    {
                        title: 'Ribbons',
                        path: '/advance/ribbons',
                        type: 'link'
                    },
                    {
                        title: 'Pagination',
                        path: '/advance/pagination',
                        type: 'link'
                    },
                    {
                        title: 'Breadcrumb',
                        path: '/advance/breadcrumb',
                        type: 'link'
                    },
                    {
                        title: 'Range Slider',
                        path: '/advance/range_slider',
                        type: 'link'
                    },
                    {
                        title: 'Image Cropper',
                        path: '/advance/image_cropper',
                        type: 'link'
                    },
                    {
                        title: 'Basic Card',
                        path: '/advance/basic_card',
                        type: 'link'
                    },
                    {
                        title: 'Creative Card',
                        path: '/advance/creative_card',
                        type: 'link'
                    },
                    {
                        title: 'Draggable Card',
                        path: '/advance/draggable_card',
                        type: 'link'
                    },
                    {
                        title: 'Timeline',
                        path: '/advance/timeline',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Animation',
                isPinned: false,
                icon: 'animation',
                type: 'sub',
                children: [
                    {
                        title: 'Animate',
                        path: '/animation/animate',
                        type: 'link'
                    },
                    {
                        title: 'AOS Animation',
                        path: '/animation/aos_animation',
                        type: 'link'
                    },
                ]
            },
            {
                title: 'Icons',
                isPinned: false,
                icon: 'icons',
                type: 'sub',
                children: [
                    {
                        title: 'Flag Icon',
                        path: '/icons/flag_icons',
                        type: 'link'
                    },
                    {
                        title: 'Fontawesome Icon',
                        path: '/icons/fontawesome_icons',
                        type: 'link'
                    },
                    {
                        title: 'Ico Icon',
                        path: '/icons/ico_icons',
                        type: 'link'
                    },
                    {
                        title: 'Themify Icon',
                        path: '/icons/themify_icons',
                        type: 'link'
                    },
                    {
                        title: 'Nuxt Icon',
                        path: '/icons/nuxt_icons',
                        type: 'link'
                    },
                    {
                        title: 'Whether Icon',
                        path: '/icons/whether_icons',
                        type: 'link'
                    },
                ]
            },
            {
                title: 'Buttons',
                path: '/app/buttons',
                type: 'link',
                isPinned: false,
                icon: 'button'
            },
            {
                title: 'Charts',
                isPinned: false,
                icon: 'charts',
                type: 'sub',
                children: [
                    {
                        title: 'ApexChart',
                        path: '/charts/apexChart',
                        type: 'link'
                    },
                    {
                        title: 'Google Chart',
                        path: '/charts/google',
                        type: 'link'
                    },
                ]
            },
        ]
    },
    {
        title: '- Pages',
        menu: [
            {
                title: 'Sample page',
                isPinned: false,
                icon: 'sample-page',
                path: '/pages/sample_page',
                type: 'link'
            },
            {
                title: 'Internationalization',
                isPinned: false,
                icon: 'internationalization',
                path: '/pages/internationalization',
                type: 'link'
            },
            {
                title: 'Others',
                isPinned: false,
                icon: 'others',
                type: 'sub',
                children: [
                    {
                        title: 'Error Page',
                        type: 'sub',
                        children: [
                            {
                                title: 'Error 400',
                                path: '/pages/other/errorpage_1',
                                type: 'link'
                            },
                            {
                                title: 'Error 401',
                                path: '/pages/other/errorpage_2',
                                type: 'link'
                            },
                            {
                                title: 'Error 403',
                                path: '/pages/other/errorpage_3',
                                type: 'link'
                            },
                            {
                                title: 'Error 404',
                                path: '/pages/other/errorpage_4',
                                type: 'link'
                            },
                            {
                                title: 'Error 500',
                                path: '/pages/other/errorpage_5',
                                type: 'link'
                            },
                            {
                                title: 'Error 503',
                                path: '/pages/other/errorpage_6',
                                type: 'link'
                            }
                        ]
                    },
                    {
                        title: 'Authentication',
                        path: '/',
                        type: 'sub',
                        children: [
                            {
                                title: 'Login Simple',
                                path: '/pages/other/authentication/simple_login',
                                type: 'link'
                            },
                            {
                                title: 'Visual Login',
                                path: '/pages/other/authentication/login_one',
                                type: 'link'
                            },
                            {
                                title: 'Visual Login 2',
                                path: '/pages/other/authentication/login_two',
                                type: 'link'
                            },
                            {
                                title: 'validation Login',
                                path: '/pages/other/authentication/login_validate',
                                type: 'link'
                            },
                            {
                                title: 'Tooltip Login',
                                path: '/pages/other/authentication/login_tooltip',
                                type: 'link'
                            },
                            {
                                title: 'Alert Login',
                                path: '/pages/other/authentication/login_alert',
                                type: 'link'
                            },
                            {
                                title: 'Register',
                                path: '/auth/register',
                                type: 'link'
                            },
                            {
                                title: 'Register Image',
                                path: '/pages/other/authentication/register_one',
                                type: 'link'
                            },
                            {
                                title: 'Visual Reg 2',
                                path: '/pages/other/authentication/register_two',
                                type: 'link'
                            },
                            {
                                title: 'Unlock User',
                                path: '/pages/other/authentication/unlock_user',
                                type: 'link'
                            },
                            {
                                title: 'Pwd Forget',
                                path: '/pages/other/authentication/forget_password',
                                type: 'link'
                            },
                            {
                                title: 'Pwd Reset',
                                path: '/pages/other/authentication/reset_password',
                                type: 'link'
                            },
                            {
                                title: 'Maintenance',
                                path: '/pages/other/authentication/maintenance',
                                type: 'link'
                            },
                        ]
                    },
                    {
                        title: 'Coming Soon',
                        path: '/',
                        type: 'sub',
                        children: [
                            {
                                title: 'Coming Simple',
                                path: '/pages/other/comingsoon/simple',
                                type: 'link'
                            },
                            {
                                title: 'Coming with Bg video',
                                path: '/pages/other/comingsoon/video',
                                type: 'link'
                            },
                            {
                                title: 'Coming with Bg Image',
                                path: '/pages/other/comingsoon/bg_images',
                                type: 'link'
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        title: '- Miscellaneous',
        menu: [
            {
                title: 'Gallery',
                isPinned: false,
                icon: 'gallery',
                type: 'sub',
                children: [
                    {
                        title: 'Grid Gallery',
                        path: '/gallery/grid_gallery',
                        type: 'link'
                    },
                    {
                        title: 'Grid Gallery With Desc',
                        path: '/gallery/gallery_desc',
                        type: 'link'
                    },
                    {
                        title: 'Masonary Gallery',
                        path: '/gallery/gallery_masonary',
                        type: 'link'
                    },
                    {
                        title: 'Masonary Gallery Desc',
                        path: '/gallery/gallery_masonary_desc',
                        type: 'link'
                    },
                    {
                        title: 'Hover Effect',
                        path: '/gallery/hover_effect',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Blog',
                isPinned: false,
                icon: 'blog',
                type: 'sub',
                children: [
                    {
                        title: 'Blog Details',
                        path: '/blog/blog_details',
                        type: 'link'
                    },
                    {
                        title: 'Blog Single',
                        path: '/blog/blog_single',
                        type: 'link'
                    },
                    {
                        title: 'Add Post',
                        path: '/blog/add_post',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'FAQ',
                isPinned: false,
                icon: 'faq',
                type: 'link',
                path: '/pages/faq'
            },
            {
                title: 'Job Search',
                isPinned: false,
                icon: 'job-search',
                type: 'sub',
                children: [
                    {
                        title: 'Card View',
                        path: '/job_search/card_view',
                        type: 'link'
                    },
                    {
                        title: 'List View',
                        path: '/job_search/list_view',
                        type: 'link'
                    },
                    {
                        title: 'Job Details',
                        path: '/job_search/details/1',
                        type: 'link'
                    },
                    {
                        title: 'Apply',
                        path: '/job_search/apply/1',
                        type: 'link'
                    }
                ]
            },
            {
                title: 'Learning',
                isPinned: false,
                icon: 'learning',
                type: 'sub',
                children: [
                    {
                        title: 'Learning List',
                        path: '/learning/learning_list',
                        type: 'link'
                    },
                    {
                        title: 'Detailed Course',
                        path: '/learning/details_course',
                        type: 'link'
                    },
                ]
            },
            {
                title: 'Maps',
                isPinned: false,
                icon: 'maps',
                type: 'sub',
                children: [
                    {
                        title: 'Google Maps',
                        path: '/maps/vue_google_maps',
                        type: 'link'
                    },
                    {
                        title: 'Leaflet Map',
                        path: '/maps/vue_leaflet_maps',
                        type: "link"
                    },

                ]
            },
            {
                title: 'Ck Editor',
                isPinned: false,
                icon: 'editors',
                type: 'link',
                path: '/editor/ck_editor'
            },
            {
                title: 'Knowledgebase',
                isPinned: false,
                icon: 'knowledgebase',
                type: 'link',
                path: '/knowledgebase/knowledgebase'
            },
            {
                title: 'Support Ticket',
                isPinned: false,
                icon: 'support-tickets',
                type: 'link',
                path: '/pages/support'
            },
        ]
    }
]