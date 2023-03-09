import { Link } from "types/Link";
import { Navigation } from "types/Navigation";

export const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Previous Work",
    href: "/previous-work",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
  {
    name: "Free Advice",
    href: "/contact",
  },
  {
    name: "Resume",
    href: "/images/PFT-Resume-2023.pdf",
  },
];

export const CONTACTS: Link[] = [
  {
    id: 1,
    slug: "https://twitter.com/ptums923",
    label: "Twitter",
  },
  {
    id: 3,
    slug: "https://github.com/ptums",
    label: "Github",
  },
  {
    id: 4,
    slug: "https://www.linkedin.com/in/petertumulty",
    label: "LinkedIn",
  },
  {
    id: 5,
    slug: "mailto:ptumulty923@gmail.com",
    label: "Email",
  },
];

export const RECENT_STACK: string[] = [
  "TypeScript",
  "React",
  "Svelte",
  "React Testing Library",
  "Tailwind.css",
  "Framer Motion",
  "GraphQL",
  "PostgreSQL",
];

export const INTRO = [
  "Hello! I'm Peter, the owner and lead developer at Tumulty Web Services. I am a software engineer with 10+ years of experience, and I take pride in crafting top-notch software solutions that deliver a fantastic user experience.",
  "I have plenty of experience in full stack development using JavaScript, PHP, and Python. However, after realizing my true passion is for developing beautiful and interactive user interfaces, I shifted my focus entirely to front end development. I am now dedicated to expanding my capabilities in this area and bringing my expertise to projects that require exceptional user experiences.",
  "I'm also passionate about teaching! In addition to creating software, I love helping others learn how to build software and kickstart their careers in tech. Through 1:1 mentorship sessions and instructing multiple web development courses at various coding bootcamps, I've gained extensive experience in guiding and supporting aspiring developers.",
  "My capabilities include advanced front-end engineering, full-stack web development, mentoring junior developers and recent boot camp graduates, documentation and proposal writing, web application architecture, web performance optimization, web vitals improvement, API and SDK integrations, and technical on-site SEO.",
];

export const CONTENTFUL_GRAPHQL_API_URL =
  process.env.CONTENTFUL_GRAPHQL_API_URL;
export const CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN =
  process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;
