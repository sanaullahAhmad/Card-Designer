<?php
	include("../library/config.php");
		$rescategory = $_POST["bgCategoty"];
		$resbgName = $_POST["bgName"];
		$resbg = $_POST["background"];
		$bgname = str_replace("C:\\fakepath\\", "", $resbg);
		
			$insert_Query = "INSERT INTO background(id,bgcat_id,bg_name,bg_path) values ('', '$rescategory','$resbgName','$bgname')";
			$run_Query = mysqli_query($conn,$insert_Query) or die("ERROR: " . $insert_Query);
		if($run_Query)
		{
		echo "New Background Added Successfully.";
		}
		
?>