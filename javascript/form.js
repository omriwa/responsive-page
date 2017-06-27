$(document).ready(function(){
	$("form").submit(function( event ) {
	  event.preventDefault();
	});
	$("button").click(function(){
		$(this).text("לאתר Telefire");
		$("input").each(function(){
			$(this).css("display" , "none");
			});
		var url = "../assets/form_success.png";
		$("#div-form").css("background-image" , "url(" + url + ")");
		var btnStyle = {
							width : "66%",
							"margin-top" : "50%"
					   }
		$(this).css(btnStyle);
		});
	});