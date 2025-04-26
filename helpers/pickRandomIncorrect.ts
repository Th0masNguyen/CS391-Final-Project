/**
 * Created by Lance Sinson (ssinson@bu.edu)
 * A helper function to get three random movies from a movie list other than the correct one
 */

import { shuffleArray } from "./shuffleArray"
import { Movie } from "@/types"

// gets three random movies other than the correct one
export function pickRandomIncorrect(allMovies: Movie[], correctId: number, count: number) {
    const filtered = allMovies.filter((movie) => movie.id !== correctId);
    return shuffleArray(filtered).slice(0, count);
}

