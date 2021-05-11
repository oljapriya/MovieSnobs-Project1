$(document).ready(function () {
  $("#movieForm").submit(function (event) {
    event.preventDefault()

    var movie = $("#movie").val()
    var result = ""
    
    var apiKey = "e5c560a7"
    var url = "http://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey 

    $.ajax({
      method: 'GET',
      url: url + "&t=" + movie,
      success: function (data) {
        // console.log(data)

        result += `
        
        <div class="resultStyle">
          <img src="${data.Poster}"/>
          <h5><b>TITLE</b>: ${data.Title}</h5>
          <h5><b>GENRE</b>: ${data.Genre}</h5>
          <h5><b>PLOT</b>: ${data.Plot}</h5>
          <h5><b>RATING</b>: ${data.imdbRating}</h5>
        </div> 
        `
        
        
        $("#result").html(result)
       
      }
    })
  })
})


