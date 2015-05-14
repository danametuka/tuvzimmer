
$(function() {	
	
    /******************* Google map ****************************************/
	$(".google_map").click(function() {		
	     $('#myModal_map').modal()
	})
	$("#close_map").click(function() {
	    $('#myModal_map').modal('hide')
	})
	$('#myModal_map').on('show.bs.modal', function() {
		//Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
		resizeMap();
	})
	function resizeMap() {
		if(typeof map =="undefined") return;
		setTimeout( function(){resizingMap();} , 400);
	}
		
	function resizingMap() {
		if(typeof map =="undefined") return;
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center); 
	}	
	/****************** end google map  ***********************************/
	
	
	/*** open contact modal ****/
	$(".contact_zimmer").click(function() {
	    $('#myModal_contact').modal()
	})
	$("#close_contact").click(function() {
	    $('#myModal_contact').modal('hide')
	})
	/***********************/	   
	
	
	/*** open prices genral modal ****/
	$(".prices_general").click(function() {
	    $('#myModal_prices').modal()
	})
	$("#close_prices").click(function() {
	    $('#myModal_prices').modal('hide')
	})
	/***********************/	   
	
	
	/*** open sales/coupons modal ****/
	$(".sales_coupons").click(function() {
	    $('#myModal_sales_coupons').modal()
	})
	$("#close_sales_coupons").click(function() {
	    $('#myModal_sales_coupons').modal('hide')
	})
	/***********************/	   
	
	
	
	/*** open details/parameters modal ****/
	$(".parameters").click(function() {
	    $('#myModal_parameters').modal()
	})
	$("#close_parameters").click(function() {
	    $('#myModal_parameters').modal('hide')
	})
	/***********************/	   
	
	
	
	
	
	
	
	
	/*******  gallery open ******/
	 $('.fancybox').fancybox({
	        width: "100%",
	        margin: [0, 0, 0, 0],
	        padding: [0, 0, 0, 0],
	        openEffect  : 'none',
	        closeEffect : 'none',
	        prevEffect : 'fade',
	        nextEffect : 'fade',
	        closeBtn  : false,
	        arrows: false,
	        helpers : {
	            title : null,
	            overlay : {
	                css : {
	                    'background' : 'rgba(0, 0, 0, 0.95)' 
	                }
	            },
	            buttons : {
	            }

	        },
	        afterShow: function() {
	            $('.fancybox-wrap').swipe({
	                swipe : function(event, direction) {
	                    if (direction === 'left' || direction === 'up') {
	                        $.fancybox.prev( direction );
	                    } else {
	                        $.fancybox.next( direction );
	                    }
	                }
	            });

	        },

	        afterLoad : function() {
	        }
	    });

	////////////////////////////////////////////////////

	
				
	/****************** get zimmer details *********************************/
	var query = window.location.search.substring(1);
	var param = query.split("=");
	
	var id=param[1];
	
	var url = 'http://www.tuv-bait.co.il/app/get_zimmer/'+id;
		
	$.ajax({
	    url: url,
		dataType: 'JSONP',
	    jsonpCallback: 'callback',
	    type: 'GET',
	    success: function (data) {
	    	
	    	$(".img_loader").hide();
	    		    	
	    	var title = data[0].title;
	    	//var email = data[0].email;	    	
	    	var email="ofer@itss.co.il"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	    	
	    	var contact_name = data[0].contact_name;
	    	var area = data[0].area;
	    	var city = data[0].city;
	    	var general = data[0].general;
	    	var prices = data[0].prices;
	    	var price_comments = data[0].price_comments;
	    	var attractions = data[0].attractions;	    	
	    	var phone = data[0].phone;
	    	var phone1 = data[0].phone1;
	    	var map = data[0].google_map;	    	
	    	var images = data[0].images;	    	
	    	
	    	var lat = data[0].lat;
	    	var lon = data[0].lon;	    	
	    	var waze="";
	    	if(lat!="" && lon!="") {
	    	 waze =" &nbsp;<a href='waze://?ll="+lat+","+lon+"&navigate=yes'><img src='images/waze.png'></a>";
	    	}
	    	
	    	//prices section
	    	var middle_week_one_night=data[0].middle_week_one_night;
	    	var middle_week_two_night=data[0].middle_week_two_night;
	    	var end_week_one_night=data[0].end_week_one_night;
	    	var end_week_two_night=data[0].end_week_two_night;
	    	
	    	
	    	//sales and coupons
	    	var sales = data[0].sales;
	    	    //coupon middle week
	    	var middle_price=data[0].middle_price;
		  	var middle_two_nights=data[0].middle_two_nights;
		  	        if(jQuery.trim(middle_two_nights)!="") middle_two_nights="<p>בהזמנת שני לילות</p>";
		  	var middle_breakfast=data[0].middle_breakfast;
		  	        if(jQuery.trim(middle_breakfast)=="") {
		  	        	middle_breakfast="<p>לא כולל ארוחת בוקר</p>";
		  	        }
		  	        else {
		  	        	middle_breakfast="<p> כולל ארוחת בוקר</p>";
		  	        }
		  	
		  	var middle_holidays=data[0].middle_holidays;
				    if(jQuery.trim(middle_holidays)=="") {
				    	middle_holidays="<p>לא כולל חגים וחופשות</p>";
		  	        }
		  	        else {
		  	        	middle_holidays="<p> כולל חגים וחופשות</p>";
		  	        }
		  	
		  	var middle_comments=data[0].middle_comments;
		  	var middle_valid_day=data[0].middle_valid_day;
		  	var middle_valid_month=data[0].middle_valid_month;
		  	var middle_valid_year=data[0].middle_valid_year;	
		  	var middle_text="";
	    	
		    //coupon end week
	    	var end_price=data[0].end_price;
		  	var end_two_nights=data[0].end_two_nights;
		  	        if(jQuery.trim(end_two_nights)!="") end_two_nights="<p>בהזמנת שני לילות</p>";
		  	var end_breakfast=data[0].end_breakfast;
		  	        if(jQuery.trim(end_breakfast)=="") {
		  	        	end_breakfast="<p>לא כולל ארוחת בוקר</p>";
		  	        }
		  	        else {
		  	        	end_breakfast="<p> כולל ארוחת בוקר</p>";
		  	        }
		  	
		  	var end_holidays=data[0].end_holidays;
				    if(jQuery.trim(end_holidays)=="") {
				    	end_holidays="<p>לא כולל חגים וחופשות</p>";
		  	        }
		  	        else {
		  	        	end_holidays="<p> כולל חגים וחופשות</p>";
		  	        }
		  	
		  	var end_comments=data[0].end_comments;
		  	var end_valid_day=data[0].end_valid_day;
		  	var end_valid_month=data[0].end_valid_month;
		  	var end_valid_year=data[0].end_valid_year;	
		  	var end_text="";
	    	
		  	
		  	
		  	if(jQuery.trim(middle_price)!="") {
		  		 middle_text += "<h2>קופון לאמצע השבוע</h2>" +
		  		                         "<p>"+middle_price+" ש\"ח לזוג ללילה באמצע השבוע</p>" +
		  		                         middle_two_nights + middle_breakfast + middle_holidays +
		  		                         "<p style='font-weight: bold;'>"+middle_comments+"</p>"+
		  		                         "<p>הקופון בתוקף עד: " + middle_valid_day+"-"+ middle_valid_month+"-"+middle_valid_year+"</p>";		  		                         
		  	}
		  	
			if(jQuery.trim(end_price)!="") {
		  		 end_text += "<h2>קופון לסוף השבוע</h2>" +
		  		                         "<p>"+end_price+" ש\"ח לזוג ללילה באמצע השבוע</p>" +
		  		                         end_two_nights + end_breakfast + end_holidays +
		  		                         "<p style='font-weight: bold;'>"+end_comments+"</p>"+
		  		                         "<p>הקופון בתוקף עד: " + end_valid_day+"-"+ end_valid_month+"-"+end_valid_year+"</p>";		  		                         
		  	}	  	
	    	
		  	$("#sales_coupons_content").html("<h2>מבצעים</h2>"+sales+middle_text+end_text);
	    	
	    	
	    	
	    	//general details	    	
	    	var zimmer_type = data[0].zimmer_type;
	    	var city_type = data[0].city_type;
	    	var for_whom = data[0].for_whom;
	    	var amount = data[0].amount;
	    	var meals = data[0].meals;
	    	var synagog = data[0].synagog;
	    	var mikve = data[0].mikve;
	    	var mikve_woman = data[0].mikve_woman;
	    	var pool = data[0].pool;
	    	var people = data[0].people_number;
	    	var spa = data[0].spa;	    	
	    	var jacuzi = data[0].jacuzi;
	    	var tsadik = data[0].tsadik;
	    	var holly = data[0].holly;
	    	var shaon_shabat = data[0].shaon_shabat;
	    	var near_sea = data[0].near_sea;
	    		    	
	    	///////////////////////////////////////////////////////////////////////////////////////////
	    	
	    	var bullet="<i class='fa fa-arrow-circle-left'></i>";
	    	$("#parameters_content").append(
	    	    "<h2>הצימר בקטגוריות</h2>" +		
	    	    "<p>"+bullet+" <span>סוג הצימר: </span>"+zimmer_type+"</p>" +
	    	    "<p>"+bullet+" <span>צביון היישוב: </span>"+city_type+"</p>" +
	    	    "<p>"+bullet+" <span>מתאים ל: </span>"+for_whom+"</p>" +
	    	    "<p>"+bullet+" <span>מספר צימרים: </span>"+amount+"</p>" +
	    	    "<p>"+bullet+" <span>ארוחות: </span>"+meals+"</p>" +
	    	    "<p>"+bullet+" <span>בית כנסת: </span>"+synagog+"</p>" +
	    	    "<p>"+bullet+" <span>מקווה לגברים: </span>"+mikve+"</p>" +
	    	    "<p>"+bullet+" <span>מקווה לנשים: </span>"+mikve_woman+"</p>" +
	    	    "<p>"+bullet+" <span>בריכה: </span>"+pool+"</p>" +
	    	    "<p>"+bullet+" <span>מספר נפשות מירבי לצימר: </span>"+people+"</p>" +
	    	    "<p>"+bullet+" <span>ספא: </span>"+pool+"</p>" +
	    	    "<p>"+bullet+" <span>ג'\קוזי: </span>"+jacuzi+"</p>" 
	    	);	    	
	    	if(tsadik!="") {
	    		$("#parameters_content").append("<p>"+bullet+" <span>קרוב לקברות צדיקים </span>"+''+"</p>" )
	    	}
	    	if(holly!="") {
	    		$("#parameters_content").append("<p>"+bullet+" <span>קרוב לאתרים קדושים </span>"+''+"</p>" )
	    	}
	    	if(shaon_shabat!="") {
	    		$("#parameters_content").append("<p>"+bullet+" <span>יש שעון שבת </span>"+''+"</p>" )
	    	}
	    	if(near_sea!="") {
	    		$("#parameters_content").append("<p>"+bullet+" <span>ליד הים </span>"+''+"</p>" )
	    	}
	    	
	    		    	
	    	
	    	$("#top .title").html(title + waze);
	    	$("#top .area").append("<span style='font-weight: bold;'>אזור: </span> " + area + ', ' );
	    	$("#top .area").append(city);	    	
	    	
	    	$(".tab-content #general").append(general);
	    	$(".tab-content #prices").append(prices);
	    	$(".tab-content #attractions").append(attractions);
	    	
	    	$(".phone_container").append("<a href='tel:"+phone+"' class='btn btn_tel'><span>"+phone+"</span></a>");	    	
	    	
	    	if(phone1!="") {
	    		$(".phone_container").append("  &nbsp;  <a href='tel:"+phone1+"' class='btn btn_tel'><span>"+phone1+"</span></a>");	    	
	    	}
	    	
	    	$("#map-canvas").append(map);	    	
	    	
	    	$("#contact_email").val(email);
	    	
	    	$(".contact_name").append("<span style='font-weight: bold;'>שם איש קשר: </span>" + contact_name);
	    		    	
	    	
	    	var prices_general="<h2>אמצע השבוע </h2>"+
	    	                                "<p><span>מחיר ללילה:</span> "+middle_week_one_night+" &#8362;</p>"+
	    	                                "<p><span>מחיר לשני לילות:</span> "+middle_week_two_night+" &#8362;</p>"+
	    	                                "<h2>סוף השבוע </h2>"+
	    	                                "<p><span>מחיר ללילה:</span> "+end_week_one_night+" &#8362;</p>"+
	    	                                "<p><span>מחיר לשני לילות:</span> "+end_week_two_night+" &#8362;</p>";  
	    	                                
	    	$("#prices_general_content").html(prices_general + "<p style='margin-top: 15px;'>"+price_comments+"</p>");
	    	
	    		
	    	

			var favorite_item="favorite"+id;
			if(localStorage.getItem(favorite_item) === null) {
				var favorite_liked="<span id='zliked"+id+"'></span>";
				var favorite="<span id='z"+id+"'><img src='images/like_button.png' onclick='javascript:add_to_favorites("+id+")' class='favorite'></span>";
			}
			else {
				var favorite_liked="<span id='zliked"+id+"'><img src='images/liked_button.png' class='favorite'></span>";	
				var favorite="<span id='z"+id+"'><img src='images/remove_button.png' onclick='javascript:remove_from_favorites("+id+")' class='favorite_remove'></span>";	
			}	    	
			$(".tabs_content").append(favorite_liked + favorite)
	    	
			
			/////////////////////////////////////////////////////////////
	    	tmunot=images['userfile'];	    	
	    	text=images['txt'];	   
	    	var c=1;
	       	for(var i=1;i<=20;i++) {
	       			       		
	    		var img=tmunot[i];
	    		var txt=text[i];		    		
	    		
	    		//if(img.length>5) {
	    			
	    			if(c==1) {
	    				$("#gallery_link").append(
	    						"<a class='fancybox' rel='gallery' href='http://www.tuv-bait.co.il/assets/pics/"+img+"'>"+
	    					    "<div class='col-xs-10'>"+
	    					      "<span>תמונות</span>"+
	    					    "</div>"+
	    					    "<div class='col-xs-2  ico'>"+
	    						      "<i class='fa fa-chevron-left'></i>"+
	    						"</div>"+
	    					  "</a>"		
	    				)
	    			}
	    			else {	    			
	    			   $("#gallery_images").append("<a title='"+txt+"' class='fancybox' rel='gallery' href='http://www.tuv-bait.co.il/assets/pics/"+img+"'>"+i+" </a>");
	    			}
	    			
	    		//} 		   
	    	 c++;
	       }
	    	
	    	
	    	
	    } // end success
	}); // end $.ajax({
	
	/**************  end get zimmer details ***********************************************************/
	
	
	
	
	/////////////////////////////////////////////////////////////////////////////////////////
	
	$("#frm_contact").submit(function() {	
		
		var name=jQuery.trim($("#name").val());
		
		var phone=jQuery.trim($("#phone").val());
		/*
		var email=jQuery.trim($("#email").val());		
		var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;*/
	
        if(name=="") {
           alert("נא כתבו את השם   ");
           $("#name").focus();
           return false; 
        } 
        
       	        
        else if(phone=="") {
	       alert("נא כתבו את מספר הטלפון ");
	       return false; 
	    }    
        	    
        /*
        else if(!filter.test(email)) {
			alert('האימייל שגוי');
            $("#email").focus();
			return false;
	    }*/
		
        else {
        	
        	$(".img_loader").show();
        	$("#frm_contact").hide();
							
			var url = 'http://www.tuv-bait.co.il/app/contact_zimmer/';
				
			$.ajax({
			    url: url,
			    dataType: 'JSONP',
				data	: $(this).serializeArray(),
			    jsonpCallback: 'callback',
			    type: 'GET',
			    success: function (data) {
			    	
			    	$('.img_loader').hide();
			        
			    	var res=data[0].result;
			    	
			    	if(res=="ok") {
						$('#message').append(
								"<p>פנייתכם נשלחה בהצלחה</p>" +
								"<p>יצרו עמכם קשר בהקדם האפשרי</p>"			 
						  );
			        }
			        else  {
			        	$('#message').append(
							"<p>חלה תקלה בשליחת הפניה - נא נסו שוב מאוחר יותר</p>" 										 
						  );			        	
			        }
					
			    }
			});
	
       }
	
	   return false
	})
	
})