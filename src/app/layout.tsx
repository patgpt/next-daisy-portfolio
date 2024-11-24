import clsx from "clsx";
import type { Metadata } from "next";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";
import { fontMono, fontSans } from "./fonts";


export const metadata: Metadata = {
  title: "Patrick Kelly- Portfolio",
  description: "Patrick Kelly's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(fontSans.variable, fontMono.variable, "antialiased")}
      >
        <Header>
          {children}
        </Header>
        <Footer />
      </body>
    </html>
  );
}
