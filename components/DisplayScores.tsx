
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Displays names and scores for leaderboard
*/

import getAllScores from "@/lib/getAllScores";
export const dynamic = "force-dynamic"; //forces fresh fetches


// Function that displays all of the scores in the database in a table
export default async function DisplayScores() {
    // Call function that gets scores from db
    const scores = await getAllScores();

    // Return table that is filled by mapping names and scores into their own rows/cols
    return(
        <table className="table-auto border">
            <thead>
                <tr>
                    <th className="px-10 py-2 max-md:text-xl text-3xl border">Name</th>
                    <th className="px-10 py-2 max-md:text-xl text-3xl border">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((s, index) =>
                    <tr key={index}>
                        <td className="px-10 py-2 max-md:text-lg text-2xl border">
                            <span className={"text-white"}>{s.name}</span>
                        </td>
                        <td className="px-10 py-2 max-md:text-lg text-2xl border text-center">
                            <span className={"text-[#58f8c4]"}>{s.score}</span>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}