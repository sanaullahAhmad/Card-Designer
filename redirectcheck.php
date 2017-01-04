<?php
	session_start();	

	if (isset($_SESSION['redirecturl']) && $_SESSION['redirecturl'] != "") {
		header('Location: '.$_SESSION["redirecturl"]);
		$_SESSION['redirecturl'] = "";
		exit;
	} else {		
		header('Location: http://cartabel.com/login');
		exit;
	}

?>