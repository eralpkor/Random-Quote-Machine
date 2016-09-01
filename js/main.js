
// document.getElementById("test").addEventListener("click", function( event ) {
//     // display the current click count inside the clicked div
//     event.target.innerHTML = "click count: " + event.detail;
//   }, false);

// // JQuery same thing what top one does
// $("#test").click(function(event)){
// 	//some code here
// });

 var quote;
 var author;

$(document).ready(function() {
	function getNewQuote() {
		$.ajax({
			url: "http://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;
				$("#quote").text(quote);
				if (author){
					$("#author").text("--" + author);
					} else {
						$("#author").text("- unknown -");
				}
				console.log(response.quoteText + "--" +response.quoteAuthor)
			}
		});
	}
	getNewQuote();
					// event and event.preventDefault fixes page reload at click
	$(".get-quote").on("click", function(event){
		event.preventDefault();
		getNewQuote();
	})

	$(".share-quote").on("click", function(event){
		event.preventDefault();
		window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -- " + author));
	})
});

