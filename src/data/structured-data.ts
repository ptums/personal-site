// Builds the JSON-LD graph that Layout.astro puts on every page. Search engines and
// AI models use it to connect Peter, his business and his pages as one entity.
import {
  BUSINESS,
  EMAIL,
  PERSON,
  SERVICES,
  SERVICE_AREAS,
  SITE_URL,
} from "./site";

export type Crumb = { name: string; path: string };

export const IDS = {
  website: `${SITE_URL}/#website`,
  person: `${SITE_URL}/#person`,
  business: `${SITE_URL}/#business`,
};

const person = {
  "@type": "Person",
  "@id": IDS.person,
  name: PERSON.name,
  alternateName: PERSON.alternateName,
  jobTitle: PERSON.jobTitle,
  description: PERSON.description,
  url: `${SITE_URL}/`,
  email: EMAIL,
  image: PERSON.image,
  sameAs: PERSON.sameAs,
  worksFor: { "@id": IDS.business },
};

const business = {
  "@type": "ProfessionalService",
  "@id": IDS.business,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: PERSON.description,
  url: `${SITE_URL}/`,
  email: EMAIL,
  logo: BUSINESS.logo,
  image: PERSON.image,
  founder: { "@id": IDS.person },
  areaServed: SERVICE_AREAS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: SERVICES.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": IDS.business },
        areaServed: SERVICE_AREAS,
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": IDS.website,
  name: PERSON.name,
  url: `${SITE_URL}/`,
  description: PERSON.description,
  inLanguage: "en",
  publisher: { "@id": IDS.person },
};

export function buildGraph(opts: {
  url: string;
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
  extra?: Record<string, unknown>[];
}) {
  const webpage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.person },
    inLanguage: "en",
  };
  const nodes: Record<string, unknown>[] = [website, person, business, webpage];

  // Home is implied as the first crumb; pages pass the rest of their trail
  if (opts.breadcrumbs?.length) {
    const trail = [{ name: "Home", path: "/" }, ...opts.breadcrumbs];
    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${opts.url}#breadcrumb`,
      itemListElement: trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: new URL(crumb.path, SITE_URL).href,
      })),
    };
    webpage.breadcrumb = { "@id": breadcrumb["@id"] };
    nodes.push(breadcrumb);
  }

  nodes.push(...(opts.extra ?? []));
  return { "@context": "https://schema.org", "@graph": nodes };
}

// JSON inside <script> must not contain "</" or it could close the tag early
export const toScriptJson = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
