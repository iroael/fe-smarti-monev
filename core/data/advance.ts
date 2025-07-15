interface Animationrating {
    class: string;
    isActive: boolean;
    eye?: boolean;
    eyes?: boolean;
    happy?: boolean
}
interface Card {
    title: string;
    desc: string;
    body: string;
    card?: string
}
interface Footer {
    col: string;
    haderclass?: string;
    class?: string;
    title: string;
    bodytitle: string;
    bodydesc: string;
    footerclass?: string;
    bodyclass?: string;
    footerClass: string;
    bodyClass: string
}
interface Positioncard {
    id: number;
    borderClass: string;
    heading: string;
    desc: string;
    bodyTextClass?: string;
    bodyText?: string;
}
interface State {
    img: string,
    name: string,
    active: boolean
}
interface Warningstate {
    colorClass: string,
    text: string
}
interface Secondarystate {
    name: string,
    badgeColor: string,
    badgeText: string
}
interface Absolute {
    bgColor: string,
    heading: string,
    img: string,
    text: string
}
interface dragg {
    cardclass: string;
    title: string;
    desc: string;
    children?: {
        activeclass?: boolean;
        title?: string;
    }[]
}
interface Ribbon {
    class: string,
    color: string,
    info?: string,
    dis: string,
    icon?: string
}
interface alignment {
    class: string;
    children: {
        title: string;
        active?: string;
    }[];
}
interface Size {
    size: string
}
interface Breadcrumb {
    title: string,
    main?: string,
    mains?: string,
    active?: string,
    actives?: string
}
interface Timeline {
    dotClass: string;
    date: string;
    time: string;
    title: string;
    desc: string;
}
interface timelines {
    id: number;
    ulClass: string;
    data: {
        id: number;
        divClass: string;
        colorClss: string;
        date: string;
        title: string;
        desc: string;
    }[];
}
export const animationrating: Animationrating[] = [
    {
        class: "angry",
        isActive: false,
        eye: true
    },
    {
        class: "sad",
        isActive: false,
        eye: true
    },
    {
        class: "ok",
        isActive: false,
        eyes: true
    },
    {
        class: "good",
        isActive: true,
        eye: true
    },
    {
        class: "happy",
        isActive: false,
        happy: true
    }
]
export const card: Card[] = [
    {
        title: "Basic Card",
        card: "title-line",
        desc: "This is a simple basic card using anywhere.",
        body: "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as<em class='txt-danger'>“module tabs”</em> , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire."
    },
    {
        title: "Flat Card",
        card: "title-line b-r-0",
        desc: "For flat cards, make the<code>.b-r-0[border-radius:0]</code>used class.",
        body: "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find<em class='txt-danger'> important pages on your website</em> , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate."
    }
]
export const footer: Footer[] = [
    {
        col: "col-xl-4 col-sm-6",
        haderclass: "bg-primary",
        class: "text-white",
        footerClass: "text-end",
        title: "Info Color Header",
        bodytitle: "Web Designer",
        bodyClass: "pb-2 f-w-600",
        bodydesc: "By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity."
    },
    {
        col: "col-xl-4 col-sm-6",
        title: "Info Color Body",
        bodyclass: "bg-primary",
        footerClass: "text-end",
        bodytitle: "UX Designer ",
        bodyClass: "pb-2 txt-light",
        bodydesc: "It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word 'user experience' is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design."
    },
    {
        col: "col-xl-4 col-12",
        haderclass: "",
        title: "Info Color Footer",
        footerClass: "text-end text-white",
        bodytitle: "Web Developer",
        bodyClass: "pb-2 f-w-600",
        bodydesc: "A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and JavaScript on the client.",
        footerclass: "bg-primary"
    }
]
export const footers: Footer[] = [
    {
        col: "col-xl-4 col-sm-6",
        haderclass: "bg-warning",
        class: "text-white",
        footerClass: "text-end",
        title: "Warning Color Header",
        bodytitle: "Web Designer",
        bodyClass: "pb-2 f-w-600",
        bodydesc: "By following instructions and adding your own unique twist and style, you may apply your imagination as a web designer. The majority of the tasks you'll be assigned will have a specific due date and work description, but the reason you were employed was because they need a specialist to inject some much-needed creativity."
    },
    {
        col: "col-xl-4 col-sm-6",
        title: "Warning Color Body",
        bodyclass: "bg-warning",
        footerClass: "text-end",
        bodytitle: "UX Designer ",
        bodyClass: "pb-2 txt-light",
        bodydesc: "It is the responsibility of the UX designer to make a product or service useful, pleasurable, and accessible. The word 'user experience' is used by various industries, although it is most frequently related to digital design for websites and mobile applications.There is no need for coding in user experience design."
    },
    {
        col: "col-xl-4 col-12",
        haderclass: "",
        title: "Warning Color Footer",
        footerClass: "text-end text-white",
        bodytitle: "Web Developer",
        bodyClass: "pb-2 f-w-600",
        bodydesc: "A programmer who uses the client-server architecture to create World Wide Web applications is known as a web developer. The apps generally employ any general-purpose programming language on the server and HTML, CSS, and JavaScript on the client.",
        footerclass: "bg-warning"
    }
]
export const positioncard: Positioncard[] = [
    {
        id: 1,
        borderClass: "border-l-primary card-no-border",
        heading: "Border Left",
        desc: "Use the class of<code>.b-l-* </code>for left border.",
        bodyTextClass: ""
    },
    {
        id: 2,
        borderClass: " border-r-secondary card-no-border",
        heading: "Border Right",
        desc: "Use the class of<code>.b-r-* </code>for right border.",
        bodyTextClass: "",
        bodyText: "Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."
    },
    {
        id: 3,
        borderClass: " border-t-danger card-no-border",
        heading: "Border Top",
        desc: "Use the class of<code>.b-t-* </code>for top border.",
        bodyTextClass: "mb-0",
        bodyText: "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as<em class='txt-danger'>“module tabs”</em> , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire."
    },
    {
        id: 4,
        borderClass: "border-b-info",
        heading: "Border Bottom",
        desc: "Use the class of<code>.b-b-* </code>for bottom border.",
        bodyTextClass: "mb-0",
        bodyText: "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find<em class='txt-dange'> important pages on your website</em> , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate."
    }
]
export const primarystate: State[] = [
    {
        img: "user/1.jpg",
        name: "Teresa J. Mosteller",
        active: true
    },
    {
        img: "user/3.png",
        name: "Gloria D. Acheson",
        active: false
    },
    {
        img: "user/5.jpg",
        name: "Bryan A. Owens",
        active: false
    }
]
export const warningstate: Warningstate[] = [
    {
        colorClass: "txt-primary",
        text: "known for delivery of useful and usable solutions"
    },
    {
        colorClass: "txt-danger",
        text: "Solve your problem with us"
    },
    {
        colorClass: "txt-success",
        text: "Certified Professionals"
    },
    {
        colorClass: "txt-warning",
        text: "Growth-Driven"
    }
]
export const secondarystate: Secondarystate[] = [
    {
        name: "Stella Nowland",
        badgeColor: "bg-warning",
        badgeText: "Freelance"
    },
    {
        name: "Lola Stanford",
        badgeColor: "bg-danger",
        badgeText: "Issue"
    },
    {
        name: "Caitlin Coungeau",
        badgeColor: "bg-primary",
        badgeText: "Social"
    },
    {
        name: "Graciela McClaran",
        badgeColor: "bg-danger",
        badgeText: "Issue"
    }
]
export const absolute: Absolute[] = [
    {
        bgColor: " bg-secondary",
        heading: "Absolute Card",
        img: "blog/img.png",
        text: "We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively."
    },
    {
        bgColor: " bg-success",
        heading: "Absolute Card",
        img: "blog/blog.jpg",
        text: "When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value,to the next step all depend on a page's design."
    }
]
export const draggable: dragg[] = [
    {
        cardclass: "title-line height-equal",
        title: "Basic Card",
        desc: "You can draggable cards anywhere.",
        children: [
            {
                title: "Logo Design"
            },
            {
                title: "Web Designer"
            },
            {
                title: "E-Commerce"
            },
            {
                title: "UX Designer"
            }
        ]
    },
    {
        cardclass: "title-line height-equal",
        title: "Default Card",
        desc: "You can draggable cards anywhere.",
        children: [
            {
                activeclass: true,
                title: "UI Kits"
            },
            {
                title: "Wow Animations"
            },
            {
                title: "Apex Charts"
            },
            {
                title: "Starter Kits"
            }
        ]
    },
    {
        cardclass: "title-line b-r-0 height-equal",
        title: "Flat Card",
        desc: "You can draggable cards anywhere.",
        children: [
            {
                title: "PRODUCT"
            },
            {
                title: "PRODUCT DETAILS"
            },
            {
                title: "CART"
            },
            {
                title: "CHECKOUT"
            }
        ]
    }
]

