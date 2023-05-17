import { useHeartFilterContext } from '../../hooks/useHeartFilterContext';
import { useStarFilterContext } from '../../hooks/useStarFilterContext';
import { AnimeAttributes } from '../../types/anime';
import HeartStar from '../HeartStar';

interface LeftDetailsProps {
  attributes: AnimeAttributes;
  animeId: string;
}

const LeftDetails = ({ attributes, animeId }: LeftDetailsProps) => {
  const { handleStarClick, starredAnimes } = useStarFilterContext();
  const { handleHeartClick, heartAnimes } = useHeartFilterContext();
  const isStarActive = starredAnimes.some((elem) => elem.id === animeId);
  const isHeartActive = heartAnimes.some((elem) => elem.id === animeId);

  return (
    <div className="p-4">
      <img
        className="border-4 border-gray-800"
        src={attributes.posterImage.small}
        alt="poster image"
      />
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex">
          <HeartStar
            isActive={isStarActive}
            handleClick={() => handleStarClick(animeId)}
            type="star"
          />
          <h2 className="text-lg">
            {attributes.ratingRank} from {attributes.userCount} users
          </h2>
        </div>
        <div className="flex">
          <HeartStar
            isActive={isHeartActive}
            handleClick={() => handleHeartClick(animeId)}
            type="heart"
          />
          <h2 className="text-lg">{`${attributes.favoritesCount} Rank #${attributes.popularityRank}`}</h2>
        </div>

        <h2 className="text-lg">Rated: {attributes.ageRatingGuide}</h2>
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
