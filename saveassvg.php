<?php
	include("library/config.php");

	ini_set('upload_max_filesize', '10M');
	ini_set('post_max_size', '10M');
	ini_set('max_input_time', 300);
	ini_set('max_execution_time', 300);

	$folderLocation = $_POST['path'];
	if(!file_exists($folderLocation)) {
	   mkdir($folderLocation, 0777, true);
	   chmod($folderLocation, 0777);
	}
	
	if (isset($_POST['svgData'])) {

		$encoded = $_POST['svgData'];
		$decoded = "";
		for ($i=0; $i < ceil(strlen($encoded)/256); $i++) {
		  $decoded = $decoded . substr($encoded,$i*256,256);
		}
		$contents = $decoded; // output
		
		file_put_contents($folderLocation."/".$_POST['filename'].".svg", $contents);
		echo $folderLocation."/".$_POST['filename'].".svg";
	}

		$rescategory = $_POST["category"];
		$reselementName = $_POST["filename"];
		$elementJson = $_POST["jsonData"];
		$path = $folderLocation."".$_POST['filename'].".svg";
		
		$insert_Query = "INSERT INTO element(id,cat_id,element_name,element_path,element_json) values ('', '$rescategory','$reselementName','$path','$elementJson')";
		$run_Query = mysql_query($insert_Query) or die("ERROR: " . $insert_Query);
		if($run_Query)
		{
			echo "New Element Added Successfully.";
		}


	//echo "SVG Saved successfully";
?>