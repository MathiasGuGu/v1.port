import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotifyProvider from "./_components/Spotify/SpotifyProvider";

const sora = Inter({ subsets: ["latin"] });

const generate_metadata = () => {
  return {
    title: "Mathias Gumpen Gundersen",
    description: "Software developer and creator of things.",
  };
};

export const metadata: Metadata = generate_metadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <SpotifyProvider>{children}</SpotifyProvider>
      </body>
    </html>
  );
}
