interface item {
    col: string,
    title: string,
    desc: string,
    icon: string
}
interface categorys {
    articles: string,
    articles1: string,
    articles2: string,
    articles3: string,
    articles4: string,
    see: string,
    badge: boolean,
    badge1?: string,
    badge2?: string,
    badges?: string,
    badge3?: string
}
interface featureds {
    imge: string,
    title: string,
    desc: string,
    date: string,
    star: number
}
interface articles {
    title: string,
    icon: string,
    desc: string
}
export const wid: item[] = [
    {
        col: "col-xl-4 col-sm-6",
        title: "Articles",
        desc: "The usefulness and usability of a website, not its aesthetic design, define its success or failure. User-centric design has become the norm for effective and financially motivated web design since the visitor to the website is the only one who clicks the mouse and thus determines everything. After all, a feature might as well not exist if people can't utilise it.",
        icon: "lucide:book-open"
    },
    {
        col: "col-xl-4 col-sm-6",
        title: "Knowledgebase",
        desc: "A knowledge base acts as a central repository for knowledge, data, and information pertaining to a certain subject or thing. Its main goal is to make it easier for consumers to obtain information quickly and conveniently so they can solve problems, find solutions, and make wise decisions.",
        icon: "lucide:aperture"
    },
    {
        col: "col-xl-4",
        title: "Support",
        desc: "Email, chat, forums, and a social media interface (and monitoring) are all part of real-time online assistance, which helps in reacting to public complaints and comments. Taking care of returns or repairs may fall under this.",
        icon: "lucide:file-text"
    }
]
export const category: categorys[] = [
    {
        articles: "Any other legal pages I should know about?",
        articles1: "Policies have wide acceptance among editors",
        articles2: "Guidelines are sets of best practices supported.",
        articles3: "Editors should attempt to follow guidelines. ",
        articles4: "They are best treated with common sense.",
        see: "40",
        badge: true,
        badges: "New"
    },
    {
        articles: "Does Moment have an API or automatic export?",
        articles1: "Resource API content produced by business. ",
        articles2: "API allows the search and download of AP Images.",
        articles3: "API retrieve a list of breaking news categories",
        articles4: "API retrieves rules for a fantasy league.",
        see: "90",
        badge: true,
        badge1: "Review",
        badges: "Articles"
    },
    {
        articles: "WordPress Site Maintenance",
        articles1: "Make a backup of your WordPress website.",
        articles2: "Run a security check.  ",
        articles3: "Monitor your search engine optimization.",
        articles4: "Set a regular maintenance schedule.",
        see: "40",
        badge: true,
        badge2: "Closed"
    },
    {
        articles: "Can I change my plan later?",
        articles1: "You can easily change plans Wonderfull at any time.",
        articles2: "you’ll be charged a prorated cover that upgrade.",
        articles3: "But also the leap into electronic typesetting, ",
        articles4: "When an unknown printer took a galley",
        see: "90",
        badge: true,
        badge1: "Popular"
    },
    {
        articles: "How do I pay for the Premium Plan?",
        articles1: "Premium plans are billed as a yearly payment",
        articles2: "Monthly plan are bill every month date of your signup.",
        articles3: "You can set Monthly or Yearly for Premium plan.",
        articles4: "When an unknown printer took a galley",
        see: "50",
        badge: true,
        badge3: "Closed"
    },
    {
        articles: "What is your Shopping Policy",
        articles1: "Many new editors rely on policy interpretations.",
        articles2: "Editor continually attempts to find a different policy.",
        articles3: "Violation of maintaining a neutral point of view.",
        articles4: "You double check your sources.",
        see: "26",
        badge: true,
        badges: "Article"
    },
    {
        articles: "How can I change the component?",
        articles1: "You can modify some specific component settings. ",
        articles2: "Click Apply to validate the set preferences.",
        articles3: "Following procedure applie to external components ",
        articles4: "To modify those specific components settings.",
        see: "10",
        badge: true,
        badge1: "Review",
        badges: "Closed"
    },
    {
        articles: "How does it work?",
        articles1: "To get started with your account. ",
        articles2: "Editor continually attempts to find a different policy",
        articles3: "Users can browse by topic or use the visually. ",
        articles4: "This works through various methods of site tracking",
        see: "21",
        badge: true,
        badge2: "Popular",
        badges: "Review"
    },
    {
        articles: "What is Lorem Ipsum?",
        articles1: "Common language regular than the existing languages.",
        articles2: "Lorem Ipsum has been the industry's standard dummy",
        articles3: "Language is not real even ‘Lorem’ does't exist.",
        articles4: "dummy text that is not meant to mean anything",
        see: "34",
        badge: true,
        badge3: "On hold"
    }
]
export const featured: featureds[] = [
    {
        imge: "faq/1.jpg",
        title: "Web Design",
        desc: "Setting aside time once every three months to refresh your portfolio is a fantastic idea. Even if you are not submitting any new work, you could still need to provide more context or alter anything based on your continuing learnings and objectives. Compared to months or years later, it is far simpler to update when the information is still fresh in your mind.",
        date: "Dec 15, 2024",
        star: 2
    },
    {
        imge: "faq/2.jpg",
        title: "Web Development",
        desc: "To display HTML and CSS components on different web browsers, such as Chrome, Safari, and previous versions of Opera, CSS3 uses the Webkit rendering engine. It offers the essential features for generating online content and guaranteeing consistency across many platforms.",
        date: "Jan 08, 2024",
        star: 3
    },
    {
        imge: "faq/3.jpg",
        title: "UI Design",
        desc: "Seniority does have a significant role in how much influence a UI specialist has at this first stage of the design process. Senior UI designers may take the initiative in coming up with suggestions for which visual components will work best, whereas an entry-level UI designer is more likely to be focused on storyboards, sitemaps, and process flows and not have much influence on the site's appearance.",
        date: "Feb 15, 2024",
        star: 1
    },

    {
        imge: "faq/3.jpg",
        title: "UX Design",
        desc: "Information architecture is a discipline that, among other things, organises, arranges, and structures the content of a website or app. Information architects determine how to organise something's components in a way that makes sense.",
        date: "Sept 10, 2024",
        star: 2
    }
]
export const articles: articles[] = [
    {
        title: "Product manager",
        icon: "lucide:codepen",
        desc: "A product manager is a specialist in charge of managing the growth, direction."
    },
    {
        title: "E-commerce",
        icon: "lucide:codepen",
        desc: "Discover the flourishing e-commerce industry and how digital technology has transformed it."
    },
    {
        title: "Web-development",
        icon: "lucide:codepen",
        desc: "To display HTML and CSS components on different web browsers, such as Chrome, Safari."
    }
]
export const articles1: articles[] = [
    {
        title: " UX designer",
        icon: "lucide:file-text",
        desc: " Seniority does have a significant role in how much influence a UI specialist."
    },
    {
        title: " SDLC cycle",
        icon: "lucide:file-text",
        desc: "the intricacies of the Software Development Life Cycle a systematic approach to software development"
    },
    {
        title: "Using Video ",
        icon: "lucide:file-text",
        desc: "Information architecture is a discipline that, among other things, arranges, and structures"
    }
]
export const articles2: articles[] = [
    {
        title: " Information gathering",
        icon: "lucide:youtube",
        desc: "Explore the critical role of information gathering in effective problem-solving processes."
    },
    {
        title: "Effective communication",
        icon: "lucide:youtube",
        desc: "It's crucial to communicate! This blog explores the key components of good communication."
    },
    {
        title: "Travel adventures",
        icon: "lucide:youtube",
        desc: "The spirit is enriched by travel! This site takes you on an exhilarating tour of stunning."
    }
]