
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Displays names and scores for leaderboard
*/

import getAllScores from "@/lib/getAllUserScores";

export default async function DisplayScores() {
    const scores = await getAllScores();

    return(
        <table className="table-auto border">
            <tr>
                <th className="px-10 py-2 text-5xl border">Name</th>
                <th className="px-10 py-2 text-5xl border">Score</th>
            </tr>
            {scores.map((s) =>
                <tr>
                    <td className="px-10 py-2 text-2xl border">{s.name}</td>
                    <td className="px-10 py-2 text-2xl border">{s.score}</td>
                </tr>
            )}
        </table>
    )
}