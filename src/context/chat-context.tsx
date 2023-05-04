import { createContext, useState, useEffect, ReactNode } from 'react';

interface IChatContext {
  setCurrentChat: React.Dispatch<React.SetStateAction<string>>;
  currentChat: string;
}

export const ChatContext = createContext<IChatContext>({
  setCurrentChat: () => null,
  currentChat: '',
});

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [currentChat, setCurrentChat] = useState<string>('');

  const value: IChatContext = { currentChat, setCurrentChat };
  
  useEffect(() => {
    setCurrentChat(currentChat);
  }, [currentChat]);

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};