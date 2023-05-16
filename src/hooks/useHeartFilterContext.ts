import { Dispatch, createContext, useContext } from 'react';

interface ContextVal {
  isHeartFilterActive: boolean;
  toggleHeartFilterActive: () => void;
  heartAnimes: {
    id: string;
  }[];
  setHeartAnimes: Dispatch<React.SetStateAction<ContextVal['heartAnimes']>>;
  handleHeartClick: (animeId: string) => void;
}

export const HeartFilterContext = createContext<ContextVal>({} as ContextVal);

export const useHeartFilterContext = () => {
  const context = useContext(HeartFilterContext);

  if (context === undefined) {
    throw new Error(
      'useHeartFilterContext must be used within a HeartFilterProvider'
    );
  }
  return context;
};
