/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Get's all user and score pairs for leaderboard
*/

"use server";
import { ScoreProps } from "@/types";
import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function getAllScores(): Promise<ScoreProps[]> {
  // Get collection and data from db
  const postsCollection = await getCollection(ALIAS_COLLECTION);
  const data = await postsCollection.find().sort({"score": -1}).toArray();

  // Map the scores to score props type with name and score
  const scores: ScoreProps[] = data.map((p) => ({
    name: p.name,
    score: p.score,
  }));

  return scores;
}