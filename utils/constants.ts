export type Navigation = { name: string; href: string; client: boolean };
export type Link = { id: number; slug: string; label: string };

export const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
    client: true,
  },
  {
    name: "Blog",
    href: "/blog",
    client: true,
  },
  {
    name: "Resume",
    href: "/images/PFT-Resume-2026.pdf",
    client: false,
  },
];

export const CONTACTS: Link[] = [
  {
    id: 1,
    slug: "https://x.com/ptums923",
    label: "X",
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

export type CoreCompetencySection = {
  title: string;
  body: string;
};

export const CORE_COMPETENCIES: CoreCompetencySection[] = [
  {
    title: "AI & Emerging Technologies",
    body:
      "Claude Code · Cursor · GitHub Copilot · Multi-Agent Orchestration · Agent Skills & MCP Integrations · Prompt & Context Engineering · Scripting & Prototyping",
  },
  {
    title: "Languages & Frameworks",
    body:
      "TypeScript · JavaScript · Python · PHP · Node.js · React.js · Next.js · GraphQL · Laravel",
  },
  {
    title: "Databases & Storage",
    body: "SQL · NoSQL",
  },
  {
    title: "Cloud & Infrastructure",
    body:
      "AWS · GCP · Azure · Docker · CI/CD · Git · GitHub Actions · GitLab CI/CD · Apache Airflow · Monorepos",
  },
  {
    title: "Testing & Quality",
    body:
      "Jest · React Testing Library · Playwright · TestCafe · SonarQube · OpenObserve · Splunk · E2E Testing · Automation Testing · Regression Testing",
  },
  {
    title: "Practices & Tools",
    body: "Agile/SDLC · Web Performance Optimization · JIRA · Confluence",
  },
  {
    title: "Leadership & Collaboration",
    body:
      "Team Leadership & Mentorship · Engineer Onboarding · Cross-functional Collaboration · Stakeholder Communication · Hiring & Interviewing · Technical Roadmap Planning",
  },
];

export const VIDEO_CDN_BASE_URL: string =
  "https://res.cloudinary.com/tumulty-web-services";

export const EMAIL: string = "peter@tumulty.me";
