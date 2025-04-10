import {getAllMovieSearches} from "../repository/movieStorage";
import {callOMDBApi} from "../services/omdbApiService";
import {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import {listMovieResults} from "../helpers/movieElementHelper";


export function renderPreviousSearches(): void {
    const existingMoviesDiv = document.getElementById("existingMovies") as HTMLDivElement;
    const movieList = document.getElementById("movieList") as HTMLDivElement;

    existingMoviesDiv.innerHTML = "";

    const existingMovies: SingleMovieSearch[] = getAllMovieSearches();

    existingMovies.forEach((movie: SingleMovieSearch) => {
        const movieLabelTitle = document.createElement("div") as HTMLDivElement;
        movieLabelTitle.textContent = `${movie.name}, ${movie.year}`;
        movieLabelTitle.setAttribute("data-movie-name", movie.name);
        movieLabelTitle.setAttribute("data-movie-year", movie.year);
        existingMoviesDiv.append(movieLabelTitle);

        movieLabelTitle.addEventListener("click", async () => {

            let response = await callOMDBApi([
                {key: 's', value: movie.name},
                {key: 'y', value: movie.year}
            ]);

            const successData = response.data as ApiSuccessInterface;
            listMovieResults(successData.Search, movieList);
        });
    });

}