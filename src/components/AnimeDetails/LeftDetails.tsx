import { AnimeAttributes } from '../../types/anime';

interface LeftDetailsProps {
  attributes: AnimeAttributes;
}

const LeftDetails = ({ attributes }: LeftDetailsProps) => {
  return (
    <div className="border-4 border-gray-800 flex flex-col items-center p-4">
      <img src={attributes.posterImage.small} alt="poster image" />
      <h2 className="text-lg leading-relaxed">
        {attributes.ratingRank} from {attributes.userCount} users
      </h2>
      <h2 className="text-lg leading-relaxed">
        {231}
        Rank #{attributes.popularityRank}
      </h2>
      <h2 className="text-lg leading-relaxed">
        Rated ${attributes.ageRatingGuide}: {attributes.ageRatingGuide}
      </h2>
      <h2 className="text-lg leading-relaxed">
        Aired on {attributes.startDate}
      </h2>
      <h2 className="text-lg leading-relaxed">Ended on {attributes.endDate}</h2>
      <h2 className="text-lg leading-relaxed">Type: Change this</h2>
    </div>
  );
};

export default LeftDetails;
