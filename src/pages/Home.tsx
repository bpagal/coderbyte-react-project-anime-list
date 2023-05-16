import { useEffect, useState } from 'react';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';
import axios from 'axios';
import { Anime, AnimeAttributes } from '../types/anime';

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
  const [animeDetails, setAnimeDetails] = useState<{
    id: string;
  } | null>(null);
  const [animeDataStatus, setAnimeDataStatus] = useState<
    'idle' | 'loading' | 'resolved' | 'rejected'
  >('idle');
  const [animeResult, setAnimeResult] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setAnimeDataStatus('loading');
      try {
        const result = await axios.get<AnimeResponse>(
          'http://localhost:5173/api/anime'
        );

        setAnimeDataStatus('resolved');
        setAnimeResult(result.data.data);
      } catch (error) {
        setAnimeDataStatus('rejected');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {animeDetails ? (
        <AnimeDetails
          handleGoBack={() => setAnimeDetails(null)}
          attributes={
            animeResult.find((anime) => anime.id === animeDetails.id)
              ?.attributes as AnimeAttributes
          }
        />
      ) : (
        <AnimeList
          handleAnimeClick={(animeId) =>
            setAnimeDetails({
              id: animeId,
            })
          }
          animeDataStatus={animeDataStatus}
          animeResult={animeResult}
        />
      )}
    </>
  );
};

export default Home;
