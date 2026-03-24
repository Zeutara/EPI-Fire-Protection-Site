import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "EPI Fire Protection | GTA's #1 Fire Safety Partner — 33+ Years, 1,000+ Clients",
  description:
    "Toronto's most trusted fire protection company. Inspections, installations, sprinkler systems, and 24/7 emergency response for commercial, industrial, and residential properties across the GTA. 33+ years. 88 certified technicians. Get a free quote.",
  keywords: [
    "fire protection Toronto",
    "fire alarm inspection GTA",
    "sprinkler installation Toronto",
    "fire safety compliance Ontario",
    "commercial fire protection",
    "fire protection North York",
    "fire protection Mississauga",
    "fire protection Brampton",
    "fire alarm testing",
    "fire sprinkler maintenance",
    "24/7 emergency fire protection",
    "property manager fire safety",
    "condo fire protection Toronto",
  ],
  openGraph: {
    title: "EPI Fire Protection | GTA's #1 Fire Safety Partner",
    description:
      "33+ years protecting the GTA. Inspections, installations, maintenance, and 24/7 emergency response. Get a free quote today.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
