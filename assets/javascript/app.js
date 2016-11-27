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

//Figure out how to insert strings in to ajax query
//May need to replace queryButtons class with id and assign value to text of given string
  $(".queryButtons").on("click", "button", function() {
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+$(this).text()+"&api_key=dc6zaTOxFJmzC";    
        $.ajax({url:queryURL,method:'GET'})
            .done(function(response) {
                console.log(response);
            });
  });

});



