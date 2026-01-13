import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Travel Driver & Local Guide | Explore with a Local Expert",
  description:
    "Safe, comfortable, and flexible private tours with a professional tech driver. Explore the city with a local expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
