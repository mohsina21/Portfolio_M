import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm } from "react-icons/fa";
import { SiFigma, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const SOCIAL_MEDIA = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/mohsina21",
  },
  {
    id: 2,
    name: "Twitter",
    url: "https://twitter.com/notmohsina",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohsina-parveen-577367203/",
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/mohsina.core/",
  }
];

export const TECH_STACK = [
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
  { icon: FaReact, name: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { icon: FaReact, name: "React Native", color: "text-blue-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: FaGitAlt, name: "Git", color: "text-red-500" },
  { icon: SiFigma, name: "Figma", color: "text-pink-500" },
  { icon: FaNpm, name: "NPM", color: "text-red-500" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400" },
];

export const PROJECTS = [
  {
    img: "/InterviewD.png",
    title: "InterviewD",
    desc: "AI-powered interview preparation platform with personalized mock interviews and feedback.",
    url: "https://interviewd.vercel.app/",
    tags: ["React", "AI", "Next.js"],
  },
  {
    img: "/Flow4Life.png",
    title: "Flow4Life",
    desc: "Smart blood donation platform with real-time alerts and location-based matching.",
    url: "https://flow4life.vercel.app/",
    tags: ["React", "Maps", "Real-time"],
  },
  {
    img: "/potterPedia.png",
    title: "DailyProphet",
    desc: "Magical encyclopedia for Harry Potter fans with detailed character and house information.",
    url: "https://dailyprophetonline.vercel.app/",
    tags: ["React", "API", "Database"],
  },
  {
    img: "/ShelfMate.png",
    title: "ShelfMate",
    desc: "Personalized book recommendation platform based on user preferences.",
    url: "https://shelf-mate-ten.vercel.app/",
    tags: ["React", "ML", "Books"],
  },
  {
    img: "/FashionGuide.png",
    title: "FashionGuide",
    desc: "Ultimate style companion with trending tips and outfit inspirations.",
    url: "https://fashion-guide.vercel.app/",
    tags: ["React", "Fashion", "Trends"],
  },
];

export const NAV_ITEMS = [
  { name: "Home" },
  { name: "About" },
  { name: "Projects" },
];

export const KAWAII_MOODS = ["blissful", "excited", "happy"];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
};
