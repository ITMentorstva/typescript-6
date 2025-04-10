import {callOMDBApi} from "../services/omdbApiService";
import {ApiResponseErrorInterface} from "../interfaces/ApiResponseErrorInterface";
import {rememberMovieSearch} from "../repository/movieStorage";
import {renderPreviousSearches} from "../ui/renderPreviousSearches";
import {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import {listMovieResults} from "../ui/listMovieResults";


export async function searchMovieHandler() {

    const movieList = document.getElementById("movieList") as HTMLDivElement;
    const errorList = document.getElementById("errorList") as HTMLDivElement;
    const yearSelect = document.getElementById("movieYears") as HTMLSelectElement;

    movieList.innerHTML = "";
    errorList.innerHTML = "";

    const movieNameElement = document.getElementById("movieName") as HTMLInputElement;

    if (movieNameElement.value.trim() === '') {
        alert("You need to enter the movie name");
        return;
    }

    let response = await callOMDBApi([
        {key: 's', value: movieNameElement.value},
        {key: 'y', value: yearSelect.value}
    ]);

    if (response.data.Response === 'False') {

        const errorData = response.data as ApiResponseErrorInterface;

        const errorMessage = document.createElement("h2") as HTMLHeadingElement;
        errorMessage.textContent = errorData.Error + " Here are some recommendations that are similar to what you were search: ";

        errorList.append(errorMessage);

        response = await callOMDBApi([
            {key: 's', value: movieNameElement.value}
        ]);
    } else {
        rememberMovieSearch(
            {name: movieNameElement.value, year: yearSelect.value}
        );
        renderPreviousSearches();
    }

    const successData = response.data as ApiSuccessInterface;
    listMovieResults(successData.Search, movieList);
}