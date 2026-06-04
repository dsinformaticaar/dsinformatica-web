import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DS Informática | Soporte IT Empresarial",
  description:
    "Soporte IT, servidores, redes, backups, monitoreo y seguridad informática para empresas.",
  keywords: [
    "soporte IT",
    "informática",
    "redes",
    "servidores",
    "backups",
    "seguridad informática",
    "fortinet",
    "pfsense",
    "córdoba",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}