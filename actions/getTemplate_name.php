<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT template_id, template_name FROM template");

	if (mysqli_num_rows($res))
	{
		echo "<option value=''>Select Template</option>";
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<option value=" . $category["template_id"] . ">" . $category["template_name"] . "</option>";
		}
	}
	else
	{
		echo "<div style='padding:8px;'>No Template</div>";
	} 

?>