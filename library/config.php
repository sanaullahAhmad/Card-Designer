<?php
error_reporting(0);
	if(!isset($_SESSION))
	{
		@session_start();
	}

	$mysql_ip = 'localhost';
	switch(dirname(__FILE__)){
		case 'E:\xampp\htdocs\carddesigner\library';
			$mysql_user = 'root';
			$mysql_pass = '';
			$mysql_db = 'carddesigner';
			break;
		default:
			$mysql_user = 'admin_carddes';
			$mysql_pass = 'old_carddesigner';
			$mysql_db = 'admin_old_php';
			break;
	}

	$conn = mysqli_connect ($mysql_ip, $mysql_user, $mysql_pass) or die ("I cannot connect to the database because: " . mysql_error());
	mysqli_select_db ($conn, $mysql_db) or die ("I cannot select the database '$dbname' because: " . mysql_error());
	date_default_timezone_set('GMT');
$protocol = explode('/',$_SERVER['SERVER_PROTOCOL']);
$base_url = $protocol[0]."://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
?>
