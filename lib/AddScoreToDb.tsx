"use server";

import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function addScore(name : string, score : number) {
  const aliasCollection = await getCollection(ALIAS_COLLECTION);
  
  const res = await aliasCollection.insertOne({
    name: name,
    score: score
  });

  if(!res.acknowledged) {
    return "insertion failed"
  } else {
    return "success"
  }
  
}