
import SideBarPage from "@/components/sidebar/sidebar-page/sidebar-page";
import ChatWindowPage from "@/components/chat-window/chat-window-page/chat-window-page";

import {useContext, useEffect} from "react";
import { AlgoContext } from "@/context/algo-context";
import { ChatContext } from "@/context/chat-context";
import useChats from "@/hooks/useChats";
import axios from "axios";

const Chat = () => {
  const {currentChat, setCurrentChat } = useContext(ChatContext);
  const { setCurrentAlgo } = useContext(AlgoContext);

  const { 
    chats, 
    isLoading: chatLoading, 
    mutate: chatMutate 
  } = useChats();

  const newChat = async () => {
    await axios.post("api/chat/create");
    chatMutate();
  };


  const setChat = () => {
    if (!chatLoading && chats) {
      if (currentChat === '' && chats.length>0){
        const lastChat = chats[0].id.toString();
        setCurrentChat(lastChat);  
      }
    }
  };

  const isChatValid = (listOfChat: any, curChat:any) => {
    listOfChat.map((chat: any) => {
      if (chat.id.toString() === curChat){
        return true;
      }
    });
    return false;
  }

  useEffect(() => {
    if (!chatLoading && chats) {
      if (chats.length===0 || isChatValid(chats, currentChat)){
        newChat();
        setCurrentChat('');
      } 
    }
  }, [chats]);

  setChat();

  return (
      <div className="bg-custom-chat_window min-h-screen flex overflow-x-hidden">
        <SideBarPage/>

        <ChatWindowPage/>
      </div>

  );
};

export default Chat;