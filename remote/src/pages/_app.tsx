import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>HELLO REMOTE</h1>
      <Component {...pageProps} />
    </>
  );
}
