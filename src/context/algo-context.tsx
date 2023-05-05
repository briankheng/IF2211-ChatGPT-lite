import { createContext, useState, useEffect, ReactNode } from 'react';

interface IAlgoContext {
  setCurrentAlgo: React.Dispatch<React.SetStateAction<string>>;
  currentAlgo: string;
}

export const AlgoContext = createContext<IAlgoContext>({
  setCurrentAlgo: () => null,
  currentAlgo: '',
});

export const AlgoProvider = ({ children }: { children: ReactNode }) => {
  const [currentAlgo, setCurrentAlgo] = useState<string>('');

  const value: IAlgoContext = { currentAlgo, setCurrentAlgo };

  useEffect(() => {
    setCurrentAlgo("kmp");
  }, []);

  return <AlgoContext.Provider value={value}>{children}</AlgoContext.Provider>;
};