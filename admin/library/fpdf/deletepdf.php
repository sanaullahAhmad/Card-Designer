<?php
	error_reporting(E_ERROR | E_PARSE);

	$filename = $_REQUEST['pdffilename'];

	$pdffilename = "temp/".$filename;

	$filenametodelete = preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename);

	$pngfilename = "temp/".$filenametodelete.".png";

	unlink($pdffilename);

	unlink($pngfilename);

?>