<?php
	error_reporting(E_ERROR | E_PARSE);

	require('fpdf.php');

	$filename = $_REQUEST['filename'];
	$pdffilename = $_REQUEST['pdffilename'];

	$pdf = new FPDF();
	// Insert a logo in the top-left corner at 300 dpi
	$pdf->AddPage();
	$pdf->Image("./temp/".$filename,0,0,200);
	$pdf->Output("./temp/".$pdffilename,'F');
?>