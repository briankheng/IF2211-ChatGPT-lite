import SendIcon from "../../../../public/sendIcon";

interface SendButtonProps {
    onSendMessage: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({onSendMessage}) => {
  return (

    <button 
      className="p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:text-gray-300 right-1 md:right-2"
      onClick={onSendMessage}
    >
      <SendIcon />
    </button>
  );
}

export default SendButton