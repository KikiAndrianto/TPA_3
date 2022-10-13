let listMovies = document.getElementById("list-movie")
let content = document.querySelector(".content");
let inputSearch = document.getElementById("search");
let form = document.getElementById("form");


let API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d41688cb0f0ee69b62145a634b120198&language=en-US";

let getDataMovie = async (URL) => {
  let response = await fetch(URL);
  let movies = await response.json();

  movies.results.forEach((item, index) => {
    let IMG = "https://image.tmdb.org/t/p/w500";
    listMovies.innerHTML += 
    `<div class="p-2">
    <div class="flex-col card m-auto" style="width: 20rem;">
        <img src="${IMG + item.poster_path}" alt="" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <h5 class="card-text">Realese : ${item.release_date}</h5>
            <h5 class="card-text">Rating : ${item.vote_average}</h5>
    </div>
</div>`;
  });
};

let getDataSearch = async (URL) => {
  let response = await fetch(URL);
  let movies = await response.json();
  let html = "";

  movies.results.forEach((item, index) => {
    let IMG = "https://image.tmdb.org/t/p/w500";
    let htmlSegment = 
    `<div class="p-2">
    <div class="flex-col card m-auto" style="width: 20rem;">
        <img src="${IMG + item.poster_path}" alt="" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <h5 class="card-text">Realese : ${item.release_date}</h5>
            <h5 class="card-text">Rating : ${item.vote_average}</h5>
        </div>
    </div>
    </div>`;

    html += htmlSegment;
  });

  content.innerHTML = html;
};

getDataMovie(API_URL);

form.addEventListener("submit", (e) => {
  let SEARCH_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d41688cb0f0ee69b62145a634b120198&query=";
  let searchValue = inputSearch.value;
  e.preventDefault();
 // desc.innerText = "You searched for " + '"' + searchValue + '"';
  getDataSearch(SEARCH_URL + searchValue + "&page=1");
});