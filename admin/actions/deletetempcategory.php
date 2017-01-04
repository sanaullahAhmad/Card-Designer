<?php
	include ("../library/config.php");
	
	$selected_cat = $_POST["categoty"];
	
	$delete_Ele = "DELETE FROM template WHERE cat_id = $selected_cat";
	$run_EleQuery = mysqli_query($conn,$delete_Ele) or die("ERROR: " . $delete_Ele);

	$delete_Query = "DELETE FROM template_categories WHERE tempcat_id = $selected_cat";
	$run_Query = mysqli_query($conn,$delete_Query) or die("ERROR: " . $delete_Query);
	if ($run_Query)
	{
		echo "Category Deleted Successfully.";
	}		
?>