
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Leaderboard page
*/

import DisplayScores from "@/components/DisplayScores"
import { Metadata } from "next";
export const dynamic = "force-dynamic"; //forces fresh fetches


// Metadata for leaderboard page
export const metadata: Metadata = {
    title: "Leaderboard | FlickPic",
    description: "See the top scores and players in FlickPic!",
};

// Displays leaderboard title, and uses component that dipslays leaderboard scores and names
export default function Leaderboard() {
    return(
        <main className={"flex flex-col justify-center items-center w-full h-full text-[#5863F8] pt-25 pb-10"}>
            <h1 className={"max-md:text-4xl text-6xl font-semibold m-10"}>Leaderboard</h1>
            <DisplayScores />
        </main>
    )
}
