import { useState, useEffect, useContext } from "react";

import HistoryContainer from "../history-container/history-container";
import { ChatContext } from "@/context/chat-context";

interface IHistory {
  id: number;
  title: string;  
}

interface ChatHistoryProps {
  chats: any;
  chatLoading: boolean,
  chatMutate: any;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({chats, chatLoading, chatMutate}) => {
    // const [curChat, setCurChat] = useState<number>(0);
    // const [histories, setHistories] = useState<IHistory[]>([]);

    
    const {currentChat, setCurrentChat} = useContext(ChatContext);
    
    const handleSelect = (sel: string) => {
        console.log("masuk di handle select history, selected: ", sel);
        setCurrentChat(sel);
        console.log("current chat: ", currentChat);
    };
    // const newHistories: IHistory[] = [
    //   {
    //     id: 1,
    //     title: "First chat",
    //   },
    //   {
    //     id: 2,
    //     title: "Second chat ",
    //   },
    //   {
    //     id: 3,
    //     title: "Third chat",
    //   },
    // ];

    // useEffect(() => {
    //   setHistories(newHistories)
    // }, [])

    return (
      <div className="bg-none shadow rounded-lg mt-2 gap-3 ">
        {!chatLoading && chats && (
          <p className="text-gray-600">
          {chats.map((hst: any) => (
              <HistoryContainer key={hst.id.toString()} title={hst.id.toString()} selected={currentChat} onHandleSelect={handleSelect} chatMutate={chatMutate}/>
          ))}
          </p>
        )}    
      </div>

    );
};

export default ChatHistory;
