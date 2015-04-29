$(document).ready(function(){
	var buzzWord;

	$('.add').click(function(){
		if (!$('input').val()){
			alert("Forgot to type in something? :)");
		} else {
			buzzWord = document.getElementById('item').value;
			$('.list').empty();
			for (var counter = 1; counter <= buzzWord; counter++) {
				if (counter % 3 == 0 && counter % 5 == 0) {
					$(".list").append("<li>" + "fizz buzz" + "</li>");
				}
				else if (counter % 3 == 0) {
					$(".list").append("<li>" + "fizz" + "</li>");
				}
				else if (counter % 5 == 0) {
					$(".list").append("<li>" + "buzz" + "</li>");
				} else {
					$(".list").append("<li>" + counter + "</li>");
				}
			}
		}
	});

	$(document).keyup(function(event){
		if (event.keyCode == 13) {
			$('.add').click();
		};
	});
});
