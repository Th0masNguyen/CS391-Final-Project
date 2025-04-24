"use client";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/components/UserProvider";
import getImage from "@/lib/getImage";

export default function GamePage() {
    const [rounds, setRounds] = useState([]);
    const [roundNumber, setRoundNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState("");
    const { username } = useContext(UserContext);

    useEffect(() => {
        const newAnswerId = 0;
        const newImage = getImage(newAnswerId);
        setImage(newImage);
    }, [roundNumber]);

    return (
        <main className={"flex flex-col items-center w-full h-full text-[#5863F8]"}>
            {rounds[roundNumber]}
        </main>
    );
}