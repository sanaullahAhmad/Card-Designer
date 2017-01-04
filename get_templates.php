<?php
	require("library/config.php");
	$limit = $_GET['limit'];
	$last_temp_id = $_GET['offset'];
	if(isset($_GET['tempid']) && $_GET['tempid'] != '') {
		$query = "SELECT * FROM user_templates WHERE template_id AND cat_id = ".$_GET['tempid']." AND template_id > $last_temp_id ORDER BY template_id ASC LIMIT $limit";		
	} else {
		$query = "SELECT * FROM user_templates ORDER BY template_id ASC";
	}

	$runQuery = mysql_query($query);
	if(mysqli_num_rows($runQuery) > 0)
	{
	  	while($row = mysqli_fetch_array($runQuery, MYSQLI_ASSOC))
		{
?>
	   <div class="col s12 l3"="<?php echo $row['template_id']; ?>" style="padding:5px;height:270px;"> 

		  <a class="thumbnail" title="<?php echo $row['template_name']; ?>" href='javascript:loadTemplate(<?php echo $row["template_id"]; ?>,<?php echo $row["product_id"]; ?>);' style="margin-bottom: -5px;">
		  	
			<?php
				if(isset($_GET['refresh']) && $_GET['refresh'] == true) {
			?>
			<!--<img class="tempImage img-responsive" src="<?php echo $row['canvas_thumbnail'].'?'.rand(); ?>" alt="" style="width:100px; height:100px;">-->
			<img class="tempImage img-responsive" src="<?php echo $row['canvas_thumbnail'] ?>" alt="" style="width:170px;">
			<?php 
				} else {
			?>
			<img class="tempImage img-responsive" src="<?php echo $row['canvas_thumbnail']; ?>" alt="" style="width:85px;">
			<?php 
				}
			?>
			
			<span style="margin-left:-150px;color:#444;vertical-align:0px;padding-left:200px;">
				<?php echo $row['template_name']; ?>
			</span>

		  </a><!--<i class="tiny material-icons deleteTemp" id="<?php echo $row['template_id']; ?>">delete</i>-->

	   </div>

<?php

	  }

	} 

?>

