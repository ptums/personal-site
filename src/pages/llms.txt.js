import { CASE_STUDIES } from "../data/case-studies";
import { FAQ } from "../data/faq";
import {
  BOOKING_URL,
  BUSINESS,
  EMAIL,
  PERSON,
  SERVICES,
  SERVICE_AREA_TEXT,
  SITE_URL,
  isPlaceholder,
} from "../data/site";

// Plain-Markdown summary for AI assistants (llmstxt.org format), built from the same
// data as the pages. Placeholder FAQ answers are left out until they're filled in.
export function GET() {
  const answered = FAQ.filter((item) => !isPlaceholder(item.answer));
  const lines = [
    `# ${PERSON.name}`,
    "",
    `> ${PERSON.description}`,
    "",
    `${PERSON.name} is a ${PERSON.jobTitle.toLowerCase().replace("&", "and")} available for long-term contract work through ${BUSINESS.legalName}. His focus: ${PERSON.tagline}.`,
    "",
    "## Services",
    "",
    ...SERVICES.map((service) => `- ${service}`),
    "",
    "## Results",
    "",
    ...CASE_STUDIES.map(
      (study) => `- [${study.title}](${SITE_URL}/work/${study.slug}): ${study.result}`,
    ),
    "- A life coach's site cut hosting from $240 a year to $8.",
    "",
    "## Where he works",
    "",
    `${SERVICE_AREA_TEXT}.`,
    "",
    "## How to work with him",
    "",
    `- [Book an intro call](${BOOKING_URL}): a 30-minute call to start.`,
    `- [Work with me](${SITE_URL}/work-with-me): services, results, how an engagement works, and questions.`,
    `- Email: ${EMAIL}`,
    "",
    ...(answered.length
      ? [
          "## Questions",
          "",
          ...answered.flatMap((item) => [`### ${item.question}`, "", item.answer, ""]),
        ]
      : []),
    "## Key pages",
    "",
    `- [Home](${SITE_URL}/): projects and background`,
    `- [Work with me](${SITE_URL}/work-with-me)`,
    ...CASE_STUDIES.map((study) => `- [Case study: ${study.title}](${SITE_URL}/work/${study.slug})`),
    `- [Testimonials](${SITE_URL}/testimonials): what clients and colleagues say`,
    `- [Words](${SITE_URL}/words): writing on engineering and product`,
    "",
    "## Profiles",
    "",
    ...PERSON.sameAs.map((url) => `- ${url}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
