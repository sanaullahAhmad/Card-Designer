<?php
	include "library/config.php";

	//ini_set('upload_max_filesize', '10M');

	//ini_set('post_max_size', '10M');

	//ini_set('max_input_time', 300);

	//ini_set('max_execution_time', 300);

	$folderLocation = $_POST['path'];

	if(!file_exists($folderLocation)) {

	   mkdir($folderLocation, 0777, true);

	   chmod($folderLocation, 0777);

	}

	/*$encoded = $_POST['pngimageData'];

	$decoded = "";

	for ($i=0; $i < ceil(strlen($encoded)/256); $i++) {

	  $decoded = $decoded . base64_decode(substr($encoded,$i*256,256));

	}

	$contents = $decoded; // output

	file_put_contents($folderLocation."/".$_POST['filename'].".jpg", $contents);

	file_put_contents($folderLocation."/".$_POST['filename'].".txt", $_POST['jsonData']);*/


	$insert_Qry = "INSERT INTO texts(text_id, text_name, text_thumbnail, text_json, cat_id) VALUES ('', '".$_POST['filename']."', '".$_POST['pngimageData']."', ".json_encode($_POST['jsonData']).", '".$_POST['category']."')";

	$runQry = mysql_query($insert_Qry);

	//echo "Text Saved successfully";

?>