/**
 * Created by Lance Sinson (ssinson@bu.edu)
 * A component to show the answer choices for each round
 */
import {ChoiceButtonsProps } from "@/types";


// takes in options, a list of Movie objects
// takes in onGuess, a function to handle the onClick
// takes in selectedOption, the option the user chose
// loops through each Movie object and creates an answer button
export default function ChoiceButtons({
                                          options,
                                          onGuess,
                                          selectedOption,
                                      }: ChoiceButtonsProps) {
    return (
        <div className="w-[80%] md:w-[50%] h-auto border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
            <div className="grid grid-cols-2 gap-4">
                {options.map((option) => {
                    // Check if this option is the currently selected one
                    const isSelected = selectedOption && selectedOption.id === option.id;

                    return (
                        <button
                            key={option.id}
                            onClick={() => onGuess(option)}
                            // disabled={disabled && !isSelected}
                            className={`
                                ${isSelected ? "bg-blue-300 transform translate-y-1" : "bg-[#5863F8] shadow-md"}
                                text-white
                                text-lg
                                px-4
                                py-2
                                rounded
                                hover:bg-[#5158BB]
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                                border-green-400 
                                border-1
                             `}
                        >
                            {option.title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
