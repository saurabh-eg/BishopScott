import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google"; // Corrected import source
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bishop Scott Girls School - Madhopura, Purnea",
  description: "Bishop Scott Girls School is a premier educational institution in Madhopura, Purnea, Bihar, founded by Dr. Sandhya Yadav.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
