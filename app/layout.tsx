import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Tour Driver | Your Trusted Travel Companion in Vietnam",
  description:
    "Safe, comfortable, and unforgettable journeys across Vietnam. Professional tour driver with premium vehicle, free WiFi, and expert local knowledge.",
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
