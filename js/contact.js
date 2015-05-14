
$(function() {	
	
	$("#frm_contact").submit(function() {	
		
		var fname=jQuery.trim($("#fname").val());
		var lname=jQuery.trim($("#lname").val());
		var phone=jQuery.trim($("#phone").val());
		var email=jQuery.trim($("#email").val());
		
		var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	
        if(fname=="") {
           alert("נא כתבו את השם הפרטי  ");
           $("#fname").focus();
           return false; 
        } 
        
        else if(lname=="") {
	        alert("נא כתבו את שם המשפחה  ");
	        $("#lname").focus();
	        return false; 
	    }     
	        
        else if(phone=="") {
	       alert("נא כתבו את מספר הטלפון ");
	       return false; 
	    }    
        	        
        else if(!filter.test(email)) {
			alert('האימייל שגוי');
            $("#email").focus();
			return false;
	    }
		
        else {
        	
        	$(".img_loader").show();
        	$("#form_container").hide();
							
			var url = 'http://www.tuv-bait.co.il/app/contact/';
				
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
						$('#results').append(
								"<p>פנייתכם נשלחה בהצלחה</p>" +
								"<p>נחזור אליכם בהקדם האפשרי</p>"			 
						  );
			        }
			        else  {
			        	$('#results').append(
								"<p>חלה תקלה בשליחת הפניה - נא נסו שוב מאוחר יותר</p>" 										 
						  );			        	
			        }
					
			    }
			});
	
       }
	
	   return false
	})
	
})