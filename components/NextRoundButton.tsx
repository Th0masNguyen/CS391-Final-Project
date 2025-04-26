
//This code was written by Colton Connolly

import React from "react";
import {NextRoundButtonsProps} from "@/types";


export default function NextRoundButton({ onSelect }: NextRoundButtonsProps) {
    return (
        <div className="flex flex-col gap-4">
            <button className="bg-[#5863F8] text-black text-2xl px-10 py-6 rounded hover:bg-[#5158BB]"
            onClick={() => onSelect()}>
                Next Round
            </button>
        </div>
    );
}
