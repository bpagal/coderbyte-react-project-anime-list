import { useHeartFilterContext } from '../hooks/useHeartFilterContext';
import { useStarFilterContext } from '../hooks/useStarFilterContext';
import { AnimeAttributes } from '../types/anime';
import HeartStar from './HeartStar';

interface AnimeSummaryProps {
  attributes: AnimeAttributes;
  handleAnimeClick: () => void;
  animeId: string;
}

const AnimeSummary = ({
  attributes,
  handleAnimeClick,
  animeId,
}: AnimeSummaryProps) => {
  const { handleStarClick, starredAnimes } = useStarFilterContext();
  const { handleHeartClick, heartAnimes } = useHeartFilterContext();
  const isStarActive = starredAnimes.some((elem) => elem.id === animeId);
  const isHeartActive = heartAnimes.some((elem) => elem.id === animeId);
  const { ratingRank, favoritesCount, titles } = attributes;
  const title = titles.en ?? titles.en_jp;

  return (
    <div
      className="bg-gray-800 border-4 border-red-500"
      onClick={handleAnimeClick}
    >
      <img src={attributes.posterImage.small} alt="poster image" />
      <div className="py-3 text-gray-100 text-center">
        <h2 className="text-xl">{title}</h2>
        <div className="flex flex-row justify-around">
          <div className="flex">
            <HeartStar
              isActive={isStarActive}
              handleClick={() => handleStarClick(animeId)}
              type="star"
            />
            <h2 className="text-xl">{ratingRank}</h2>
          </div>
          <div className="flex">
            <HeartStar
              isActive={isHeartActive}
              handleClick={() => handleHeartClick(animeId)}
              type="heart"
            />
            <h2 className="text-xl">{favoritesCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeSummary;
