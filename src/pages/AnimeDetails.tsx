import LeftDetails from '../components/AnimeDetails/LeftDetails';
import MainDetails from '../components/AnimeDetails/MainDetails';
import { AnimeAttributes } from '../types/anime';

interface AnimeDetailsProps {
  handleGoBack: () => void;
  attributes: AnimeAttributes;
}

const AnimeDetails = ({ handleGoBack, attributes }: AnimeDetailsProps) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Anime Details Page</h1>
      <button className="p-3 bg-blue-500 rounded-lg" onClick={handleGoBack}>
        &lt; Go Back
      </button>
      <div className="grid grid-cols-[1fr_3fr]">
        <LeftDetails attributes={attributes} />
        <MainDetails />
      </div>
    </div>
  );
};

export default AnimeDetails;
