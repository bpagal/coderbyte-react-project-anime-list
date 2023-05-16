import { useCallback, useRef, useState } from 'react';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';
import { AnimeAttributes } from '../types/anime';
import { useFetchAnime } from '../hooks/useFetchAnime';
import StarFilterProvider from '../components/Providers/StarFilterProvider';
import HeartFilterProvider from '../components/Providers/HeartFilterProvider';

const Home = () => {
  const [animeDetails, setAnimeDetails] = useState<{
    id: string;
  } | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { animeResult, animeDataStatus, hasNextPage } = useFetchAnime({
    pageNumber,
  });

  const observer = useRef<IntersectionObserver>();
  const lastBookElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (animeDataStatus === 'loading') return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }
        },
        {
          threshold: 1,
        }
      );
      if (node) observer.current.observe(node);
    },
    [animeDataStatus, hasNextPage]
  );

  return (
    <StarFilterProvider>
      <HeartFilterProvider>
        {animeDetails ? (
          <AnimeDetails
            handleGoBack={() => {
              setAnimeDetails(null);
            }}
            attributes={
              animeResult.find((anime) => anime.id === animeDetails.id)
                ?.attributes as AnimeAttributes
            }
            animeId={animeDetails.id}
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
            ref={lastBookElementRef}
          />
        )}
      </HeartFilterProvider>
    </StarFilterProvider>
  );
};

export default Home;
