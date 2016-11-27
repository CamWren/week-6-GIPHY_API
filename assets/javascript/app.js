$(document).ready(function() {
	
	var queries = ["The Office", "Seinfeld", "Mad Men", "An Idiot Abroad"];

	var i = 0;

	newQueryButton();

//creates new button for each query
	function newQueryButton () {
		for (i = 0; i < queries.length; i++) {
			var newQueryButton = document.createElement("button");
			newQueryButton.setAttribute("class", "queryButton");
			newQuery = document.createTextNode(queries[i]);
			newQueryButton.appendChild(newQuery);
			$(".queryButtons").append(newQueryButton);
			console.log(queries[i]);
		};
	};


//Figure out how to insert strings in to ajax query
//May need to replace queryButtons class with id and assign value to text of giving string
	$(".queryButton").click(function() {
		
		var query = queries[i].split(' ').join('+');
		console.log(query);
		/*var queryURL = "http://api.giphy.com/v1/gifs/search?q=""&api_key=dc6zaTOxFJmzC";	
		$.ajax({url:queryURL,method:'GET'})
			.done(function(response) {
				console.log(response);
			});*/
	
	});


});



//First Attempt to create buttons from an array - doesn't work
/*function topicButton () {
		for (var i = 0; i < topics.length; i++) {
			var topicButton = document.createElement("button");
			topicButton.setAttribute("id", "topicButton");
			var newTopic = document.createTextNode(topics[i]);
			topicButton.appendChild(newTopic);
			console.log(topics[i]);
		};
	};*/

//Second attempt to create buttons from an array - works
/*function topicButton () {
		for (var i = 0; i < topics.length; i++) {
			var topicButton = document.createElement("button");
			topicButton.setAttribute("id", "topicButton");
			var newTopic = document.createTextNode(topics[i]);
			topicButton.appendChild(newTopic);
			$("#container").html(topicButton);
			console.log(topics[i]);
		};
	};*/

//Third attempt to create buttons from an array - works
/*function topicButton () {
		for (i = 0; i < topics.length; i++) {
			var topicButton = document.createElement("button");
			topicButton.setAttribute("id", "topicButton");
			var newTopic = document.createTextNode(topics[i]);
			topicButton.appendChild(newTopic);
			$("#topicButtons").html(topicButton);
			console.log(topics[i]);
		};
	};*/