import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital Store",
  description: "Your one-stop shop for digital products",
  openGraph: {
    title: "Digital Store",
    description: "Your one-stop shop for digital products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Store",
    description: "Your one-stop shop for digital products",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-secondary-gray text-primary-navy font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
