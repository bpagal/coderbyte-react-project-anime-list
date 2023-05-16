import { AnimeAttributes } from '../types/anime';

type Popularity = Pick<AnimeAttributes, 'ratingRank' | 'favoritesCount'>;

interface AnimeSummaryProps extends Popularity {
  title: string;
}

const AnimeSummary = ({
  title,
  ratingRank,
  favoritesCount,
}: AnimeSummaryProps) => {
  return (
    <div>
      <h2 className="text-xl">{title}</h2>
      <h2 className="text-xl">{ratingRank}</h2>
      <h2 className="text-xl">{favoritesCount}</h2>
    </div>
  );
};

export default AnimeSummary;
