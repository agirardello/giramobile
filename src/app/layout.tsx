import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gira Mobile",
    template: "%s | Gira Mobile",
  },
  description: "Minimalistic and functional apps that everyone can use.",
  metadataBase: new URL("https://gira.me"),
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F2F4F8]">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
