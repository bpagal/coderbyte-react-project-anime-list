interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: Meta;
}

interface Meta {
  dimensions: {
    tiny: {
      width: number;
      height: number;
    };
    large: {
      width: number;
      height: number;
    };
    small: {
      width: number;
      height: number;
    };
    medium?: {
      width: number;
      height: number;
    };
  };
}

interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: { [key: string]: string };
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease: string | null;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: boolean | null;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: Meta;
}

interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: Meta;
}

interface Relationship {
  links: {
    self: string;
    related: string;
  };
}

export interface Anime {
  id: string;
  type: 'anime' | 'movie';
  links: {
    self: string;
  };
  attributes: Attributes;
  relationships: { [key: string]: Relationship };
}
