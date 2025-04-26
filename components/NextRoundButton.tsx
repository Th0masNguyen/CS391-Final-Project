/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * A component to bring the user to the next round or end the game
*/

import React from "react";
import {NextRoundButtonsProps} from "@/types";


export default function NextRoundButton({ onSelectIfOver, onSelectIfNotOver, round }: NextRoundButtonsProps) {
    if(round === 9) {
        return (
            <div className="flex flex-col gap-4">
                <button className="bg-[#5863F8] text-black text-2xl px-10 py-6 rounded hover:bg-[#5158BB]"
                onClick={() => onSelectIfOver()}>
                    End Game
                </button>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-4">
                <button className="bg-[#5863F8] text-black text-2xl px-10 py-6 rounded hover:bg-[#5158BB]"
                onClick={() => onSelectIfNotOver()}>
                    Next Round
                </button>
            </div>
        );
    } 
}
