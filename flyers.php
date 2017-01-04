<?php

	session_start();

	require('library/config.php');
	require_once ($_SERVER['DOCUMENT_ROOT'].'/wp-config.php');
	global $current_user;
	get_currentuserinfo();
	if ( !is_user_logged_in() )
	{
		$_SESSION['redirecturl'] = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        header('Location: http://cartabel.com/login');
        exit;
	}
	$currentuser = $current_user->user_login;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="Materialize is a modern responsive CSS framework based on Material Design by Google. ">
    <title>My Flyers</title>
    <!-- Favicons-->
    <link rel="apple-touch-icon-precomposed" href="images/favicon/apple-touch-icon-152x152.png">
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <meta name="msapplication-TileImage" content="images/favicon/mstile-144x144.png">
    <link rel="icon" href="images/favicon/favicon-32x32.png" sizes="32x32">
    <!--  Android 5 Chrome Color-->
    <meta name="theme-color" content="#EE6E73">
    <!-- CSS-->
    <link href="css/prism.css" rel="stylesheet">
     <link href="css/custom.css" rel="stylesheet">
    <link href="css/ghpages-materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="http://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	
	<style>
	#previewimg{
		position:absolute;
		border:3px solid #ccc;
		background:#333;
		padding:5px;
		display:none;
		color:#fff;
		box-shadow: 4px 4px 3px rgba(103, 115, 130, 1);
	}

	body {
		min-height: 700px;
	}
	</style>
  </head>
  <body>
    <header>
      <nav class="top-nav" style="background-color:#43d2f9;">
        <div class="container">
          <div class="nav-wrapper">
          	<a class="page-title">Flyer </a>
          	<a class="btn waves-effect waves-light" id="newtemplates" href="templates.php">New Templates</a>
          </div>
        </div>
      </nav>
      <div class="container"><a href="#" data-activates="nav-mobile" class="button-collapse top-nav full hide-on-large-only"><i class="material-icons">menu</i></a></div>
      <ul id="nav-mobile" class="side-nav fixed">
        <li class="search">
          <div class="search-wrapper card">
            <input id="search"><i class="material-icons">search</i>
            <div class="search-results"></div>
          </div>
        </li>
        <li class="logo">
			<a id="logo-container" href="#" class="brand-logo"></a>
		</li>
        <li class="bold"><a href="about.html" class="waves-effect waves-teal"><h6>Template types</h6></a></li>
        <li class="bold"><a href="#" class="waves-effect waves-teal">Custom size</a></li>
		<li class="bold"><a href="#" class="waves-effect waves-teal">Face book</a></li>
		<li class="bold"><a href="#" class="waves-effect waves-teal">Twitter</a></li>
		<li class="bold"><a href="#" class="waves-effect waves-teal">Youtube Channels</a></li>
        <li class="no-padding">
          <ul class="collapsible collapsible-accordion">
            <li class="bold"><a class="collapsible-header  waves-effect waves-teal">Prints</a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="#">All</a></li>
                  <li><a href="#">Business Card</a></li>
                  <li><a href="#">Coupon</a></li>
                  <li><a href="#">Flyer A6</a></li>
                  <li><a href="#">Post Card</a></li>
                  <li><a href="#">Rank Card</a></li>
                  <li><a href="#">Tickets</a></li>
                </ul>
              </div>
            </li>
            <li class="bold"><a class="collapsible-header  waves-effect waves-teal">Components</a>
              <div class="collapsible-body">
                <ul>
                  <li><a href="badges.html">Badges</a></li>
                  <li><a href="buttons.html">Buttons</a></li>
                  <li><a href="breadcrumbs.html">Breadcrumbs</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li class="bold"><a href="http://materializecss.com/mobile.html" class="waves-effect waves-teal">Mobile</a></li>
        <li class="bold"><a href="showcase.html" class="waves-effect waves-teal">Showcase</a></li>
      </ul>
    </header>
    <main>
	<div class="container">
		<div class="row">
			<div class="col s12 m9 l12">
				<div id="options" class="section scrollspy">
					<table class="striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Created</th>
								<th>Modified</th>
							</tr>
						</thead>
						<tbody>
							<?php 
								$query = "SELECT * FROM user_templates";		
								$runQuery = mysql_query($query);
								if(mysqli_num_rows($runQuery) > 0)
								{
								while($row = mysqli_fetch_array($runQuery, MYSQLI_ASSOC))
								{
								$images = str_replace('templates/','' ,$row['canvas_thumbnail']);
							?>
								<tr>
								   <td>
									  <b><?php echo $row['template_name']; ?></b>
									  <span class="actions">
										  <a href="index.php?tempid=<?php echo $row['template_id']; ?>&productid=<?php echo $row['product_id']; ?>" class="button-flyer-edit" data-url=""> Edit </a>
										  |
										  <a href="http://cartabel.com/newdesign/editor/<?php echo $row['canvas_thumbnail']; ?>" class="previewimg"> Preview </a>
										  |
										  <a href="download.php?filename=<?php echo $images; ?>" class="button-flyer-download" target="_blank">	Download </a>							  
										  |
										  <a href="http://cartabel.com/newdesign/editor/flyer.php?flyerid=<?php echo $row['template_id']; ?>" target="_blank" class="button-share"> Share </a>
										  |
										  <a id="<?php echo $row['template_id']; ?>" class="duplicateflyer"> Duplicate </a>
										  |
										  <a id="<?php echo $row['template_id']; ?>" class="button-delete text-danger deleteflyer"> Delete </a>
									  </span>
								   </td>
								   <td><?php echo $row['created_date']; ?></td>
								   <td><?php echo $row['modified_date']; ?></td>
								</tr>
							<?php 
								}
								}
							?>		
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
    </main>   
    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="js/prism.js"></script>
    <script src="js/materialize.js"></script>
	<script src="js/init.js"></script>
	<script src="js/application.js"></script>
	<script type="text/javascript">
		var flyerIdToDel = '';
		$(document).on("click", ".deleteflyer", function() {
			  flyerIdToDel = $(this).attr('id');
			  flyerdel();
		});
		function flyerdel() {
			var tempflyer = flyerIdToDel;

			if (tempflyer != '') {
				$.post("actions/deleteflyer.php", {
					"id": tempflyer
				}, function(data) {
					location.reload();
				});
			} else {
			}
		}
		$(document).on("click", ".duplicateflyer", function() {
			var dupflyer = $(this).attr('id');
			if (dupflyer != '') {
				$.post("actions/dupflyers.php", {
					"id": dupflyer
				}, function(data) {
					location.reload();
				});
			} else {
			}
		});
		
		$(document).ready(function(){
			imagePreview();
		});
		$('a.previewimg').click(function(){return false;}).click();
		// Configuration of the x and y offsets
		this.imagePreview = function(){	
				xOffset = -20;
				yOffset = 40;		
				
			$("a.previewimg").hover(function(e){
				this.t = this.title;
				this.title = "";	
				 var c = (this.t != "") ? "<br/>" + this.t : "";
				 $("body").append("<p id='previewimg'><img src='"+ this.href +"' alt='Image preview' style='max-width:400px; max-height:400px;'/>"+ c +"</p>");								 
				 $("#previewimg")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("slow");
			},
			
			function(){
				this.title = this.t;
				$("#previewimg").remove();

			});	
			
			$("a.previewimg").mousemove(function(e){
				$("#previewimg")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px");
			});			
		};
		
	</script>
  </body>
</html>