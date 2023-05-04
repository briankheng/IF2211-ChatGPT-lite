
import SideBarPage from "@/components/sidebar/sidebar-page/sidebar-page";
import ChatWindowPage from "@/components/chat-window/chat-window-page/chat-window-page";

import {useContext, useEffect} from "react";
import { AlgoContext } from "@/context/algo-context";
import { ChatContext } from "@/context/chat-context";
import useChats from "@/hooks/useChats";

const Chat = () => {
  const {currentChat, setCurrentChat } = useContext(ChatContext);
  const { setCurrentAlgo } = useContext(AlgoContext);

  const { 
    chats, 
    isLoading: chatLoading, 
    mutate: chatMutate 
  } = useChats();

  const setChat = () => {
    if (!chatLoading && chats) {
      if (currentChat === ''){
        const lastChat = chats[0].id.toString();
        setCurrentChat(lastChat);  
      }
    }
  };
  
  useEffect(() => {
    console.log("masuk useffect");
    setCurrentAlgo("bm");
  }, []);

  setChat();

  return (
      <div className="bg-custom-chat_window min-h-screen flex overflow-x-hidden">
        <SideBarPage/>

        <ChatWindowPage/>
      </div>

  );
};

export default Chat;