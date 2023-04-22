import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useMessages = (chatId: string) => {
  const { data, error, mutate } = useSwr(
    chatId ? `/api/message/${chatId}` : null,
    fetcher
  );
  return {
    messages: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useMessages;
