
$(document).ready(function () {
    var apiKey = "e5c560a7"
    $("#movieForm").submit(function (event) {
        event.preventDefault()

        var movie = $("#movie").val()

        var result = ""

        var url = "http://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey

        $.ajax({
            method: 'GET',
            url: url + "&t=" + movie,
            success: function (data) {
                console.log(data)

                result = `<img style="float:left" class="img-thumnail" src="${data.Poster}"/>`

                $("#result").html(result)

            }
        })

    // tmdb api
        var tmdbAPIKey = "ed33f94e93475b200ae27f0ac9bb479a";
        var urlSearch = "&query="; // + movie name (#movie)
        var baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';

        var movie = $("#movie").val();
        var result = "";
        var url = baseUrl + tmdbAPIKey + urlSearch;

        $.ajax({
            method: 'GET',
            url: url + movie,
            success: function (response) {
                console.log(response)
                result = `<h1>${Math.floor(response.results[0].popularity)}</h1>` //rounds popularity to nearest whole number
                // $("#classforrating").html(result)
            }
        })

    })
})

// section for rest button to clear form //
let btnClear = document.querySelector('#clearbtn')
let inputs = document.querySelector('#search')

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');




});
