<?php
	require("../library/config.php");

	if (isset($_POST['textid']) && $_POST['textid'] != '')
	{
		$delete_Query = "DELETE FROM texts WHERE text_id IN (".$_POST['textid'].")";
		$run_Query = mysqli_query($conn,$delete_Query) or die("ERROR: " . $delete_Query);
		if ($run_Query)
		{
			echo "Text(s) Deleted Successfully.";
		}
	}

?>
