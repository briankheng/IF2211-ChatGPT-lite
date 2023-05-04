import axios from "axios";
import DeleteIcon from "@/assets/deleteIcon";
import EditIcon from "@/assets/editIcon";
import ChatIcon from "@/assets/chatIcon";
import CheckIcon from "@/assets/checkIcon";
import XMarkIcon from "@/assets/xmarkIcon";
import { useState } from "react";

interface HistoryContainerProps {
  key: string;
  id: string;
  title: string;
  selected: string;
  onHandleSelect: (sel: string) => void;
  chatMutate: any;
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({
  key,
  id,
  title,
  selected,
  onHandleSelect,
  chatMutate,
}) => {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);

  const isClicked = (tempKey: string) => {
    if (tempKey === selected) {
      return "bg-custom-chat_window";
    } else {
      return "bg-none";
    }
  };
  
  
  const delChat = async () => {
    await axios.delete("api/chat/delete", { data: { chatId: id } });
    chatMutate();
  };

  const editChat = () => {
    setOnEdit(true);
  };

  const confirmEdit = async () => {
    await axios.put("api/chat/update", { data: {chatId: id, title: editTitle} });
    chatMutate();
    setOnEdit(false);
  };

  const cancelEdit = () => {
    setEditTitle(title);
    setOnEdit(false);
  };

  const isTitleOverflow = (el: any) => {
    return el.scrollWidth > el.clientWidth;
  };

  return (
    <div
      key={key}
      className={`${isClicked(
        id
      )} flex px-2 py-3 gap-3 rounded-md items-center hover:bg-custom-chat_hover cursor-pointer`}
      onClick={() => onHandleSelect(id)}
      style={{ justifyContent: "space-between" }}
    >
      <div className="flex gap-2 items-center h-[20px]">
        {/* chat icon */}
        <ChatIcon />

        {/* title */}
        {!onEdit && (
          <div className="ml-2">
          <p
            className={`text-white text-sm ${
              isTitleOverflow(document.createElement("p").appendChild(document.createTextNode(title))) ? "bg-gradient-to-r from-white to-transparent" : ""
            }`}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "18ch",
            }}
          >
            {title}
          </p>
        </div>
        )}

        {/* edit chat */}
        {onEdit && (
          <div className="ml-2">
            <input
              autoFocus
              type="text"
              className="bg-custom-chat_window text-white text-sm w-32 outline-none"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          </div>
        )}
      </div>

      {/* default */}
      {id === selected && !onEdit && (
        <div className="flex gap-2">
          {/* edit button */}
          <button
            className="rounded-md text-gray-500 hover:text-gray-300"
            onClick={editChat}
          >
            <EditIcon />
          </button>

          {/* delete button */}
          <button
            className="rounded-md text-gray-500 hover:text-gray-300"
            onClick={delChat}
          >
            <DeleteIcon />
          </button>
        </div>
      )}

      {/* edit chat */}
      {onEdit && (
        <div className="flex gap-2">
          {/* confirm button */}
          <button
            className="rounded-md text-gray-500 hover:text-gray-300"
            onClick={confirmEdit}
          >
            <CheckIcon />
          </button>

          {/* cancel button */}
          <button
            className="rounded-md text-gray-500 hover:text-gray-300"
            onClick={cancelEdit}
          >
            <XMarkIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoryContainer;
