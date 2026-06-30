import type { Metadata } from "next";
import { Geist, Geist_Mono, Shippori_Mincho } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-PHQXK6MG98";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yomimado91.com"),
  title: {
    default: "読み窓91 | 著名人が薦める本のキュレーション",
    template: "%s | 読み窓91",
  },
  description:
    "経営者、文学者、映画監督、音楽アーティスト、コメディアン、料理人、スポーツ選手……実際に著名人が薦めた本を出典付きでご紹介するキュレーションサイト。Kindleセール情報も。",
  openGraph: {
    siteName: "読み窓91",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
  },
  verification: {
    google: "mzDW1XI5MoyqTVF8d9oclsAdjFtXwb5qdhpn02Mzw7Y",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
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
      className={`${geistSans.variable} ${geistMono.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
