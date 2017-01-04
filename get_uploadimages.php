<?php
include("library/config.php"); //include config file

//sanitize post value
if(isset($_POST["page"])){
	$page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH);
	if(!is_numeric($page_number)){die('Invalid page number!');} //incase of invalid page number
}else{
	$page_number = 1;
}

//get current starting point of records
$position = (($page_number-1) * $item_per_page);

//Limit our results within a specified range. 
$results = mysql_query("SELECT * FROM useruploads ORDER BY id ASC LIMIT $position, $item_per_page");

//output results from database

	  while($row = mysqli_fetch_array($results, MYSQLI_ASSOC))
		{	
		echo "<div class='thumb' style='padding:5px;'>";
		echo "<a class='thumbnail' href='#' style='margin-bottom: 0;'>";
		echo "<img class='addImage img-responsive' data-imgsrc='".$row['imgpath']."' src='".$row['imgpath']."' alt='' width='80px'>";
		echo "</a>";
		echo "<i class='tiny material-icons deleteUploadImg' id='".$row['id']."'>delete</i>";
		echo "</div>";

		}
?>
