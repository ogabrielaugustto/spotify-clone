import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen your favorite music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-300 ">{children}</body>
    </html>
  );
}
