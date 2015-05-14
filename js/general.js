

$(function() {

    //code for opening the dropdown menu in inc/header.htm	!!!!
	
    $("img").addClass('img-responsive'); //!!!!!!!!!!!!!!!!!!!
 
    $("#header_container" ).load( "inc/header.htm" );    
    
    $(".img_loader").wrap("<div class='loader_container'></div>");

    $("table").addClass('table');
    $(".table").wrap("<div class='table-responsive'></div>");    

    	
})


function add_to_favorites(id) {
			
	//window.localStorage.clear(); return false;
	
	window.localStorage.setItem("favorite"+id, id);
	
	var elm=$("#z"+id);	
	var elm_liked=$("#zliked"+id);	
	
	elm_liked.html("<img src='images/liked_button.png' class='favorite'>");
	elm.html("<img src='images/remove_button.png' onclick='javascript:remove_from_favorites("+id+")' class='favorite_remove'>")
	
	alert("הצימר נוסף לרשימת המועדפים שלך")
			
}


function remove_from_favorites(id) {
	
	window.localStorage.removeItem("favorite"+id);
	
	var elm=$("#z"+id);	
	var elm_liked=$("#zliked"+id);	
	
	elm_liked.html("<img src='images/like_button.png' onclick='javascript:add_to_favorites("+id+")' class='favorite'>");
	elm.html("");
	
	alert("הצימר הוסר מרשימת המועדפים שלך")
			
}



