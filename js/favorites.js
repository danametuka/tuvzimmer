$(function() {
										
	var arr=new Array();		
	var c=0;
	for(var key in localStorage) {
			    	
		 var id=localStorage.getItem(key);
		 		 		 
		 arr[c]=id;
	
	  c++;
    } // end for
	
		
	////////////////////////////////////////////////////////
	var url = 'http://www.tuv-bait.co.il/app/get_favorites_zimmers/' + arr;
    ////////////////////////////////////////////////////////
					 
	 $.ajax({
	    url: url,			
		dataType: 'JSONP',
	    jsonpCallback: 'callback',
		type: 'GET',
	    success: function (data) {
	    	
	  			    	
		   $.each(data, function(i,item){ 	
			    					    		
    	            $('.img_loader').hide();
    	
		    		var id=item.id;
		    		
		    		/////////////////////////////////////////////////////////
		    		  if(id=="not_found") {
		    		    	$('.img_loader').hide();
		    		      	$('#search_results').append("<p style='margin-top: 20px; font-weight: bold;'>לא הוספתם עדין צימרים לרשימת המועדפים שלכם</p>")
		    		        return false
		    		 }		    		
                   //////////////////////////////////////////////////////////
		    		
					var title = item.title;
					   title= "<a href='show_zimmer.htm?id="+id+"'>"+title+"</a>";
					
					var city = item.city;
					var phone = item.phone;				  
					  phone=phone.substr(0, 11);
					  phone=phone.replace(" ", "");
											  
					var img = item.img;
					var zimmers = item.zimmers;
					var coupon = item.have_coupon;
					var sale = item.have_sale;
					
					var coupon_image="";
					if(coupon==1) {
						coupon_image="<img src='images/coupon.png' class='coupon_image'>"
					}
					
					var sale_image="";
					if(sale==1) {
						sale_image="<img src='images/discount.png' class='sale_image'>"
					}
					
					var favorite_item="favorite"+id;
					if(localStorage.getItem(favorite_item) === null) {
						var favorite_liked="<span id='zliked"+id+"'></span>";
						var favorite="<span id='z"+id+"'><img src='images/like_button.png' onclick='javascript:add_to_favorites("+id+")' class='favorite'></span>";
					}
					else {
						var favorite_liked="<span id='zliked"+id+"'><img src='images/liked_button.png' class='favorite'></span>";	
						var favorite="<span id='z"+id+"'><img src='images/remove_button.png' onclick='javascript:remove_from_favorites("+id+")' class='favorite_remove'></span>";	
					}
						
													
					
					$('#search_results').append(									
							"<div class='zimmer clearfix' style='margin-bottom: 10px'>"+
						        "<div class='col-xs-5 img'>" +
						           "<a href='show_zimmer.htm?id="+id+"'><img  src='http://www.tuv-bait.co.il/assets/pics/square/"+img+"'></a>" + coupon_image + sale_image +
						        "</div>" +
						        "<div class='col-xs-7 details'>" +
						          "<p class='title' align='right'>"+title+favorite+ favorite_liked+"</p>" +
						          "<p class='amount' align='right'>מספר צימרים: "+zimmers+"</p>" +
						          "<p class='city' align='right'><i class='fa fa-bed fa-fw'></i> "+city+"</p>" +
						          "<p class='phone' align='right'><i class='fa fa-phone-square fa-fw'></i>  <a href='tel:"+phone+"'>"+phone+"</a></p>" +
						        "</div>" +
						   "</div>" 									   
				      );
			
					
		          }) // end  $.each
		   
					    				    	
			    } //end success		    
						
	         	 
	       })	//end $.ajax({
		
	
	
})



