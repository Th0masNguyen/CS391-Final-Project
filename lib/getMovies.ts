interface Movie {
  id: number;
  title: string;
}

interface MovieResponse {
  results: Movie[];
}

async function getMovies(): Promise<Movie[]> {
  let movies: Movie[] = [];

  for (let i = 1; i <= 5; i++) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&sort_by=vote_count.desc`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJjOTIzOGRlZDQ3NDkyYThkNmU3MjJkMWNjMDcxZiIsIm5iZiI6MTc0NDM4NDQ2OC4wMTEwMDAyLCJzdWIiOiI2N2Y5MzFkNDFiYzYzOTU2NmFkYTJiOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5hvjZR8JflCyd_GE0pPVkDxjY-c4KAgkWvEBBU7uaXo',
        accept: 'application/json'
      }
    });

    const data: MovieResponse = await response.json();
    movies = [...movies, ...data.results];
  }

  return movies;
}
