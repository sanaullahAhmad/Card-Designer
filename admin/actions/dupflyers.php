<?php
	require('../library/config.php');
	if (isset($_POST['id']) && $_POST['id'] != '')
	{	
		$Query = "INSERT INTO user_templates (userid, template_name, canvas_thumbnail, canvas_json, created_date, modified_date) SELECT userid, template_name, canvas_thumbnail, canvas_json, created_date, modified_date FROM user_templates WHERE template_id = ".$_POST['id'];
	
		$run_Query = mysqli_query($conn,$Query) or die("ERROR: " . $Query);

		if ($run_Query)
		{
			echo "Duplicate Flyer Successfully Created.";
		}
	}
?>

