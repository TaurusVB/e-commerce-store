import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";

import "./globals.css";

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
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
