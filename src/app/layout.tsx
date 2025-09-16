import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Star Wars Films",
  description: "A Galaxy Far Away",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-background antialiased scroll-smooth`}>
        <Navbar/>
          <main className="min-h-screen">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
