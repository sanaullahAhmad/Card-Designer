<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT * FROM bg_categories");

	if (mysqli_num_rows($res))
	{
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<option value=" . $category["bgcat_id"] . "><a href='#'>" . $category["bgcat_name"] . "</a></option>";
		}
	}
	else
	{
		echo "<option style='padding:8px;'><a href='#'>No categories</a></option>";
	} 

?>