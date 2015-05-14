
$(function() {
		
		var url = 'http://www.tuv-bait.co.il/app/areas/';
		
		$.ajax({
		    url: url,
		    dataType: 'JSONP',
		    jsonpCallback: 'callback',
		    type: 'GET',
		    success: function (data) {
				    	
					$.each(data, function(i,item){ 
			    		var id=item.id;
						var title = item.title;
										
						$('#area').append(
							"<option value='"+id+"'>"+title+"</option>"					  
					    );
						
				    });			    	
	
		    }
					
		})
		
		
		////////////////////////////////////////////////////////////////////////////
			   
		var url1 = 'http://www.tuv-bait.co.il/app/cities';
		
		$.ajax({
		    url: url1,
		    dataType: 'JSONP',
		    jsonpCallback: 'callback1',
		    type: 'GET',
		    success: function (data) {
				    	
					$.each(data, function(i,item){ 
			    		var id=item.id;
						var title = item.title;
										
						$('#city').append(
							"<option value='"+id+"'>"+title+"</option>"					  
					    );
						
				    });			    	
	
		    }
					
		})
		
		
		////////////////////////////////////////////////////////////////////////////
			   
		var url2 = 'http://www.tuv-bait.co.il/app/pool';
		
		$.ajax({
		    url: url2,
		    dataType: 'JSONP',
		    jsonpCallback: 'callback2',
		    type: 'GET',
		    success: function (data) {
		    	
		    	    $(".img_loader").hide();
		    	    $("#search_form_container").show();
				    	
					$.each(data, function(i,item){ 
			    		var id=item.id;
						var title = item.title;
										
						$('#pool_options').append(
							"<option value='"+id+"'>"+title+"</option>"					  
					    );
						
				    });			    	
	
		    }
					
		})
		
		
		////////////////////////////////////////////////////////////////////////////////
		
		
		$("#frm_search").submit(function() {
		
			var area=jQuery.trim($("#area").val());
			var city=jQuery.trim($("#city").val());
			var type=jQuery.trim($("#zimmer_type").val());
			var pool=jQuery.trim($("#pool_options").val());
			var price=jQuery.trim($("#price").val());
			var txt=jQuery.trim($("#s").val());
			
			if(area=="" && city=="" && type=="" && pool=="" && price=="" && txt=="") {
				alert("נא בחרו לפחות נושא חיפוש אחד");
				return false
			}
			
			else {
				
				$('.img_loader').show();
				
				var url = 'http://www.tuv-bait.co.il/app/search';
				
				$.ajax({
				    url: url,
					data	: $(this).serializeArray(),
				    dataType: 'JSONP',
				    jsonpCallback: 'callback',
				    type: 'GET',
				    success: function (data) {
				    					    					    	
				    	$('#search_form_container').hide();
					    $('#search_results').show();
					    $('.img_loader').hide();				    	
					    
				    	if(data!="") {//we have results			    		
				    		
						    	$.each(data, function(i,item){ 
						    		var id=item.id;
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
									
									var lat=item.lat;
									var lon=item.lon;
									
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
										          "<p class='title' align='right'><a href='show_zimmer.htm?id="+id+"'>"+title+"</a>"+favorite+ favorite_liked+"</p>" +
										          "<p class='amount' align='right'>מספר צימרים: "+zimmers+"</p>" +
										          "<p class='city' align='right'><i class='fa fa-bed fa-fw'></i> "+city+"</p>" +
										          "<p class='phone' align='right'><i class='fa fa-phone-square fa-fw'></i>  <a href='tel:"+phone+"'>"+phone+"</a></p>" +
										        "</div>" +
										   "</div>" 									   
								      );
									
								});
				    	}
				    	else {
				    		$('#search_results').append(		
				    		    "<p>לא נמצאו תוצאות לחיפוש</p>"	 +
				    		    "<p><a href='search.htm'>לחצו כאן לביצוע חיפוש נוסף</a></p>"
				    		)
				    	}
						    				    	
				    }//end success
				});
				
				
			}//end else
			
			return false;
			
		})
		
		
	
})