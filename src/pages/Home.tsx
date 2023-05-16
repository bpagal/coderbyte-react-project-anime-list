import { useEffect, useRef, useState } from 'react';
import AnimeList from './AnimeList';
import AnimeDetails from './AnimeDetails';
import { AnimeAttributes } from '../types/anime';
import { useFetchAnime } from '../hooks/useFetchAnime';

const Home = () => {
  const [animeDetails, setAnimeDetails] = useState<{
    id: string;
  } | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { animeResult, animeDataStatus, hasNextPage } = useFetchAnime({
    pageNumber,
  });

  const observerTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      const { current } = observerTarget;
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [observerTarget, hasNextPage]);

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
        <div>
          <AnimeList
            handleAnimeClick={(animeId) =>
              setAnimeDetails({
                id: animeId,
              })
            }
            animeDataStatus={animeDataStatus}
            animeResult={animeResult}
          />
          <div ref={observerTarget} />
        </div>
      )}
    </>
  );
};

export default Home;
