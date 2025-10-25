import type { Metadata } from "next";
import { Inter, Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Lunim Design System",
  description: "A beautifully rebranded collection of Shadcn/ui components designed specifically for Lunim Studio's creative workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSansDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
