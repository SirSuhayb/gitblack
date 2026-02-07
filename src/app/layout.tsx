import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ??
  "https://gitblack-ltjx0m4nr-sirsuhaybs-projects.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "gitBlack",
  description:
    "A Farcaster mini app reframing Black History Month as a GitHub-style dependency tree.",
  openGraph: {
    title: "gitBlack",
    description:
      "A Farcaster mini app reframing Black History Month as a GitHub-style dependency tree.",
    type: "website",
    siteName: "gitBlack",
    url: "/",
    images: [
      {
        url: "/api/og?day=1",
        width: 1200,
        height: 630,
        alt: "gitBlack — Black is in everything.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gitBlack",
    description:
      "A Farcaster mini app reframing Black History Month as a GitHub-style dependency tree.",
    images: ["/api/og?day=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const miniappEmbed = {
    version: "1",
    imageUrl: `${baseUrl}/ogImageApp.png`,
    button: {
      title: "Open",
      action: {
        type: "launch_frame",
        name: "gitBlack",
        url: baseUrl,
        splashImageUrl: `${baseUrl}/icon.svg`,
        splashBackgroundColor: "#0d1117",
      },
    },
  };

  const miniappContent = JSON.stringify(miniappEmbed);

  return (
    <html lang="en">
      <head>
        <meta name="fc:miniapp" content={miniappContent} />
        <meta name="fc:frame" content={miniappContent} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
