
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Leaderboard page
*/

import DisplayScores from "@/components/DisplayScores"

export default function Leaderboard() {
    return(
        <main className={"flex flex-col pt-5 items-center w-full h-full text-[#5863F8]"}>
            <h1 className={"text-8xl font-semibold m-10"}>Leaderboard</h1>
            {DisplayScores()}
        </main>
    )
}
