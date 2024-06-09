import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/main-header/header";

export const metadata: Metadata = {
  title: "Nextipe",
  description: "View & share delicious food from all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
