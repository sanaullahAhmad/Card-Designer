<?php
	include ("../library/config.php");
	
	$selected_textcat = $_POST["textcategoty"];

	$delete_Query = "DELETE FROM text_categories WHERE textcat_id = $selected_textcat";
	$run_Query = mysqli_query($conn,$delete_Query) or die("ERROR: " . $delete_Query);
	if ($run_Query)
	{
		echo "Category Deleted Successfully.";
	}		
?>