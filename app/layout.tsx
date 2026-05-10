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
  title: "Kenji Ueno | Web制作10年×AI活用エンジニア",
  description:
    "Web制作10年の経験を土台に、Next.js / TypeScript / AI活用へとキャリアを広げるエンジニアのポートフォリオ。Hero・About・Skills・Worksから人柄と技術の両面を伝えます。",
  verification: {
    google: "WwbAXunl4iiy3BOZGgxC009hYP-jY1lf3HAb90TmqMc",
  },
  openGraph: {
    title: "Kenji Ueno | Web制作10年×AI活用エンジニア",
    description:
      "Web制作10年の経験を土台に、Next.js / TypeScript / AI活用へとキャリアを広げるエンジニアのポートフォリオ。",
    url: "https://portfolio-dun-zeta-34.vercel.app/",
    siteName: "Kenji Ueno Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kenji Ueno — Craft meets AI",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenji Ueno | Web制作10年×AI活用エンジニア",
    description:
      "Web制作10年の経験を土台に、Next.js / TypeScript / AI活用へとキャリアを広げるエンジニアのポートフォリオ。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
