import type { Metadata } from 'next';
import './globals.css';
import './styles/tokens.css';
import './styles/dashboard.css';
import './styles/students.css';
import './styles/staff.css';

export const metadata: Metadata = {
  title: 'AMS As-Sadid',
  description: 'As-Sadid Management System',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
