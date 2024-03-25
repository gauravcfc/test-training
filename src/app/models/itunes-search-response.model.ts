export interface ItunesSearchResponse {
  resultCount: number;
  results: Artist[];
}

export interface Artist {
  artistId: number;
  artistName: string;
  releaseDate: string;
  country: string;
}
