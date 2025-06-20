'use client';
import '../styles/globals.css';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontSans } from '../config/fonts';
import { Navbar } from '../components/navbar';
import GetInTouch from '../components/GetInTouch';
import { title } from '../components/primitives';
import { siteConfig } from '../config/site';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

// export const viewport = {
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// };

export default function RootLayout({ children }) {
  const pageRoutes = siteConfig.pageRoutes;
  const [companyLinks, setCompanyLinks] = useState([]);
  const [usefulLinks, setUsefulLinks] = useState([]);

  useEffect(() => {
    if (pageRoutes.length > 0) {
      setCompanyLinks(pageRoutes.filter((item) => item.type === 1));
      setUsefulLinks(pageRoutes.filter((item) => item.type === 2));
    }
  }, [pageRoutes]);
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
            <footer className="w-full px-0 sm:px-36 py-3">
              <div className="grid gap-12 sm:gap-0 sm:grid-cols-3 justify-center items-center">
                <div className="text-center sm:text-start">
                  <GetInTouch />
                </div>
                <div className="text-center sm:text-start">
                  <h1 className={title({ size: 'sm' })}>Company</h1>
                  <ul className="flex mt-7 flex-col gap-4 justify-start ml-2">
                    {companyLinks
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map((item, index) => (
                        <NextLink
                          key={index}
                          className="
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary  data-[active=true]:font-medium'
                  "
                          color="foreground"
                          href={item.href}
                        >
                          {item.label}
                        </NextLink>
                      ))}
                  </ul>
                </div>
                <div className="text-center md:text-start">
                  {' '}
                  <h1 className={title({ size: 'sm' })}>Useful links</h1>
                  <ul className="flex flex-col gap-4 mt-7 justify-start ml-2">
                    {usefulLinks
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map((item, index) => (
                        <NextLink
                          key={index}
                          className="
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  "
                          color="foreground"
                          href={item.href}
                        >
                          {item.label}
                        </NextLink>
                      ))}
                  </ul>
                </div>
                <div>1</div>
              </div>

              <div className="flex justify-center items-center">
                <NextLink
                  className="flex items-center gap-1 text-current"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">MG+</p>
                </NextLink>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
