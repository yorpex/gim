import { Providers } from "@/components/providers";
import "@/styles/globals.css";

import { GeistMono as FontMono } from "geist/font/mono";
import { GeistSans as FontSans } from "geist/font/sans";

export const metadata = {
  title: "gim.",
  description:
    "An open source design system for building modern websites and applications by Yorpex.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`min-h-screen bg-background font-sans antialiased ${FontSans.variable} ${FontMono.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
