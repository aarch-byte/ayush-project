import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Instrument_Serif, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AYUSH® — The Digital Universe",
  description:
    "A curious mind without fixed boundaries. Exploring business, finance, technology, data analytics, and digital innovation.",
  keywords: [
    "Ayush",
    "Digital Universe",
    "Business",
    "Finance",
    "Data Analytics",
    "Entrepreneurship",
    "IIM Bangalore",
    "GNDU",
  ],
  authors: [{ name: "Ayush" }],
  creator: "Ayush",
  openGraph: {
    title: "AYUSH® — The Digital Universe",
    description: "I'm not here to fit into a box. I'm here to explore what's outside it.",
    type: "website",
    locale: "en_US",
    siteName: "AYUSH®",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYUSH® — The Digital Universe",
    description: "I don't have a finished story. I'm busy building one.",
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-universe-bg text-universe-text font-sans antialiased selection:bg-universe-accent selection:text-universe-bg flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-universe-accent text-universe-bg font-mono text-xs uppercase font-bold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
