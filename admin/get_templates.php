<?php
	require("library/config.php");
	$limit = $_GET['limit'];
	$last_temp_id = $_GET['offset'];
	if(isset($_GET['tempid']) && $_GET['tempid'] != '') {
		$query = "SELECT * FROM template WHERE cat_id = ".$_GET['tempid']." AND template_id > $last_temp_id ORDER BY template_id ASC LIMIT $limit";
	} else {
		$query = "SELECT * FROM template";
	}
	$runQuery = mysqli_query($conn,$query);
	if(mysqli_num_rows($runQuery) > 0)
	{
	  	while($row = mysqli_fetch_array($runQuery, MYSQLI_ASSOC))
		{
?>
	   <li class="" id="<?php echo $row['template_id']; ?>">
		  <a class="thumbnail" title="<?php echo $row['template_name'];  ?>" href='javascript:loadTemplate(<?php echo $row["template_id"]; ?>);' style="margin-bottom: 0px;">
			<?php
				//read the file get content
				$templatespath = "../" . $row['canvas_json'];	
				$json = file_get_contents($templatespath);
				$json_array = json_decode($json, true);
				$json = $json_array[0];
				$json_array = json_decode($json, true);
				$width = $json_array['width'] / 96;
				$height = $json_array['height'] / 96;
				//display size
				echo "<span class='badge' style='font-size:10px; position: relative; bottom:-130px; right: -53px; background-color:#fff; color:#777;border-radius: 137px; width: 47px;'>$width x $height</span>";
			?>		  	
			<?php
				if(isset($_GET['refresh']) && $_GET['refresh'] == true && $row['template_id'] == $_GET['tempid']) {
				?>
				<img class="tempImage img-responsive" src="thumbnail.php?file=<?php echo '../'.$row['canvas_thumbnail'].'&rand='.rand().'&maxw=150&maxh=150&width=150&height=150'; ?>" alt="" style="">
			<?php 
				} else {
			?>
			<img class="tempImage img-responsive" src="thumbnail.php?file=<?php echo '../'.$row['canvas_thumbnail'].'&rand='.rand().'&maxw=150&maxh=150&width=150&height=150'; ?>" alt="" style="">
			<?php 
				}
			?>
			<span style='font-size:10px;'>
				<?php echo $row['template_name']; ?>
			</span>
		  </a>
			<i class="tiny material-icons deleteTemp" id="<?php echo $row['template_id']; ?>">delete</i>
	   </li>
<?php
	  }
	} 
?>