<?php

	header( 'Content-Type: text/html; charset=utf-8' );

	include "library/config.php";

	$folderLocation = $_POST['path'];

	if(!file_exists($folderLocation)) {

	   mkdir($folderLocation, 0777, true);

	   chmod($folderLocation, 0777);
	}

	$insert_Qry = "INSERT INTO user_templates (template_id, product_id, userid, template_name, canvas_thumbnail, canvas_json, created_date, modified_date) VALUES ('','".$_POST['proid']."', '1', '".$_POST['filename']."', '', '', now(), now())";
	$runQry = mysqli_query($conn, $insert_Qry);

 	$last_template_id = mysqli_insert_id();
	
	$img = $_POST['pngimageData']; // Your data 'data:image/png;base64,AAAFBfj42Pj4';
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	file_put_contents($folderLocation."/" .$last_template_id.".png", $data);

	if (isset($_POST['jsonData'])) {
		//$jsonunicode = jsonRemoveUnicodeSequences($_POST['jsonData']);
		file_put_contents($folderLocation."/".$last_template_id.".ype", $_POST['jsonData']);
	}

	$update_Qry = "UPDATE user_templates set canvas_thumbnail = 'templates/". $last_template_id . ".png', canvas_json = 'templates/". $last_template_id . ".ype' WHERE template_id = " . $last_template_id;
	$runQry = mysqli_query($conn, $update_Qry);
	
	echo $last_template_id;
	/*function jsonRemoveUnicodeSequences($struct) {
	   return preg_replace("/\\\\u([a-f0-9]{4})/e", "iconv('UCS-4LE','UTF-8',pack('V', hexdec('U$1')))", json_encode($struct));
	}*/
?>