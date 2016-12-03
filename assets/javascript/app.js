$(document).ready(function() {
  
  var shows = ["The Office", "Seinfeld", "Mad Men", "An Idiot Abroad"];

//Displays static gif and gif rating
  function showMeDaGIF() {

    var show = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ show +"&api_key=dc6zaTOxFJmzC&limit=10&fmt=json";
  

    //Creates AJAX call for each button
    $.ajax({url:queryURL,method:'GET'}).done(function(response) {
        
      console.log(queryURL);

      console.log(response);

      var results = response.data; 

      for (var i = 0; i < results.length; i++) {
        
        /*if (results[i].rating === "r") {
          break;
        } else {*/
          var gifsDiv = $("<div class='gifsDiv'>");

          var ratingSection = $("<p class='ratingText'>").text("Rating: " + results[i].rating);

          var showImage = $("<img>");

          showImage.attr("src", results[i].images.fixed_width_still.url);
          showImage.attr("data-still", results[i].images.fixed_width_still.url);
          showImage.attr("data-animate", results[i].images.fixed_width.url);
          showImage.attr("data-state", "still");
          showImage.attr("class", "showGIF");

          gifsDiv.append(showImage);
          gifsDiv.append(ratingSection);

          $("#gifs").prepend(gifsDiv);
        //};
      };
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


  $(document).on("click", ".showButton", showMeDaGIF);

  newShowButtons();


//Click event for each gif to toggle between still and animated states
  $(document).on("click", ".showGIF", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
    }
  });

});

