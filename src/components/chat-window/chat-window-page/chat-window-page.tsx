import { useState, useContext } from "react";
import InputBox from "../input-box/input-box";
import ChatContainer from "../chat-container/chat-container";
import useMessages from "@/hooks/useMessages";
import axios from "axios";

import { ChatContext } from "@/context/chat-context";
import { AlgoContext } from "@/context/algo-context";

export interface IMessage {
  id: number;
  sender: string;
  content: string;
}

const ChatWindowPage: React.FC = () => {
  const [inputField, setInputField] = useState<string>("");
  // const [messages, setMessages] = useState<IMessage[]>([]);

  const { currentChat } = useContext(ChatContext);
  const { currentAlgo } = useContext(AlgoContext);
  console.log("current algo: ", currentAlgo);

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputField(event.target.value);
  };

  const addQuery = async () => {
    const query = inputField;
    if (query === "") return;
    setInputField("");

    await axios.post("api/message/create", {
      text: query,
      chatId: currentChat,
    });
    messageMutate();

    const res = await axios.post("api/query", {
      query: query,
      method: "kmp",
      chatId: currentChat,
    });
    messageMutate();
  };

  const { messages, isLoading: messageLoading, mutate: messageMutate } = useMessages(currentChat);

  return (
    <main className="flex-grow p-0 relative justify-center h-screen overflow-y-hidden">
      {/* chat field */}
      {!messageLoading && messages && (
        <div className="bg-none shadow rounded-lg overflow-y-scroll h-full">
          <p className="text-gray-600">
            {messages.map((msg: any) => (
              <ChatContainer key={msg.id} sender={msg.user.email} content={msg.text} />
            ))}
            <div className={`bg-custom-chat_window h-40`}></div>
          </p>
        </div>
      )}

      {/* input field */}
      <div className="absolute bottom-0 left-0 right-0 h-40">
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-custom-chat_window"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-custom-chat_window"></div>
          <div className="absolute bottom-0 bg-gradient-to-t left-0 right-0 h-5 bg-custom-chat_window"></div>
        </div>
      </div>

      <div className="absolute w-full bottom-4 left-1/2 transform -translate-x-1/2">
        <InputBox message={inputField} onMessageChange={handleMessageChange} onSendMessage={addQuery} />
      </div>
    </main>
  );
};

export default ChatWindowPage;
