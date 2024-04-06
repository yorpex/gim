"use client";

import { Toolbar } from "../toolbar";
import { Toaster } from "../ui/sonner";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster position="top-center" />
      <Toolbar />
    </ThemeProvider>
  );
}
