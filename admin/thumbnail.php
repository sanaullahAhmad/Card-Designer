<?php
 
	// Get the File path for the image
	 
	$sImagePath = $_GET["file"];
	 
	// If you want exact dimensions, you
	// will pass 'width' and 'height'
	 
	$iThumbnailWidth = (int)$_GET['width'];
	$iThumbnailHeight = (int)$_GET['height'];
	 
	// If you want proportional thumbnails,
	// you will pass 'maxw' and 'maxh'
	 
	$iMaxWidth = (int)$_GET["maxw"];
	$iMaxHeight = (int)$_GET["maxh"];
	 
	// Based on the above we can tell which
	// type of resizing our script must do
	 
	if ($iMaxWidth && $iMaxHeight) $sType = 'scale';
	else if ($iThumbnailWidth && $iThumbnailHeight) $sType = 'exact';
	 
	// The 'scale' type will make the image
	// smaller but keep the same dimensions
	 
	// The 'exact' type will make the thumbnail
	// exactly the width and height you choose
	 
	// To start off, we will create a copy
	// of our original image in $img
	 
	$img = NULL;
	 
	// At this point, we need to know the
	// format of the image
	 
	// Based on that, we can create a new
	// image using these functions:
	// - imagecreatefromjpeg
	// - imagecreatefrompng
	// - imagecreatefromgif
	 
	$sExtension = /*strtolower(end(explode('.', $sImagePath)));*/pathinfo($sImagePath,PATHINFO_EXTENSION);
	if ($sExtension == 'jpg' || $sExtension == 'jpeg') {
	 
	    $img = @imagecreatefromjpeg($sImagePath)
	        or die("Cannot create new JPEG image");
	 
	} else if ($sExtension == 'png') {
	 
	    $img = @imagecreatefrompng($sImagePath)
	        or die("Cannot create new PNG image");
	 
	} else if ($sExtension == 'gif') {
	 
	    $img = @imagecreatefromgif($sImagePath)
	        or die("Cannot create new GIF image");
	 
	}
	 
	// If the image has been created, we may proceed
	// to the next step
	 
	if ($img) {
	 
	    // We now need to decide how to resize the image
	 
	    // If we chose to scale down the image, we will
	    // need to get the original image propertions
	 
	    $iOrigWidth = imagesx($img);
	    $iOrigHeight = imagesy($img);
	 
	    if ($sType == 'scale') {
	 
	        // Get scale ratio
	 
	        $fScale = min($iMaxWidth/$iOrigWidth,
	              $iMaxHeight/$iOrigHeight);
	 
	        // To explain how this works, say the original
	        // dimensions were 200x100 and our max width
	            // and height for a thumbnail is 50 pixels.
	        // We would do $iMaxWidth/$iOrigWidth
	        // (50/200) = 0.25
	        // And $iMaxHeight/$iOrigHeight
	        // (50/100) = 0.5
	 
	        // We then use the min() function
	        // to find the lowest value.
	 
	        // In this case, 0.25 is the lowest so that
	        // is our scale. The thumbnail must be
	        // 1/4th (0.25) of the original image
	 
	        if ($fScale < 1) {
	 
	            // We must only run the code below
	            // if the scale is lower than 1
	            // If it isn't, this means that
	            // the thumbnail we want is actually
	            // bigger than the original image
	 
	            // Calculate the new height and width
	            // based on the scale
	 
	            $iNewWidth = floor($fScale*$iOrigWidth);
	            $iNewHeight = floor($fScale*$iOrigHeight);
	            // Create a new temporary image using the
	            // imagecreatetruecolor function
	 
	            $tmpimg = imagecreatetruecolor($iNewWidth,
	                               $iNewHeight);
	 
	            // The function below copies the original
	            // image and re-samples it into the new one
	            // using the new width and height
	 
	            imagecopyresampled($tmpimg, $img, 0, 0, 0, 0,
	            $iNewWidth, $iNewHeight, $iOrigWidth, $iOrigHeight);
	 
	            // Finally, we simply destroy the $img file
	            // which contained our original image
	            // so we can replace with the new thumbnail
	 
	            imagedestroy($img);
	            $img = $tmpimg;
	        }     
	 
	    } else if ($sType == "exact") {
	 
	        // Get scale ratio
	 
	        $fScale = max($iThumbnailWidth/$iOrigWidth,
	              $iThumbnailHeight/$iOrigHeight);
	 
	        // This works similarly to other one but
	        // rather than the lowest value, we need
	        // the highest. For example, if the
	        // dimensions were 200x100 and our thumbnail
	        // had to be 50x50, we would calculate:
	        // $iThumbnailWidth/$iOrigWidth
	        // (50/200) = 0.25
	        // And $iThumbnailHeight/$iOrigHeight
	        // (50/100) = 0.5
	 
	        // We then use the max() function
	        // to find the highest value.
	 
	        // In this case, 0.5 is the highest so that
	        // is our scale. This is the first step of
	        // the image manipulation. Once we scale
	        // the image down to 0.5, it will have the
	        // dimensions of 100x50. At this point,
	        // we will need to crop the image, leaving
	        // the height identical but halving
	        // the width to 50
	 
	        if ($fScale < 1) {
	 
	            // Calculate the new height and width
	            // based on the scale
	 
	            $iNewWidth = floor($fScale*$iOrigWidth);
	            $iNewHeight = floor($fScale*$iOrigHeight);
	            // Create a new temporary image using the
	            // imagecreatetruecolor function
	 
	            $tmpimg = imagecreatetruecolor($iNewWidth,
	                            $iNewHeight);
	            $tmp2img = imagecreatetruecolor($iThumbnailWidth,
	                            $iThumbnailHeight);
	 
	            // The function below copies the original
	            // image and re-samples it into the new one
	            // using the new width and height
	 
	            imagecopyresampled($tmpimg, $img, 0, 0, 0, 0,
	            $iNewWidth, $iNewHeight, $iOrigWidth, $iOrigHeight);
	 
	            // Our $tmpimg will now have the scaled down
	            // image. The next step is cropping the picture to
	            // make sure it's exactly the size of the thumbnail
	 
	            // The following logic choose how the image
	            // will be cropped. Using the previous example, it
	            // needs to take a 50x50 block from the original
	            // image and copy it over to the new thumbnail
	 
	            // Since we want to copy the exact center of the
	            // scaled down image, we need to find out the x
	            // axis and y axis. To do so, say the scaled down
	            // image now has a width of 100px but we want it
	            // to be only 50px
	 
	            // Somehow, we need to select between the 25th and
	            // 75th pixel to copy the middle.
	 
	            // To find this value we do:
	            // ($iNewWidth/2)-($iThumbnailWidth/2)
	 
	            // ( 100px / 2 ) - (50px / 2)
	            // ( 50px ) - ( 25px )
	            // = 25px
	 
	            if ($iNewWidth == $iThumbnailWidth) {
	 
	                $yAxis = ($iNewHeight/2)-
	                    ($iThumbnailHeight/2);
	                $xAxis = 0;
	 
	            } else if ($iNewHeight == $iThumbnailHeight)  {
	 
	                $yAxis = 0;
	                $xAxis = ($iNewWidth/2)-
	                    ($iThumbnailWidth/2);
	 
	            } 
	 
	            // We now have to resample the new image using the
	            // new dimensions are axis values.
	 
	            imagecopyresampled($tmp2img, $tmpimg, 0, 0,
	                       $xAxis, $yAxis,
	                       $iThumbnailWidth,
	                       $iThumbnailHeight,
	                       $iThumbnailWidth,
	                       $iThumbnailHeight);
	 
	            imagedestroy($img);
	            imagedestroy($tmpimg);
	            $img = $tmp2img;
	        }    
	 
	    }
	 
	    // Display the image using the header function to specify
	    // the type of output our page is giving
	 
	    header("Content-type: image/jpeg");
	    imagejpeg($img);
	 
	}
 
?>