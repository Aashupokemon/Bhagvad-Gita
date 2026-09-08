import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Gita Path — Small lessons, timeless wisdom',
  description:
    'Explore all 18 chapters of the Bhagavad Gita with short lessons, Sanskrit shlokas, everyday stories and thoughtful quizzes for adults and children.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
