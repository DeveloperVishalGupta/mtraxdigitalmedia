import "@/styles/globals.css";
import dynamic from "next/dynamic";
import { NextUIProvider } from "@nextui-org/react";
// import dynamic from 'next/dynamic';
const StoreProvider = dynamic(() => import('@/redux/StoreProvider'), {
  ssr: false,
});
export default function App({ Component, pageProps }) {
  const renderWithLayout = Component.getLayout || ((page) => page)
  return (
    <NextUIProvider>
      <StoreProvider>
        {renderWithLayout(<Component {...pageProps} />)}
      </StoreProvider>
    </NextUIProvider>
  );
}
