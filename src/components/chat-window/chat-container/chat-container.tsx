import { IMessage } from "../chat-window-page/chat-window-page";
import { FaUserCircle } from 'react-icons/fa';
import chatgptpicture from "../../../../public/chatgpt.svg";
import { signOut, useSession } from "next-auth/react";

interface ChatContainerProps {
  key: number;
  sender: string;
  content: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ key, sender, content }) => {
  
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const { user: { image, email } } = session;

  const getChatColor = (email: string) => {
    if (email === "chatgpt@gmail.com") {
      return "bg-custom-chatbot";
    } else {
      return "bg-custom-user";
    }
  }

  const getProfilePhoto = (email: string) => {
    if (email === "chatgpt@gmail.com") {
      return chatgptpicture.src;
    } else {
      return ""; // fallback to default user icon if email is not "chatgpt@gmail.com"
    }
  }

  return (
    <div key={key} className={getChatColor(sender)}>
      <div className={`relative ap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto flex p-150 sm:p-8 md:p-12 lg:p-16 xl:p-20`}>
        {/* profile photo */}
        {getProfilePhoto(sender) ? (
          <img src={getProfilePhoto(sender)} alt="Profile" className="h-6 w-6 rounded-full flex items-end" />
        ) : (
          <img src={image} alt="Profile Picture" className="w-6 h-6 rounded-full" />
        )}

        {/* content */}
        <div className=" ml-2">
          <p className="text-white">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatContainer;
