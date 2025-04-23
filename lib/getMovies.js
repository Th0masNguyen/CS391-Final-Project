//gets movie stills from a movie
async function getImages(movieId){
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJjOTIzOGRlZDQ3NDkyYThkNmU3MjJkMWNjMDcxZiIsIm5iZiI6MTc0NDM4NDQ2OC4wMTEwMDAyLCJzdWIiOiI2N2Y5MzFkNDFiYzYzOTU2NmFkYTJiOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5hvjZR8JflCyd_GE0pPVkDxjY-c4KAgkWvEBBU7uaXo',
      'accept': 'application/json'
    }
  });
  
  const data = await response.json();
  const images = data.backdrops
  const noTextImages = [];
  for (let i = 0; i < images.length; i++) {
    if(images[i].iso_639_1 === null){noTextImages.push(images[i])}
  }

  const randomImage = noTextImages[Math.floor(Math.random() * noTextImages.length)];
  const randomImageURL = `https://image.tmdb.org/t/p/original${randomImage.file_path}`

  console.log(randomImageURL)
}


//gets 100 of the movies popular movies
async function getMovies(){
  let movies = [];
  //get 20 of the most popular movies, 5 times
  for (let i = 1; i < 6; i++) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&sort_by=vote_count.desc`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJjOTIzOGRlZDQ3NDkyYThkNmU3MjJkMWNjMDcxZiIsIm5iZiI6MTc0NDM4NDQ2OC4wMTEwMDAyLCJzdWIiOiI2N2Y5MzFkNDFiYzYzOTU2NmFkYTJiOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5hvjZR8JflCyd_GE0pPVkDxjY-c4KAgkWvEBBU7uaXo',
        'accept': 'application/json'
      }
    });
    const data = await response.json();
    movies = [...movies, ...data.results]
  }
  return movies;
}

getMovies();

