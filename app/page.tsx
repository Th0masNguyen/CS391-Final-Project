"use client";
import {useContext} from "react";
import {UserContext} from "@/components/UserProvider";
import UserForm from "@/components/UserForm";

export default function Home() {
    // load in the username and setUsernameState function from the user context
    const { username, setUsername } = useContext(UserContext);

    // render the home page with the UserForm component for the user to enter a username and start the game
    return (
        <main className={"flex flex-col pt-60 items-center w-full h-full text-[#5863F8]"}>
            <h1 className={"text-6xl font-semibold m-10"}>FlickPic</h1>
            <UserForm username={username} setUsername={setUsername} />
        </main>
    );
}
