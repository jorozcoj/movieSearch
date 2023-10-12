document.getElementById("searchButton").addEventListener("click", searchMovies);

const urlBase = "https://api.themoviedb.org/3/search/movie?";

const apiKey = "6c6085133669699f90a7c31e8d19efc9";
const urlImg = "https://image.tmdb.org/t/p/w500";

let resultContainer = document.getElementById("results");
resultContainer.innerHTML = "";

function searchMovies() {
  let searchInput = document.getElementById("searchInput").value;
  //Get
  fetch(`${urlBase}query=${searchInput}&api_key=${apiKey}`)
    .then((data) => data.json())
    .then((data) => showinfo(data.results));
}

function showinfo(movies) {
  if (movies.length === 0) {
    resultContainer.innerHTML = "<p>Not Found Movies<p/>";
    return;
  }

  movies.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.classList.add('movie');

    let title = document.createElement("h2");
    title.textContent = movie.title;

    let releaseDate = document.createElement("h4");
    releaseDate.textContent = movie.release_date;

    let overView = document.createElement("p");
    overView.textContent = movie.overview;


    let posterPath = urlImg + movie.poster_path;
    let poster = document.createElement("img");
    poster.src = posterPath;

    movieDiv.appendChild(poster);
    movieDiv.appendChild(title);
    movieDiv.appendChild(releaseDate);
    movieDiv.appendChild(overView);

    
    resultContainer.appendChild(movieDiv)

  });
}
