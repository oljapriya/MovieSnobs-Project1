$(document).ready(function () {

  let btnClear = document.querySelector('#clearbtn')
  let inputs = document.querySelectorAll('#movie, #result_data, #result_image')
  // section for rest button to clear form //
  btnClear.addEventListener('click', () => {
      inputs.forEach(input => {
      input.value = '';
      input.innerHTML = '';
      });
      
  })


  $("#movieForm").submit(function (event) {

    // tmdb api for movie cover art
    var tmdbAPIKey = "ed33f94e93475b200ae27f0ac9bb479a";
  var urlSearch = "&query="; // + movie name (#movie)
  var baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
  var posterPath = 'https://image.tmdb.org/t/p/w500/'; // add poster file after

  var movie = $("#movie").val();
  var result = "";
  var url = baseUrl + tmdbAPIKey + urlSearch + movie;

  $.ajax({
      method: 'GET',
      url: url,
      success: function (response) {
          console.log(response)
          const fullImgPath = posterPath;
          data = `<img class="img-thumbnail" src="${posterPath}${response.results[ 0 ].poster_path}"/>` // url and html tag for image
          $("#result_image").html(data) // result is class for image
      }
  }) 


  // api for movie data
  var apiKey = "e5c560a7"
      event.preventDefault()
      var movie = $("#movie").val()
      var result = ""
      var url = "https://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey

      $.ajax({
          method: 'GET',
          url: url + "&t=" + movie,
          success: function (data) {
              console.log(data)

              result += `
        <div class="result_data">
          <h5><b>TITLE</b>: ${data.Title}</h5>
          <h5><b>GENRE</b>: ${data.Genre}</h5>
          <h5><b>PLOT</b>: ${data.Plot}</h5>
          <h5><b>RATING</b>: ${data.imdbRating}</h5>
        </div> 
        `
              // result = `<img style="float:left" class="img-thumnail" width="200" height="200" src="${data.Poster}"/>`
              $("#result_data").html(result)

          }
      })

  })

  // old code for the movie poster art

  // var apiKey = "e5c560a7"
  // $("#movieForm").submit(function (event) {
  //     event.preventDefault()

  //     var movie = $("#movie").val()

  //     var result = ""

  //     var url = "http://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey

  //     $.ajax({
  //         method: 'GET',
  //         url: url + "&t=" + movie,
  //         success: function (data) {
  //             console.log(data)

  //             // result = `<img style="float:left" class="img-thumnail" src="${data.Poster}"/>`

  //             $("#result").html(result)

  //         }
  //     })



}) 