/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * A component to bring the user to the next round or end the game
*/

import React from "react";
import {NextRoundButtonsProps} from "@/types";

// Displays the proper button depending on round
export default function NextRoundButton({ onSelectIfOver, onSelectIfNotOver, round }: NextRoundButtonsProps) {
    // If last round, display the end game button, which on click calls the function that ends the game
    if(round === 9) {
        return (
            <div className="flex flex-col gap-4">
                <button className="bg-[#5863F8] text-black text-2xl px-10 py-3 rounded hover:bg-[#5158BB] border-green-400 border-1"
                onClick={() => onSelectIfOver()}>
                    End Game
                </button>
            </div>
        )
    } else {
        // If not last round, display next round button, which calls function that helps prepare next round
        return (
            <div className="flex flex-col gap-4">
                <button className="bg-[#5863F8] text-black text-2xl px-10 py-3 rounded hover:bg-[#5158BB] border-green-400 border-1"
                onClick={() => onSelectIfNotOver()}>
                    Next Round
                </button>
            </div>
        );
    } 
}
