import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diabetes Revolution 2026 - Learn About Gestational Diabetes",
  description: "A fun, image-driven quiz app for learning about Gestational Diabetes. Created by Dr. Onyeije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
