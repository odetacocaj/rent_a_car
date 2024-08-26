import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components";
export const metadata: Metadata = {
  title: "RoadReady",
  description: "Discover cars you can rent for any occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
