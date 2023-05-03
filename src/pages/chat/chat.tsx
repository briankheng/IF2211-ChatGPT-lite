
import SideBarPage from "@/components/sidebar/sidebar-page/sidebar-page";
import ChatWindowPage from "@/components/chat-window/chat-window-page/chat-window-page";


const Chat = () => {
  return (
      <div className="bg-custom-chat_window min-h-screen flex overflow-x-hidden">
        <SideBarPage/>

        <ChatWindowPage/>
      </div>

  );
};

export default Chat;