$(document).ready(function(){
  var apiKey = "e5c560a7"
  $("#movieForm").submit(function(event){
    event.preventDefault()

    var movie = $("#movie").val()

    var result=""

    var url ="http://www.omdbapi.com/?i=tt3896198&apikey=" + apiKey

    $.ajax({
      method:'GET',
      url:url + "&t=" + movie,
      success:function(data){
        console.log(data)

        result = `<img style="float:left" class="img-thumnail" src="${data.Poster}"/>`
          
        $("#result").html(result)

      }
    })

  })
})