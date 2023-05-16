import { useState } from 'react';

export const useStarFilter = () => {
  const [isStarFilterActive, setIsStarFilterActive] = useState(false);
  const [starredAnimes, setStarredAnimes] = useState<
    {
      id: string;
    }[]
  >([]);
  const handleStarClick = (animeId: string) => {
    const isStarActive = starredAnimes.some((elem) => elem.id === animeId);

    if (isStarActive) {
      setStarredAnimes(starredAnimes.filter((elem) => elem.id !== animeId));
    } else {
      setStarredAnimes([
        ...starredAnimes,
        {
          id: animeId,
        },
      ]);
    }
  };

  return {
    isStarFilterActive,
    setIsStarFilterActive,
    starredAnimes,
    handleStarClick,
  };
};
