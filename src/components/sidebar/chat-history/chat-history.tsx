import { useContext } from "react";

import HistoryContainer from "../history-container/history-container";
import { ChatContext } from "@/context/chat-context";

interface ChatHistoryProps {
  chats: any;
  chatLoading: boolean;
  chatMutate: any;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  chats,
  chatLoading,
  chatMutate,
}) => {
  const { currentChat, setCurrentChat } = useContext(ChatContext);

  const handleSelect = (sel: string) => {
    setCurrentChat(sel);
  };

  return (
    <div className="bg-none rounded-lg mt-2 gap-3">
      {!chatLoading && chats && (
        <p className="text-gray-600">
          {chats.map((hst: any) => (
            <HistoryContainer
              key={hst.id.toString()}
              id={hst.id.toString()}
              title={hst.title}
              selected={currentChat}
              onHandleSelect={handleSelect}
              chatMutate={chatMutate}
            />
          ))}
        </p>
      )}
    </div>
  );
};

export default ChatHistory;
