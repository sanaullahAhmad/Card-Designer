<?php
	require("library/config.php");
	$limit = $_GET['limit'];
	$last_bg_id = $_GET['offset'];
	
	if(isset($_GET['category']) && $_GET['category'] != '') {
		$query = "SELECT * FROM background WHERE bgcat_id = ".$_GET['category']." AND id > $last_bg_id ORDER BY id ASC LIMIT $limit";
	} else {
		$query = "SELECT * FROM background";
	}

	$runQuery = mysqli_query($conn,$query);
	
	if(mysqli_num_rows($runQuery) > 0){
	 while($row = mysqli_fetch_array($runQuery, MYSQLI_ASSOC)){ ?>
	   <li class="col-lg-6 col-md-8 col-xs-12 thumb" id="<?php  echo $row['id']; ?>">
		  <a class="thumbnail" href="#" style="margin-bottom: 0;">
			<img class="bgImage img-responsive" data-imgsrc="<?php  echo $row['bg_path']; ?>" src="<?php  echo $row['bg_path']; ?>" alt="" style="width:80px; height:80px;">
		  </a>
		<i class="tiny material-icons deleteBg" id="<?php echo $row['id']; ?>">delete</i>
	   </li>
<?php
 }} ?>