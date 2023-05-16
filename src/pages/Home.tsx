import { useState } from 'react';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';

const Home = () => {
  const [isAnimeDetailsVisible, setIsAnimeDetailsVisible] = useState(false);

  return (
    <>
      {isAnimeDetailsVisible ? (
        <AnimeDetails handleGoBack={() => setIsAnimeDetailsVisible(false)} />
      ) : (
        <AnimeList
          handleAnimeClick={() => setIsAnimeDetailsVisible((prev) => !prev)}
        />
      )}
    </>
  );
};

export default Home;
