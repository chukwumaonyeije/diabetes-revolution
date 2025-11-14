import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Diabetes Revolution - GDM Learning Platform',
  description: 'Interactive quiz platform for learning about Gestational Diabetes Mellitus',
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
