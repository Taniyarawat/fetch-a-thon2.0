import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Fetch-A-Thon || Team",
  description: "Powered by fetch.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}