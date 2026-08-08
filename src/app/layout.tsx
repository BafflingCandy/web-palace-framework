import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { RouteTransitionProvider } from "@/components/RouteTransitionProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Web Palace | Visual Knowledge Registry",
  description:
    "A minimal visual registry for navigating subject websites as an interactive node graph.",
  openGraph: {
    title: "Web Palace | Visual Knowledge Registry",
    description:
      "A minimal visual registry for navigating subject websites as an interactive node graph."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <RouteTransitionProvider>{children}</RouteTransitionProvider>
      </body>
    </html>
  );
}
