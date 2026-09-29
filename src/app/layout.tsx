import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi",
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
const ogImageUrl = process.env.NEXT_PUBLIC_OG_IMAGE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ByteSpace — Digital Learning & Creator Marketplace",
    template: "%s | ByteSpace",
  },
  description:
    "ByteSpace is a modern digital learning and creator marketplace to explore, learn, and master design, digital creation, and business skills with expert guidance.",
  keywords: [
    "ByteSpace",
    "Digital Learning Marketplace",
    "Online Courses",
    "Creator Economy",
    "Digital Asset Creation",
    "UI/UX Design",
    "Figma Courses",
    "Web Design",
    "Digital Skills",
    "Creative Tutorials",
    "Learn to Code",
    "Next.js Marketplace",
    "Design Thinking",
    "Creative Community",
  ],
  authors: [{ name: "Syed Shafin Ahmed", url: "https://github.com/syedshafinahmed" }],
  creator: "Syed Shafin Ahmed",
  publisher: "ByteSpace",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ByteSpace",
    title: "ByteSpace — Digital Learning & Creator Marketplace",
    description:
      "Unlock your potential as a creator with ByteSpace. Discover top-rated courses, expert mentors, and hands-on digital skills.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "ByteSpace — Digital Learning & Creator Marketplace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ByteSpace — Digital Learning & Creator Marketplace",
    description:
      "Unlock your potential as a creator with ByteSpace. Discover top-rated courses, expert mentors, and hands-on digital skills.",
    images: [ogImageUrl],
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

  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon.png" }],
  },

  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#003BE2",
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "ByteSpace",
              url: siteUrl,
              logo: `${siteUrl}/images/logo/Header_Logo.png`,
              description:
                "ByteSpace is a modern digital learning and creator marketplace to explore, learn, and master design, digital creation, and business skills with expert guidance.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "BD",
              },
              sameAs: [
                "https://github.com/syedshafinahmed/bytespace",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
