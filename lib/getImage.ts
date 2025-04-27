//written by Thomas Nguyen (nguyen04@bu.edu)
//Gets a random image by movieId
//Unfortunately impossible to fully distinguish movie stills and posters with this api

"use server";

import {ImageResponse} from "@/types";

export default async function getImage(movieId: number): Promise<string | null> {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TMDB_API_KEY}`,
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch images for movie ID ${movieId}`);
      return null;
    }

    const data: ImageResponse = await response.json();
    //gets rid of images with text, since they usually have the movie title in them
    const noTextImages = data.backdrops.filter(img => img.iso_639_1 === null);

    if (noTextImages.length === 0) {
      console.warn(`No suitable images found for movie ID ${movieId}.`);
      return null;
    }

    const randomImage = noTextImages[Math.floor(Math.random() * noTextImages.length)];
    const randomImageURL = `https://image.tmdb.org/t/p/original${randomImage.file_path}`;

    console.log(randomImageURL);
    return randomImageURL;
  } catch (error) {
    console.error(`Error fetching image for movie ID ${movieId}:`, error);
    return null;
  }
}
