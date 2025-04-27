export type Movie = {
  id: number;
  title: string;
};

export type RoundData = {
  correct: Movie;
  options: Movie[];
};

export type GameStateProps = {
  roundNumber: number;
  score: number;
  username: string;
};

export type GameEndProps = {
  score: number;
};

export type NextRoundButtonsProps = {
  onSelectIfOver: () => void;
  onSelectIfNotOver: () => void;
  round: number;
}

export type ChoiceButtonsProps = {
  options: Movie[];
  onGuess: (movie: Movie) => void;
  selectedOption: Movie | null;
}

type GuessState = "unanswered" | "correct" | "incorrect";

export type RoundFeedbackProps = {
  guessState: GuessState;
  correctAnswer?: string;
};

export type ScoreProps = {
  name: string;
  score: number;
};

export type Image = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
  iso_639_1: string | null;
};

export type ImageResponse = {
  backdrops: Image[];
  posters: Image[];
  logos: Image[];
};