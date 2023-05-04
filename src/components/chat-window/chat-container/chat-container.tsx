import { useEffect, useState } from "react";
import chatgptpicture from "../../../../public/chatgpt.svg";
import { useSession } from "next-auth/react";

interface ChatContainerProps {
  key: number;
  sender: string;
  content: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  key,
  sender,
  content,
}) => {
  const { data: session } = useSession();
  const [message, setMessage] = useState(content);

  useEffect(() => {
    let timeoutId: number;
    if (sender === "chatgpt@gmail.com") {
      let i = 0;
      timeoutId = window.setInterval(() => {
        setMessage(content.slice(0, i + 1));
        i++;
        if (i === content.length) {
          window.clearInterval(timeoutId);
        }
      }, 30);
    }
    return () => window.clearInterval(timeoutId);
  }, [sender, content]);

  if (!session) {
    return null;
  }

  const {
    user: { image },
  }: any = session;

  const getChatColor = (email: string) => {
    if (email === "chatgpt@gmail.com") {
      return "bg-custom-chatbot";
    } else {
      return "bg-custom-user";
    }
  };

  const getProfilePhoto = (email: string) => {
    if (email === "chatgpt@gmail.com") {
      return chatgptpicture.src;
    } else {
      return ""; // fallback to default user icon if email is not "chatgpt@gmail.com"
    }
  };

  return (
    <div
      key={key}
      className={`${getChatColor(
        sender
      )} shadow shadow-2 border-b border-gray-900/50`}
    >
      <div
        className={`relative flex ap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6  m-auto p-150 sm:px-4 md:px-5 lg:px-6 xl:px-7`}
      >
        {/* profile photo */}
        {getProfilePhoto(sender) ? (
          <img
            src={getProfilePhoto(sender)}
            alt="Profile"
            className="h-9 w-9 rounded-full flex items-end"
            width={36}
            height={36}
          />
        ) : (
          <img
            src={image}
            alt="Profile Picture"
            className="w-9 h-9 rounded-full"
            width={36}
            height={36}
          />
        )}

        {/* content */}
        <div className=" ml-2">
          <p className="text-gray-100 whitespace-pre-wrap">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
