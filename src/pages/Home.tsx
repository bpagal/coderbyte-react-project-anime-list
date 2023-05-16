import { useState } from 'react';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';

const Home = () => {
  const [isAnimeDetailsVisible, setIsAnimeDetailsVisible] = useState(false);

  return (
    <>
      <button
        className="p-3 bg-red-500 rounded-sm "
        onClick={() => setIsAnimeDetailsVisible((prev) => !prev)}
      >
        Change Page
      </button>
      {isAnimeDetailsVisible ? <AnimeDetails /> : <AnimeList />}
    </>
  );
};

export default Home;
