function validateEmail(email) { 
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}
	
$(document).ready(function() {		
	$("#form--contact").submit(function() { return false; });
	//When hits send button hide send button and show captcha
	$("#form--contact #send").click(function(e){
		e.preventDefault();
		
		var name 		= $("#name").val();
			var namelen	= name.length;
		var emailval  = $("#email").val();
		var msgval    = $("#msg").val();
		var msglen    = msgval.length;
		var mailvalid = validateEmail(emailval);
		
		if(namelen < 1){
			$("#name").addClass("error");
		}else{
			$("#name").removeClass("error");
		}
		
		if(mailvalid == false) {
			$("#email").addClass("error");
		}
		else if(mailvalid == true){
			$("#email").removeClass("error");
		}
		
		if(msglen < 4) {
			$("#msg").addClass("error");
		}
		else if(msglen >= 4){
			$("#msg").removeClass("error");
		}
		
		
		if(mailvalid == true && msglen >= 4 && namelen > 1) {
			var contactform_data = $('#form--contact').serialize();
			$('#form--contact #send').hide();
			
			send_message(contactform_data);
			
		}//if mailvalid
	});
});

function send_message(contactform_data){
	$("#form--contact").replaceWith("<em>sending...</em>");
	//alert(contactform_data);
	$.ajax({
		type: 'POST',
		url: 'sendmessage.php',
		data: contactform_data,
		success: function(data) {
			if(data) {
				$(".contact_form_wrapper").fadeOut("fast", function(){
					$(this).before("<p><strong>Success! Your feedback has been sent, thanks :)</strong></p>");
				});
			}else{
				fail_msg();
				}
		}
	})//ajax sendmessage
	.fail( function(){
			fail_msg();
		});
	function fail_msg(){
			$(".contact_form_wrapper").fadeOut("fast", function(){
				$(this).before("<p><strong>Message sent failed.</strong></p>");
			});
		}
}//send_message()


