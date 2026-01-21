import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppinsFont = localFont({
  src: [
    {
      path: './fonts/Poppins-Light.ttf',       
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Regular.ttf',     
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',        
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Black.ttf',       
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-BlackItalic.ttf', 
      weight: '900',
      style: 'italic',
    },
  ],
  variable:  '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Imaray Ulloa",
  description: "Imaray Ulloa - YouTuber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
