# Card-Designer
Card Designer PHP project -----       this is name of  project database file, install it carddesigner (1).sql
 ----- make connection changes accrording to your database in follwing files  
https://github.com/sanaullahAhmad/Card-Designer-/blob/master/library/config.php
 ------- https://github.com/sanaullahAhmad/Card-Designer-/blob/master/admin/library/config.php


for output as pdf simple change this line 149  in pdf.php to

	$filename = $_SERVER['DOCUMENT_ROOT'] . "carddesigner/outputpdfs/" . $_POST['filename'];

where "carddesigner" is folder name in this sequence C:\xampp\htdocs\carddesigner
