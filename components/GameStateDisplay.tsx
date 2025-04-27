//written by Thomas Nguyen (nguyen04@bu.edu)
//Displays the current round number and user's score count

import {GameStateProps} from "@/types";

export default function GameStateDisplay({ roundNumber, score, username }: GameStateProps) {
  return (
    <div className="max-md:w-[80%] w-[50%] h-auto mb-5 border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
      <div className="flex justify-between text-lg font-medium">
        <span>
          Round: <span className="text-[#5863F8] font-bold">{roundNumber}</span>
        </span>
        <span>
          {username}&apos;s Score: <span className="text-[#58f8c4] font-bold">{score}</span>
        </span>
      </div>
    </div>
  );
}
