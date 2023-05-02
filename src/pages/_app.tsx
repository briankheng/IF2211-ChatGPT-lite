import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import SideBarPage from "@/components/sidebar/sidebar-page/sidebar-page";
import ChatWindowPage from "@/components/chat-window/chat-window-page/chat-window-page";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="bg-custom-chat_window min-h-screen flex flex-row">
        {/* sidebar */}
        <SideBarPage/>

        {/* chat window */}
        <ChatWindowPage/>
      </div>
    </SessionProvider>
  );
};

export default App;
