import React from "react";
import { Movie } from "@/types";

interface ChoiceButtonsProps {
    options: Movie[];
    onGuess: (movie: Movie) => void;
}

// takes in options, a list of Movie objects
// takes in onGuess, a function to handle the onClick
// loops through each Movie object and creates an answer button
export default function ChoiceButtons({ options, onGuess }: ChoiceButtonsProps) {
    return (
        <div className="flex flex-col gap-4 mb-4">
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onGuess(option)}
                    className="bg-[#5863F8] text-black text-lg px-4 py-2 rounded hover:bg-[#5158BB]"
                >
                    {option.title}
                </button>
            ))}
        </div>
    );
}
