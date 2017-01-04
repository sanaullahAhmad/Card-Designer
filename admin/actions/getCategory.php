<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT * FROM element_categories");

	if (mysqli_num_rows($res))
	{
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<option value=" . $category["category_id"] . "><a href='#'>" . $category["category"] . "</a></option>";
		}
	}
	else
	{
		echo "<option style='padding:8px;'><a href='#'>No categories</a></option>";
	} 

?>