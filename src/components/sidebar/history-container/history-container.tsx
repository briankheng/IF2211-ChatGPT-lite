import axios from "axios";
import DeleteIcon from "@/assets/deleteIcon";
import EditIcon from "@/assets/editIcon";
import ChatIcon from "@/assets/chatIcon";

interface HistoryContainerProps {
  key: string;
  title: string;
  selected: string;
  onHandleSelect: (sel: string) => void;
  chatMutate: any;
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({ key, title, selected, onHandleSelect, chatMutate }) => {
  console.log("cur key: ", { title });
  
  const isClicked = (tempKey: string) => {
    if (tempKey === selected) {
      return "bg-custom-chat_window";
    } else {
      return "bg-none";
    }
  };
  
  
  const delChat = async () => {
    await axios.delete("api/chat/delete", { data: { chatId: title } });
    chatMutate();
  };

  return (
    <div key={key} className={`${isClicked(title)} flex px-2 py-3 gap-3 rounded-md items-center hover:bg-custom-chat_hover`} onClick={() => onHandleSelect(title)} style={{ justifyContent: "space-between" }}>
      <div className="flex gap-2 items-center">
        {/* chat icon */}
        <ChatIcon/>

        {/* title */}
        <div className="ml-2">
          <p
            className="text-white text-sm"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "gradient",
              maxWidth: "15ch",
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,255), rgba(0,0,0,0))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              opacity: "1",
            }}
          >
            {title}
          </p>
        </div>
      </div>

      {/* edit icon */}
      <div className="flex gap-2">
        <button className="rounded-md text-gray-500 hover:text-gray-300" onClick={delChat}>
          <EditIcon />
        </button>

        {/* delete button */}
        <button className="rounded-md text-gray-500 hover:text-gray-300" onClick={delChat}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default HistoryContainer;
