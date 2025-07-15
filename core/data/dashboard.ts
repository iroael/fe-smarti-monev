import { widgetsChartCommonOption, rangeBarCommonOption } from '~/core/data/chartOption'
let primary = ref<string>('#009DB5')
let secondary = ref<string>('#F94C8E')
interface cards {
    svg: string,
    title: string,
    desc: string,
    color: string
}
interface transaction {
    svg: string,
    title: string,
    type: string,
    amount: string,
    color: string,
    bg: string
}
interface members {
    img: string,
    name: string,
    post: string,
    company: string,
    companyPost: string,
    progress: string,
    color: string
}
interface referrals {
    progress: {
        color: string,
        width: string
    }[],
    list: {
        color: string,
        name: string,
        amount: string
    }[]
}
interface orders {
    img: string,
    name: string,
    no: string,
    qty: string,
    amount: string
}
interface todolist {
    name: string;
    time: string;
    color: string;
    status: string
}
interface salesOverview {
    color: string,
    svg: string,
    total: string,
    name: string,
    pr: string
}
interface recentOrders {
    no: string,
    img: string,
    name: string,
    product: string,
    amount: string,
    vendor: string,
    status: string,
    color: string,
    rate: string,
    votes: string
}
interface cartcards {
    name: string,
    count: string,
    series: object,
    option: object
}
interface items {
    icon: string,
    title: string,
    total: string,
    progclass: string,
    width: string
}
export const cards: cards[] = [
    {
        svg: 'crown',
        title: 'User Profile',
        desc: 'Consectetur adipiscing',
        color: 'primary'
    },
    {
        svg: 'flash',
        title: 'Latest Trends',
        desc: 'Minim veniam',
        color: 'success'
    },
    {
        svg: 'blend-2',
        title: 'New Arrivals',
        desc: 'Excepteur sint',
        color: 'warning'
    },
    {
        svg: 'color-filter',
        title: 'Best Referrals',
        desc: 'Quis nostrud exercitation',
        color: 'secondary'
    }
],
    industry: items[] = [
        {
            icon: "txt-primary fa fa-facebook-square",
            title: "Facebook",
            total: "45%",
            progclass: "progress-stripe-primary",
            width: "45%"
        },
        {
            icon: "txt-secondary fa fa-instagram",
            title: "Instagram",
            total: "70%",
            progclass: "progress-stripe-secondary",
            width: "70%"
        },
        {
            icon: "txt-success fa fa-twitter",
            title: "Twitter",
            total: "30%",
            progclass: "progress-stripe-success",
            width: "30%"
        }
    ],
    transaction: transaction[] = [
        {
            svg: 'bill',
            title: 'Water Bill',
            type: 'Unsuccessfully',
            amount: '-$120',
            color: 'txt-danger',
            bg: 'bg-light-primary'
        },
        {
            svg: 'payment',
            title: 'Income : Salary Oct',
            type: 'Successfully',
            amount: '+$1200',
            color: '',
            bg: 'bg-light-success'
        },
        {
            svg: 'invoice',
            title: 'Electric Bill',
            type: 'Successfully',
            amount: '-$191',
            color: 'txt-danger',
            bg: 'bg-light-warning'
        },
        {
            svg: 'transfer',
            title: 'Income : Jane transfers',
            type: 'Successfully',
            amount: '+$540',
            color: '',
            bg: 'bg-light-secondary'
        }
    ],
    members: members[] = [
        {
            img: '/images/dashboard/user/1.jpg',
            name: 'Jerome Bell',
            post: 'UX designer',
            company: 'Louis',
            companyPost: 'UX designer',
            progress: '70',
            color: 'primary'
        },
        {
            img: '/images/dashboard/user/4.jpg',
            name: 'Ralph Edwa',
            post: 'Web, Laravel',
            company: 'IBM',
            companyPost: 'Development',
            progress: '50',
            color: 'success'
        },
        {
            img: '/images/dashboard/user/5.jpg',
            name: 'Esther Kit',
            post: 'Laravel',
            company: 'Johnson',
            companyPost: 'Unity Game',
            progress: '83',
            color: 'secondary'
        },
        {
            img: '/images/dashboard/user/1.jpg',
            name: 'Leslie Jolly',
            post: 'Designer',
            company: 'Card',
            companyPost: 'Marketing',
            progress: '79',
            color: 'warning'
        }
    ],
    referrals: referrals = {
        progress: [
            {
                color: 'bg-primary',
                width: 'width: 30%'
            },
            {
                color: 'bg-success',
                width: 'width: 20%'
            },
            {
                color: 'bg-warning',
                width: 'width: 15%'
            },
            {
                color: 'bg-secondary',
                width: 'width: 15%'
            },
            {
                color: 'bg-info',
                width: 'width: 20%'
            }
        ],
        list: [
            {
                color: 'activity-dot-primary',
                name: 'www.google.com',
                amount: '35.89'
            },
            {
                color: 'activity-dot-success',
                name: 'www.youtube.com',
                amount: '19.12'
            },
            {
                color: 'activity-dot-warning',
                name: 'www.media.com',
                amount: '14.75'
            },
            {
                color: 'activity-dot-secondary',
                name: 'www.pixelstrap.com',
                amount: '19.76'
            },
            {
                color: 'activity-dot-secondary',
                name: 'www.facebook.com',
                amount: '18.98'
            }
        ]
    },
    orders: orders[] = [
        {
            img: '/images/dashboard/product/1.png',
            name: 'Apple PC',
            no: '#10988',
            qty: '3 Item',
            amount: '5,098'
        },
        {
            img: '/images/dashboard/product/2.png',
            name: 'T-Shirts',
            no: '#10980',
            qty: '2 Item',
            amount: '6,010'
        },
        {
            img: '/images/dashboard/product/3.png',
            name: 'Macbook',
            no: '#101098',
            qty: '5 Item',
            amount: '12,000'
        },
        {
            img: '/images/dashboard/product/4.png',
            name: 'Shoes',
            no: '#101098',
            qty: '3 Item',
            amount: '2,000'
        },
        {
            img: '/images/dashboard/product/1.png',
            name: 'Wall Watch',
            no: '#101098',
            qty: '1 Item',
            amount: '2,000'
        }
    ],
    todoList: todolist[] = [
        {
            name: 'Products',
            time: 'Today 2:00pm Clock',
            color: 'primary',
            status: 'In Progress'
        },
        {
            name: 'Web developing..',
            time: 'Due in 4 Days',
            color: 'warning',
            status: 'Pending'
        },
        {
            name: 'UI/UX Design',
            time: 'Due in 3 Days',
            color: 'success',
            status: 'Completed'
        },
        {
            name: 'Client Meeting ..',
            time: 'Today 1:00pm Clock',
            color: 'primary',
            status: 'In Progress'
        },
        {
            name: 'Wed layout',
            time: 'Due in 10 Days',
            color: 'success',
            status: 'Completed'
        },
        {
            name: 'Web developing',
            time: 'Due in 4 Days',
            color: 'warning',
            status: 'Pending'
        },
        {
            name: 'UI/UX Design',
            time: 'Due in 3 Days',
            color: 'success',
            status: 'Completed'
        }
    ],
    salesOverview: salesOverview[] = [
        {
            color: 'warning',
            svg: 'sales',
            total: '24k USD',
            name: 'Total Sales',
            pr: '+34'
        },
        {
            color: 'success',
            svg: 'customer',
            total: '9.453k',
            name: 'Customer',
            pr: '+27'
        },
        {
            color: 'primary',
            svg: 'orders',
            total: '1.786k',
            name: 'Orders',
            pr: '+45'
        },
        {
            color: 'secondary',
            svg: 'transaction',
            total: '24k USD',
            name: 'Transaction',
            pr: '+27'
        }
    ],
    recentOrders: recentOrders[] = [
        {
            no: '#0918765',
            img: '/images/dashboard/user/1.jpg',
            name: 'Alex Smith',
            product: "Jacket",
            amount: '109.00',
            vendor: 'Shmetic Fashion',
            status: 'In Progress',
            color: 'primary',
            rate: '4.9',
            votes: '34 votes'
        },
        {
            no: '#109346',
            img: '/images/dashboard/user/4.jpg',
            name: 'Jansh Brown',
            product: "Clothes",
            amount: '178.00',
            vendor: 'iTech Factory',
            status: 'Pending',
            color: 'warning',
            rate: '5.0',
            votes: '90 votes'
        },
        {
            no: '#209813',
            img: '/images/dashboard/user/7.jpg',
            name: 'Prezy Mark',
            product: "Wallets & Bag",
            amount: '210.00',
            vendor: 'Micro Design',
            status: 'Paid',
            color: 'success',
            rate: '4.5',
            votes: '43 votes'
        },
        {
            no: '#0918765',
            img: '/images/dashboard/user/1.jpg',
            name: 'Alex Smith',
            product: "Jacket",
            amount: '109.00',
            vendor: 'Shmetic Fashion',
            status: 'Pending',
            color: 'warning',
            rate: '4.9',
            votes: '34 votes'
        },
        {
            no: '#107654',
            img: '/images/dashboard/user/7.jpg',
            name: 'Biraj Shah',
            product: "Kitchen Stole",
            amount: '187.00',
            vendor: 'Syntcy solutions',
            status: 'In Progress',
            color: 'primary',
            rate: '4.3',
            votes: '87 votes'
        }
    ],
    chartCards: cartcards[] = [
        {
            name: 'Total Sale',
            count: '3654.00',
            series: [{
                data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
            },],
            option: widgetsChartCommonOption({ color: primary.value })
        },
        {
            name: 'Total Project',
            count: '12569',
            series: [{
                data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
            },],
            option: widgetsChartCommonOption({ color: secondary.value })
        },
        {
            name: 'Total Product',
            count: '93M',
            series: [
                {
                    data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
                },
            ],
            option: widgetsChartCommonOption({ color: '#83BF6E' })
        }
    ],
    orderStatus: { series: object, option: object }[] = [
        {
            series: [{ data: [44] }],
            option: rangeBarCommonOption({ color: primary.value })
        },
        {
            series: [{ data: [40] }],
            option: rangeBarCommonOption({ color: secondary.value })
        },
        {
            series: [{ data: [50] }],
            option: rangeBarCommonOption({ color: '#25C5F7' })
        },
        {
            series: [{ data: [60] }],
            option: rangeBarCommonOption({ color: '#F8D62B' })
        },
        {
            series: [{ data: [74] }],
            option: rangeBarCommonOption({ color: '#51BB25' })
        }
    ]