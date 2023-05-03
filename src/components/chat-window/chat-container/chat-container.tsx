import { IMessage } from "../chat-window-page/chat-window-page";


import { FaUserCircle } from 'react-icons/fa';

interface ChatContainerProps {
    key: number,
    sender: string,
    content: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({key, sender, content}) => {

  const getChatColor = (email: string) => {
    if (email == "chatgpt@gmail.com"){
      return "bg-custom-chatbot";
    } else {
      return "bg-custom-user";
    }
  }

  return (
    <div key={key} className={getChatColor(sender)}>
    <div className={`relative ap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto flex p-150 sm:p-8 md:p-12 lg:p-16 xl:p-20`}>
        {/* profile photo */}
        <div className="">
          <FaUserCircle size={24} />
        </div>
        
        {/* content */}
        <div className=" ml-2">
            <p className="text-white">{content}</p>
        </div>
    </div>
    </div>
  )
}

export default ChatContainer