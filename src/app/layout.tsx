import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OceanBackground from "@/components/OceanBackground";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetreyseries.com"),
  title: {
    default: "The Trey Series — Children's Books About Love, Belonging & New Beginnings",
    template: "%s | The Trey Series",
  },
  description:
    "The Trey Series by Dr. Victoria Schmitt is a children's book collection about adoption, emotional safety, and discovering that family grows through love. For families, caregivers, educators, and counselors.",
  keywords: [
    "children's books about adoption",
    "emotional learning for children",
    "Trey Series",
    "Dr. Victoria Schmitt",
    "caregiver companion guides",
    "family healing stories",
    "books about belonging",
    "children's grief and loss books",
    "social emotional learning",
    "adoption books for kids",
  ],
  authors: [{ name: "Dr. Victoria Schmitt" }],
  creator: "Lifestyle Creations",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Trey Series",
    title: "The Trey Series — Children's Books About Love, Belonging & New Beginnings",
    description:
      "Gentle ocean stories about adoption, grief, healing, and finding family — by Dr. Victoria Schmitt.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Trey Series by Dr. Victoria Schmitt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Trey Series",
    description:
      "Children's books about love, belonging, and new beginnings by Dr. Victoria Schmitt.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif" }}
      >
        <OceanBackground />
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
