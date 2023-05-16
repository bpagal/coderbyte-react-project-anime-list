import axios from 'axios';
import Toolbar from '../components/Toolbar';
import { useEffect, useState } from 'react';
import { Anime } from '../types/anime';
import Spinner from '../components/Spinner';

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

  useEffect(() => {
    const fetchData = async () => {
      setAnimeDataStatus('loading');
      try {
        const result = await axios.get<AnimeResponse>(
          'https://kitsu.io/api/edge/anime'
        );

        setAnimeDataStatus('resolved');
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
    <div className="text-center bg-blue-500 mt-9">
      <h1 className="text-3xl">Anime List</h1>
      <Toolbar />
    </div>
  );
};

export default Home;
