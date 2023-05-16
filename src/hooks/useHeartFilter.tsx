import { useState } from 'react';

export const useHeartFilter = () => {
  const [isHeartFilterActive, setIsHeartFilterActive] = useState(false);
  const [heartAnimes, setHeartAnimes] = useState<
    {
      id: string;
    }[]
  >([]);
  const handleHeartClick = (animeId: string) => {
    const isHeartActive = heartAnimes.some((elem) => elem.id === animeId);

    if (isHeartActive) {
      setHeartAnimes(heartAnimes.filter((elem) => elem.id !== animeId));
    } else {
      setHeartAnimes([
        ...heartAnimes,
        {
          id: animeId,
        },
      ]);
    }
  };

  return {
    isHeartFilterActive,
    setIsHeartFilterActive,
    heartAnimes,
    handleHeartClick,
  };
};
