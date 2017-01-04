<?php 
	if(isset($_POST['filename']) && $_POST['filename'] != '') {
	   unlink($_POST['filename']);
	}
?>