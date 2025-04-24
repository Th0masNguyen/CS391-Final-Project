//returns a randomized array of 40 movies
//should be called at game start

"use server";

import { Movie } from "@/types";
import getMovies from "./getMovies";

export default async function getRandomMovies(): Promise<Movie[]> {
  //shuffle the 200 movies and then take 40
  const allMovies = await getMovies();
  const shuffled = [...allMovies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 40);
}
