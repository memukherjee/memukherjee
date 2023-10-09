import {
    FaGithub,
    FaHackerrank,
    FaLinkedin,
    FaTwitter,
    FaCartShopping,
    FaLinkSlash,
    FaClipboardList,
    FaImages,
    FaBlog,
    FaRobot,
    FaFilm,
    FaHandScissors,
    FaChrome,
    FaGraduationCap,
    FaGamepad,
    FaJava,
    FaCode,
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaReact,
    FaM,
    FaNodeJs,
    FaE,
    FaDatabase,
    FaGitAlt,
} from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";

export const about = {
    fullName: "Akash Mukherjee",
    name: {
        first: "Akash",
        last: "Mukherjee",
    },
    role: "Full Stack Developer",
    otherRoles: ["Frontend Developer", "Backend Developer"],
    message: "Available to work for \nfull-time or freelance",
    bio: `I'm a tier 3 college student in Asansol, India, with 2.5+ years of web development experience. Self-taught, I love learning and exploring new technologies, proficient in Java, JavaScript, and enthusiastic about frontend and backend development, recently mastering the MERN stack.`,
    resume: "https://drive.google.com/file/d/1wObkHkDeKcV6CPZG_RyP2fqFhE2FwTN_/view?usp=sharing",
    socials: [
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/memukherjee/",
            icon: FaLinkedin,
        },
        {
            name: "github",
            url: "https://github.com/memukherjee",
            icon: FaGithub,
        },
        {
            name: "hackerrank",
            url: "https://www.hackerrank.com/memukherjee",
            icon: FaHackerrank,
        },
        {
            name: "twitter",
            url: "https://twitter.com/memukherjee1",
            icon: FaTwitter,
        },
    ],
};

export const projects = [
    {
        name: "E-Commerce Website",
        icon: FaCartShopping,
        description:
            "E-commerce website with all the basic functionalities like adding products to cart, checkout, wishlist, etc including a modern minimal UI. It's a group project with 3 other members where I am given the role to look after the frontend part.",
        stack: [
            "ReactJS",
            "Springboot",
            "MongoDB",
            "TailwindCSS",
            "Framer Motion",
            "Cloudinary",
            "Razorpay",
        ],
        livePreview: "https://elegantapparels.netlify.app",
        sourceCode: "https://github.com/memukherjee/e-commerce-app",
    },
    {
        name: "URL Shortener",
        icon: FaLinkSlash,
        description:
            "MERN stack based URL shortener application. It shortens the long URL and provides a short URL which can be used to redirect to the original URL.",
        stack: ["ReactJS", "ExpressJS", "MongoDB", "TailwindCSS", "Vite"],
        sourceCode: "https://github.com/memukherjee/url-shortener",
        livePreview: "https://me-shorturl.netlify.app/",
    },
    {
        name: "Twitter Clone",
        icon: FaTwitter,
        description:
            "Social media application with functionalities like posting, liking, deleting, Singup with Google, etc. Similar to twitter with clone UI.",
        stack: ["NodeJS", "EJS", "Bootstrap", "HarperDB"],
        sourceCode:
            "https://github.com/memukherjee/Nagarro-Projects/tree/main/twitter-clone",
        livePreview: "https://me-twitter.up.railway.app",
    },
    {
        name: "To Do App [MERN]",
        icon: FaClipboardList,
        description:
            "Multiuser task management application to manage day to day tasks.",
        stack: ["React", "NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
        sourceCode: "https://github.com/MERN-To-Do-App",
    },
    {
        name: "Image Gallery",
        icon: FaImages,
        description: "Responsive dynamic web based image gallery application.",
        stack: ["React", "Javascript", "CSS"],
        sourceCode: "https://github.com/memukherjee/image-gallery",
        livePreview: "https://memukherjee.github.io/image-gallery/",
    },
    {
        name: "Personal Blog",
        icon: FaBlog,
        description:
            "Blog website to feature my thoughts. Used the concept of dynamic routing.",
        stack: ["EJS", "NodeJS", "ExpressJS", "MongoDB"],
        sourceCode: "https://github.com/memukherjee/Blog-Website",
        livePreview: "https://akash-blogsite.herokuapp.com/",
    },
    {
        name: "Discord Bot",
        icon: FaRobot,
        description:
            "Discord bot that replies on your specific text messages. It's a bot made for fun only.",
        stack: ["discord.js", "Javascript"],
        sourceCode: "https://github.com/memukherjee/Discord-Bot",
        livePreview:
            "https://discord.com/oauth2/authorize?client_id=935102650754678784&scope=bot",
    },
    {
        name: "OMDB Movie Finder",
        icon: FaFilm,
        description:
            "Frontend application to search for movies using OMDB API. Shows the details of the movie like poster, description, release year.",
        stack: ["HTML", "Javascript", "Bootstrap"],
        sourceCode:
            "https://github.com/memukherjee/Nagarro-Projects/tree/main/OMDB-api",
        livePreview: "https://memukherjee.github.io/Nagarro-Projects/OMDB-api/",
    },
    {
        name: "Stone Paper Scissor Android App",
        icon: FaHandScissors,
        description:
            "Basic android app to play Stone Paper Scissor game based upon the basic input output Facilities of the android ecosystem",
        stack: ["Java", "Gradle", "XML"],
        sourceCode:
            "https://github.com/memukherjee/Stone-Paper-Scissor-Android-App",
    },
    {
        name: "Random Meme & Jokes Chrome Extension",
        icon: FaChrome,
        description:
            "Chrome extension to generate random meme and jokes using api call.",
        stack: ["HTML", "Javascript"],
        sourceCode: "https://github.com/memukherjee/Dunk-Jokes",
    },
    {
        name: "To Do List",
        icon: FaClipboardList,
        description:
            "Task management application to perform CRUD operations in task lists of different names in dynamic routes.",
        stack: ["EJS", "NodeJS", "MongoDB", "ExpressJS"],
        sourceCode: "https://github.com/memukherjee/ToDoList-Node-EJS-MongoDB",
        livePreview: "https://akash-todolist.herokuapp.com/",
    },
    {
        name: "Learning Management System",
        icon: FaGraduationCap,
        description:
            "Learning management system for colleges. It's a group project and my contribution in that is to design the html pages.",
        stack: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
        sourceCode: "https://github.com/memukherjee/College-LMS",
        livePreview: "https://collegelmsystem.000webhostapp.com/",
    },
    {
        name: "Simon Game",
        icon: FaGamepad,
        description:
            "It is a memory game based upon color pattern memorization.",
        stack: ["HTML", "CSS", "JQuery"],
        sourceCode: "https://github.com/memukherjee/simon",
        livePreview: "https://memukherjee.github.io/simon/",
    },
];

export const skills = [
    { name: "Java", icon: FaJava },
    { name: "C", icon: FaCode },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "JQuery", icon: FaJsSquare },
    { name: "React", icon: FaReact },
    { name: "Material UI", icon: FaM },
    { name: "EJS", icon: FaNodeJs },
    { name: "Node", icon: FaNodeJs },
    { name: "Express", icon: FaE },
    { name: "MongoDB", icon: FaDatabase },
    { name: "SQL", icon: FaDatabase },
    { name: "Git", icon: FaGitAlt },
];

export const contact = {
    email: "akash3.11.2000@gmail.com",
    mobile: "9083354110",
};
