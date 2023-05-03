import React, { useState, useRef, useEffect } from "react";
import SendButton from "../send-button/send-button";

interface InputBoxProps {
  message: string;
  onMessageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSendMessage: () => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  message,
  onMessageChange,
  onSendMessage,
}) => {
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const maxHeight = "200px"; // set max height for the textarea
  const minHeight = "20px"; // set min height for the textarea

  useEffect(() => {
    if (textAreaRef.current) {
      setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
    }
  }, [message]);

  const onButtonClick = () => {
    setTextAreaHeight("auto");
    onSendMessage();
  };

  const onInput = () => {
    if (textAreaRef.current) {
      // set height to auto to calculate scrollHeight correctly
      textAreaRef.current.style.height = "auto";
      // calculate scrollHeight and set height to that value
      const newHeight = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.style.height = newHeight;
      // set min height
      if (textAreaRef.current.clientHeight < parseInt(minHeight)) {
        textAreaRef.current.style.height = minHeight;
      }
      // set max height
      if (textAreaRef.current.clientHeight > parseInt(maxHeight)) {
        textAreaRef.current.style.height = maxHeight;
      }
    }
  };

  return (
    <div className="bg-custom-input_box relative flex border border-gray-900/50 shadow-[0_0_15px_rgba(0,0,0,0.10)] justify-between rounded-md items-center mx-4 my-4 r p-2 pl-4 w-100 place">
      <div className="flex w-full items-center">
        <textarea
          className="kotak bg-custom-input_box flex-1 focus:outline-none text-white resize-none mr-5 overflow-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent h-full"
          rows={1}
          placeholder="Send a message..."
          value={message}
          onChange={onMessageChange}
          onInput={onInput}
          ref={textAreaRef}
          id="inputText"
        />
        <div className="bottom-1 absolute right-1">
          <SendButton onSendMessage={onButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
