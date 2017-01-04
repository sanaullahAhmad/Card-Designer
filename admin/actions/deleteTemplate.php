<?php

	require("../library/config.php");

	if (isset($_POST['templateid']) && $_POST['templateid'] != '')

	{	

		$delete_Query = "DELETE FROM template WHERE template_id IN (".$_POST['templateid'].")";

		$run_Query = mysqli_query($conn,$delete_Query) or die("ERROR: " . $delete_Query);

		if ($run_Query)

		{

			echo "Template(s) Deleted Successfully.";

		}

	}

?>

