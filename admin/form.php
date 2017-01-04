<?php
    require("library/config.php");
?>
<!DOCTYPE html>
<html class="bg-black">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
      <title> Product Form </title>
      <!-- CSS  -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
      <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
   </head>
    <body>
		<div class="container" style="float:right">
			<div class="row">
				<div class="col m6">
					<h2 class="center-align"> Product Form </h2>
					<div class="row">
						<form id="productform" action="" method="">
							<div class="body bg-gray">
								<div class="row">
									<div class="input-field col s12">
										<input id="product" name="product" type="text" required="" aria-required="true">
										<label for="product"> Product </label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="quantity" name="quantity" type="text" required="" aria-required="true">
										<label for="quantity"> Quantity </label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="binloc" name="binloc" type="text" required="" aria-required="true">
										<label for="binloc"> Binloc </label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="lot" name="lot" type="text" required="" aria-required="true">
										<label for="lot"> Lot </label>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="input-field col m12">
									<p class="right-align">
										<button class="btn btn-large waves-effect waves-light" type="submit" name="action"> RFID </button>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    </body>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
<script src="js/jquery.validate.min.js" type="text/javascript"></script>
<script src="js/validation-methods.js" type="text/javascript"></script>
<script src="js/materialize.js"></script>
</html>