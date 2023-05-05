import chatgptpicture from "../../../../public/chatgpt.svg";
import dummypicture from "../../../../public/dummy-profile.svg";
import { useSession } from "next-auth/react";
import Typewriter from "typewriter-effect";

interface ChatContainerProps {
  key: number;
  sender: string;
  content: string;
  createdAt: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  key,
  sender,
  content,
  createdAt,
}) => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const currentDateTime = new Date();
  const messageDateTime = new Date(createdAt);
  const timeDiff =
    (currentDateTime.getTime() - messageDateTime.getTime()) / 1000;

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
      return image;
    }
  };

  return (
    <div
      key={key}
      className={`${getChatColor(
        sender
      )} shadow shadow-3  `}
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
          />
        ) : (
          <img
            src={dummypicture.src}
            alt="Profile photo"
            className="w-9 h-9 rounded-full"
          />
        )}

        {/* content */}
        <div className=" ml-2 text-gray-100 whitespace-pre-wrap">
          {sender === "chatgpt@gmail.com" && timeDiff < 1 ? (
            <Typewriter
              options={{ loop: false, delay: 20 }}
              onInit={(typewriter) => {
                typewriter.typeString(content).start();
              }}
            />
          ) : (
            <p style={{maxWidth : "81ch"}}>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
