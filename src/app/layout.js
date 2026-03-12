import "./globals.css"
import AnimatedFavicon from "@/components/Global/AnimatedFavicon"

const siteUrl = "https://www.oriture.co";
const ogImage = "/oritrueCover.png";
const title = "Oriture: Powering Business Through Design & Development";
const description = "Oriture is a global design and development studio with 30+ projects, 20+ clients, a team of 7, and work across 11 countries, building scalable digital products through design and technology.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Oriture",
  },
  description,
  keywords: [
    "Oriture", "oriture", "oriture.co",
    "UI/UX design agency", "web design agency", "branding agency",
    "digital product studio", "web development agency",
    "startup design agency", "MVP development",
    "Next.js development", "React development",
    "design and development studio", "digital agency Bangladesh",
    "product design", "brand identity", "pitch deck design",
    "website design", "mobile app design", "UX audit",
    "Oriture design", "Oriture agency",
  ],
  authors: [{ name: "Oriture Studio", url: siteUrl }],
  creator: "Oriture",
  publisher: "Oriture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Oriture",
    images: [{ url: ogImage, width: 1200, height: 630, type: "image/png", alt: title }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@oriture_co",
    creator: "@oriture_co",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon1.png", type: "image/png" },
    ],
    shortcut: "/favicon1.png",
  },
  verification: {
    google: "",   // paste Google Search Console verification token here when available
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Oriture",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/LOGO.svg`,
        width: 150,
        height: 38,
      },
      description,
      foundingDate: "2023",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 7 },
      areaServed: "Worldwide",
      sameAs: [
        "https://www.linkedin.com/company/oriture",
        "https://www.instagram.com/oriture.co",
        "https://www.facebook.com/oriture.co",
        "https://www.behance.net/oriture",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@oriture.co",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Oriture",
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/work?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Oriture Design & Development Studio",
      url: siteUrl,
      image: `${siteUrl}${ogImage}`,
      priceRange: "$$",
      serviceType: ["UI/UX Design", "Branding", "Web Development", "MVP Development", "Pitch Deck Design"],
      areaServed: { "@type": "Place", name: "Worldwide" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Design & Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pitch Deck Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Design" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon1.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black" suppressHydrationWarning>
        <AnimatedFavicon />
        {children}
    </body>
    </html>
  )
}
