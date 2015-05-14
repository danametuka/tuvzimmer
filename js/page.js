
$(function() {
		
		var query = window.location.search.substring(1);
		var param = query.split("=");
		
		var id=param[1];
		
		var url = 'http://www.tuv-bait.co.il/app/page/'+id;
			
		$.ajax({
		    url: url,
		    dataType: 'JSONP',
		    jsonpCallback: 'callback',
		    type: 'GET',
		    success: function (data) {
		    	
		    	$('.img_loader').hide();
		        	    	
				var title = data[0].title;
				var content = data[0].content;
										
				$('.main .content').append(
							"<h1>"+title+"</h1>" +
							content						 
				  );
				
		    }
		});
	
	
	
	
})
