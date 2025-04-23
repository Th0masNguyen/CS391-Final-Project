interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
  iso_639_1: string | null;
}

interface ImageResponse {
  backdrops: Image[];
  posters: Image[];
  logos: Image[];
}

//gets a random still from a movie
async function getImage(movieId: number): Promise<string> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJjOTIzOGRlZDQ3NDkyYThkNmU3MjJkMWNjMDcxZiIsIm5iZiI6MTc0NDM4NDQ2OC4wMTEwMDAyLCJzdWIiOiI2N2Y5MzFkNDFiYzYzOTU2NmFkYTJiOTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5hvjZR8JflCyd_GE0pPVkDxjY-c4KAgkWvEBBU7uaXo',
      accept: 'application/json'
    }
  });

  const data: ImageResponse = await response.json();
  const noTextImages = data.backdrops.filter(img => img.iso_639_1 === null);

  const randomImage = noTextImages[Math.floor(Math.random() * noTextImages.length)];
  const randomImageURL = `https://image.tmdb.org/t/p/original${randomImage.file_path}`;

  console.log(randomImageURL);
  return randomImageURL;
}