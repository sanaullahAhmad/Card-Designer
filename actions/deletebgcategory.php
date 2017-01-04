<?php
	include ("../library/config.php");
	
	$selected_bgcat = $_POST["bgcategoty"];
	$sel_Query = mysqli_query($conn,("SELECT bg_path FROM background WHERE bgcat_id = $selected_bgcat");
	
	if (mysqli_num_rows($sel_Query) > 0)
	{
		while ($result = mysqli_fetch_array($sel_Query, MYSQLI_ASSOC))
		{
			$m_img_path = "../" . $result['bg_path'];
			unlink($m_img_path);
		}
	}
	
	$delete_Ele = "DELETE FROM background WHERE bgcat_id = $selected_bgcat";
	$run_EleQuery = mysqli_query($conn,($delete_Ele) or die("ERROR: " . $delete_Ele);

	$delete_Query = "DELETE FROM bg_categories WHERE bgcat_id = $selected_bgcat";
	$run_Query = mysqli_query($conn,($delete_Query) or die("ERROR: " . $delete_Query);
	if ($run_Query)
	{
		echo "Category Deleted Successfully.";
	}		
?>