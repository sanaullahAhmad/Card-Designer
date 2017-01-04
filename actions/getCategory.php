<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT * FROM element_categories");

	if (mysqli_num_rows($res))
	{
		
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<li id=" . $category["category_id"] . ">" . $category["category"] . "</li>";
		}
	}
	else
	{
		echo "<li style='padding:8px;'>No categories</li>";
	} 

?>