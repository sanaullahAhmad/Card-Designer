<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,"SELECT * FROM template_categories");

	if (mysqli_num_rows($res))
	{
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<option id=" . $category["tempcat_id"] . "  value=" . $category["tempcat_id"] . "><a href='javascript:void(0);'  value=" . $category["tempcat_id"] . ">" . $category["tempcat_name"] . "</a></option>";
		}
	}
	else
	{
		echo "<option style='padding:10px;'><a href='#'>No categories</a></option>";
	} 

?>

