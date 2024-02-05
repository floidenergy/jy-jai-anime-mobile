export interface IAnilistSearchResult {
  id: string;
  title: string;
  image: string;
  type: string;
  rating: number;
  releaseDate: string;
}

export interface IAnilistTrailer {
  id: string;
  site: string;
  thumbnail: string;
}

export interface IAnilistDate {
  year: number;
  month: number;
  day: number;
}

export interface IAnilistRecommendations {
  id: string;
  malId: string;
  title: string[];
  status: string;
  episodes: number;
  image: string;
  cover: string;
  rating: number;
  type: string;
}

export interface IAnilistRelations extends IAnilistRecommendations {
  relationType: string;
  color: string;
}

export interface IAnilistCharacters {
  id: string;
  role: string;
  name: string[];
  image: string;
}

export interface IAnilistEpisodes {
  id: string;
  title: string;
  episode: string;
}

export interface IAnilistTitle {
  english: string;
  native: string;
  romaji: string;
}

export interface IAnilistAnimeInfo {
  id: string;
  title: IAnilistTitle;
  malId: number;
  trailer: IAnilistTrailer;
  image: string;
  popularity: number;
  color: string;
  cover: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: IAnilistDate;
  endDate: IAnilistDate;
  rating: number;
  genres: string[];
  season: string;
  studios: string[];
  type: string;
  recommendations: IAnilistRecommendations;
  characters: IAnilistCharacters[];
  relations: IAnilistRelations;
  episodes: IAnilistEpisodes;
}

export interface IAnilistEpisodeStreamingLink {
  headers: { Referer: string };
  sources: [
    {
      url: string;
      isM3U8: boolean;
      quality: string;
    },
  ];
  download: string;
}
