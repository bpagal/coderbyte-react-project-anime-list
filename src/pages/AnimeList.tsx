import axios from 'axios';
import Toolbar from '../components/Toolbar';
import { useEffect, useState } from 'react';
import { Anime } from '../types/anime';
import Spinner from '../components/Spinner';
import AnimeSummary from '../components/AnimeSummary';
import { useStarFilter } from '../hooks/useStarFilter';
import { useHeartFilter } from '../hooks/useHeartFilter';

interface AnimeResponse {
  data: Anime[];
  meta: {
    count: number;
  };
  links: {
    first: string;
    prev: string;
    next: string;
    last: string;
  };
}

interface HomeProps {
  handleAnimeClick: (animeId: string) => void;
  animeDataStatus: 'idle' | 'loading' | 'resolved' | 'rejected';
  animeResult: Anime[];
}
const Home = ({
  handleAnimeClick,
  animeDataStatus,
  animeResult,
}: HomeProps) => {
  const [filterValue, setFilterValue] = useState('');
  const filteredData =
    filterValue === ''
      ? animeResult
      : animeResult.filter((anime) => {
          const { titles } = anime.attributes;
          return titles?.en?.toLowerCase().includes(filterValue.toLowerCase());
        });

  // * starred filter start
  const {
    isStarFilterActive,
    setIsStarFilterActive,
    starredAnimes,
    handleStarClick,
  } = useStarFilter();

  const filteredStarredData = !isStarFilterActive
    ? filteredData
    : filteredData.filter((anime) =>
        starredAnimes.some((starredAnime) => starredAnime.id === anime.id)
      );
  // * starred filter end

  // * heart filter start
  const {
    isHeartFilterActive,
    setIsHeartFilterActive,
    heartAnimes,
    handleHeartClick,
  } = useHeartFilter();

  const filteredHeartData = !isHeartFilterActive
    ? filteredStarredData
    : filteredStarredData.filter((anime) =>
        heartAnimes.some((heartAnime) => heartAnime.id === anime.id)
      );
  // * heart filter end

  if (animeDataStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Anime List</h1>
      <Toolbar
        resultCount={filteredHeartData.length}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        isStarFilterActive={isStarFilterActive}
        setIsStarFilterActive={() => setIsStarFilterActive((prev) => !prev)}
        isHeartFilterActive={isHeartFilterActive}
        setIsHeartFilterActive={() => setIsHeartFilterActive((prev) => !prev)}
      />

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {filteredHeartData.map((anime) => {
          const isStarActive = starredAnimes.some(
            (elem) => elem.id === anime.id
          );
          const isHeartActive = heartAnimes.some(
            (elem) => elem.id === anime.id
          );

          return (
            <AnimeSummary
              key={anime.id}
              attributes={anime.attributes}
              isStarActive={isStarActive}
              handleStarClick={() => handleStarClick(anime.id)}
              isHeartActive={isHeartActive}
              handleHeartClick={() => handleHeartClick(anime.id)}
              handleAnimeClick={() => handleAnimeClick(anime.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
