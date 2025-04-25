export type Movie = {
  id: number;
  title: string;
}

export type RoundData = {
  correct: Movie;
  options: Movie[];
};