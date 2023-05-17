import LeftDetails from '../components/AnimeDetails/LeftDetails';
import MainDetails from '../components/AnimeDetails/MainDetails';
import { useHeartFilterContext } from '../hooks/useHeartFilterContext';
import { useStarFilterContext } from '../hooks/useStarFilterContext';
import { AnimeAttributes } from '../types/anime';

interface AnimeDetailsProps {
  handleGoBack: () => void;
  attributes: AnimeAttributes;
  animeId: string;
}

const AnimeDetails = ({
  handleGoBack,
  attributes,
  animeId,
}: AnimeDetailsProps) => {
  const { isStarFilterActive, toggleStarFilterActive } = useStarFilterContext();
  const { isHeartFilterActive, toggleHeartFilterActive } =
    useHeartFilterContext();

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Anime Details Page</h1>
      <button
        className="p-3 bg-blue-500 rounded-lg"
        onClick={() => {
          if (isStarFilterActive) {
            toggleStarFilterActive();
          }
          if (isHeartFilterActive) {
            toggleHeartFilterActive();
          }
          handleGoBack();
        }}
      >
        &lt; Go Back
      </button>
      <div className="grid grid-cols-[0.5fr_2fr] gap-10">
        <LeftDetails attributes={attributes} animeId={animeId} />
        <MainDetails synopsis={attributes.synopsis} animeId={animeId} />
      </div>
    </div>
  );
};

export default AnimeDetails;
