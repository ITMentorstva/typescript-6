import {SingleMovieInterface} from "../interfaces/SingleMovieInterface";
import {showMovieDetails} from "./showMovieDetails";

export function listMovieResults(movies: SingleMovieInterface[], htmlMovieList: HTMLElement): void {

    htmlMovieList.innerHTML = "";

    movies.forEach(movie => {

        const movieTitle = document.createElement("h2") as HTMLHeadingElement;
        movieTitle.textContent = <string>movie.Title;

        const moviePoster = document.createElement("img") as HTMLImageElement;
        moviePoster.src = <string>movie.Poster;

        const movieHolder = document.createElement("div") as HTMLDivElement;
        movieHolder.append(movieTitle, moviePoster);

        const viewSingleMovieButton = document.createElement("button") as HTMLButtonElement;
        viewSingleMovieButton.textContent = "Details";
        viewSingleMovieButton.setAttribute("data-imdb-id", <string> movie.imdbID);
        movieHolder.append(viewSingleMovieButton);

        htmlMovieList.append(movieHolder);

        viewSingleMovieButton.addEventListener("click", async () => {
            showMovieDetails(<string> movie.imdbID);
        });

    });
}