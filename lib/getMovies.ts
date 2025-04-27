//written by Thomas Nguyen (nguyen04@bu.edu)
//gets the n most popular movies of all time as a base pool from which the game is played
"use server";

import { Movie } from "@/types";

export default async function getMovies(n: number = 300): Promise<Movie[]> {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const movies: Movie[] = [];
  const numFetches = Math.floor(n / 20);
  //api returns 20 movies at a time
  try {
    for (let i = 1; i <= numFetches; i++) {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&sort_by=vote_count.desc`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TMDB_API_KEY}`,
          accept: 'application/json',
        },
      });

      const data = await response.json();

      //throw away fields we dont need
      const trimmedMovies: Movie[] = data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
      }));

      movies.push(...trimmedMovies);
    }
  } catch (error) {
    console.error("An error occurred while fetching movies:", error);
    throw new Error("Error fetching round data, please try again later.");
  }

  return movies;
}
