import {callOMDBApi} from "../services/omdbApiService";
import {ApiSuccessInterface} from "../interfaces/ApiSuccessInterface";
import {SingleMovieInterface} from "../interfaces/SingleMovieInterface";

export async function showMovieDetails(imdbId: string) {

    const singleMoviePopup = document.getElementById("singleMoviePopup") as HTMLDivElement;
    const popupInner = document.getElementById("singleMoviePopupInner") as HTMLDivElement;

    const response = await callOMDBApi([
        {key: 'i', value: imdbId}
    ]);

    if(response.data.Response === 'False') {
        return;
    }

    popupInner.innerHTML = "";

    singleMoviePopup.style.display = "flex";
    
    const data = response.data as SingleMovieInterface;

    const moviePoster = document.createElement("img") as HTMLImageElement;
    moviePoster.src = <string> data.Poster;

    const movieTitle = document.createElement("h1") as HTMLParagraphElement;
    movieTitle.textContent = <string> data.Title;

    const movieYear = document.createElement("p") as HTMLParagraphElement;
    movieYear.textContent = `Year: ${data.Year}`;

    const movieRated = document.createElement("p") as HTMLParagraphElement;
    movieRated.textContent = `Rated: ${data.Rated}`;

    const movieReleased = document.createElement("p") as HTMLParagraphElement;
    movieReleased.textContent = `Released: ${data.Released}`;

    const movieRuntime = document.createElement("p") as HTMLParagraphElement;
    movieRuntime.textContent = `Runtime: ${data.Runtime}`;

    const movieGenre = document.createElement("p") as HTMLParagraphElement;
    movieGenre.textContent = `Genre: ${data.Genre}`;

    const movieDirector = document.createElement("p") as HTMLParagraphElement;
    movieDirector.textContent = `Director: ${data.Director}`;

    const movieWriter = document.createElement("p") as HTMLParagraphElement;
    movieWriter.textContent = `Writer: ${data.Writer}`;

    const movieActors = document.createElement("p") as HTMLParagraphElement;
    movieActors.textContent = `Actors: ${data.Actors}`;

    const moviePlot = document.createElement("p") as HTMLParagraphElement;
    moviePlot.textContent = `Plot: ${data.Plot}`;

    const movieLanguage = document.createElement("p") as HTMLParagraphElement;
    movieLanguage.textContent = `Language: ${data.Language}`;

    const movieCountry = document.createElement("p") as HTMLParagraphElement;
    movieCountry.textContent = `Country: ${data.Country}`;

    const movieAwards = document.createElement("p") as HTMLParagraphElement;
    movieAwards.textContent = `Awards: ${data.Awards}`;

    const movieImdbRating = document.createElement("p") as HTMLParagraphElement;
    movieImdbRating.textContent = `IMDB Rating: ${data.imdbRating}`;

    const movieImdbVotes = document.createElement("p") as HTMLParagraphElement;
    movieImdbVotes.textContent = `IMDB Votes: ${data.imdbVotes}`;

    const movieMetascore = document.createElement("p") as HTMLParagraphElement;
    movieMetascore.textContent = `Metascore: ${data.Metascore}`;

    const movieBoxOffice = document.createElement("p") as HTMLParagraphElement;
    movieBoxOffice.textContent = `Box Office: ${data.BoxOffice}`;

    const movieProduction = document.createElement("p") as HTMLParagraphElement;
    movieProduction.textContent = `Production: ${data.Production}`;

    const movieWebsite = document.createElement("p") as HTMLParagraphElement;
    movieWebsite.textContent = "Website: ";
    if (data.Website && data.Website !== "N/A") {
        const link = document.createElement("a") as HTMLAnchorElement;
        link.href = data.Website;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = data.Website;
        movieWebsite.appendChild(link);
    } else {
        const noWebsite = document.createTextNode("N/A");
        movieWebsite.appendChild(noWebsite);
    }

    popupInner.append(
        moviePoster,
        movieTitle,
        movieYear,
        movieRated,
        movieReleased,
        movieRuntime,
        movieGenre,
        movieDirector,
        movieWriter,
        movieActors,
        moviePlot,
        movieLanguage,
        movieCountry,
        movieAwards,
        movieImdbRating,
        movieImdbVotes,
        movieMetascore,
        movieBoxOffice,
        movieProduction,
        movieWebsite
    );

}
