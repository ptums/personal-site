import { Link } from "types/Link";
import { Navigation } from "types/Navigation";

export const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
    client: true,
  },
  {
    name: "Previous Work",
    href: "/previous-work",
    client: true,
  },
  {
    name: "Blog",
    href: "/blog",
    client: true,
  },
  {
    name: "Reviews",
    href: "/reviews",
    client: true,
  },
  {
    name: "Resume",
    href: "/images/PFT-Resume-2025.pdf",
    client: false,
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
    slug: "mailto:peter@tumulty.me",
    label: "Email",
  },
];

export const RECENT_STACK: string[] = [
  "Angular",
  "GraphQL",
  "Nx Monorepo",
  "React.js",
  "SonarCube",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React Native",
  "Node.js",
  "Jest",
  "React Testing Library",
];

export const CONTENTFUL_GRAPHQL_API_URL: unknown | string =
  process.env.CONTENTFUL_GRAPHQL_API_URL;
export const CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN: unknown | string =
  process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;

export const VIDEO_CDN_BASE_URL: string =
  "https://res.cloudinary.com/tumulty-web-services";

export const EMAIL: string = "peter@tumulty.me";
