import { Vazirmatn } from "next/font/google";

import React from "react";

import { TRPCProvider } from "@/server/trpc/client";

import "@/styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--vazirmatn",
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
