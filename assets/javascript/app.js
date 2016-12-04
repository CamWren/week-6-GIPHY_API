$(document).ready(function() {
  
  var topics = ["The Office", "Seinfeld", "The Twilight Zone", "An Idiot Abroad"];

//Displays static gif and gif rating
  function showMeDaGIF() {

    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ topic +"&api_key=dc6zaTOxFJmzC&limit=10&fmt=json";
  

    //Creates AJAX call for each button
    $.ajax({url:queryURL,method:'GET'}).done(function(response) {

      $("#gifs").empty();
        
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

          showImage.attr("src", results[i].images.fixed_height_still.url);
          showImage.attr("data-still", results[i].images.fixed_height_still.url);
          showImage.attr("data-animate", results[i].images.fixed_height.url);
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

    for (var i = 0; i < topics.length; i++) {

      var s = $("<button>");

      s.addClass("showButton");

      s.attr("data-name", topics[i]);

      s.text(topics[i]);

      $(".showButtons").append(s);
    };
  };


//Click event for each button to display movie info
  $("#add-show").on("click", function(event) {

      event.preventDefault();

      var topic = $("#query-input").val().trim();

      topics.push(topic);

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

