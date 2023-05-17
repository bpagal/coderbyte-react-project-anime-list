import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner';

interface EpisodesProps {
  animeId: string;
}

interface Episode {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    synopsis: null | string;
    description: null | string;
    titles: object;
    canonicalTitle: null | string;
    seasonNumber: null | string;
    number: number;
    relativeNumber: number;
    airdate: null | string;
    length: number;
    thumbnail: null | string;
  };
  relationships: {
    media: {
      links: {
        self: string;
        related: string;
      };
    };
    videos: {
      links: {
        self: string;
        related: string;
      };
    };
  };
}

interface EpisodeResponse {
  data: Episode[];
  meta: {
    count: number;
  };
  links: {
    first: string;
    prev: string;
    next: string;
    last: string;
  };
}

const Episodes = ({ animeId }: EpisodesProps) => {
  const [animeDataStatus, setAnimeDataStatus] = useState<
    'idle' | 'loading' | 'resolved' | 'rejected'
  >('idle');
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setAnimeDataStatus('loading');
      try {
        const result = await axios.get<EpisodeResponse>(
          `https://kitsu.io/api/edge/anime/${animeId}/episodes`
        );
        const { data: responseData } = result.data;

        setEpisodes(responseData);
        setAnimeDataStatus('resolved');
      } catch (error) {
        setAnimeDataStatus('rejected');
      }
    };

    fetchData();
  }, [animeId]);

  return (
    <>
      <h2 className="text-lg mt-6 font-bold">Episodes</h2>
      {animeDataStatus === 'loading' ? (
        <Spinner isFullHeight={false} />
      ) : episodes[0]?.attributes.synopsis === null ? (
        <h2 className="text-lg">N/A. This is of type movie</h2>
      ) : (
        episodes?.map((episode) => {
          const { airdate, number: epNumber, synopsis } = episode.attributes;
          return (
            <div className="flex gap-7 my-4" key={episode.id}>
              <h2 className="text-lg">{airdate}</h2>
              <h2 className="text-lg ">{`${epNumber}: ${synopsis}`}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Episodes;
