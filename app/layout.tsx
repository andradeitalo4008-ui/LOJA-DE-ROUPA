import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Street Wave | Vista a atitude',
  description: 'Streetwear autoral, drops limitados e peças que carregam identidade.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
