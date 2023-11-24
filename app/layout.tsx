import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";

import "./globals.css";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce store",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
