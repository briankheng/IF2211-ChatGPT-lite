import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChatProvider } from "@/context/chat-context";
import { AlgoProvider } from "@/context/algo-context";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ChatProvider>
        <AlgoProvider>
          <Component {...pageProps} />
        </AlgoProvider>
      </ChatProvider>
    </SessionProvider>
  );
};

export default App;
