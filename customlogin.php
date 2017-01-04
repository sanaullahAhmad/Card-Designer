<!DOCTYPE html>
<html class=''>
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Templett Login</title>
      <meta name="description" content="Login">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://templett.com/wp-content/plugins/woocommerce-social-login/assets/css/frontend/wc-social-login.min.css?ver=1.7.2">
      <link rel="stylesheet" href="css/style.css">
</head>
<body style="background: url(img/blurredwedding.jpg) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;">
<div id="loginmodal">
	<div class="modal-dialog" style="margin-top:100px; width:300px">
		<div class="logregcontent">
			<div class="logregbody">
				



<div class="col2-set row" id="customer_login">

	<div class="col-1" style="width:100%;">


		<h2 style="text-align:center;">Login</h2>

		<form method="post" class="login" id="login_redirect">
        
			
			<p class="form-row form-row-wide">
				<label for="username">Username or email address <span class="required">*</span></label>
				<input type="text" class="input-text" name="username" id="username" value="" />
			</p>
			<p class="form-row form-row-wide">
				<label for="password">Password <span class="required">*</span></label>
				<input class="input-text" type="password" name="password" id="password" />
			</p>

			
			<p class="form-row">
				<input type="hidden" id="_wpnonce" name="_wpnonce" value="20fe7ef050" /><input type="hidden" name="_wp_http_referer" value="/login.php" />				<input type="submit" class="btn btn-info" name="login" value="Login" />
				<input type="hidden" name="redirect" value="http://design.templett.com/index.php" />
				<label for="rememberme" class="inline">
					<input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember me				</label>
			</p>
			<p class="lost_password">
				<a href="https://templett.com/my-account/lost-password/">Lost your password?</a>
			</p>

					
		</form>


	</div>

	<div class="col-2" style="display:none;">

		<h2 style="text-align:center;">Create an Account</h2>
		<p style="text-align:center;"><a id="why-account" href="#" tabindex="0" role="button" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="With an account, you can save all your templates here and come back to edit them at any time.">Why do I need an account?</a></p>

		<form method="post" class="register">

			
	<p class="form-row form-row-first">
	<label for="reg_billing_first_name">First name <span class="required">*</span></label>
	<input type="text" class="input-text" name="billing_first_name" id="reg_billing_first_name" value="" />
	</p>

	<p class="form-row form-row-last">
	<label for="reg_billing_last_name">Last name <span class="required">*</span></label>
	<input type="text" class="input-text" name="billing_last_name" id="reg_billing_last_name" value="" />
	</p>

	
			
			<p class="form-row form-row-wide">
				<label for="reg_email">Email address <span class="required">*</span></label>
				<input type="email" class="input-text" name="email" id="reg_email" value="" />
			</p>

			
				<p class="form-row form-row-wide">
					<label for="reg_password">Password <span class="required">*</span></label>
					<input type="password" class="input-text" name="password" id="reg_password" />
				</p>

			
			<!-- Spam Trap -->
			<div style="left: -999em; position: absolute;"><label for="trap">Anti-spam</label><input type="text" name="email_2" id="trap" tabindex="-1" /></div>

						<p style="margin: 2px 6px 16px 0px;"><label for="chimpy_checkbox_signup"><input type="checkbox" id="chimpy_checkbox_signup" name="chimpy_checkbox_signup" value="1" checked="checked" /> Subscribe to our newsletter</label></p>
			<p class="form-row">
				<input type="hidden" id="_wpnonce" name="_wpnonce" value="5b4634b0a4" /><input type="hidden" name="_wp_http_referer" value="/login.php" />				<input type="submit" class="btn btn-info" name="register" value="Register" />
			</p>

			
		</form>
		<div class="wc-social-login form-row-wide" style="text-align:center;">
			<p>Sign up using your Facebook account.</p>

			<a href="https://templett.com/wc-api/auth/facebook/?return=http://design.templett.com/index.php" class="button-social-login button-social-login-facebook"><span class="si si-facebook"></span>Log in with Facebook</a> 

			<p class="loginlink"><a href="#">Already have an account? Log in.</a></p>
		</div>
	</div>
</div>

			</div>
		</div>
	</div>
</div>
</body>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
<!-- Plugins for form validations -->
<script src="js/jquery.validate.min.js"></script>
<script src="js/validation-methods.js"></script>
<script>
//Adjust login/register form based on cookie set
//if (document.cookie.indexOf('is_youprintem_user') != -1) {
//    $('#loginmodal .modal-dialog').addClass('noregister');
//    $('.col-1').css('width', '100%');
//    $('#loginmodal .col-2').hide();
//    $('#loginmodal .reglink').show();
//} else{
    $('#loginmodal .modal-dialog').addClass('nologin');
    $('.col-2').css('width', '100%');
    $('#loginmodal .col-1').hide();
    $('#loginmodal .loginlink').show();
}
// function delete_cookie(name) {
//     document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }

$('.reglink').click(function() {
    $('#loginmodal .modal-dialog').removeClass('noregister');
    $('#loginmodal .modal-dialog').addClass('nologin');
    $('.col-2').css('width', '100%');
    $('#loginmodal .col-2').show();
    $('#loginmodal .col-1').hide();
    delete_cookie('is_youprintem_user');
    $('#loginmodal .loginlink').show();
});
$('.loginlink').click(function() {
    $('#loginmodal .modal-dialog').removeClass('nologin');
    $('#loginmodal .modal-dialog').addClass('noregister');
    $('.col-1').css('width', '100%');
    $('#loginmodal .col-1').show();
    $('#loginmodal .col-2').hide();
    $('#loginmodal .reglink').show();
});
$('#why-account').popover();
$('p').has('#chimpy_checkbox_signup').css({'visibility': 'hidden', 'position': 'absolute'});
</script>
</html>
