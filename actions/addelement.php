<?php
	include("../library/config.php");
		$reselementName = $_POST["elementName"];
		$reselement = $_POST["element"];
		$elename = str_replace("C:\\fakepath\\", "", $reselement);
		
		$insert_Query = "INSERT INTO element(id,element_name,element_path,element_json) values ('','$reselementName','$elename','')";
		$run_Query = mysqli_query($conn,($insert_Query) or die("ERROR: " . $insert_Query);
		if($run_Query)
		{
			echo "New Element Added Successfully.";
		}
		
?>