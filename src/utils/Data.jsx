import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaSass, FaJava} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import project1 from '../assets/E-commerce.png';
import project2 from '../assets/Blog-App.png';
import project3 from '../assets/Food-App.png';
import project4 from '../assets/Real-Estate.png'

export const Skills = [
    {
        id: 0,
        tech: 'REACT JS',
        icon: <FaReact/>
    },
    {
        id: 1,
        tech: 'JAVASCRIPT',
        icon: <IoLogoJavascript/>
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt/>
    },
    {
        id: 3,
        tech: 'HTML',
        icon: <FaHtml5/>
    },
    {
        id: 4,
        tech: 'SCSS',
        icon: <FaSass/>
    },
    {
        id: 5,
        tech: 'BOOTSTRAP',
        icon: <FaBootstrap/>
    },
    {
        id: 6,
        tech: 'TAILWIND CSS',
        icon: <SiTailwindcss/>
    },
    {
        id: 7,
        tech: 'JAVA',
        icon: <FaJava/>
    },
]

export const projectDetails = [
    {
        id: 0,
        project_name: "E-Commerce-App",
        project_desc: "It typically include features such as Razor payment gateway, React-Confetti, a beautifull cart section that includes add, remove options and many more. And the UserInterface is so sleek so that the UserExperience would be so smooth. User can order their favourite items.",
        tech_stack: ['REACT JS', 'CSS'],
        project_img: project1,
        project_url: 'https://anukeerth-ek.github.io/E-commerce-React-App/',
        reverse: false

    },
    {
        id: 1,
        project_name: "Blog-App",
        project_desc: "It typically include features such as Razor payment gateway, React-Confetti, a beautifull cart section that includes add, remove options and many more. And the UserInterface is so sleek so that the UserExperience would be so smooth. User can order their favourite items.",
        tech_stack: ['REACT JS', 'TAILWIND CSS'],
        project_img: project2,
        project_url: 'https://anukeerth-ek.github.io/E-commerce-React-App/',
        reverse: true
    },
    {
        id: 2,
        project_name: "Food-App",
        project_desc: "It typically include features such as Razor payment gateway, React-Confetti, a beautifull cart section that includes add, remove options and many more. And the UserInterface is so sleek so that the UserExperience would be so smooth. User can order their favourite items.",
        tech_stack: ['JAVASCRIPT', 'CSS'],
        project_img: project3,
        project_url: 'https://anukeerth-ek.github.io/Food-Delivery-Javascript/',
        reverse: false

    },
    {
        id: 3,
        project_name: "Real-Estate",
        project_desc: "It typically include features such as Razor payment gateway, React-Confetti, a beautifull cart section that includes add, remove options and many more. And the UserInterface is so sleek so that the UserExperience would be so smooth. User can order their favourite items.",
        tech_stack: ['JAVASCRIPT', 'CSS'],
        project_img: project4,
        project_url: 'https://anukeerth-ek.github.io/RealEstate-Javascript/',
        reverse: true

    },
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'My skills',
        href: 'Skills'
    },
    {
        id: 2,
        name: 'My project',
        href: 'Projects'
    },
    {
        id: 3,
        name: 'Contact',
        href: 'Contact'
    }
]