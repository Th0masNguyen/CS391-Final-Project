
/** 
 * Created by Colton Connolly (coltonc@bu.edu)
 * Adds user's score to database for leaderboard
*/


"use server";

import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function addScore(name : string, score : number) {
  // Get collection from db
  const aliasCollection = await getCollection(ALIAS_COLLECTION);
  
  // Insert name and score
  const res = await aliasCollection.insertOne({
    name: name,
    score: score
  });

  // Log errors or successes
  if(!res.acknowledged) {
    console.log("Failed adding");
    return "insertion failed"
  } else {
    console.log("Success adding");
    return "success"
    
  }
  
}