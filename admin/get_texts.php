<?php
	require("library/config.php");

		$limit = $_GET['limit'];
		$last_text_id = $_GET['offset'];

	if(isset($_GET['textid']) && $_GET['textid'] != '') {
		$query = "SELECT * FROM texts WHERE cat_id = ".$_GET['textid']." AND text_id > $last_text_id ORDER BY text_id ASC LIMIT $limit";
	} else {
		$query = "SELECT * FROM texts";
	}

	$runQuery = mysqli_query($conn,$query);
	if(mysqli_num_rows($runQuery) > 0)
	{
	  	while($row = mysqli_fetch_array($runQuery, MYSQLI_ASSOC))
		{
?>
	   <li class="col-lg-6 col-md-8 col-xs-12 thumb" id="<?php echo $row['text_id']; ?>">
		  <a class="thumbnail" title="<?php echo $row['text_name']; ?>" href='javascript:loadText(<?php echo $row["text_id"]; ?>);' style="margin-bottom: 0;">
			<img class="textImage img-responsive" src="<?php echo $row['text_thumbnail']; ?>" alt="" style="width:80px;">
		  </a><input type="checkbox" class="textimg-checkbox" id="<?php echo $row['text_id']; ?>" value="<?php echo $row['text_id']; ?>" />
	   </li>
<?php
	  }
	} 
?>

