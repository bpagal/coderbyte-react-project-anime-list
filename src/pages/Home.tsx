import axios from 'axios';
import Toolbar from '../components/Toolbar';
import { useEffect, useState } from 'react';
import { Anime } from '../types/anime';
import Spinner from '../components/Spinner';
import AnimeSummary from '../components/AnimeSummary';

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

  useEffect(() => {
    const fetchData = async () => {
      setAnimeDataStatus('loading');
      try {
        const result = await axios.get<AnimeResponse>(
          'https://kitsu.io/api/edge/anime'
        );

        setAnimeDataStatus('resolved');
        setAnimeResult(result.data.data);
        // console.log('💖💛💙💜💚 result');
        // console.log(result.data.data[0].attributes.titles.en);
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
      <Toolbar resultCount={animeResult.length} />

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {animeResult.map((anime) => {
          return <AnimeSummary key={anime.id} attributes={anime.attributes} />;
        })}
      </div>
    </div>
  );
};

export default Home;
