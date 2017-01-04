<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT * FROM template_categories");

	if (mysqli_num_rows($res))
	{
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<li id=" . $category["tempcat_id"] . "  value=" . $category["tempcat_id"] . "><a href='javascript:void(0);'  value=" . $category["tempcat_id"] . ">" . $category["tempcat_name"] . "</a></li>";
		}
	}
	else
	{
		echo "<li style='padding:10px;'><a href='#'>No categories</a></li>";
	} 

?>

