<?php 
	include("./library/config.php");

	$selQry = "SELECT `text_json` FROM texts WHERE text_id = " . $_GET['id'];
	
	$run_selQry	= mysqli_query($conn,$selQry) or die(mysql_error());

	if(mysqli_num_rows($run_selQry) > 0)	{
		while($row = mysqli_fetch_assoc($run_selQry)) {
			echo '{"objects":['.$row['text_json'].']}';
			break;
		}
	}
?>