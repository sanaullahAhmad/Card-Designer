<?php

	//Script for saving report image in temperoary folder.

	ini_set('upload_max_filesize', '10M');
	ini_set('post_max_size', '10M');
	ini_set('max_input_time', 300);
	ini_set('max_execution_time', 300);

	$encoded = $_POST['imageData'];
	$decoded = "";
	for ($i=0; $i < ceil(strlen($encoded)/256); $i++) {
	  $decoded = $decoded . base64_decode(substr($encoded,$i*256,256));
	}
	$contents = $decoded; // output
	file_put_contents("./library/fpdf/temp/".$_POST['filename'], $contents);
?>