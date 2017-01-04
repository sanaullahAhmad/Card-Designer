<?php
	include("../library/config.php");

	if(isset($_POST["categoty"]) && $_POST["categoty"] != '') {
		$rescategory =$_POST["categoty"];
		
		$insert_Query = "INSERT INTO element_categories(category_id, category) values ('', '$rescategory')";
		$run_Query = mysqli_query($conn,($insert_Query) or die("ERROR: " . $insert_Query);
			if($run_Query)
			{
				echo "New Category Added Successfully.";
			}

	} else if(isset($_POST["templatecat"]) && $_POST["templatecat"] != '') {

		$tempcategory = $_POST["templatecat"];
		
		$insert_Query = "INSERT INTO template_categories(tempcat_id, tempcat_name) values ('', '$tempcategory')";
		$run_Query = mysqli_query($conn,($insert_Query) or die("ERROR: " . $insert_Query);
			if($run_Query)
			{
				echo "New Category Added Successfully.";
			}

	}  else if(isset($_POST["bgcategoty"]) && $_POST["bgcategoty"] != '') {

		$bgcategory = $_POST["bgcategoty"];
		
		$insert_Query = "INSERT INTO bg_categories(bgcat_id, bgcat_name) values ('', '$bgcategory')";
		$run_Query = mysqli_query($conn,($insert_Query) or die("ERROR: " . $insert_Query);
			if($run_Query)
			{
				echo "New Category Added Successfully.";
			}

	}   else if(isset($_POST["textcategoty"]) && $_POST["textcategoty"] != '') {

		$textcategory = $_POST["textcategoty"];
		
		$insert_Query = "INSERT INTO text_categories(textcat_id, textcat_name) values ('', '$textcategory')";
		$run_Query = mysqli_query($conn,($insert_Query) or die("ERROR: " . $insert_Query);
			if($run_Query)
			{
				echo "New Text Category Added Successfully.";
			}

	} else { }
		
?>