import axios from "axios"

interface HistoryContainerProps {
    key: string,
    title: string,
    selected: string,
    onHandleSelect: (sel: string) => void,
    chatMutate: any;
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({key, title, selected, onHandleSelect, chatMutate}) => {
  console.log("cur key: ", {title});

  const isClicked = (tempKey: string) => {
    if (tempKey === selected) {
      return "bg-custom-chat_window";
    } else {
      return "bg-none";
    }
  }

  const delChat = async () => {
    await axios.delete("api/chat/delete", {data: {chatId: key}});
    chatMutate();
  };

  return (
    <div 
      key={key} 
      className={`${isClicked(key)} flex px-2 py-2 gap-3 rounded-md items-center`}
      onClick={() => onHandleSelect(title)}
      style={{ justifyContent: 'space-between' }}
    >
      <div className="flex gap-2 items-center" >
        {/* chat icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor" 
          fill="none" 
          stroke-width="2" 
          viewBox="0 0 24 24" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          className="h-4 w-4 text-gray-400" 
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>

        {/* title */}
        <div className="ml-2">
            <p className="text-white text-sm" style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "gradient",
            maxWidth: "15ch",
            backgroundImage : "linear-gradient(to right, rgba(255,255,255,255), rgba(0,0,0,0))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            opacity: "1",
            }}>{title}</p>
        </div>
      </div>
      
      {/* edit icon */}
      <div className="flex gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor" 
          fill="none" 
          stroke-width="2" 
          viewBox="0 0 24 24" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          className="h-4 w-4 text-gray-400"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>



        {/* delete icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor" 
          fill="none" 
          stroke-width="2" 
          viewBox="0 0 24 24" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          className ="h-4 w-4 text-gray-400"
          onClick={delChat} 
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>

      </div>

    </div>
  )
}

export default HistoryContainer