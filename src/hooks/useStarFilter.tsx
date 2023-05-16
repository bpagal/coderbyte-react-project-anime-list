import { useState } from 'react';

export const useStarFilter = () => {
  const [isStarFilterActive, setIsStarFilterActive] = useState(false);
  const [starredAnimes, setStarredAnimes] = useState<
    {
      id: string;
    }[]
  >(JSON.parse(localStorage.getItem('starredAnimes') as string) ?? []);
  const handleStarClick = (animeId: string) => {
    const isStarActive = starredAnimes.some((elem) => elem.id === animeId);

    if (isStarActive) {
      const newStarredAnimes = starredAnimes.filter(
        (elem) => elem.id !== animeId
      );

      setStarredAnimes(newStarredAnimes);
      localStorage.setItem('starredAnimes', JSON.stringify(newStarredAnimes));
    } else {
      const newStarredAnimes = [
        ...starredAnimes,
        {
          id: animeId,
        },
      ];

      setStarredAnimes(newStarredAnimes);
      localStorage.setItem('starredAnimes', JSON.stringify(newStarredAnimes));
    }
  };

  return {
    isStarFilterActive,
    setIsStarFilterActive,
    starredAnimes,
    handleStarClick,
  };
};
