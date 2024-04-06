import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/provider/modal-providers'
import { Toaster } from '@/components/ui/sonner'
import { BillingProvider } from '@/provider/billing-provider'
import { useEffect } from "react";

const font = Roboto({
  weight: ["700"],
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Auto-m8",
  description: "Automate Automation by auto-m8.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
  >
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BillingProvider>
            <ModalProvider>
              {children}
              <Toaster />
            </ModalProvider>
          </BillingProvider>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
