import Episodes from './Episodes';

interface MainDetailsProps {
  synopsis: string;
  animeId: string;
}

const MainDetails = ({ synopsis, animeId }: MainDetailsProps) => (
  <div>
    <p className="text-lg">{synopsis}</p>
    <Episodes animeId={animeId} />
  </div>
);

export default MainDetails;
