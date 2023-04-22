import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useChats = () => {
  const { data, error, mutate } = useSwr("/api/chat/read", fetcher);

  return {
    chats: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useChats;
