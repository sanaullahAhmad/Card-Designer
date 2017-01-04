<?php
	require('library/config.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="Materialize is a modern responsive CSS framework based on Material Design by Google. ">
    <title>Flyer Designs</title>

    <!--  Android 5 Chrome Color-->
    <meta name="theme-color" content="#EE6E73">
    <!-- CSS-->
    <link href="css/prism.css" rel="stylesheet">
    <link href="css/ghpages-materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="http://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/custom.css" type="text/css" rel="stylesheet" media="screen,projection">
  </head>

<style type='text/css'>
	#index-banner {
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 8px;
		margin: 0px 20px 0px 20px;
		padding-bottom:0px;
	}

	a.button-collapse.top-nav {
		background-color:#f49636;
	}

	#newtemplates { 
		background-color: #f49636;
		margin-top: 19px;
		text-transform: none;
		border-radius: 8px;
	}
</style>
  <body>
    <header>
      <div class="container"><a href="#" data-activates="nav-mobile" class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only"><i class="material-icons">menu</i></a></div>
      <ul id="nav-mobile" class="side-nav fixed">
        <li class="search">
          <div class="search-wrapper card">
            <input id="search"><i class="material-icons">search</i>
            <div class="search-results"></div>
          </div>
        </li>
        <li class="logo"><a id="logo-container" href="#" class="brand-logo">
            </a></li>
       <li class="no-padding">
       <ul class="collapsible collapsible-accordion">
        <li class="bold"><a class="collapsible-header waves-effect waves-teal"><h6>Template types</h6></a>
         <div class="collapsible-body">
          <ul id="tempcat-select" required style="margin-top:-55px">
		   <li value="">Select Category</li>
		 </ul>
          
         </div>
        </li>
      </ul>
      </li>
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
   <div class="section" style="padding-bottom: 2px;">
      <div class="container">
         <div class="row">
            <div class="col s12 m3">
				      <h4><b>Templates</b></h4>
            </div>
            <div class="col s12 m6">
				    <a class="btn waves-effect waves-light" id="newtemplates" href="flyers.php">My Designs<i class="material-icons left">brush</i></a>
            </div>
         </div>
      </div>
   </div>


   <div class="section" id="index-banner" >
      <div class="container">

         <div class="row">
            <div class="col s12 m9">
				 
            </div>
         </div>
      </div>
   </div>

   <div class="container">
      <!--  Outer row  -->
      <div class="row">
         <div class="col s12 m12 l12">
            <!--  Material Design -->
            <div id="template_container" class="section scrollspy clearfix">
					<?php 
						$query1 = "SELECT * FROM template";
						$runQuery1 = mysqli_query($conn,$query1) or die("ERROR: " . $query1);
						if(mysqli_num_rows($runQuery1) > 0){
					
							while($row1 = mysqli_fetch_array($runQuery1, MYSQLI_ASSOC)){
								$imag = str_replace("editor/","",$row1['canvas_thumbnail']);
					?>
					<div class="col s12 l3"="<?php echo $row1['template_id']; ?>" style="padding:5px;height:270px;"> 

						  <a class="thumbnail" title="<?php echo $row1['template_name']; ?>" href='index.php?admintempid=<?php echo $row1['template_id']; ?>&proid=<?php echo $row1['product_id']; ?>' style="margin-bottom: -5px;">
							
							<img class="tempImage img-responsive" src="<?php echo $row1['canvas_thumbnail']; ?>" alt="" style="width:180px;">
							
							<span style="margin-left:-150px;color:#444;vertical-align:0px;padding-left:200px;">
								<?php echo $row1['template_name']; ?>
							</span>

						  </a>

					   </div>
					<?php 
							}
						}
					?>           
            </div>
         </div>
      </div>
   </div>
   <!-- End Container -->
</main>

<!--  Scripts-->
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="js/prism.js"></script>
<script src="js/materialize.js"></script>
<script src="js/init.js"></script> 
</body>
</html>