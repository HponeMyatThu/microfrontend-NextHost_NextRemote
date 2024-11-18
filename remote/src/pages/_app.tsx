import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const MyContext = React.createContext("MyContext");

  return (
    <MyContext.Provider value={"HELLO"}>
      <h1>HELLO REMOTE</h1>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
