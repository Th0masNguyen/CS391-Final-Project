
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * A component to show the user the game has ended
*/

import { GameEndProps } from "@/types";
import Link from "next/link";


export default function GameEndDisplay({score}: GameEndProps) {
    return(
        <div className="flex flex-col items-center justify-center max-md:w-[80%] w-[50%] h-[20%] mb-5 border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
            <h1 className="text-white-500 text-5xl text-center font-bold m-1">Game Over!</h1>
            <p className="text-white-500 text-xl text-center font-bold m-1">Your Score: <span className={"text-[#58f8c4]"}>{score}</span></p>
            <p className="text-white-500 text-xl text-center font-bold m-1">
                Check the <Link href={"/leaderboard"} className={"text-[#5863F8] hover:underline"}>Leaderboard</Link> to see where you place!
            </p>
        </div>
    );
}