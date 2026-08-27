import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://humgalaxyheights.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HUM Galaxy Heights | Luxury 2 & 3 BHK Apartments in Kandivali West",
    template: "%s | HUM Galaxy Heights",
  },
  description:
    "Discover HUM Galaxy Heights by HUM Developers in Charkop, Kandivali West, Mumbai. A G+19 storey landmark tower offering luxury 2 & 3 BHK Vastu-compliant residences with rooftop stargazing deck, fitness amenities, and prime metro connectivity. MahaRERA: PM1180002600762.",
  keywords: [
    "HUM Galaxy Heights",
    "HUM Galaxy Heights Kandivali West",
    "HUM Developers",
    "2 BHK luxury apartments Kandivali West",
    "3 BHK luxury apartments Kandivali West",
    "Flats in Kandivali West Mumbai",
    "New residential projects in Kandivali West",
    "Charkop Sector 1 Kandivali West flats",
    "Vastu compliant homes Kandivali West",
    "Luxury high rise tower Kandivali West",
    "Real estate in Kandivali West",
    "Properties near Kandivali West Metro Station",
  ],
  authors: [{ name: "HUM Developers", url: "https://humdevelopers.com" }],
  creator: "HUM Developers",
  publisher: "HUM Developers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HUM Galaxy Heights | Luxury 2 & 3 BHK Apartments in Kandivali West",
    description:
      "Step into elegance at HUM Galaxy Heights – G+19 storey landmark by HUM Developers in Charkop, Kandivali West. Thoughtfully crafted 2 & 3 BHK Vastu-compliant residences with rooftop amenities.",
    url: siteUrl,
    siteName: "HUM Galaxy Heights",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/galaxyImages/tempBanner.jpg",
        width: 1200,
        height: 630,
        alt: "HUM Galaxy Heights Kandivali West Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUM Galaxy Heights | Luxury 2 & 3 BHK Apartments in Kandivali West",
    description:
      "Boutique G+19 storey landmark tower in Charkop, Kandivali West by HUM Developers. Premium 2 & 3 BHK homes with stargazing deck & rooftop wellness.",
    images: ["/assets/galaxyImages/tempBanner.jpg"],
    creator: "@HUMDevelopers",
  },
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
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}/#organization`,
      name: "HUM Developers",
      url: "https://humdevelopers.com",
      logo: `${siteUrl}/assets/logo.svg`,
      description:
        "Building dreams and creating legacies in Mumbai's premium real estate landscape for over 21+ years.",
      email: "info@humdevelopers.com",
      sameAs: [
        "https://www.instagram.com/humdevelopers",
        "https://www.youtube.com/@HumDevelopers-rq1ro",
        "https://www.facebook.com/share/14JzTVqibyp/",
      ],
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${siteUrl}/#project`,
      name: "HUM Galaxy Heights",
      alternateName: "Hum Galaxy Heights Kandivali West",
      description:
        "HUM Galaxy Heights by HUM Developers is a G+19 storey landmark tower offering luxury 2 & 3 BHK Vastu-compliant residences with rooftop amenities in Charkop, Kandivali West, Mumbai.",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shri Hanuman Mandir Road, Charkop Sector 1",
        addressLocality: "Kandivali West",
        addressRegion: "Maharashtra",
        postalCode: "400067",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.2081,
        longitude: 72.8258,
      },
      image: [`${siteUrl}/assets/galaxyImages/tempBanner.jpg`],
      numberOfFloors: 19,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Rooftop Open Gym", value: true },
        { "@type": "LocationFeatureSpecification", name: "Yoga Area", value: true },
        { "@type": "LocationFeatureSpecification", name: "Kids Play Area", value: true },
        { "@type": "LocationFeatureSpecification", name: "Open Theatre", value: true },
        { "@type": "LocationFeatureSpecification", name: "Star Gazing Deck", value: true },
        { "@type": "LocationFeatureSpecification", name: "Multipurpose Turf", value: true },
      ],
      offeredBy: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes HUM Galaxy Heights stand out in Kandivali West?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HUM Galaxy Heights by HUM Developers is designed as a boutique high rise with limited residences, offering a more private, elevated living experience in one of Kandivali West's most well connected pockets.",
          },
        },
        {
          "@type": "Question",
          name: "What types of homes are available at HUM Galaxy Heights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HUM Developers offers intelligently planned 2 and 3 BHK residences at HUM Galaxy Heights, with layouts focused on maximum usable space, natural light, and everyday functionality.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of lifestyle amenities can residents expect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HUM Galaxy Heights brings together rooftop leisure and everyday wellness with amenities like a stargazing deck, fitness center, jogging track, yoga area, reflexology path, and curated seating spaces, along with essentials like high speed elevators and advanced security.",
          },
        },
        {
          "@type": "Question",
          name: "How well connected is HUM Galaxy Heights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HUM Galaxy Heights is strategically located near metro stations, reputed schools, hospitals, and key road networks, ensuring seamless access to daily essentials and the rest of Mumbai.",
          },
        },
        {
          "@type": "Question",
          name: "Is HUM Galaxy Heights a good choice for long term living and investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With its prime Kandivali West location, efficient planning, and the credibility of HUM Developers, HUM Galaxy Heights offers a strong balance of lifestyle comfort and long term value appreciation.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabinetGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M958JT94');`,
          }}
        />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M958JT94"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
