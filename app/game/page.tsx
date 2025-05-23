/**
 * Collaborative File
 * Contains the logic and UI for the game page, including managing game rounds
 * by getting movies with which to play, updating UI for each round, getting
 * images for rounds, ending the game, etc.
 */

/**
 * There are other files written by us aside from components, such as ones in lib
 */

"use client";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/components/UserProvider";
import getImage from "@/lib/getImage";
import getRandomMovies from "@/lib/getRandomMovies";
import {Movie, RoundData} from "@/types"
import { pickRandomIncorrect } from "@/helpers/pickRandomIncorrect";
import { shuffleArray } from "@/helpers/shuffleArray"
import ChoiceButtons from "@/components/ChoiceButtons";
import GameStateDisplay from "@/components/GameStateDisplay";
import NextRoundButton from "@/components/NextRoundButton";
import RoundFeedback from "@/components/RoundFeedback";
import GameEndDisplay from "@/components/GameEndDisplay";
import addScore from "@/lib/addScore";

export default function GamePage() {
    // Begin Eytan Mobilio's code
    // state for the game, including round info, the correct answer, the user's score, username, etc.
    const [rounds, setRounds] = useState<RoundData[]>([]);
    const [roundNumber, setRoundNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState<Movie>();
    const [image, setImage] = useState("");
    const [roundReady, setRoundReady] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { username } = useContext(UserContext);
    // End Eytan Mobilio's code
    //Begin Colton Connolly's code
    const [answered, setAnswered] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    //End Colton Connolly's code
    // Begin Lance Sinson's code
    const [guessState, setGuessState] = useState<"unanswered" | "correct" | "incorrect">("unanswered");
    const [selectedOption, setSelectedOption] = useState<Movie | null>(null);
    // End Lance Sinson's code

    // Begin Eytan Mobilio's code
    // takes the user's guess (Movie object) and increments their score if they were correct
    function checkGuess(guess: Movie) {
        setAnswered(true);
        setSelectedOption(guess);

        if (guess === answer) {
            setScore(score + 1);
            // Begin Lance Sinson's code
            setGuessState("correct");
        } else {
            setGuessState("incorrect");
        }
            // End Lance Sinson's code
    }
    // End Eytan Mobilio's code

    // Begin Colton Connolly's code
    // function to increment the round number
    function nextRound() {
        setRoundNumber(roundNumber+1);
    }

    // function to end the game, setting the game over state and adding the user's score to the db
    function endGame() {
        setGameOver(true);
        addScore(username, score);
    }
    // End Colton Connolly's code

    // Begin Lance Sinson's code
    useEffect(() => {
        // this function creates the set of images (RoundData objects) for each of the 10 rounds
        async function prepareRounds() {
            try {
                setErrorMessage("");
                const allMovies = await getRandomMovies(); // get 40 random movies

                // pick 10 correct movies
                const correctMovies = allMovies.slice(0, 10);

                const newRounds = correctMovies.map((correctMovie) => {
                    // pick 3 random from the rest
                    const threeRandomIncorrect = pickRandomIncorrect(allMovies, correctMovie.id, 3);

                    // combine the 3 random choices with the correct answer and shuffle them
                    const fourOptions = shuffleArray([correctMovie, ...threeRandomIncorrect]);

                    return {
                        correct: correctMovie,
                        options: fourOptions,
                    };
                });

                setRounds(newRounds);
            } catch {
                // set an error message to display if there are any errors fetching movie data
                setErrorMessage("Error fetching round data, please try again later.");
            }
        }

        prepareRounds();
    }, []);
    // End Lance Sinson's code

    // Begin Eytan Mobilio's code
    // useEffect that prepares new rounds when the round changes
    useEffect(() => {
        async function prepareImage() {
            // wait until the rounds are ready
            if (!rounds[roundNumber]) {
                return;
            }

            // set roundReady state to false to show loading state
            setRoundReady(false);

            // get the movie id of the new round's correct answer and call getImage() to get a still from it
            const newAnswerId = rounds[roundNumber].correct.id;
            const newImage = await getImage(newAnswerId);

            // skip this round and move to the next one if there is a problem getting the image
            if (!newImage) {
                setRoundNumber(roundNumber + 1);
                return;
            }

            // set the new correct answer, the new round image, and roundReady to true
            setAnswer(rounds[roundNumber].correct)
            setImage(newImage);
            setRoundReady(true);
            setAnswered(false); //Colton Connolly wrote this

            // Begin Lance Sinson's code
            // reset guess states for this new round
            setGuessState("unanswered");
            setSelectedOption(null)
            // End Lance Sinson's code
        }
        prepareImage();
    }, [roundNumber, rounds]);
    // End Eytan Mobilio's code

    // Begin Eytan Mobilio's code
    // if the rounds or image haven't been set yet, render a loading state, and if there are any errors, display them
    if (rounds.length === 0 || !rounds[roundNumber] || !image || !roundReady || errorMessage) {
        return (
            <main className={"flex flex-col items-center justify-center w-full h-full text-[#5863F8] text-center"}>
                {errorMessage ?
                    <p className="text-4xl text-red-600">{errorMessage}</p>
                :
                    <p className="text-4xl">Loading...</p>
                }
            </main>
        );
    }

    // render the main game content
    //Begin Colton Connolly's code
    // Colton wrote out this logic as separate functions called from within this return to determine what to render,
    // Eytan refactored it here to be more concise and all in one place
    return (
        <main className={"flex flex-col items-center justify-center w-full h-full text-[#5863F8] pt-25 pb-10"}>
            {/* If the game is over, render the GameEndDisplay component, otherwise
             render the GameState component and the current round image */}
            {
                gameOver ?
                    <GameEndDisplay score={score}/>
                :
                    <>
                        <GameStateDisplay roundNumber={roundNumber + 1} score={score} username={username}/>
                        <img src={image} alt={"Round image"} className={"max-md:w-[80%] w-[50%] h-auto mb-10 border-2 border-[#5863F8]"} />
                    </>
            }

            {/* If the game is over, don't render any buttons, otherwise if the user hasn't answered render
             the buttons for the guesses, if they have answered render the RoundFeedback and next round button */}
            {
                gameOver ?
                    <>
                    </>
                :
                !answered ?
                    <ChoiceButtons
                        options={rounds[roundNumber].options}
                        onGuess={checkGuess}
                        selectedOption={selectedOption}
                    />
                :
                    <>
                        <RoundFeedback
                            guessState={guessState}
                            correctAnswer={answer?.title}
                        />
                        <NextRoundButton  onSelectIfOver={endGame} onSelectIfNotOver={nextRound} round={roundNumber}/>
                    </>
            }
        </main>
    );
    //End Colton Connolly's code
    // End Eytan Mobilio's code
}