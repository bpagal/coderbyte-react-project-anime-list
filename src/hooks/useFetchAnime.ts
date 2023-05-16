import axios from 'axios';
import { useEffect, useState } from 'react';
import { Anime } from '../types/anime';

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

interface Params {
  pageNumber: number;
}
export const useFetchAnime = ({ pageNumber }: Params) => {
  const [animeDataStatus, setAnimeDataStatus] = useState<
    'idle' | 'loading' | 'resolved' | 'rejected'
  >('idle');
  const [animeResult, setAnimeResult] = useState<Anime[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setAnimeDataStatus('loading');
      try {
        const url =
          pageNumber === 1
            ? 'http://localhost:5173/api/anime'
            : `http://localhost:5173/api/anime?page[limit]=10&page[offset]=${
                pageNumber * 10 - 10
              }`;

        const result = await axios.get<AnimeResponse>(url);
        const { data: responseData, links } = result.data;

        if (pageNumber === 1) {
          setAnimeResult(responseData);
        } else {
          setAnimeResult((prevAnimeResult) => [
            ...prevAnimeResult,
            ...responseData,
          ]);
        }
        setHasNextPage(links.next.length > 0);
        setAnimeDataStatus('resolved');
      } catch (error) {
        setAnimeDataStatus('rejected');
      }
    };

    fetchData();
  }, [pageNumber]);

  return {
    animeResult,
    animeDataStatus,
    hasNextPage,
  };
};
