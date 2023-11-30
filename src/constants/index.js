import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    Kreomart,
    Abhyaz,
    Dremzo,
    Chiefex,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "frontend Developer",
        icon: creator,
    },
    {
        title: "Nodejs Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Abhyaz",
        icon: Abhyaz,
        iconBg: "#383E56",
        date: "July 2022 - Sept 2022",
        points: [
            "Developing and maintaining web applications using HTML/CSS and JavaScript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Developer Engineer Intern",
        company_name: "Dremzo",
        icon: Dremzo,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - May 2023",
        points: [
            "Developing and maintaining web applications using React.js, Node.js, Express, MongoDB and other related technologies.",
            "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
            "Work on the MVC archietecture design and implementing responsive design",
            "Participating in code reviews and providing constructive feedback to other developers on GitHub.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Chiefex",
        icon: Chiefex,
        iconBg: "#383E56",
        date: "Oct 2023 - Nov 2023",
        points: [
            "Work on Web Application using Angular.js, Nodejs, Express, MongoDB and other related technologies.",
            "I develops the APIs for the functionality of products and how to implement in frontend.",
            "Implementing responsive design using Angular material component.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Kreomart",
        icon: Kreomart,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Present",
        points: [
            "Developing and maintaining an Ecommerce web applications using Next.js, Tailwindcss, Django and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers.",
            "Implementing responsive design and full functional dynamic website.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Nexttours",
        description:
            "Web-based platform that allows users to search, book, and manage Tourist guid for a specific Tour from various spots, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "nextjs",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient"
            },
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Rishabh-pal/Nexttours",
    },
    {
        name: "Kreomart",
        description:
            "Ecommerce web application that enables users to search for products with there categories and subcategories in different variety and can do add to cart and checkout for payment for delivery.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "django",
                color: "pink-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Rishabh-Pal/Kreomart",
    },
    {
        name: "Flickbase",
        description:
            "Web application for write and post an article and blogs, It has search, pagination an article with full user authentication and autherization,.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Rishabh-pal/Flickbase",
    },
];

export { services, technologies, experiences, testimonials, projects };