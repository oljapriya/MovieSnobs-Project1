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

        result += `
        <img src="${data.Poster}"/>
        <div class="resultStyle">
          <h5><b>TITLE</b>: ${data.Title}</h5>
          <h5><b>GENRE</b>: ${data.Genre}</h5>
          <h5><b>PLOT</b>: ${data.Plot}</h5>
          <h5><b>RATING</b>: ${data.imdbRating}</h5>
        </div> 
        `
        // result = `<img style="float:left" class="img-thumnail" width="200" height="200" src="${data.Poster}"/>`
        
        
         


        
        $("#result").html(result)
       
      }
    })

  })
})