export const leftribbons: Ribbon[] = [
    {
        class: "ribbon-wrapper border border-1 height-equal alert-light-light",
        color: "ribbon ribbon-primary ribbon-space-bottom",
        info: "SAVE 10%",
        dis: "<em class='txt-danger'>Ribbon designs</em> have been a part of web design. There is a design for you in this collection, regardless of whether you use <em class='txt-danger'>CSS ribbons </em> to identify your items."
    },
    {
        class: "ribbon-wrapper border border-1 height-equal",
        color: "ribbon ribbon-secondary ribbon-clip",
        info: "SAVE 50%",
        dis: "The<em class='txt-danger'> ribbon and tag</em> frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information."
    },
    {
        class: "ribbon-vertical-left-wrapper border border-1 vertical-lp-space height-equal alert-light-light",
        color: "ribbon ribbon-warning ribbon-vertical-left",
        icon: "icofont icofont-love",
        dis: "The <em class='txt-danger'>ribbons</em> have also been utilised by certain inventive developers in the menu and navigation choices.The possibilities are endless when it comes to creativity."
    },
    {
        class: "ribbon-wrapper border border-1 height-equal",
        color: "ribbon ribbon-info ribbon-bookmark",
        info: "Cashback 20%",
        dis: " Although the majority of the <em class='txt-danger'>ribbon components</em> on this list have static, straightforward styles, we have also gathered dynamic ribbons for many cards."
    },
    {
        class: "ribbon-wrapper-bottom border border-1 clip-bp-space height-equal alert-light-light",
        color: "ribbon ribbon-dark ribbon-clip-bottom",
        info: "40% OFF",
        dis: "Edge <em class='txt-danger'>ribbon </em>among the most often used <em class='txt-danger'>ribbon styles is CSS.</em> This design's author provides you with a short piece of code that has room for several optional components and effects."
    },
    {
        class: "ribbon-vertical-left-wrapper border border-1 vertical-lp-space height-equal",
        color: "ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger",
        icon: "icon-gift",
        dis: "The entire ribbon and other components seem clean since they were created entirely with CSS. You may utilize the <em class='txt-danger'>ribbons</em> as cards to deliver the material."
    }
]
export const rightribbons: Ribbon[] = [
    {
        class: "ribbon-wrapper border border-1 height-equal",
        color: "ribbon ribbon-dark ribbon-right",
        info: "50% OFF",
        dis: "The <em class='txt-danger'>ribbon and tag</em> frequently appear together because they have similar features that capture attention and make wonderful spaces for vital information."
    },
    {
        class: "ribbon-wrapper-right border border-1 height-equal alert-light-light",
        color: "ribbon ribbon-primary ribbon-clip-right ribbon-right",
        info: "SAVE 50%",
        dis: "Since very early times, <em class='txt-danger'>ribbon designs</em> have been a part of web design. There is a design for you in this collection, regardless of whether you use <em class='txt-danger'>CSS ribbons </em> to identify your items."
    },
    {
        class: "ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal",
        color: "ribbon ribbon-bookmark ribbon-vertical-right ribbon-secondary",
        icon: "icon-signal",
        dis: "The entire ribbon and other components seem clean since they were created entirely with CSS. You may utilize the <em class='txt-danger'>ribbons</em> as cards to deliver the material. "
    },
    {
        class: "ribbon-wrapper border border-1 height-equal alert-light-light",
        color: "ribbon ribbon-warning ribbon-bookmark ribbon-right",
        info: "SAVE 20%",
        dis: "Edge <em class='txt-danger'>ribbon </em>among the most often used <em class='txt-danger'>ribbon styles is CSS.</em> This design s author provides you with a short piece of code that has room for several optional components and effects."
    },
    {
        class: "ribbon-wrapper-bottom border border-1 clip-bp-space height-equal",
        color: "ribbon ribbon-success ribbon-clip-bottom-right",
        info: "Cashback 10%",
        dis: "Although the majority of the   <em class='txt-danger'>ribbon components</em> on this list have static, straightforward styles, we have also gathered dynamic ribbons for many cards."
    },
    {
        class: "ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal alert-light-light",
        color: "ribbon ribbon-danger ribbon-vertical-right",
        icon: "fa fa-taxi",
        dis: "The <em class='txt-danger'>ribbons</em> have also been utilized by certain inventive developers in the menu and navigation choices. The possibilities are endless when it comes to creativity."
    }
]
export const alignment: alignment[] = [
    {
        class: "pagin-border-warning pagination-warning m-b-30",
        children: [
            {
                title: "Previous"
            },
            {
                title: "1"
            },
            {
                title: "2"
            },
            {
                title: "3"
            },
            {
                title: "Next"
            }
        ]
    },
    {
        class: "justify-content-center pagin-border-danger pagination-danger m-b-30",
        children: [
            {
                title: "Previous"
            },
            {
                title: "I"
            },
            {
                title: "II",
                "active": "active"
            },
            {
                title: "III"
            },
            {
                title: "Next"
            }
        ]
    },
    {
        class: "justify-content-end pagin-border-success pagination-success",
        children: [
            {
                title: "Previous"
            },
            {
                title: "i"
            },
            {
                title: "ii"
            },
            {
                title: "iii"
            },
            {
                title: "Next"
            }
        ]
    }
]
export const size: Size[] = [
    { size: "pagination-lg m-b-30" },
    { size: "pagination-md m-b-30" },
    { size: "pagination-sm" }
]
export const breadcrumb: Breadcrumb[] = [
    {
        title: "Ui Kits",
        main: "Home",
        active: "active"
    },
    {
        title: "Ui Kits",
        main: "Home",
        mains: "Alert",
        actives: "active"
    }
]
export const basictimeline: Timeline[] = [
    {
        dotClass: "timeline-dot-primary",
        date: "2 Feb 2024",
        time: "7:00 AM",
        title: "CONFERENCE WITH CLIENT",
        desc: "At noon today, there will be a meeting with a UK client."
    },
    {
        dotClass: "timeline-dot-secondary",
        date: "22 March 2024",
        time: "3:45 PM",
        title: "DISCUSSION WITH MARKETING TEAM",
        desc: "discussion with the marketing staff on the success of the most recent project"
    },
    {
        dotClass: "timeline-dot-success",
        date: "16 May 2024",
        time: "1:22 AM",
        title: "INVEST IN A NEW HOSTING PLAN",
        desc: "today at 2 pm AM, purchase a new hosting package as agreed upon with the management team."
    },
    {
        dotClass: "timeline-dot-warning",
        date: "23 Nov 2024",
        time: "6:56 AM",
        title: "DISCUSSION WITH DESIGNER TEAM",
        desc: "discussion with the designer employee on the success of the most recent project."
    },
    {
        dotClass: "timeline-dot-info",
        date: "12 Dec 2024",
        time: "12:05 AM",
        title: "DISCUSSION WITH NEW THEME LAUNCH",
        desc: "discussion with the how many themes made in our portfolio."
    },
    {
        dotClass: "timeline-dot-danger",
        date: "02 Jan 2024",
        time: "6:56 AM",
        title: "PURCHASE NEW CHAIRS FOR OFFICE ",
        desc: "online purchase new chairs for office"
    }
]
export const horizontialtimeline: timelines[] = [
    {
        id: 1,
        ulClass: "timeline-border",
        data: [
            {
                id: 1,
                divClass: "col-xxl-4 col-sm-6",
                colorClss: " alert-light-primary txt-primary",
                date: "1 Jan",
                title: "Conference",
                desc: "Conferences are intended to bring individuals with similar interests together to discuss problems."
            },
            {
                id: 2,
                divClass: "col-xxl-4 col-sm-6",
                colorClss: "alert-light-success txt-success",
                date: "4 Feb",
                title: "Meet-up",
                desc: "You may connect with males from all around the world using the friend-forward."
            },
            {
                id: 3,
                divClass: "col-xxl-4 horizontal-timeline",
                colorClss: "alert-light-danger txt-danger",
                date: "22 March",
                title: "Meeting",
                desc: "If several languages coalesce the grammar of the resulting simple and regular social networking platform."
            }
        ]
    },
    {
        id: 2,
        ulClass: "border-0",
        data: [
            {
                id: 4,
                divClass: "col-xxl-4 col-sm-6",
                colorClss: "alert-light-primary txt-primary",
                date: "1 Jan",
                title: "Conference",
                desc: "A gathering of two or more people to talk about issues of interest."
            },
            {
                id: 5,
                divClass: "col-xxl-4 col-sm-6",
                colorClss: "alert-light-danger txt-danger",
                date: "22 March",
                title: "Meeting",
                desc: "If several languages coalesce the grammar of the resulting simple and regular social networking platform."
            },
            {
                id: 6,
                divClass: "col-xxl-4 horizontal-timeline",
                colorClss: "alert-light-warning txt-warning",
                date: "7 Dec",
                title: "Launch Theme",
                desc: "Responsive Website is the approach that suggests website design and development should respond."
            }
        ]
    }
]