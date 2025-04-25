/**
 * Collaborative File
 * Contains the logic and UI for the game page, including managing game rounds
 * by getting movies with which to play, updating UI for each round, getting
 * images for rounds, ending the game, etc.
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

export default function GamePage() {
    // Begin Eytan Mobilio's code
    // state for the game, including round info, the correct answer, the user's score, username, etc.
    const [rounds, setRounds] = useState<RoundData[]>([]);
    const [roundNumber, setRoundNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState<Movie>();
    const [image, setImage] = useState("");
    const [roundReady, setRoundReady] = useState(false);
    const { username } = useContext(UserContext);

    // takes the user's guess (Movie object) and increments their score if they were correct
    function checkGuess(guess: Movie) {
        if (guess === answer) {
            setScore(score + 1);
        }
    }
    // End Eytan Mobilio's code

    useEffect(() => {
        // this function creates the set of images (RoundData objects) for each of the 10 rounds
        async function prepareRounds() {
            const allMovies = await getRandomMovies(); // get 40 random movies
            // pick 10 correct movies
            const correctMovies = allMovies.slice(0, 10);

            console.log(correctMovies);

            const newRounds = correctMovies.map((correctMovie) => {
                // pick 3 random from the rest
                const threeRandomIncorrect = pickRandomIncorrect(allMovies, correctMovie.id, 3);
                const fourOptions = shuffleArray([correctMovie, ...threeRandomIncorrect]);

                return {
                    correct: correctMovie,
                    options: fourOptions,
                };
            });

            console.log(newRounds);
            setRounds(newRounds);
        }

        prepareRounds();
    }, []);

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
        }
        prepareImage();
    }, [roundNumber, rounds]);

    // if the rounds or image haven't been set yet, render a loading state
    if (rounds.length === 0 || !rounds[roundNumber] || !image || !roundReady) {
        return (
            <main className={"flex flex-col items-center justify-center w-full h-full text-[#5863F8]"}>
                <p className="text-4xl">Loading...</p>
            </main>
        );
    }

    // render the main game content
    return (
        <main className={"flex flex-col items-center pt-30 w-full h-full text-[#5863F8]"}>
            <img src={image} alt={"Round image"} className={"w-[80%] md:w-[50%] h-auto mb-10 border-2 border-[#5863F8]"} />
            <ChoiceButtons
                options={rounds[roundNumber].options}
                onGuess={checkGuess}
            />
        </main>
    );
    // End Eytan Mobilio's code
}

