<?php
	include "library/config.php";

	ini_set('upload_max_filesize', '10M');
	ini_set('post_max_size', '10M');
	ini_set('max_input_time', 300);
	ini_set('max_execution_time', 300);

	$folderLocation = $_POST['path'];
	if(!file_exists($folderLocation)) {
	   mkdir($folderLocation, 0777, true);
	   chmod($folderLocation, 0777);
	}
	
	$templateid = $_POST['templateid'];

    $insert_Qry = "INSERT INTO user_templates (template_id, product_id,userid, template_name, canvas_thumbnail, canvas_json, created_date, modified_date) VALUES ('', '$userid', '".$_POST['filename']."', '', '', now(), now())";
	$runQry = mysql_query($insert_Qry);

 	$last_template_id = mysql_insert_id();
	
	$img = $_POST['pngimageData'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	file_put_contents($folderLocation."/" .$templateid.".png", $data);

	if (isset($_POST['jsonData'])) {
		//$jsonunicode = jsonRemoveUnicodeSequences($_POST['jsonData']);
		file_put_contents($folderLocation."/".$templateid.".ype", $_POST['jsonData']);
	}

	$update_Qry = "UPDATE template set canvas_thumbnail = 'admin/templates/". $templateid . ".png', canvas_json = 'admin/templates/". $templateid . ".ype' WHERE template_id = " . $templateid;
	$runQry = mysql_query($update_Qry);
?>