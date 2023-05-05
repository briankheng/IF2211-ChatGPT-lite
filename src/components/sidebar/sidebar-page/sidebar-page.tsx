import AlgorithmSelect from "../algorithm-select/algorithm-select";
import NewChatButton from "../new-chat-button/new-chat-button";
import ChatHistory from "../chat-history/chat-history";
import AccountButton from "../account-select/account";

import useChats from "@/hooks/useChats";

const SideBarPage = () => {
  const { chats, isLoading: chatLoading, mutate: chatMutate } = useChats();

  return (
    <aside className="bg-custom-sidebar relative text-white p-2 pr-0 w-64 h-screen overflow-x-hidden">
      <div className="absolute top-2 w-full">
        <div style={{ width: "92%" }}>
          <NewChatButton chatMutate={chatMutate} />
        </div>
      </div>
      <div
        className="flex flex-col mt-12 "
        style={{ height: "calc(100% - 140px)" }}
      >
        <div
          className="overflow-y-scroll flex-1"
          style={{ paddingRight: "5px" }}
        >
          <ChatHistory
            chats={chats}
            chatLoading={chatLoading}
            chatMutate={chatMutate}
          />
        </div>
      </div>

      <div className="absolute bg-custom-sidebar bottom-4 w-50 py-0 h-20">
        <div className="relative h-full">
          <div className="flex items-center mx-auto border-b-2 mb-2 border-white/20 garis"></div>
          <style jsx>{`
            .garis {
              width: 95%;
            }
          `}</style>
          <AlgorithmSelect />
          <AccountButton />
        </div>
      </div>
    </aside>
  );
};

export default SideBarPage;
