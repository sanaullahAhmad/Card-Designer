<?php
	include ("../library/config.php");
	$res = mysqli_query($conn,("SELECT * FROM template_categories");

	if (mysqli_num_rows($res))
	{
		while ($category = mysqli_fetch_assoc($res))
		{
			echo "<option  value=" . $category["tempcat_id"] . ">" . $category["tempcat_name"] . "</option >";
		}
	}
	else
	{
		echo "<option  style='padding:10px;'><a href='#'>No categories</a></option >";
	} 

?>