import { AnimeAttributes } from '../../types/anime';
import HeartStar from '../HeartStar';

interface LeftDetailsProps {
  attributes: AnimeAttributes;
  isStarActive: boolean;
  handleStarClick: () => void;
}

const LeftDetails = ({
  attributes,
  isStarActive,
  handleStarClick,
}: LeftDetailsProps) => {
  return (
    <div className="border-4 border-gray-800 p-4">
      <img src={attributes.posterImage.small} alt="poster image" />
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex">
          <HeartStar
            isActive={isStarActive}
            handleClick={handleStarClick}
            type="star"
          />
          <h2 className="text-lg">
            {attributes.ratingRank} from {attributes.userCount} users
          </h2>
        </div>
        <h2 className="text-lg">
          {231}
          Rank #{attributes.popularityRank}
        </h2>
        <h2 className="text-lg">
          Rated ${attributes.ageRatingGuide}: {attributes.ageRatingGuide}
        </h2>
        <h2 className="text-lg">Aired on {attributes.startDate}</h2>
        <h2 className="text-lg">
          {attributes.endDate ? `Ended on ${attributes.endDate}` : 'Ongoing'}
        </h2>
        <h2 className="text-lg">Type: {attributes.showType}</h2>
      </div>
    </div>
  );
};

export default LeftDetails;
