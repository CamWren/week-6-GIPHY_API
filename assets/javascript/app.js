$(document).ready(function() {
  
  var queries = ["The Office", "Seinfeld", "Mad Men", "An Idiot Abroad"];

//creates new button for each query
  function newQueryButton () {
    for (var i = 0; i < queries.length; i++) {
      var newQueryButton = document.createElement("button");
      newQueryButton.setAttribute("class", "queryButton");
      newQuery = document.createTextNode(queries[i]);
      newQueryButton.appendChild(newQuery);
      $(".queryButtons").append(newQueryButton);
    };
  };

  newQueryButton();

//Click event for each button
  $(".queryButtons").on("click", "button", function() {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+$(this).text()+"&api_key=dc6zaTOxFJmzC&limit=10";    
        $.ajax({url:queryURL,method:'GET'})
            .done(function(response) {
				console.log(response);
            });
  });

});



