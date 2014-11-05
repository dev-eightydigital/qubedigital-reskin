<?php
if(empty($_POST['leaveme'])):
	$sendto   = "hi@qubedigital.com.au";
	$name = $_POST['name'];
	$company = $_POST['company'];
	$usermail = $_POST['email'];
	$phone = $_POST['phone'];
	
	$content  = nl2br($_POST['msg']);
	
	
	$subject  = "New Feedback Message";
	$headers  = "From: " . strip_tags($usermail) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
	
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>New User Feedback</h2>\r\n";
	$msg .= "<p><strong>Sent by:</strong> ".$name."</p>";
	if(!empty($company)){
		$msg .= "<p><strong>Company:</strong> ".$company.'</p>';
	}
	if(!empty($phone)){
		$msg .= "<p><strong>Phone:</strong> ".$phone.'</p>';
	}
	$msg .= "<hr>";
	$msg .= "<p><strong>Message:</strong> ".$content."</p>";
	$msg .= "</body></html>";

	
	if(@mail($sendto, $subject, $msg, $headers)) {
		echo "true";
	} else {
		echo "false";
	}
else:
	echo false;
endif;
?>