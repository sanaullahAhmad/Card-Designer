<?php

	require("../library/config.php");

	if (isset($_POST['imgid']) && $_POST['imgid'] != '')

	{	

		$delete_Query = "DELETE FROM useruploads WHERE id IN (".$_POST['imgid'].")";

		$run_Query = mysqli_query($conn,($delete_Query) or die("ERROR: " . $delete_Query);

		if ($run_Query)

		{

			echo "Image(s) Deleted Successfully.";

		}

	}

?>

