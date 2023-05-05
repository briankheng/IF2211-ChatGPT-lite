
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
    console.log("masuk new chat");
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
    console.log("masuk validasi, curchat : ", curChat);
    listOfChat.map((chat: any) => {
      console.log("chat id: ", chat.id.toString());
      console.log("curChat: ", curChat);
      if (chat.id.toString() === curChat){
        return true;
      }
    });
    return false;
  }

  useEffect(() => {
    if (!chatLoading && chats) {
      console.log("isi validasi", isChatValid(chats, currentChat));
      if (chats.length===0){
        newChat();
        setCurrentChat(''); 
        chatMutate();
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