import LeftDetails from '../components/AnimeDetails/LeftDetails';
import MainDetails from '../components/AnimeDetails/MainDetails';

interface AnimeDetailsProps {
  handleGoBack: () => void;
}

const AnimeDetails = ({ handleGoBack }: AnimeDetailsProps) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Anime Details Page</h1>
      <button className="p-3 bg-blue-500 rounded-lg" onClick={handleGoBack}>
        &lt; Go Back
      </button>
      <div>
        <LeftDetails />
        <MainDetails />
      </div>
    </div>
  );
};

export default AnimeDetails;
