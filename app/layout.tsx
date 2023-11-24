import { Urbanist } from "next/font/google";

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
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
