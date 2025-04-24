"use client";
import {useContext, useState} from "react";
import {UserContext} from "@/components/UserProvider";

export default function GamePage() {
    const [rounds, setRounds] = useState([]);
    const [roundNumber, setRoundNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [image, setImage] = useState("");
    const { username } = useContext(UserContext);

    return (
        <main className={"flex flex-col items-center w-full h-full text-[#5863F8]"}>

        </main>
    );
}