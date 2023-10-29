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
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaCuttlefish,
} from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiMui, SiJquery, SiMongodb, SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { BsFiletypeJs } from "react-icons/bs";

export const about = {
    fullName: "Akash Mukherjee",
    name: {
        first: "Akash",
        last: "Mukherjee",
    },
    address: {
        city: "Asansol",
        state: "West Bengal",
        country: "India",
        countryCode: "IN",
        pincode: "713303",
    },
    role: "Full Stack Developer",
    otherRoles: ["Frontend Developer", "Backend Developer"],
    message: "Available to work for \nfull-time or freelance",
    bio: `I'm a tier 3 college student in Asansol, India, with 2.5+ years of web development experience. Self-taught, I love learning and exploring new technologies, proficient in Java, JavaScript, and enthusiastic about frontend and backend development, recently mastering the MERN stack.`,
    contactMessage:
        "Are you ready to transform your ideas into exceptional projects? I'm here to make it happen. Let's kick-start the creative process together and take your vision to the next level. Feel free to reach out to me and let's explore the endless possibilities that await us. I'm excited to connect with you and embark on this journey of innovation and success.",
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
        name: "Elegant Apparels",
        slug: "elegant-apparels",
        about: "Fashion E-Commerce Website",
        genere: "Full Stack Development",
        stack: "React + Springboot + MongoDB",
        icon: FaCartShopping,
        description:
            "E-commerce website with all the basic functionalities like adding products to cart, checkout, wishlist, etc including a modern minimal UI. It's a group project with 3 other members where I am given the role to look after the frontend part.",
        technologies: [
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
        name: "shortURL",
        slug: "shorturl",
        about: "URL Shortener Application",
        genere: "Full Stack Development",
        stack: "MERN",
        icon: FaLinkSlash,
        description:
            "MERN stack based URL shortener application. It shortens the long URL and provides a short URL which can be used to redirect to the original URL.",
        technologies: [
            "ReactJS",
            "ExpressJS",
            "MongoDB",
            "TailwindCSS",
            "Vite",
        ],
        sourceCode: "https://github.com/memukherjee/url-shortener",
        livePreview: "https://me-shorturl.netlify.app/",
    },
    {
        name: "Twitter-2.0",
        slug: "twitter-2.0",
        about: "Social Media Application Clone",
        genere: "Full Stack Development",
        stack: "Express + EJS + HarperDB",
        icon: FaTwitter,
        description:
            "Social media application with functionalities like posting, liking, deleting, Singup with Google, etc. Similar to twitter with clone UI.",
        technologies: ["NodeJS", "EJS", "Bootstrap", "HarperDB"],
        sourceCode:
            "https://github.com/memukherjee/Nagarro-Projects/tree/main/twitter-clone",
        livePreview: "https://me-twitter.up.railway.app",
    },
    {
        name: "To Do App",
        slug: "to-do-app",
        about: "Task Management Application",
        genere: "Full Stack Development",
        stack: "MERN",
        icon: FaClipboardList,
        description:
            "Multiuser task management application to manage day to day tasks.",
        technologies: ["React", "NodeJS", "ExpressJS", "MongoDB", "Bootstrap"],
        sourceCode: "https://github.com/MERN-To-Do-App",
    },
    {
        name: "Gallery",
        slug: "gallery",
        about: "Responsive Image Gallery",
        genere: "Frontend Development",
        stack: "React + Vanilla CSS",
        icon: FaImages,
        description: "Responsive dynamic web based image gallery application.",
        technologies: ["React", "Javascript", "CSS"],
        sourceCode: "https://github.com/memukherjee/image-gallery",
        livePreview: "https://memukherjee.github.io/image-gallery/",
    },
    {
        name: "Daily Journal",
        slug: "daily-journal",
        about: "Personal Blog Website",
        genere: "Full Stack Development",
        stack: "Express + EJS + MongoDB",
        icon: FaBlog,
        description:
            "Blog website to feature my thoughts. Used the concept of dynamic routing.",
        technologies: ["EJS", "NodeJS", "ExpressJS", "MongoDB"],
        sourceCode: "https://github.com/memukherjee/Blog-Website",
        livePreview: "https://akash-blogsite.herokuapp.com/",
    },
    {
        name: "PauL Bot",
        slug: "paul-bot",
        about: "A Discord Bot",
        genere: "Backend Development",
        stack: "discord.js",
        icon: FaRobot,
        description:
            "Discord bot that replies on your specific text messages. It's a bot made for fun only.",
        technologies: ["discord.js", "Javascript"],
        sourceCode: "https://github.com/memukherjee/Discord-Bot",
        livePreview:
            "https://discord.com/oauth2/authorize?client_id=935102650754678784&scope=bot",
    },
    {
        name: "OMDB",
        slug: "omdb",
        about: "Movie Finder",
        genere: "Frontend Development",
        stack: "JavaScript + Bootstrap",
        icon: FaFilm,
        description:
            "Frontend application to search for movies using OMDB API. Shows the details of the movie like poster, description, release year.",
        technologies: ["HTML", "Javascript", "Bootstrap"],
        sourceCode:
            "https://github.com/memukherjee/Nagarro-Projects/tree/main/OMDB-api",
        livePreview: "https://memukherjee.github.io/Nagarro-Projects/OMDB-api/",
    },
    {
        name: "Stone Paper Scissor",
        slug: "stone-paper-scissor",
        about: "Android Application",
        genere: "Native Mobile Development",
        stack: "Java + XML",
        icon: FaHandScissors,
        description:
            "Basic android app to play Stone Paper Scissor game based upon the basic input output Facilities of the android ecosystem",
        technologies: ["Java", "Gradle", "XML"],
        sourceCode:
            "https://github.com/memukherjee/Stone-Paper-Scissor-Android-App",
    },
    {
        name: "Dunk Jokes",
        slug: "dunk-jokes",
        about: "Random Meme & Jokes Chrome Extension",
        genere: "Browser Extension",
        stack: "HTML + Javascript",
        icon: FaChrome,
        description:
            "Chrome extension to generate random meme and jokes using api call.",
        technologies: ["HTML", "Javascript"],
        sourceCode: "https://github.com/memukherjee/Dunk-Jokes",
    },
    {
        name: "To Do List",
        slug: "to-do-list",
        about: "Task Management Application",
        genere: "Full Stack Development",
        stack: "Express + EJS + MongoDB",
        icon: FaClipboardList,
        description:
            "Task management application to perform CRUD operations in task lists of different names in dynamic routes.",
        technologies: ["EJS", "NodeJS", "MongoDB", "ExpressJS"],
        sourceCode: "https://github.com/memukherjee/ToDoList-Node-EJS-MongoDB",
        livePreview: "https://akash-todolist.herokuapp.com/",
    },
    {
        name: "College LMS",
        slug: "college-lms",
        about: "Learning Management System",
        genere: "Full Stack Development",
        stack: "PHP + MySQL",
        icon: FaGraduationCap,
        description:
            "Learning management system for colleges. It's a group project and my contribution in that is to design the html pages.",
        technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
        sourceCode: "https://github.com/memukherjee/College-LMS",
        livePreview: "https://collegelmsystem.000webhostapp.com/",
    },
    {
        name: "Simon Game",
        slug: "simon-game",
        about: "Retro Memory Game",
        genere: "Frontend Development",
        stack: "HTML + Vanilla CSS + JQuery",
        icon: FaGamepad,
        description:
            "It is a memory game based upon color pattern memorization.",
        technologies: ["HTML", "CSS", "JQuery"],
        sourceCode: "https://github.com/memukherjee/simon",
        livePreview: "https://memukherjee.github.io/simon/",
    },
];

