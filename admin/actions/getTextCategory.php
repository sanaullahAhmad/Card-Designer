<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT * FROM text_categories");

	if (mysqli_num_rows($res))
	{
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<li id=" . $category["textcat_id"] . " value=" . $category["textcat_id"] . "><a href='javascript:void(0);' value=" . $category["textcat_id"] . ">" . $category["textcat_name"] . "</a></li>";
		}
	}
	else
	{
		echo "<li style='padding:8px;'><a href='#'>No categories</a></li>";
	} 

?>