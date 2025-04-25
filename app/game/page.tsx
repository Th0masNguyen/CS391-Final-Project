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
    const [rounds, setRounds] = useState<RoundData[]>([]);
    const [roundNumber, setRoundNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState("");
    const { username } = useContext(UserContext);

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

    useEffect(() => {
        const newAnswerId = 0;
        const newImage = getImage(newAnswerId);
        setImage(newImage);
    }, [roundNumber]);

    return (
        <main className={"flex flex-col items-center w-full h-full text-[#5863F8]"}>
            {/*{rounds[roundNumber]}*/}
        </main>
    );
}

