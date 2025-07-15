interface item {
    col: string,
    title: string,
    desc: string,
    icon: string
}
interface simpleaccordion {
    hederid?: string;
    id: string;
    ids?: string;
    title: string;
    one?: boolean;
    two?: boolean;
    three?: boolean;
    isActive: boolean,
    childern?: Child[];
}
interface Child {
    desc?: string;
    title?: string;
}
interface late {
    icon: string,
    title: string,
    time: string
}
interface featured {
    imge: string,
    title: string,
    desc: string,
    date: string,
    star: number,

}
interface articles {
    title: string,
    icon: string,
    desc: string
}
interface navigations {
    icon: string,
    name: string,
    span: boolean,
    badge?: string
}
export const wid: item[] = [
    {
        col: "col-xl-4 box-col-6",
        title: "Articles",
        desc: "The usefulness and usability of a website, not its aesthetic design, define its success or failure. User-centric design has become the norm for effective and financially motivated web design since the visitor to the website is the only one who clicks the mouse and thus determines everything. After all, a feature might as well not exist if people can't utilise it.",
        icon: "lucide:file-text"
    },
    {
        col: "col-xl-4 col-sm-6 box-col-6",
        title: "Knowledgebase",
        desc: "A knowledge base acts as a central repository for knowledge, data, and information pertaining to a certain subject or thing. Its main goal is to make it easier for consumers to obtain information quickly and conveniently so they can solve problems, find solutions, and make wise decisions.",
        icon: "lucide:book-open"
    },
    {
        col: "col-xl-4 col-sm-6 box-col-12",
        title: "Support",
        desc: "Email, chat, forums, and a social media interface (and monitoring) are all part of real-time online assistance, which helps in reacting to public complaints and comments. Taking care of returns or repairs may fall under this.",
        icon: "lucide:aperture"
    }
]
export const quik: simpleaccordion[] = [
    {
        id: "#collapseicon",
        ids: "collapseicon",
        title: "Integrating WordPress with Your Website?",
        isActive: false,
        childern: [
            {
                title: "A excellent method to add dynamic content, make site management simple, and access the extensive ecosystem of WordPress plugins and themes is by integrating WordPress with your website."
            }
        ]
    },
    {
        id: "#collapseicon2",
        ids: "collapseicon2",
        title: "How do you set an image as the background of a web page?",
        isActive: false,
        childern: [
            {
                title: "Background photos give a website an aesthetically pleasing and engaging backdrop. There are several applications for these photos."
            }
        ]
    },
    {
        id: "#collapseicon3",
        ids: "collapseicon3",
        title: "What is W3C and how does it affect web design?",
        isActive: false,
        childern: [
            {
                title: "The World Wide online Consortium (W3C), a global organisation, supports online development. The public, organisation members, a full-time staff, and invited international experts work together to develop Web Standards."
            }
        ]
    },
    {
        id: "#collapseicon4",
        ids: "collapseicon4",
        title: "Describe CSS file and its benefits.",
        isActive: false,
        childern: [
            {
                title: "Cascading Style Sheets, or CSS, is a language for creating style sheets. In essence, it regulates and supervises how information should be presented in speech, writing, visual media, and other forms of media. You may modify the text's colour, font, spacing between paragraphs, size, and order with CSS."
            }
        ]
    },
]
export const intell: simpleaccordion[] = [
    {
        id: "#collapseicon5",
        ids: "collapseicon5",
        title: " How to ticket work as web designer?",
        isActive: false,
        childern: [
            {
                title: "Create an account on the chosen ticketing platform and set up your workspace. Customize it according to your projects and team, if applicable. Set permissions and access levels for team members and clients, if necessary."
            }
        ]
    },
    {
        id: "#collapseicon6",
        ids: "collapseicon6",
        title: "What are WordPress Plugins?",
        isActive: false,
        childern: [
            {
                title: "Individual pieces of software called WordPress plugins let you extend the functionality of your website. You may install each of these pieces of software on your WordPress website."
            }
        ]
    },
    {
        id: "#collapseicon7",
        ids: "collapseicon7",
        title: "How many tables are there by default in WordPress?",
        isActive: false,
        childern: [
            {
                title: "Tables are the equivalent of shelves in WordPress databases. WordPress websites come with 12 tables by default. Each table can only contain specific types of data. "
            }
        ]
    }
]
export const selling: simpleaccordion[] = [
    {
        id: "#collapseicon8",
        ids: "collapseicon8",
        title: "What exactly does a talented UX designer do?",
        isActive: false,
        childern: [
            {
                title: "While there is no right or incorrect response, a professional designer should be well-versed in UX and be able to provide a complete end-to-end UX design process."
            }
        ]
    },
    {
        id: "#collapseicon9",
        ids: "collapseicon9",
        title: "Can you explain why widgets don't appear in the sidebar?",
        isActive: false,
        childern: [
            {
                title: "Users must first make sure that the themes they are using support the widget before adding it. It's conceivable that the issue is brought on by a lack of functionality."
            }
        ]
    },
    {
        id: "#collapseicon10",
        ids: "collapseicon10",
        title: "Sell me on the benefits of UX design investment?",
        isActive: false,
        childern: [
            {
                title: "In addition to improving user experience, UX-driven product design is a wise commercial decision. "
            }
        ]
    },
    {
        id: "#collapseicon11",
        ids: "collapseicon11",
        title: "What is source code?",
        isActive: false,
        childern: [
            {
                title: "The core of a computer programme is called the source code, which is produced by a programmer and frequently takes the form of functions, descriptions, definitions, calls, procedures, and other operational declarations."
            }
        ]
    },
]
export const users: simpleaccordion[] = [
    {
        id: "#collapseicon12",
        ids: "collapseicon12",
        title: "In Java, how do you reverse a string?",
        isActive: false,
        childern: [
            {
                title: "The string may be turned into a character array, which you can iterate through from beginning to finish. The characters can be added to a string builder to create the reversed string."
            }
        ]
    },
    {
        id: "#collapseicon13",
        ids: "collapseicon13",
        title: "Can you help me out by writing a Java programme for the Fibonacci series?",
        isActive: false,
        childern: [
            {
                title: "This particular activity, which is the question, may demonstrate your proficiency with using Java code to carry out a task."
            }
        ]
    },
    {
        id: "#collapseicon14",
        ids: "collapseicon14",
        title: " To reverse a string without utilising the built-in string function.",
        isActive: false,
        childern: [
            {
                title: "Another unique Java coding activity that the interviewer could use to gauge your Java expertise."
            }
        ]
    },
    {
        id: "#collapseicon15",
        ids: "collapseicon15",
        title: "Describe the information architecture.",
        isActive: false,
        childern: [
            {
                title: "The planning, structuring, and labelling of content in a thorough, logical, and long-lasting manner is referred to as information architecture (IA). It allows for the obvious and intelligible organising and classification of material, enabling visitors to quickly discover what they're looking for."
            }
        ]
    },
    {
        id: "#collapseicon16",
        ids: "collapseicon16",
        title: "Describe doctype in details",
        isActive: false,
        childern: [
            {
                title: "A declaration of the document type, known as DOCTYPE, is required at the start of every HTML or XHTML document; this declaration is frequently the first line of code."
            }
        ]
    },
]
export const latest: late[] = [
    {
        icon: "lucide:rotate-cw",
        title: "<a href='#'>David Linner </a>requested money back for a double debit card charge",
        time: "10 minutes ago"
    },
    {
        icon: "lucide:dollar-sign",
        title: "All sellers have received monthly payouts",
        time: "2 hours ago"
    },
    {
        icon: "mdi:link-variant",
        title: "User Christopher <a href='#'>Wallace</a> is on hold and awaiting for staff reply",
        time: "45 minutes ago"
    },
    {
        icon: "mdi:check",
        title: "Ticket #43683 has been closed by <a href='#'>Victoria Wilson</a>",
        time: "Dec 7, 11:48"
    }
]
export const featured: featured[] = [
    {
        imge: "faq/1.jpg",
        title: "Web Design",
        desc: "Setting aside time once every three months to refresh your portfolio is a fantastic idea. Even if you are not submitting any new work, you could still need to provide more context or alter anything based on your continuing learnings and objectives. Compared to months or years later, it is far simpler to update when the information is still fresh in your mind.",
        date: "Dec 15, 2024",
        star: 5,

    },
    {
        imge: "faq/2.jpg",
        title: "Web Development",
        desc: "To display HTML and CSS components on different web browsers, such as Chrome, Safari, and previous versions of Opera, CSS3 uses the Webkit rendering engine. It offers the essential features for generating online content and guaranteeing consistency across many platforms.",
        date: "Mar 02, 2024",
        star: 4,

    },
    {
        imge: "faq/3.jpg",
        title: "UI Design",
        desc: "Seniority does have a significant role in how much influence a UI specialist has at this first stage of the design process. Senior UI designers may take the initiative in coming up with suggestions for which visual components will work best, whereas an entry-level UI designer is more likely to be focused on storyboards, sitemaps, and process flows and not have much influence on the site's appearance.",
        date: "Feb 04, 2024",
        star: 5,

    },
    {
        imge: "faq/4.jpg",
        title: "UX Design",
        desc: "Information architecture is a discipline that, among other things, organises, arranges, and structures the content of a website or app. Information architects determine how to organise something's components in a way that makes sense.",
        date: "Jan 18, 2024",
        star: 4,

    }
]
export const articles: articles[] = [
    {
        title: "How to Programming Consistency.",
        icon: "lucide:codepen",
        desc: "You must always maintain consistency as a web developer. Over time, consistency produces superior results. "
    },
    {
        title: "Explaining Modern CSS To A Dinosaur",
        icon: "lucide:codepen",
        desc: "Peter Jang, the author of the very first essay on our list, has created another masterpiece, but this time, he has addressed CSS, another important aspect of web development."
    },
    {
        title: " Make fewer designs to become a better designer.",
        icon: "lucide:codepen",
        desc: "Designers can experience feelings of fraudulence or lack of originality. It seems like everyone else is working harder or just generally doing a better job than you are."
    }
]
export const articles1: articles[] = [
    {
        title: " What?! Why should I design less?",
        icon: "lucide:file-text",
        desc: " You can view all of the stunning and remarkable things that other designers have produced by taking a peek around. You then examine your work."
    },
    {
        title: "Use a GUI framework as a requirement",
        icon: "lucide:file-text",
        desc: "Do not, under any circumstances, code your website in simple HTML. Frameworks and widget libraries are widely available."
    },
    {
        title: "What?! Why should I design less?",
        icon: "lucide:file-text",
        desc: "Information architecture is a discipline that, among other things, organises, arranges, and structures the content of a website or app. Information architects determine how to organise something's components in a way that makes sense."
    }
]
export const articles2: articles[] = [
    {
        title: "Continuous Learning",
        icon: "lucide:youtube",
        desc: "To improve their craft and advance in the industry, web designers frequently attend courses, participate in design groups, and work on their own professional development."
    },
    {
        title: " Design Expertise",
        icon: "lucide:youtube",
        desc: "For websites to be aesthetically pleasing, web designers must have excellent graphic design, typography, colour theory, and layout abilities"
    },
    {
        title: "Use vertical input forms that are clearly organised.",
        icon: "lucide:youtube",
        desc: "Use only one column in an input form if possible. A separate row should exist for each input field."
    }
]
export const navigation: navigations[] = [
    {
        icon: 'material-symbols-light:edit-square-outline',
        name: "Tutorials",
        span: false
    },
    {
        icon: 'material-symbols:language',
        name: "Help Center",
        span: false
    },
    {
        icon: 'mdi:book-open-blank-variant-outline',
        name: "Knowledgebase",
        span: false
    },
    {
        icon: 'ph:file-text-bold',
        name: "Articles",
        span: true,
        badge: "42"
    },
    {
        icon: 'radix-icons:video',
        name: "Video Tutorials",
        span: true,
        badge: "648"
    },
    {
        icon: 'ph:chat-circle-light',
        name: "Ask Our Community",
        span: false
    },
    {
        icon: 'ph:envelope-simple-bold',
        name: "Contact Us",
        span: false
    }
]