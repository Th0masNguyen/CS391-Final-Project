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