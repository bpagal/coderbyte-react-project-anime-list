import { AnimeAttributes } from '../types/anime';

interface AnimeSummaryProps {
  attributes: AnimeAttributes;
}

const AnimeSummary = ({ attributes }: AnimeSummaryProps) => {
  const { ratingRank, favoritesCount, titles } = attributes;
  const title = titles.en ?? titles.en_jp;

  return (
    <div className="bg-gray-800 border-4 border-red-500">
      <img src={attributes.posterImage.small} alt="poster image" />
      <div className="py-3 text-gray-100 text-center">
        <h2 className="text-xl">{title}</h2>
        <div className="flex flex-row justify-around">
          <h2 className="text-xl">⭐{ratingRank}</h2>
          <h2 className="text-xl">❤️{favoritesCount}</h2>
        </div>
      </div>
    </div>
  );
};

export default AnimeSummary;
