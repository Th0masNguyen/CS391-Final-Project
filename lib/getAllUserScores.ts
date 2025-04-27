import { ScoreProps } from "@/types";
import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function getAllPosts(): Promise<ScoreProps[]> {
  const postsCollection = await getCollection(ALIAS_COLLECTION);
  const data = await postsCollection.find().toArray();

  const scores: ScoreProps[] = data.map((p) => ({
    name: p.name,
    score: p.score,
  }));

  return scores;
}