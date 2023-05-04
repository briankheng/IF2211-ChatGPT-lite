import axios from "axios";
import useChats from "@/hooks/useChats";
import { useContext } from "react";
import { ChatContext } from "@/context/chat-context";
interface NewChatButtonProps {
    chatMutate: any;
}

const NewChatButton: React.FC<NewChatButtonProps> = ({chatMutate}) => {
    const {setCurrentChat } = useContext(ChatContext);
    const newChat = async () => {
        await axios.post("api/chat/create");
        chatMutate();
        setCurrentChat('');
    };

    return (
        <button 
          className="w-full"
          onClick={newChat}
        >
            <a className="chatbutt flex py-3 px-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 mb-1 flex-shrink-0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>New chat</a>
        </button>
    );
}

export default NewChatButton;
