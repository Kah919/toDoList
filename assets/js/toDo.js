
$("ul").on("click", "li", function(){ // we can only add a listener using jQuery when this element is run the first time 
	// so we added a ul listener to the whole parent
	// when a li is clicked inside a ul, this will run

	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }else{
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	}); 
	// }

	$(this).toggleClass("completed"); // this is the shortcut
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //removoe will run after the fade out is finished because it is inside it's function
	}); // .parent will target the li because the span is inside the li tag
	e.stopPropagation(); // stops the bubbles
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){ // 13 is the enter key
		let toDoText = ($(this).val()); // the value that the user enters will be saved to toDoText
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>");
	}
});

$("#new").click(function(){ // to make the plus symbol show and hide to do list
	$("input[type='text']").fadeToggle();
});
