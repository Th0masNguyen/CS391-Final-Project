//Displays the current round number and score count

type GameStateProps = {
  roundNumber: number;
  score: number;
}

export default function GameStateDisplay({ roundNumber, score }: GameStateProps) {
  return (
    <div className="w-[80%] md:w-[50%] h-auto mb-10 border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
      <div className="flex justify-between text-lg font-medium">
        <span>
          Round: <span className="text-[#5863F8] font-bold">{roundNumber}</span>
        </span>
        <span>
          Score: <span className="text-[#58f8c4] font-bold">{score}</span>
        </span>
      </div>
    </div>
  );
}
