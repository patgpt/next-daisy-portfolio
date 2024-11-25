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
        className={clsx(fontSans.variable, fontMono.variable, "bg-gradient-to-tr from-primary/40 to-secondary40 antialiased")}
      >
        <Header>
          {children}
        </Header>
        <Footer />
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=my-portfolio-daisy"></script>
      </body>
    </html>
  );
}
