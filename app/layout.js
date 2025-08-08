import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Government Perfusionist Association| Sri Lanka",
  description:
    "Perfusion Lanka delivers expert cardiac perfusion services including Cardiopulmonary Bypass, ECMO, Blood Management, and ICU support throughout Sri Lanka.",
  keywords: [
    "Perfusion Lanka",
    "Cardiac Perfusion",
    "ECMO Sri Lanka",
    "Cardiopulmonary Bypass",
    "ICU support Sri Lanka",
    "Medical Perfusion Services",
    "Heart surgery support",
  ],
  authors: [
    {
      name: "Perfusion Lanka Team",
      url: "https://perfusionlanka.lk",
    },
  ],
  creator: "Perfusion Lanka",
  metadataBase: new URL("https://perfusionlanka.lk"),
  openGraph: {
    title: "Perfusion Lanka",
    description:
      "Sri Lanka’s leading provider of professional cardiac perfusion services.",
    url: "https://perfusionlanka.lk",
    siteName: "Perfusion Lanka",
    images: [
      {
        url: "/images/logo/logo.jpeg", // Make sure this exists in /public/images/
        width: 1200,
        height: 630,
        alt: "Perfusion Lanka - Team and Services",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfusion Lanka",
    description:
      "Trusted perfusion experts in Sri Lanka. Cardiopulmonary bypass, ECMO, ICU support, and more.",
    creator: "@PerfusionLanka", // If you have a Twitter handle
    images: ["/images/logo/logo.jpeg"], // Ensure this path is correct
  },
  icons: {
    icon: "/public/images/logo//logo.jpeg",
    shortcut: "/public/images/logo//logo.jpeg",
    apple: "/public/images/logo//logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://perfusionlanka.lk",
    languages: {
      "en-LK": "/en",
      "si-LK": "/si",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-white text-black dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
