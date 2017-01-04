<?php
	require_once ('tcpdf/tcpdf.php');

	$jsonData = '[{"objects":[{"type":"text","originX":"left","originY":"top","left":122.5,"top":27.8,"width":32,"height":20.97,"fill":"black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":0,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"text":"0, 89","fontSize":16,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":""},{"type":"path-group","originX":"left","originY":"top","left":-18.69,"top":77.31,"width":516.38,"height":516.38,"fill":"","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":"newsvgs/15720.svg","clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"paths":[{"type":"path","originX":"left","originY":"top","left":0,"top":12.85,"width":516.38,"height":490.68,"fill":"#a2c4c9","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"path":[["M",361.582,317.654],["l",55.582,185.871],["L",258.187,392.362],["L",98.613,503.524],["l",56.18,-185.871],["L",0,199.915],["l",194.238,-3.586],["l",63.949,-183.48],["l",63.952,183.479],["l",194.236,4.185],["L",361.582,317.654],["z"]],"pathOffset":{"x":258.1875,"y":258.187}}]},{"type":"textbox","originX":"left","originY":"top","left":0.02,"top":88.77,"width":276.95,"height":206.11,"fill":"Black","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"text":"Te\nwerwer\nwerwerwerxt Element","fontSize":38,"fontWeight":"normal","fontFamily":"Tinos","fontStyle":"","lineHeight":1.2,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{"0":{},"1":{"1":{},"2":{},"3":{},"4":{},"5":{}},"2":{"0":{},"1":{},"2":{},"3":{},"4":{},"5":{},"6":{},"7":{},"8":{},"9":{}}},"minWidth":20}],"background":"#ffffff"}]';

	//$cwidth = 750;
	//$cheight = 600;
	//$jsonData = $_POST['jsonData'];
	$cwidth = 480;
	$cheight = 672;
	$rows = 1;
	$cols = 1;
	$savecrop = 'false';
	//$cwidth = 3*96;
	//$cheight = 3*96;
	//$rows = 3;
	//$cols = 3;
	$rc = $rows * $cols;
	$jsonData = json_decode($jsonData);
	//scale to 0.75 for inch based on DPI.
	$scalef = 72/96;
	//crop mark padding
	$cmp = 0;
	if($savecrop != 'false') {
		$cmp = 10;
	}
	//$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false, false);
	//$pdf = new TCPDF("L", "px", array($cwidth, $cheight), true, 'UTF-8', false, false, $objects->src, $objects->backgroundColor);
	//for local
	//$pdf = new TCPDF("L", 'px', array($cwidth*1, $cheight*1), true, 'UTF-8', false, false);
	//for server
	$pdf = new TCPDF('', 'px', array($cwidth * $scalef * $cols + $cmp*2, $cheight * $scalef * $rows + $cmp*2), true, 'UTF-8', false, false);
	$pdf->SetCreator(PDF_CREATOR);
	$pdf->SetHeaderMargin(0);
	$pdf->SetFooterMargin(0);
	$pdf->SetLeftMargin(0);
	$pdf->SetRightMargin(0);
	$pdf->setPrintFooter(false);
	$pdf->setPrintHeader(false);
	$pdf->setCellMargins(0,0,0,0);
	$pdf->SetCellPaddings(0,0,0,0);
	// set auto page breaks
	$pdf->SetAutoPageBreak(false);
	$pdf->SetDisplayMode(100);
	$totalcanvas = count($jsonData);
	$offsetwidth = $cwidth * $scalef;
	$offsetheight = $cheight * $scalef;
	for ($x = 0; $x < $totalcanvas; $x += $rc) {
		$pdf->AddPage();
		$pdf->StartTransform();
		//$pdf->ScaleXY($scalef * 100);
		$colscount = 0;
		$rowscount = 0;
		for ($y = $x; $y < ($x+$rc); $y++) {
			$objects = $jsonData[$y];
			//$pdf->SetMargins(0 , 0, -1, true);
			/*if($objects->background != '') {
				if(isset($objects->background->source) && !is_null($objects->background->source) && $objects->background->source != '') {
					$pdf->Image($objects->background->source, $objects->background->offsetX, $objects->background->offsetX, $cwidth, $cheight, '', '', '', false, 300, '', false, false, 0);
				} else {
					$bgColor = Hex2RGB($objects->background);
					$pdf->Rect(0, 0, $cwidth, $cheight, 'F', '', $fill_color = array($bgColor[0], $bgColor[1], $bgColor[2]));
				}
			}
			if(isset($objects->backgroundImage) && !is_null($objects->backgroundImage) && $objects->backgroundImage->src != '') {
				$pdf->Image($objects->backgroundImage->src, $objects->backgroundImage->left, $objects->backgroundImage->top, $objects->backgroundImage->width*$objects->backgroundImage->scaleX, $objects->backgroundImage->height*$objects->backgroundImage->scaleY, '', '', '', false);
			}*/
			//echo $top . "</br>";
			if($colscount >= $cols) {
				$colscount = 0;
				$rowscount++;
			}
			// define no-write page regions to avoid text overlapping images
			/*
			    'page' => page number or empy for current page
			    'xt' => X top
			    'yt' => Y top
			    'yb' => Y bottom
			    'side' => page side ('L' = left or 'R' = right)
			*/
			//$pdf->Rect($offsetwidth * $colscount, $offsetheight * $rowscount, $offsetwidth, $offsetheight, 'F', array('L','T','R','B'), array(255, 255, 255));
			// start a new XObject Template and set transparency group option
			$template_id = $pdf->startTemplate($offsetwidth*2, $offsetheight*2, true);
			$pdf->StartTransform();
			if($objects->background != '') {
				if(isset($objects->background->source) && !is_null($objects->background->source) && $objects->background->source != '') {
					$pdf->Image($objects->background->source, $offsetwidth, $offsetheight, $offsetwidth, $offsetheight, '', '', '', false, 300, '', false, false, 0);
				} else {
					$bgColor = Hex2RGB($objects->background);
					$pdf->Rect($offsetwidth, $offsetheight, $offsetwidth, $offsetheight, 'F', '', $fill_color = array($bgColor[0], $bgColor[1], $bgColor[2]));
				}
			}
			// Set Clipping Mask
			$pdf->Rect($offsetwidth, $offsetheight, $offsetwidth, $offsetheight, 'CNZ');
			foreach ($objects->objects as $object) {
				$pdf->StartTransform();
				//echo $object->type;
				//$left = $object->left - ($object->width*$object->scaleX/2);			
				$left = (float)$object->left*$scalef + $offsetwidth;
				//echo $left . "</br>";
				//$top = $object->top - ($object->height*$object->scaleY/2);
				$top = (float)$object->top*$scalef + $offsetheight;
				//$left = $left + ($offsetwidth * $colscount);
				//$top = $top + ($offsetheight * $rowscount);
				switch ($object->type) {
					case 'textbox':
						$style = '';
						if($object->fontWeight == 'bold') {
							$style = 'B';
						}
						if($object->fontStyle == 'italic') {
							$style .= 'I';
						}
						if($object->textDecoration == 'underline') {
							$style .= 'U';
						}
						//$style = $object->fontStyle;
						$fontFamily = $object->fontFamily;
						// convert TTF font to TCPDF format and store it on the fonts folder
						$fontpath = "./tcpdf/fonts/googlefonts/" . str_replace(" ","_", $fontFamily) . "/" .  str_replace(" ","", $fontFamily) ."-Regular.ttf";
						if (file_exists($fontpath)) {
							//$fontname = TCPDF_FONTS::addTTFfont($fontpath, 'TrueTypeUnicode', '', 96);
							$fontname = TCPDF_FONTS::addTTFfont($fontpath);
							// use the font
							$pdf->SetFont($fontname, $style, $object->fontSize * $scalef * $object->scaleY, '', false);
						} else {
							$pdf->SetFont("times", $style, $object->fontSize * $scalef * $object->scaleY);
						}
						$newColor = Hex2RGB($object->fill);
						//if($left < 0)
						//$left = 0;
						$pdf->setXY($left, $top);
						//$pdf->Rotate(360-($object->angle % 360), $left, $top);
						$pdf->Rotate(360-($object->angle % 360));
						$pdf->SetTextColor($newColor[0], $newColor[1], $newColor[2]);
						echo $object->lineHeight;
						if($object->lineHeight != '') {
							echo $object->lineHeight;
								$lineheight = $object->lineHeight + 3;
							echo $lineheight;
                            $pdf->setCellHeightRatio($lineheight);
                        }

						//$pdf->SetTextColor($object->fill);                
						// Start Transformation
						// Scale by 150% centered by (50,80) which is the lower left corner of the rectangle
						//$pdf->Text($left, $top, $object->text);
						//$pdf->write(2,$object->text);
						//$pdf->MultiCell($object->width, $object->height, $object->text, 0, $align, false);
						$ow = $object->width * $object->scaleX * $scalef + 3;
						$oh = $object->height * $object->scaleY * $scalef + 3;
						/*if($ow < $offsetwidth)
							$ow = 0;
						if($oh < $offsetheight)                    
							$oh = 0;*/
						$align = $object->textAlign;
						if($align == 'left') {
							$align = 'L';
						}
						if($align == 'center') {
							$align = 'C';
							$ow = $object->width * $object->scaleX * $scalef + 3;
						}
						if($align == 'right') {
							$align = 'R';
							$ow = $object->width * $object->scaleX * $scalef + 3;
						}
						//$pdf->Text(2, 10,$align);
						//$pdf->Text(12, 20, $top);
						//$pdf->setX($left, true);
						//$pdf->setY($left, false, true);
						//$pdf->SetAbsXY($left, $top);
						//$pdf->MultiCell(55, 5, $object->text, 1, 'L', 1, 0, $left, $top, true);
						//$pdf->MultiCell($ow, $oh, $object->text, 'LTRB', $align, false, 1, $left, $top, true, 0, false, false, 0, 'T', false);
						//$pdf->ScaleXY($scalef * 100);
						$pdf->MultiCell($ow, $oh, $object->text, '', $align, false, 1, '', '', true, 0, false, false, 0, 'T', false);
						//$pdf->Cell(0, 0, $object->text, 0, 0, $align);
						break;
					case 'image':
						$pdf->setXY($left, $top);
						$pdf->Rotate(360-$object->angle);
						$pdf->setImageScale($object->scaleX);
						//$pdf->ScaleXY($scalef * 100);
						$pdf->Image($object->src, '', '', $object->width * $scalef, $object->height * $scalef, '', '', '', false, 300, '', false, false, 0);
						break;
					case 'cropzoomimage':
						//$left = $object->left - ($object->width*$object->scaleX/2);
						//$top = $object->top - ($object->height*$object->scaleY/2);
						$pdf->setXY($left, $top);
						$pdf->Rotate(360-$object->angle);
						$pdf->setImageScale($object->scaleX);
						//$pdf->ScaleXY($scalef * 100);
						if(strpos($object->src,'.svg') !== false) {
							$pdf->ImageSVG($object->src, '', '', $object->width*$object->scaleX * $scalef, $object->height*$object->scaleY * $scalef, '', '', '', false);
						} else {
							$pdf->Image($object->src, '', '', $object->width*$object->scaleX * $scalef, $object->height*$object->scaleY * $scalef, '', '', '', false);
						}
						break;
					case 'path-group':
						$pdf->setXY($left, $top);
						$pdf->Rotate(360-$object->angle);
						$pdf->setImageScale($object->scaleX);
						//$pdf->ScaleXY($scalef * 100);
						if(strpos($object->visible,'.svg') !== false) {
							$pdf->ImageSVG($object->visible, '', '', $object->width*$object->scaleX * $scalef, $object->height*$object->scaleY * $scalef, '', '', '', false);
						}
						break;
					default:
						break;
				}
				$pdf->StopTransform();
			}
			// end the current Template
			$pdf->endTemplate();
			$pdf->printTemplate($template_id, ($offsetwidth * $colscount) - $offsetwidth + $cmp, ($offsetheight * $rowscount) - $offsetheight + $cmp, $offsetwidth*2, $offsetheight*2, '', '', false);
			if($savecrop != 'false') {
				$pdf->cropMark(($offsetwidth * $colscount) + $cmp, ($offsetheight * $rowscount) + $cmp, $cmp, $cmp, 'TL', array(255,0,0));
				$pdf->cropMark(($offsetwidth * $colscount) + $offsetwidth + $cmp, ($offsetheight * $rowscount) + $cmp, $cmp, $cmp, 'TR', array(255,0,0));	
				$pdf->cropMark(($offsetwidth * $colscount) + $cmp, ($offsetheight * $rowscount) + $offsetheight + $cmp, $cmp, $cmp, 'BL', array(255,0,0));
				$pdf->cropMark(($offsetwidth * $colscount) + $offsetwidth + $cmp, ($offsetheight * $rowscount) + $offsetheight + $cmp, $cmp, $cmp, 'BR', array(255,0,0));
			}
			//$pdf->printTemplate($template_id, ($offsetwidth * $colscount), ($offsetheight * $rowscount), $offsetwidth, $offsetheight, '', '', false);
			$colscount++;
		}
		$pdf->StopTransform();
	}
	$pdf->Close();
	//$filename = $_SERVER['DOCUMENT_ROOT'] . "/admin/outputpdfs/" . $_POST['filename'];
	$filename = $_SERVER['DOCUMENT_ROOT'] . "/admin/outputpdfs/temp.pdf";
	$pdf->Output($filename, 'F');
	echo $filename;

	function Hex2RGB($color){
		$color = str_replace('#', '', $color);
		if (strlen($color) != 6){
			return array(0,0,0);
		}
		$rgb = array();
		for ($x=0;$x<3;$x++){
			$rgb[$x] = hexdec(substr($color,(2*$x),2));
		}
		return $rgb;
	}
?>