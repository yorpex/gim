import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "gim.",
  description:
    "An open source design system for building modern websites and applications by Yorpex.",
  authors: [{ name: "Luis Felipe", url: "https://felipes.dev" }],
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
