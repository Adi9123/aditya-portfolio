import "./globals.css";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aditya-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aditya Shinde — UAV Systems Engineer & FPV Drone Pilot",
  description: "Portfolio of Aditya Shinde — UAV Systems Engineer and FPV Drone Pilot.",
  openGraph: {
    title: "Aditya Shinde — UAV Systems Engineer & FPV Drone Pilot",
    description: "UAV Systems Engineer, FPV Pilot, autonomous drones & robotics.",
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
