import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "move:elevator — Full-Service Digitalagentur",
  description:
    "Strategische Präzision trifft auf kreative Exzellenz. Digitalagentur für Strategie, Online-Marketing, Web-Entwicklung und KI-Transformation.",
  openGraph: {
    title: "move:elevator — Full-Service Digitalagentur",
    description:
      "Strategische Präzision trifft auf kreative Exzellenz für Ihren digitalen Erfolg.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
