/**
 * Created by Lance Sinson (ssinson@bu.edu)
 * A component to show the results of each round
 */
import {RoundFeedbackProps} from "@/types";

export default function RoundFeedback({ guessState, correctAnswer }: RoundFeedbackProps) {

    // if the user answered correctly, display a correct result
    if (guessState === "correct") {
        return (
            <div className="max-md:w-[80%] w-[50%] h-auto mb-5 border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
                <p className="text-green-500 text-xl text-center font-bold">Correct!</p>
            </div>
        );

    // if the user answered incorrectly, display they were wrong and give the right answer
    } else if (guessState === "incorrect") {
        return (
            <div className="max-md:w-[80%] w-[50%] h-auto mb-5 border-2 border-[#5863F8] rounded-lg p-4 text-white bg-[#1a1a2e]">
                <div className="text-red-500 text-xl text-center font-bold">
                    <p>Incorrect</p>
                    {correctAnswer ? (
                        <p className="text-white mt-2">
                            Correct answer: <span className="text-[#58f8c4]">{correctAnswer}</span>
                        </p>
                    ) : null}
                </div>
            </div>
        );
    } else {
        // "unanswered"
        // if the user hasn't answered yet, don't show anything until they do
        return null;
    }
}
