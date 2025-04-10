import {clearMovieStorage} from "../repository/movieStorage";

export function clearMovieSearchesHandler(): void {
    const existingMoviesDiv = document.getElementById("existingMovies") as HTMLDivElement;

    clearMovieStorage();
    existingMoviesDiv.innerHTML = "";
}