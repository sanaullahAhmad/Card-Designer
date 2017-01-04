<?php
	require("../library/config.php");

	if (isset($_POST['elementid']) && $_POST['elementid'] != '')
	{
		$sel_Query = mysqli_query($conn,("SELECT element_path FROM element WHERE id IN (".$_POST['elementid'].")");
		if (mysqli_num_rows($sel_Query) > 0)
		{
			while ($result = mysqli_fetch_array($sel_Query, MYSQLI_ASSOC))
			{
				$m_img_path = "../".$result['element_path'];
				unlink($m_img_path);
			}
		}
	
		$delete_Query = "DELETE FROM element WHERE id IN (".$_POST['elementid'].")";
		$run_Query = mysqli_query($conn,($delete_Query) or die("ERROR: " . $delete_Query);
		if ($run_Query)
		{
			echo "Element(s) Deleted Successfully.";
		}
	}

?>
