<?php
if(isset($_POST['submit']))
{
	$fname = $_POST['name'];
	$institute = $_POST['institute'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$subject = $_POST['subject'];
	$to= "perception@cetb.in";
	// To send HTML mail, the Content-type header must be set
	$headers="From:".$email." ".$fname."\r\n".'MIME-Version:1.0'."\r\n"; 
	$headers.='Content-type: text/html; charset=iso-8859-1'."\r\n";

	
	
	$message = $_POST['message'];
	$send = $message."\n From\n".$name."\n".$institute."\n".$phone."\n".$email;
	$result =  mail($to,$subject,$send,$headers);
	
	if($result)
	{
	echo '<center> <h2> Thank you! <br> We will get back to your shortly. <br>
	Go to<a href="../">Home Page</a>';	
	}
	else {
		echo "Some error occurred. Kindly mail us at <a href='mailto:perception@cetb.in'>perception@cetb.in</a>";
	}
}
?>

