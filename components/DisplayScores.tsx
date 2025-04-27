
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Displays names and scores for leaderboard
*/

import getAllScores from "@/lib/getAllUserScores";

export default async function DisplayScores() {
    const scores = await getAllScores();

    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Score</th>
            </tr>
            {scores.map((s) =>
                <tr>
                    <td>{s.name}</td>
                    <td>{s.score}</td>
                </tr>
            )}
        </table>
    )
}