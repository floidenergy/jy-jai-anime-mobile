import request from ".";
import * as metaParams from '../type/animeSearch'

interface IAdvanceSearch {
  page?: number,
  perPage?: number,
  query?: string,
  type?: "ANIME" | "MANGA",
  season?: metaParams.ISeason,
  format?: metaParams.IAnimeMetaFormat,
  genres?: metaParams.IAnimeMetaGenre[],
  id?: string,
  year?: string,
  status?: metaParams.IAnimeMetaStatus
}

interface IPageOptions {
  page?: number,
  perPage?: number
}

const animeApi = {
  getTrendingAnime: (options?: IPageOptions): Promise<any> => request.get(`meta/anilist/trending?${options}`),
  getPopularAnime: (options?: IPageOptions): Promise<any> => request.get(`meta/anilist/popular?${options}`),
  getRecenteEpisode: (options?: IPageOptions): Promise<any> => request.get(`meta/anilist/recent-episodes?${options}`),
  /**
   * UNDONE
   */
  getAnimeEpisode: () => { },
  getRandom: (): Promise<any> => request.get(`meta/anilist/random-anime`),
  advanceSearch: (query?: IAdvanceSearch): Promise<any> => request.get(`meta/anilist/advanced-search؟${query}`),
  Search: (query: string, page: number): Promise<any> => request.get(`meta/anilist/${query}؟${page}`),
}

export default animeApi;