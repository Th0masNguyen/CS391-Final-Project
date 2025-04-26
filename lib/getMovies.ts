//written by Thomas Nguyen (nguyen04@bu.edu)
//gets the n most popular movies of all time as a base pool from which the game is played
"use server";

import { Movie } from "@/types";

export default async function getMovies(n: number = 300): Promise<Movie[]> {
  const movies: Movie[] = [];
  const numFetches = Math.floor(n / 20);
  //api returns 20 movies at a time
  try {
    for (let i = 1; i <= numFetches; i++) {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&sort_by=vote_count.desc`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJjOTIzOGRlZDQ3NDkyYThkNmU3MjJkMWNjMDcxZiIsIm5iZiI6MTc0NDM4NDQ2OC4wMTEwMDAyLCJzdWIiOiI2N2Y5MzFkNDFiYzYzOTU2NmFkYTJiOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5hvjZR8JflCyd_GE0pPVkDxjY-c4KAgkWvEBBU7uaXo',
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
  }

  return movies;
}
