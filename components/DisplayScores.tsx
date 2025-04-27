
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Displays names and scores for leaderboard
*/

import getAllScores from "@/lib/getAllScores";

export default async function DisplayScores() {
    const scores = await getAllScores();

    return(
        <table className="table-auto border">
            <thead>
                <tr>
                    <th className="px-10 py-2 text-3xl border">Name</th>
                    <th className="px-10 py-2 text-3xl border">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((s, index) =>
                    <tr key={index}>
                        <td className="px-10 py-2 text-2xl border">
                            <span className={"text-white"}>{s.name}</span>
                        </td>
                        <td className="px-10 py-2 text-2xl border text-center">
                            <span className={"text-[#58f8c4]"}>{s.score}</span>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}