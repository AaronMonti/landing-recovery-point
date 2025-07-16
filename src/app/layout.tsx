import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Recovery Point - Centro de Rehabilitación Física",
  description: "Centro especializado en fisioterapia y rehabilitación física. Recupera tu movilidad y bienestar con nuestros expertos fisioterapeutas.",
  keywords: "fisioterapia, rehabilitación, kinesiología, terapia física, recuperación deportiva",
  authors: [{ name: "Recovery Point" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#18759F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
