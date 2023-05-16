import { Dispatch, createContext, useContext } from 'react';

interface ContextVal {
  isStarFilterActive: boolean;
  toggleStarFilterActive: () => void;
  starredAnimes: {
    id: string;
  }[];
  setStarredAnimes: Dispatch<React.SetStateAction<ContextVal['starredAnimes']>>;
  handleStarClick: (animeId: string) => void;
}

export const StarFilterContext = createContext<ContextVal>({} as ContextVal);

export const useStarFilterContext = () => {
  const context = useContext(StarFilterContext);

  if (context === undefined) {
    throw new Error(
      'useStarFilterContext must be used within a StarFilterProvider'
    );
  }
  return context;
};
