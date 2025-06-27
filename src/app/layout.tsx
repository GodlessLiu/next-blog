import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import { ProgressBarProvider } from '@/components/ProgressBarProvider';

export const metadata: Metadata = {
  title: `Hilary Liu's blog`,
  description: `This is Hilary Liu's blog`,
};

const mali = localFont({
  src: '../assets/Mali-Light.ttf',
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mali.className} antialiased`}>
        <ThemeProvider attribute="class" enableColorScheme={false} defaultTheme="dark" enableSystem={false}>
          <ProgressBarProvider>
            <div className="h-screen overflow-auto flex flex-col py-4">
              <Header />
              <main className="py-10">
                {children}
                {modal}
              </main>
              <Footer />
            </div>
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
