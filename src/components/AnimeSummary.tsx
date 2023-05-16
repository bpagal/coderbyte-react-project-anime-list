import { AnimeAttributes } from '../types/anime';
import HeartStar from './HeartStar';

interface AnimeSummaryProps {
  attributes: AnimeAttributes;
  isStarActive: boolean;
  handleStarClick: () => void;
  isHeartActive: boolean;
  handleHeartClick: () => void;
  handleAnimeClick: () => void;
}

const AnimeSummary = ({
  attributes,
  isStarActive,
  handleStarClick,
  isHeartActive,
  handleHeartClick,
  handleAnimeClick,
}: AnimeSummaryProps) => {
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
              handleClick={handleStarClick}
              type="star"
            />
            <h2 className="text-xl">{ratingRank}</h2>
          </div>
          <div className="flex">
            <HeartStar
              isActive={isHeartActive}
              handleClick={handleHeartClick}
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
