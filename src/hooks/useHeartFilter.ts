import { useState } from 'react';

export const useHeartFilter = () => {
  const [isHeartFilterActive, setIsHeartFilterActive] = useState(false);
  const [heartAnimes, setHeartAnimes] = useState<
    {
      id: string;
    }[]
  >(JSON.parse(localStorage.getItem('heartAnimes') as string) ?? []);
  const handleHeartClick = (animeId: string) => {
    const isHeartActive = heartAnimes.some((elem) => elem.id === animeId);

    if (isHeartActive) {
      const newHeartAnimes = heartAnimes.filter((elem) => elem.id !== animeId);

      setHeartAnimes(newHeartAnimes);
      localStorage.setItem('heartAnimes', JSON.stringify(newHeartAnimes));
    } else {
      const newHeartAnimes = [
        ...heartAnimes,
        {
          id: animeId,
        },
      ];

      setHeartAnimes(newHeartAnimes);
      localStorage.setItem('heartAnimes', JSON.stringify(newHeartAnimes));
    }
  };

  return {
    isHeartFilterActive,
    setIsHeartFilterActive,
    heartAnimes,
    handleHeartClick,
  };
};
