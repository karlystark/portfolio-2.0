import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav/Nav';

const googleSans = Google_Sans_Code({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "k.stark",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${googleSans.className} antialiased`}
      >
         <Nav />
        {children}
      </body>
    </html>
  );
}
