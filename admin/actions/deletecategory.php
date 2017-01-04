<?php
	include ("../library/config.php");
	
	$selected_cat = $_POST["categoty"];
	$sel_Query = mysqli_query($conn,"SELECT element_path FROM element WHERE cat_id = $selected_cat");
	
	if (mysqli_num_rows($sel_Query) > 0)
	{
		while ($result = mysqli_fetch_array($sel_Query, MYSQLI_ASSOC))
		{
			$m_img_path = "../" . $result['element_path'];
			unlink($m_img_path);
		}
	}
	
	$delete_Ele = "DELETE FROM element WHERE cat_id = $selected_cat";
	$run_EleQuery = mysqli_query($conn,$delete_Ele) or die("ERROR: " . $delete_Ele);

	$delete_Query = "DELETE FROM element_categories WHERE category_id = $selected_cat";
	$run_Query = mysqli_query($conn,$delete_Query) or die("ERROR: " . $delete_Query);
	if ($run_Query)
	{
		echo "Category Deleted Successfully.";
	}		
?>