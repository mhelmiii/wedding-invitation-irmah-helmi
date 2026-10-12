import type { Metadata } from "next";
import { Alex_Brush, Open_Sans } from "next/font/google";
import "./globals.css";

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invitation Wedding I & H",
  description: "Invitation Wedding Irmah Gisfas & Muhammad Helmi Gusthomuloh",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${alexBrush.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex justify-center items-center min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

//min-h-full flex flex-col
