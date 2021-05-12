$(document).ready(() => {
  $("#movieForm").on("submit", (e) => {
    let searchText = $("#movie").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?apikey=e5c560a7&s=' + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        
        output += `
            <div>
              <img src="${movie.Poster}">
            </div>
            <div>
              <h5 style="color: white">${movie.Title}</h5>
              <button><a onclick="movieSelected('${movie.imdbID}')" href="#">Movie Details</a></button>
            </div>
            <br>
            
        `;
      });

      $('#result_data').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
//passing data with local session storage
function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  //changing the page to movie.html file
  window.location = 'movie.html';
  return false;
}
function getMovie() {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?apikey=e5c560a7&i=' + movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;
  

      output = `
      <div class="container>
        <img src="${movie.Poster}">
        <h5 style="color:#000000"><strong>TITLE:</strong> ${movie.Title}</h5>
        <h5 style="color:#000000"><strong>GENRE:</strong> ${movie.Genre}</h5>
        <h5 style="color:#000000"><strong>PLOT:</strong> ${movie.Plot}</h5>
        <h5 style="color:#000000"><strong>RATING:</strong> ${movie.imdbRating}</h5>
      
        <div>
          <button><a href="http://imdb.com/title/${movie.imdbID}" target="_blank></a></button>
        </div>
        <div>
          <button><a href="index.html">View IMDB</a></button>
        </div>
      </div> 
      `;


      $('#movie').html(output); 

    })
    .catch((err) => {
      console.log(err);
    });
}