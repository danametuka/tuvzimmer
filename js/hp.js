
$(function() {
		
	
	var url1 = 'http://www.tuv-bait.co.il/app/most_wanted';
		
	$.ajax({
	    url: url1,
	    dataType: 'JSONP',
	    jsonpCallback: 'callback',
	    type: 'GET',
	    success: function (data) {
	    	
	    	$('#most_wanted  .img_loader').hide();
	        
	    	$.each(data, function(i,item){ 
	    		var id=item.id;
				var title = item.title;
				var city = item.city;
				var phone = item.phone;				  
				  phone=phone.substr(0, 11);
				  phone=phone.replace(" ", "");
				
				var img = item.img;
				var zimmers = item.zimmers;
				var coupon = item.have_coupon;
				var sale = item.have_sale;
				
				coupon_image="";
				if(coupon==1) {
					coupon_image="<img src='images/coupon.png' class='coupon_image'>"
				}
				
				sale_image="";
				if(sale==1) {
					sale_image="<img src='images/discount.png' class='sale_image'>"
				}
					
				$('#most_wanted .flexslider .slides').append(
						"<li onclick='location=\"show_zimmer.htm?id="+id+"\"" +"'>"+
						   "<div class='zimmer clearfix'>" + 
						      "<div class='col-xs-5 img'>" +
						           "<a href='show_zimmer.htm?id="+id+"'><img src='http://www.tuv-bait.co.il/assets/pics/square/"+img+"'></a>" + coupon_image + sale_image +
						      "</div>" +
						      "<div class='col-xs-7 details'>" +
						        "<p class='title' align='right'><a href='show_zimmer.htm?id="+id+"'>"+title+"</a></p>" +
						        "<p class='amount' align='right'>מספר צימרים: "+zimmers+"</p>" +
						        "<p class='city' align='right'><i class='fa fa-bed fa-fw'></i> "+city+"</p>" +
						        "<p class='phone' align='right'><i class='fa fa-phone-square fa-fw'></i>  <a href='tel:"+phone+"'>"+phone+"</a></p>" +
						      "</div>" +
						   "</div>" +
						"</li>"		
			   );
				
			});
	    	
	    	show_most_wanted();
	    	
	    }
	});
	
	
	/////////////////////////////////////////////////////////////////////////////

	
	var url2 = 'http://www.tuv-bait.co.il/app/wanted';
	
	$.ajax({
	    url: url2,
	    dataType: 'JSONP',
	    jsonpCallback: 'callback1',
	    type: 'GET',
	    success: function (data) {
	    	
	    	$('#wanted  .img_loader').hide();
	        
	    	$.each(data, function(i,item){ 
	    		var id = item.id;
				var title = item.title;
				var city = item.city;
				var phone = item.phone;				  
				  phone=phone.substr(0, 11);
				  phone=phone.replace(" ", "");
				
				var img = item.img;
				var zimmers = item.zimmers;
				var coupon = item.have_coupon;
				var sale = item.have_sale;
				
				coupon_image="";
				if(coupon==1) {
					coupon_image="<img src='images/coupon.png' class='coupon_image'>"
				}
				
				sale_image="";
				if(sale==1) {
					sale_image="<img src='images/discount.png' class='sale_image'>"
				}
					
					
				$('#wanted .flexslider .slides').append(
						"<li>"+
						   "<div class='zimmer clearfix'>" + 
						      "<div class='col-xs-5 img'>" +
						           "<a href='show_zimmer.htm?id="+id+"'><img src='http://www.tuv-bait.co.il/assets/pics/square/"+img+"'></a>" + coupon_image + sale_image +
						      "</div>" +
						      "<div class='col-xs-7 details'>" +
						        "<p class='title' align='right'><a href='show_zimmer.htm?id="+id+"'>"+title+"</a></p>" +
						        "<p class='amount' align='right'>מספר צימרים: "+zimmers+"</p>" +
						        "<p class='city' align='right'><i class='fa fa-bed fa-fw'></i> "+city+"</p>" +
						        "<p class='phone' align='right'><i class='fa fa-phone-square fa-fw'></i>  <a href='tel:"+phone+"'>"+phone+"</a></p>" +
						      "</div>" +
						   "</div>" +
						"</li>"		
			   );
				
			});
	    	
	    	show_wanted();
	    	
	    }
	  
	});
	   
	
		
	
})


function show_most_wanted() {
	
	$('.hp_most_wanted .flexslider').flexslider({
	    animation: "fade",
	    animationLoop: true,
	    touch: true,
	    controlNav: false,
	    directionNav: true,
	    randomize: true,
	    slideshowSpeed: 3000,
	    animationSpeed: 1000,
	    prevText: '<i class="fa fa-chevron-left flexslider_arrows"></i>',
	    nextText: '<i class="fa fa-chevron-right flexslider_arrows"></i>'
	});
			
}

function show_wanted() {
	
	$('.hp_wanted .flexslider').flexslider({
	    animation: "fade",
	    animationLoop: true,
	    touch: true,
	    controlNav: false,
	    directionNav: true,
	    randomize: true,
	    slideshowSpeed: 3000,
	    animationSpeed: 1000,
	    prevText: '<i class="fa fa-chevron-left flexslider_arrows"></i>',
	    nextText: '<i class="fa fa-chevron-right flexslider_arrows"></i>'
	});
	
}

