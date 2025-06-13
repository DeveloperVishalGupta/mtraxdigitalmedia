import '../styles/globals.css';
import { Link } from '@heroui/link';
import clsx from 'clsx';

import { Providers } from './providers';

import { fontSans } from '../config/fonts';
import { Navbar } from '../components/navbar';
import GetInTouch from '../components/GetInTouch';

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto flex-grow md:px-16 xl:px-28">
              {children}
            </main>
            {/* <Footer /> */}
            <footer className="w-full  py-3">
              <div className="grid grid-cols-4">
                <div>
                  <GetInTouch />
                </div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">HeroUI</p>
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
