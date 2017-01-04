<?php
	error_reporting(E_ERROR | E_PARSE);

	require('fpdf.php');

	$pngfilename = $_REQUEST['filename'];
	$pdffilename = $_REQUEST['pdffilename'];

	$pdf = new FPDF('P','mm','A4');
	$pdf->AddPage();
    $start_x = $pdf->GetX();
    $start_y = $pdf->GetY();
	
	$pngfilename = "./temp/".$pngfilename;
	$data = getimagesize($pngfilename);
	$width = $data[0];
	$height = $data[1];

	$pdf->Image($pngfilename,$start_x+0,$start_y-2,$width/(2.83*1.5), $height/(2.83*1.5));
	$pdf->Output("./temp/".$pdffilename,'F');
?>