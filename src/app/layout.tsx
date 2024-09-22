import { Vazirmatn } from "next/font/google";

import "@/styles/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--vazirmatn",
});

export default function SharedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