export const skills = [
    {
        name: "Java",
        icon: FaJava,
        color: "#0d8ac7",
        extensionName: "java",
        code: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
`,
    },
    {
        name: "C",
        icon: FaCuttlefish,
        color: "#3548a4",
        bgColor: "#141e29",
        extensionName: "c",
        code: `
#include<stdio.h>
int main(){
    printf("Hello World");
    return 0;
}
`,
    },
    {
        name: "HTML",
        icon: FaHtml5,
        color: "#e34c26",
        bgColor: "#222",
        extensionName: "html",
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
`,
    },
    {
        name: "CSS",
        icon: FaCss3,
        color: "#264de4",
        bgColor: "#222",
        extensionName: "css",
        code: `
*{
    box-sizing: border-box;
}
body{
    margin: 0;
    font-family: sans-serif;
}
.container{
    color: #fff;
    background-color: #222;
    padding: 1rem;
}
#hero-section{
    overflow: hidden;
    background-color: #222;
}
`,
    },
    {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "#F0DB4F",
        bgColor: "#323330",
        extensionName: "js",
        code: `
const heroText = document.querySelector("h1");
const button = document.querySelector("button");
heroText.innerText = "Hello World";
button.addEventListener("click", () => {
    alert("Hello World");
});
`,
    },
    {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "#563d7c",
        bgColor: "#222",
        extensionName: "html",
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="text-primary">Hello World</h1>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/js/bootstrap.min.js"></script>
</body>
</html>
`,
    },
    {
        name: "JQuery",
        icon: SiJquery,
        color: "#0769ad",
        bgColor: "#222",
        extensionName: "js",
        code: `
$(document).ready(function(){
    $("h1").text("Hello World");
});
`,
    },
    {
        name: "React",
        icon: FaReact,
        color: "#61dbfb",
        bgColor: "#282c34",
        extensionName: "jsx",
        code: `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
`,
    },
    {
        name: "Material UI",
        icon: SiMui,
        color: "#0081CB",
        bgColor: "#111",
        extensionName: "jsx",
        code: `
import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton() {
    return <Button variant="contained">Hello world</Button>;
}
`,
    },
    {
        name: "EJS",
        icon: FaNodeJs,
        color: "#FFF",
        bgColor: "#222",
        extensionName: "ejs",
        code: `
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>EJS</title>
    </head>
    <body>
        <% if (user) { %>
            <h2><%= user.name %></h2>
        <% } %>
    </body>
</html>
`,
    },
    {
        name: "Node",
        icon: DiNodejs,
        color: "#68A063",
        bgColor: "#333",
        extensionName: "js",
        code: `
const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello World");
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
})
`,
    },
    {
        name: "Express",
        icon: BsFiletypeJs,
        color: "#CCC",
        bgColor: "#777",
        extensionName: "js",
        code: `
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
`,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#4DB33D",
        bgColor: "#222",
        extensionName: "js",
        code: `
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sampleDB", {
    useNewUrlParser: true,
});
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
const User = mongoose.model("User", userSchema);
const user = new User({
    name: "Akash",
    age: 23,
});
user.save();
`,
    },
    {
        name: "SQL",
        icon: SiMysql,
        color: "#4479A1",
        bgColor: "#222",
        fileName: "Table",
        extensionName: "sql",
        code: `
CREATE TABLE Persons
(
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
SELECT * FROM Persons;

`,
    },
    {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        bgColor: "#222",
        code: `
> git init
> git add .
> git commit -m "Initial Commit"
> git push origin master
`,
    },
];

export const contact = {
    email: "akash3.11.2000@gmail.com",
    mobile: "9083354110",
};
