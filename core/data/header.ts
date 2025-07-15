interface notification {
    img: string,
    bg: string,
    icon: string,
    name: string,
    desc: string,
    time: string
}
interface message {
    msgType: string,
    img: string,
    msg: string
}
interface stock {
    item: string,
    id: string,
    amount: string,
    status: string,
    color: string,
    pcs: string,
    date: string
}
interface activities {
    color: string,
    desc?: string,
    time: string,
    title?: string,
    id?: string
}
interface product {
    img: string,
    title: string,
    to: string,
    status: string,
    color: string
}
interface calender {
    day: string,
    date: string
}
interface status {
    project: string,
    img: string[],
    more: string,
    start: string,
    end: string,
    width: string,
    status: string,
    color: string
}
interface pro {
    icon: string,
    title: string,
    path: string
}
export const notification: notification[] = [
    {
        img: '/images/avtar/3.jpg',
        bg: 'bg-danger',
        icon: "fa-heart",
        name: 'Emay Walter',
        desc: 'liked your post',
        time: '10 minutes ago'
    },
    {
        img: '/images/avtar/4.jpg',
        bg: 'bg-info',
        icon: "fa-share-alt",
        name: 'Allie Grater',
        desc: 'shared your post',
        time: '5 hours ago'
    },
    {
        img: '/images/avtar/7.jpg',
        bg: 'bg-success',
        icon: "fa-wechat",
        name: 'Colin Sik',
        desc: 'commented on your post',
        time: 'yesterday'
    }
],
    message: message[] = [
        {
            msgType: 'send-msg',
            img: '/images/dashboard/user/1.jpg',
            msg: 'Hello.how are you?'
        },
        {
            msgType: 'reply-msg',
            img: '/images/dashboard/user/3.jpg',
            msg: "Hi, i'm fine.what about you?"
        },
        {
            msgType: 'send-msg',
            img: '/images/dashboard/user/1.jpg',
            msg: 'I am facing js issue can you help me?'
        },
        {
            msgType: 'reply-msg',
            img: '/images/dashboard/user/3.jpg',
            msg: 'Sure, i will help you.'
        }
    ],
    stock: stock[] = [
        {
            item: 'Laptop',
            id: '#109346',
            amount: '121.00',
            date: 'Feb 21, 2024',
            status: 'In Stock',
            color: 'primary',
            pcs: '1'
        },
        {
            item: 'Apple iPod',
            id: '#905071',
            amount: '230.00',
            date: 'Feb 19, 2024',
            status: 'Low Stock',
            color: 'success',
            pcs: '90'
        },
        {
            item: 'MacBook',
            id: '#899306',
            amount: '409.00',
            date: 'Mar 13, 2024',
            status: 'Out of Stock',
            color: 'warning',
            pcs: '123'
        },
        {
            item: 'Speakers',
            id: '#509346',
            amount: '908.00',
            date: 'Jan 11, 2024',
            status: 'In Stock',
            color: 'primary',
            pcs: '230'
        },
        {
            item: 'Dispatched',
            id: '#109346',
            amount: '309.00',
            date: 'Aug 18, 2024',
            status: 'Low Stock',
            color: 'success',
            pcs: '390'
        }
    ],
    activities: activities[] = [
        {
            color: 'primary',
            desc: 'Optimize resource allocation for cost savings.',
            time: '00:32',
        },
        {
            color: 'warning',
            title: 'Products Meetings',
            time: '12:34'
        },
        {
            color: 'success',
            title: 'New Order placed',
            id: '#xl-9087',
            time: '13:59'
        },
        {
            color: 'secondary',
            desc: 'Enhance productivity with advanced features.',
            time: '17:34',
        },
        {
            color: 'primary',
            title: 'New Order placed',
            id: '#xl-9090',
            time: '19:40'
        },
        {
            color: 'secondary',
            title: 'All Order delivered',
            id: '#xl-7801',
            time: '22:05'
        },
        {
            color: 'success',
            desc: 'Increase sales and revenue with targeted marketing.',
            time: '02:24',
        },
        {
            color: 'primary',
            title: 'New Order placed',
            id: '#xl-9088',
            time: '15:35'
        },
    ],
    product: product[] = [
        {
            img: '/images/dashboard/product/2.png',
            title: 'Branded T-Shirts',
            to: 'Jaksion Raio',
            status: 'Delivered',
            color: 'primary'
        },
        {
            img: '/images/dashboard-2/product/helmet.png',
            title: 'Stillbirth Helmet',
            to: 'Jaksion Jawade',
            status: 'Shipping',
            color: 'success'
        },
        {
            img: '/images/dashboard/product/2.png',
            title: 'Bentwood Chair',
            to: 'Trushita Rai',
            status: 'Delivered',
            color: 'primary'
        },
        {
            img: '/images/dashboard-2/product/headphone.png',
            title: 'Wireless Headphone',
            to: 'Jushkita Shrama',
            status: 'Confirmed',
            color: 'warning'
        },
        {
            img: '/images/dashboard-2/product/tube.png',
            title: 'Makeup Tube',
            to: 'Sheezan Mahmed',
            status: 'Delivered',
            color: 'primary'
        }
    ],
    calender: calender[] = [
        {
            day: 'Mon',
            date: '14'
        },
        {
            day: 'Tue',
            date: '15'
        },
        {
            day: 'Wed',
            date: '16'
        },
        {
            day: 'Thu',
            date: '17'
        },
        {
            day: 'Fri',
            date: '18'
        },
        {
            day: 'Sat',
            date: '19'
        },
        {
            day: 'Sun',
            date: '20'
        },
        {
            day: 'Mon',
            date: '21'
        },
        {
            day: 'Tue',
            date: '22'
        },
        {
            day: 'Wed',
            date: '23'
        },
        {
            day: 'Thu',
            date: '24'
        }
    ],
    projectStatus: status[] = [
        {
            project: 'Development',
            img: ['/images/dashboard-3/user/1.png', '/images/dashboard-3/user/2.png', '/images/dashboard-3/user/3.png'],
            more: '+3',
            start: '12 Jan 2024',
            end: '15 Jan 2024',
            width: '70%',
            status: 'In Progress',
            color: 'primary'
        },
        {
            project: 'Web Landing',
            img: ['/images/dashboard-3/user/4.png', '/images/dashboard-3/user/5.png'],
            more: '+9',
            start: '5 Feb 2024',
            end: '25 Feb 2024',
            width: '25%',
            status: 'Pending',
            color: 'warning'
        },
        {
            project: 'Development',
            img: ['/images/dashboard-3/user/6.png', '/images/dashboard-3/user/7.png', '/images/dashboard-3/user/8.png'],
            more: '+3',
            start: '12 Feb 2024',
            end: '1 Mar 2024',
            width: '100%',
            status: 'Done',
            color: 'success'
        },
        {
            project: 'Marketing',
            img: ['/images/dashboard-3/user/9.png', '/images/dashboard-3/user/10.png', '/images/dashboard-3/user/11.png'],
            more: '+3',
            start: '25 Feb 2024',
            end: '10 Mar 2024',
            width: '40%',
            status: 'Pending',
            color: 'warning'
        }
    ],
    update = [
        {
            svg: "game-icon",
            title: "Marketing ",
            sub: "Design",
            custom: [
                {
                    img: "avtar/4.jpg"
                },
                {
                    img: "dashboard-3/user/12.png"
                }
            ],
            light: "+2",
            width: "45%",
            proclass: "progress-stripe-primary",
            color: "primary"
        },
        {
            svg: "pen-scale",
            title: "NFT Design",
            sub: "Design",
            custom: [
                {
                    img: "dashboard-3/user/14.png"
                },
                {
                    img: "dashboard-3/user/15.png"
                }
            ],
            light: "+6",
            width: "70%",
            proclass: "progress-stripe-success",
            color: "success"
        },
        {
            svg: "programming",
            title: "Development",
            sub: "Design",
            custom: [
                {
                    img: "dashboard-3/user/16.png"
                },
                {
                    img: "dashboard-3/user/17.png"
                }
            ],
            light: "+1",
            width: "80%",
            proclass: "progress-stripe-secondary",
            color: "secondary"
        },
        {
            svg: "apple-ios",
            title: "iOS App UI",
            sub: "Design",
            custom: [
                {
                    img: "dashboard-3/user/18.png"
                },
                {
                    img: "dashboard-3/user/19.png"
                }
            ],
            light: "+1",
            width: "30%",
            proclass: "progress-stripe-warning",
            color: "warning"
        },
        {
            svg: "programming",
            title: "Development",
            sub: "Design",
            custom: [
                {
                    img: "dashboard-3/user/16.png"
                },
                {
                    img: "dashboard-3/user/17.png"
                }
            ],
            light: "+1",
            width: "80%",
            proclass: "progress-stripe-secondary",
            color: "secondary"
        },
        {
            svg: "game-icon",
            title: "Marketing",
            sub: "Design",
            custom: [
                {
                    img: "avtar/4.jpg"
                },
                {
                    img: "dashboard-3/user/12.png"
                }
            ],
            light: "+2",
            width: "45%",
            proclass: "progress-stripe-primary",
            color: "primary"
        },
        {
            svg: "programming",
            title: "Development",
            sub: "Design",
            custom: [
                {
                    img: "dashboard-3/user/16.png"
                },
                {
                    img: "dashboard-3/user/17.png"
                }
            ],
            light: "+1",
            width: "80%",
            proclass: "progress-stripe-secondary",
            color: "secondary"
        }
    ],
    profile: pro[] = [
        {
            icon: "user",
            title: "Account",
            path: "/user/profile"
        },
        {
            icon: "stroke-email",
            title: "Inbox",
            path: "/app/letter_box"
        },
        {
            icon: "notepad",
            title: "Taskboard",
            path: "/app/task"
        },
        {
            icon: "settings",
            title: "Settings",
            path: "/user/edit"
        }
    ]