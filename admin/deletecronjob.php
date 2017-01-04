<?php
	//ADMIN cron job to clean the 'templates' folder.

	require("library/config.php");

	//Get the list of files with unique ids.
	$dir = 'templates';
    $files = readfolder($dir);
	
	foreach ($files as &$file) {
	    $file = str_replace(".png", "", $file);
	    $file = str_replace(".ype", "", $file);
	}

	$a1 = $files;
	var_dump($a1);

	echo "</br></br>";

	//get the template ids from table.
	$query = "SELECT distinct(template_id) FROM template";
	$result = mysqli_query($conn,$query);

	$a2 = Array();
	while($row = mysqli_fetch_assoc($result)){
     $a2[] = $row['template_id'];
	}

	if(sizeof($a2) <= 0) exit();

	var_dump($a2);
	echo "</br></br>";

	//compare both the arrays and keep the compared list in the seperate array
	$a3 = array_diff($a1,$a2);

	var_dump($a3);

	echo "</br></br>";

	//delete files in the seperate array.	
	foreach ($a3 as $file) {
	   	unlink('templates/'.$file.".png");
	   	unlink('templates/'.$file.".ype");
	}

	function readfolder($dir,$listDir= array())
	{
	    $listDir = array();
	    if($handler = opendir($dir))
	    {
	        while (($sub = readdir($handler)) !== FALSE)
	        {
	            if ($sub != "." && $sub != ".." && $sub != "Thumb.db")
	            {
	                if(is_file($dir."/".$sub))
	                {
	                    $listDir[] = $sub;
	                }elseif(is_dir($dir."/".$sub))
	                {
	                    //$listDir[$sub] = $this->readfolder($dir."/".$sub); 
	                } 
	            } 
	        }    
	        closedir($handler); 
	    } 
	    return $listDir;    
	}
?>

