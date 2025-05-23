/**
 * Created by Eytan Mobilio (emobilio@bu.edu)
 * A form component for the user to enter a username to be associated
 * with (will be stored in the db with their score), checks for valid
 * usernames and starts the game on submit (redirects to the game page).
 */
import {FormEvent, useState} from "react";
import {redirect} from "next/navigation";
import getUser from "@/lib/getUser";

// Takes the username (string) and setUsername function to change the username state and renders a form
// for the user to enter a username and begin the game
export default function UserForm({ username, setUsername } : { username: string, setUsername : (name: string) => void }) {
    const [errorMessage, setErrorMessage] = useState("");

    // run on submit to handle bad input and redirect to the game page
    async function handleSubmit(e : FormEvent) : Promise<void> {
        e.preventDefault();

        // if the user entered only whitespace, don't redirect and show an error message
        const trimmed = username.trim();
        if (trimmed.length === 0) {
            setErrorMessage("Please enter a valid username.");
            return;
        }

        // if the username is already in the database, don't redirect and show an error message
        const userExists = await getUser(trimmed);
        if (userExists) {
            setErrorMessage("This username is taken. Please enter a new one.");
            return;
        }

        // otherwise set the username to the trimmed name that was entered, save the
        // username to local storage and redirect to the game page
        setUsername(trimmed);
        localStorage.setItem('username', trimmed)
        setErrorMessage("");
        redirect("/game");
    }

    return (
        <form
            className={"flex flex-col w-[30%] max-md:w-[80%] items-center justify-center rounded bg-b color-[#5863F8] p-10 border-2 border-[#5863F8]"}
            onSubmit={handleSubmit}
        >
            {/* input for username */}
            <label htmlFor={"username"} className={"text-2xl font-semibold mb-1"}>Username</label>
            <input
                id={"username"}
                name={"username"}
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className={"bg-white p-1 border-2 border-[#5863F8] w-[55%]"}
            />

            {/* submit button to start the game */}
            <button
                type="submit"
                className={"bg-[#5863F8] text-2xl text-black mt-8 w-[75%] p-1 rounded hover:bg-[#5158BB] border-green-400 border-1"}
            >
                Play
            </button>

            {/* conditionally render the error message if there is one */}
            {errorMessage && <p className={"text-center text-red-500 text-xl mt-8"}>{errorMessage}</p>}
        </form>
    );
}