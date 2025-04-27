/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Get's all user and score pairs for leaderboard
*/


import { ScoreProps } from "@/types";
import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function getAllScores(): Promise<ScoreProps[]> {
  const postsCollection = await getCollection(ALIAS_COLLECTION);
  const data = await postsCollection.find().sort({"score": -1}).toArray();

  const scores: ScoreProps[] = data.map((p) => ({
    name: p.name,
    score: p.score,
  }));

  return scores;
}