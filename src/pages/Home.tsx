import axios from 'axios';
import Toolbar from '../components/Toolbar';
import { useEffect, useState } from 'react';
import { Anime } from '../types/anime';
import Spinner from '../components/Spinner';
import AnimeSummary from '../components/AnimeSummary';
import { useStarFilter } from '../hooks/useStarFilter';

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

const Home = () => {
  const [animeDataStatus, setAnimeDataStatus] = useState<
    'idle' | 'loading' | 'resolved' | 'rejected'
  >('idle');
  const [animeResult, setAnimeResult] = useState<Anime[]>([]);

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
        starredAnimes.some((starred) => starred.id === anime.id)
      );
  // * starred filter end

  useEffect(() => {
    const fetchData = async () => {
      setAnimeDataStatus('loading');
      try {
        const result = await axios.get<AnimeResponse>(
          'https://kitsu.io/api/edge/anime'
        );

        setAnimeDataStatus('resolved');
        setAnimeResult(result.data.data);
      } catch (error) {
        setAnimeDataStatus('rejected');
      }
    };

    fetchData();
  }, []);

  if (animeDataStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Anime List</h1>
      <Toolbar
        resultCount={filteredStarredData.length}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        isStarFilterActive={isStarFilterActive}
        setIsStarFilterActive={() => {
          setIsStarFilterActive((prev) => !prev);
        }}
      />

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {filteredStarredData.map((anime) => {
          const isStarActive = starredAnimes.some(
            (elem) => elem.id === anime.id
          );

          return (
            <AnimeSummary
              key={anime.id}
              isStarActive={isStarActive}
              handleStarClick={() => handleStarClick(anime.id)}
              attributes={anime.attributes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
