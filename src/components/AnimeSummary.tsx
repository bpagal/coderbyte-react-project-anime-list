import { AnimeAttributes } from '../types/anime';
import HeartStar from './HeartStar';

interface AnimeSummaryProps {
  attributes: AnimeAttributes;
  isStarActive: boolean;
  handleStarClick: () => void;
}

const AnimeSummary = ({
  attributes,
  isStarActive,
  handleStarClick,
}: AnimeSummaryProps) => {
  const { ratingRank, favoritesCount, titles } = attributes;
  const title = titles.en ?? titles.en_jp;

  return (
    <div className="bg-gray-800 border-4 border-red-500">
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

          {/* <h2 className="text-xl">❤️{favoritesCount}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default AnimeSummary;
