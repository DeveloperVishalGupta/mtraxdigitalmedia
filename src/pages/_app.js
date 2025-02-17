import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
export default function App({ Component, pageProps }) {
  const renderWithLayout = Component.getLayout || ((page) => page)
  return (
    <NextUIProvider>
      {renderWithLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  );
}
