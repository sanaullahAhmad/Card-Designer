# Card-Designer
Card Designer PHP project -----       this is name of  project database file, 
install it https://github.com/sanaullahAhmad/Card-Designer/blob/master/carddesigner%20(1).sql

# SQL Connection
 ----- make connection changes accrording to your database in follwing files  
https://github.com/sanaullahAhmad/Card-Designer-/blob/master/library/config.php
 ------- https://github.com/sanaullahAhmad/Card-Designer-/blob/master/admin/library/config.php

# PDF out put functionality
for output as pdf simple change this line 149  in https://github.com/sanaullahAhmad/Card-Designer/blob/master/pdf.php to
and
for output as pdf In admin, change this line 149  in https://github.com/sanaullahAhmad/Card-Designer/blob/master/admin/pdf.php to

	$filename = $_SERVER['DOCUMENT_ROOT'] . "carddesigner/outputpdfs/" . $_POST['filename'];

where "carddesigner" is folder name in this sequence C:\xampp\htdocs\carddesigner

# Admin
you can to to admin side of project by this link http://localhost/carddesinger/admin
