<?php 
	include("./library/config.php");

	$selQry = "SELECT `element_json` FROM element WHERE id = " . $_GET['id'];
	
	$run_selQry	= mysql_query($selQry) or die(mysql_error());	

	if(mysqli_num_rows($run_selQry) > 0)	{
		while($row = mysqli_fetch_assoc($run_selQry)) {
			echo $row['element_json'];
			break;
		}
	}
?>