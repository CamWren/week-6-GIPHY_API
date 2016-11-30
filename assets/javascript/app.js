$(document).ready(function() {
  
  var shows = ["The Office", "Seinfeld", "Mad Men", "An Idiot Abroad"];

//Displays static gif and gif rating
  function showMeDuhGIF() {

    var show = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ show +"&api_key=dc6zaTOxFJmzC&limit=10&fmt=json";
  

    //Creates AJAX call for each button
    $.ajax({url:queryURL,method:'GET'}).done(function(response) {
        
      //var gifsDiv = $("<div class='gifsDiv'>");

      var rating = response.rating;

      console.log(rating);

      //var ratingParagraph = $("<p>").text("Rating: " + rating);

      //gifsDiv.append(ratingParagraph);

    });

  };


//creates new button for each query
  function newShowButtons() {

    $(".showButtons").empty();

    for (var i = 0; i < shows.length; i++) {

      var s = $("<button>");

      s.addClass("showButton");

      s.attr("data-name", shows[i]);

      s.text(shows[i]);

      $(".showButtons").append(s);
    };
  };


//Click event for each button to display movie info
  $("#add-show").on("click", function(event) {
      event.preventDefault();

      var show = $("#query-input").val().trim();

      shows.push(show);

      newShowButtons();
  });

  $(document).on("click", ".showButton", showMeDuhGIF);

  newShowButtons();

});

