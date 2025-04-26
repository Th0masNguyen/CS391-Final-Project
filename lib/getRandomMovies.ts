//written by Thomas Nguyen (nguyen04@bu.edu)
//returns a randomized array of 40 movies

"use server";

import { Movie } from "@/types";
import getMovies from "./getMovies";

export default async function getRandomMovies(): Promise<Movie[]> {
  //shuffle the inital pool of movies and then take 40
  const allMovies = await getMovies();
  const shuffled = [...allMovies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 40);
}
