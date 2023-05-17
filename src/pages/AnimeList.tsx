import Toolbar from '../components/Toolbar';
import { LegacyRef, forwardRef, useState } from 'react';
import { Anime } from '../types/anime';
import Spinner from '../components/Spinner';
import AnimeSummary from '../components/AnimeSummary';
import { useStarFilterContext } from '../hooks/useStarFilterContext';
import { useHeartFilterContext } from '../hooks/useHeartFilterContext';

interface AnimeListProps {
  handleAnimeClick: (animeId: string) => void;
  animeDataStatus: 'idle' | 'loading' | 'resolved' | 'rejected';
  animeResult: Anime[];
}
const AnimeList = forwardRef(function AnimeList2(
  { animeDataStatus, animeResult, handleAnimeClick }: AnimeListProps,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const [filterValue, setFilterValue] = useState('');
  const filteredData =
    filterValue === ''
      ? animeResult
      : animeResult.filter((anime) => {
          const { titles } = anime.attributes;
          return titles?.en?.toLowerCase().includes(filterValue.toLowerCase());
        });

  // * starred filter start
  const { isStarFilterActive, starredAnimes } = useStarFilterContext();
  const filteredStarredData = !isStarFilterActive
    ? filteredData
    : filteredData.filter((anime) =>
        starredAnimes.some((starredAnime) => starredAnime.id === anime.id)
      );
  // * starred filter end

  // * heart filter start
  const { isHeartFilterActive, heartAnimes } = useHeartFilterContext();

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
      />

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
        {filteredHeartData.map((anime) => {
          return (
            <div key={anime.id} ref={ref}>
              <AnimeSummary
                attributes={anime.attributes}
                handleAnimeClick={() => handleAnimeClick(anime.id)}
                animeId={anime.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default AnimeList;
