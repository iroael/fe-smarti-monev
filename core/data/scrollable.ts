interface data {
    title: string,
    badge: string,
    span: string
}
interface item {
    img: string,
    name: string
}
interface scroll {
    img: string,
    name: string,
    email: string,
    days: string,
    actve: boolean
}
interface imgs {
    img: string
}
interface customs {
    desc: string
}
export const Badges: data[] = [
    {
        title: "Stella Nowland",
        badge: "badge bg-warning rounded-pill p-2",
        span: "Freelance"
    },
    {
        title: "Lola Stanford",
        badge: "bg-danger text-white rounded-pill p-2",
        span: "Issue"
    },
    {
        title: "Caitlin Coungeau",
        badge: "bg-primary text-white rounded-pill p-2",
        span: "Social"
    },
    {
        title: "raciela W. McClaran",
        badge: "bg-danger text-white rounded-pill p-2",
        span: "Issue"
    },
    {
        title: "Derek T. Aldridge",
        badge: "bg-warning text-white rounded-pill p-2",
        span: "Freelance"
    },
    {
        title: "Annie A. Riley",
        badge: "bg-primary text-white rounded-pill p-2",
        span: "Social"
    },
    {
        title: "Hana J. Boyd",
        badge: "bg-danger text-white rounded-pill p-2",
        span: "Issue"
    },
    {
        title: "Karen R. Pryce",
        badge: "bg-warning text-white rounded-pill p-2",
        span: "Freelance"
    },
    {
        title: "Cordie C. Pope",
        badge: "bg-primary text-white rounded-pill p-2",
        span: "Social"
    }
]
export const profile: item[] = [
    {
        img: "user/3.png",
        name: "Gloria D. Acheson"
    },
    {
        img: "user/2.jpg",
        name: "Sharon C. Obrien"
    },
    {
        img: "user/5.jpg",
        name: "Bryan A. Owens"
    },
    {
        img: "user/12.jpg",
        name: "Ronald M. Enger"
    },
    {
        img: "user/14.png",
        name: "Herbert A. Clary"
    },
    {
        img: "user/6.jpg",
        name: "Dino A. Cannon"
    },
    {
        img: "user/3.jpg",
        name: "Danny A. McLean"
    },
    {
        img: "user/2.jpg",
        name: "Betty K. Curtis"
    }
]
export const scrollable: scroll[] = [
    {
        img: "user/9.jpg",
        name: "Molly Boake",
        email: "MollyBoake@rhyta.com",
        days: "5 days ago",
        actve: true
    },
    {
        img: "user/10.jpg",
        name: "Gabrielle Fahey",
        email: "GabrielleFahey@dayrep.com",
        days: "10 days ago",
        actve: false
    },
    {
        img: "user/2.jpg",
        name: "Lucinda Moseley",
        email: "LucindaMoseley@teleworm.us",
        days: "3 days ago",
        actve: false
    },
    {
        img: "user/12.jpg",
        name: "Francis K. Henriques",
        email: "FrancisKHenriques@teleworm.us",
        days: "2 days ago",
        actve: false
    },
    {
        img: "user/14.png",
        name: "Jose A. Seay",
        email: "JoseASeay@rhyta.com",
        days: "15 days ago",
        actve: false
    },
    {
        img: "user/3.jpg",
        name: "Phil F. Cunningham",
        email: "PhilFCunningham@dayrep.com",
        days: "6 days ago",
        actve: false
    },
    {
        img: "user/7.jpg",
        name: "Richard E. Johnson",
        email: "RichardEJohnson@teleworm.us",
        days: "20 days ago",
        actve: false
    },
    {
        img: "user/2.png",
        name: "Lawrence L. Nash",
        email: "LawrenceLNash@jourrapide.com",
        days: "8 days ago",
        actve: false
    }
]
export const horizontal: imgs[] = [
    {
        img: "scrollbar/fashion1.jpg"
    },
    {
        img: "scrollbar/fashion2.jpg"
    },
    {
        img: "scrollbar/fashion3.jpg"
    },
    {
        img: "scrollbar/fashion4.jpg"
    },
    {
        img: "scrollbar/fashion5.jpg"
    },
    {
        img: "scrollbar/fashion6.jpg"
    }
]
export const custom: customs[] = [
    {
        desc: " There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause an app's user interface to look inconsistent across various operating systems. In this case, having a single style is helpful."
    },
    {
        desc: "I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in doing so. I'll take the chance to learn more about them and share my trip in this essay."
    },
    {
        desc: "One crucial point to remember is that, depending on the design, a scrollbar may operate either <em class='txt-danger'>horizontally or vertically</em> . Additionally, it might alter when you work on a website that is global and operates in both left-to-right and right-to-left orientations. "
    }
]
export const small: customs[] = [
    {
        desc: " The Business Transformation Solution programme is a <em class='txt-danger'>multi-level engagement program</em> is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively.<img class='img-fluid pt-3' src='/images/banner/3.jpg' alt='business' width='800' height='600'>"
    },
    {
        desc: "The core of the programme is our internally developed <em class='txt-danger'>Business Management model</em> , 'Business Foundation & Management', which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques."
    }
]