<?php
    require("library/config.php");
	//session_start();
	if (isset($_POST['email'])) {
		 $email= $_POST['email'];
		 $passw= $_POST['pass'];
		 $sql= "SELECT * FROM adminuser WHERE email='".$email."' AND password='".$passw."' LIMIT 1";
		 $res = mysqli_query($conn,$sql);
		 if (mysqli_num_rows($res) > 0) {
           /* $_SESSION['pass'] = $_POST['pass'];
			if (isset($_SESSION['pass']) && $_SESSION['pass'] != false) {*/
				header('Location: index.php');
			//} 
		  } else {
			echo "Email and Password is wrong.";
		}
	}  
?>

<!DOCTYPE html>
<html class="bg-black">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
      <title>Login</title>
      <!-- CSS  -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
      <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
   </head>
    <body>
		<div class="container" style="float:right">
			<div class="row">
				<div class="col m6">
					<h2 class="center-align">Login</h2>
					<div class="row">
						<form id="loginform" action="login.php" method="post">
							<div class="body bg-gray">
								<div class="row">
									<div class="input-field col s12">
										<input id="email" name="email" type="email" required="" aria-required="true">
										<label for="email">Email</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="pass" name="pass" type="password" required="" aria-required="true">
										<label for="pass">Password</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<p>
											<input type="checkbox" id="remember">
											<label for="remember">Remember me</label>
										</p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="input-field col m12">
									<p class="right-align">
										<button class="btn btn-large waves-effect waves-light" type="submit" name="action">Login</button>
									</p>
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
	<script type="text/javascript">
		    $.validator.setDefaults({
				errorClass: 'invalid',
				validClass: "valid",
				errorPlacement: function (error, element) {
					$(element)
						.closest("form")
						.find("label[for='" + element.attr("id") + "']")
						.attr('data-error', error.text());
				},
			});

			$("#loginform").validate({
			});
	</script>
</html>