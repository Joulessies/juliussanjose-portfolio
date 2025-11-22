import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import { ThemeProvider } from './providers/theme-provider';
import { ThemeBackground } from './components/theme-background';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Julius San Jose - Home',
  description: 'Julius San Jose - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ThemeBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
