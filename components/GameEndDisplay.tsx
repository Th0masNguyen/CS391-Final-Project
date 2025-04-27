
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * A component to show the user the game has ended
*/

import { GameEndProps } from "@/types";


export default function GameEndDisplay({score}: GameEndProps) {
    return(
        <div className="w-[80%] md:w-[50%] h-[20%] mb-5 border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
            <h1 className="text-white-500 text-5xl text-center font-bold">Game Over!</h1>
            <p className="text-white-500 text-xl text-center font-bold">Your Score: {score}</p>
            <p className="text-white-500 text-xl text-center font-bold">Check the high score page to see where you place</p>
        </div>
    );
}