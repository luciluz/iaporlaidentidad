import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA por la Identidad",
  description:
    "Un sistema de inteligencia artificial al servicio de la búsqueda de los nietos y nietas que aún faltan. Una colaboración entre Abuelas de Plaza de Mayo, la FCEyN-UBA y Quantit.",
  metadataBase: new URL("https://iaporlaidentidad.org"),
  openGraph: {
    title: "IA por la Identidad",
    description:
      "Herramientas de IA para ampliar la búsqueda de los nietos y nietas de Abuelas de Plaza de Mayo.",
    url: "https://iaporlaidentidad.org",
    siteName: "IA por la Identidad",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
