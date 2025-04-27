/**
 * Created by Eytan Mobilio (emobilio@bu.edu)
 * The app home page, renders the UserForm component for
 * the user to enter a username and begin the game.
 */
"use client";
import {useContext} from "react";
import {UserContext} from "@/components/UserProvider";
import UserForm from "@/components/UserForm";

// Home page component
export default function Home() {
    // load in the username and setUsername function from the user context
    const { username, setUsername } = useContext(UserContext);

    // render the home page with the UserForm component for the user to enter a username and start the game
    return (
        <main className={"flex flex-col items-center justify-center w-full h-full text-[#5863F8] pt-25 pb-10"}>
            <h1 className={"max-md:text-5xl text-6xl font-semibold m-10"}>FlickPic</h1>

            {/* Form to enter a username and begin the game */}
            <UserForm username={username} setUsername={setUsername} />

            {/* Game instructions */}
            <ul className="mt-5 text-center space-y-2 text-xl p-2">
                <li>Guess which movie each image came from.</li>
                <li>You have 10 rounds to get as many correct as you can.</li>
                <li>See if you can get to the top of the leaderboard!</li>
            </ul>
        </main>
    );
}
