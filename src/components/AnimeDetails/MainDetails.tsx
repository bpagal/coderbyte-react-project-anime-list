import { AnimeAttributes } from '../../types/anime';

interface MainDetailsProps {
  synopsis: string;
}

const MainDetails = ({ synopsis }: MainDetailsProps) => {
  return (
    <div>
      <p className="text-lg">{synopsis}</p>
    </div>
  );
};

export default MainDetails;
