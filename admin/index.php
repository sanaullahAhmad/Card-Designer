<?php
    require("library/config.php");
   /* session_start();
		if (!isset($_SESSION['pass'])) {
			header('Location: login.php');
			exit;
		}*/

$results = mysqli_query($conn, "SELECT COUNT(*) FROM adminuploads");
$get_total_rows = mysqli_fetch_array( $results, MYSQLI_NUM); //total records

//break total records into pages
$item_per_page=10;
$pages = ceil($get_total_rows[0]/$item_per_page);	

?>
<!DOCTYPE html>
<style type="text/css"> 
  div {
    -webkit-user-select: ignore;
  }
  body {
    -moz-user-focus: ignore;
    -moz-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .no-js #loader { display: none;  }
  .js #loader { display: block; position: absolute; left: 100px; top: 0; }
  .preloader {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: url(./img/loader.gif) center no-repeat #fff;
    opacity: 0.8;
  }
</style>
<html lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
      <title>Home Page</title>
      <!-- CSS  -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
      <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
      <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
      <link href="css/pagination.css" type="text/css"/>
      <!--<link href="css/bootstrap-slider.css" type="text/css" rel="stylesheet">-->
      <link href="css/spectrum.css" type="text/css" rel="stylesheet">
      <link href='http://fonts.googleapis.com/css?family=Alfa Slab One' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Droid Sans' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Cabin' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=PT Sans' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Cabin Sketch' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=PT Sans Narrow' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Bitter' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Allura' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Calligraffitti' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Crimson Text' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Bevan' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Dancing Script' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Gruppo' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Archivo Narrow' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Amatic SC' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Fjalla One' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Cinzel' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Droid Seriff' rel='stylesheet' type='text/css'>
      <link href='http://fonts.googleapis.com/css?family=Pt Seriff' rel='stylesheet' type='text/css'>
   </head>
     <style type="text/css">
   /* body {
    padding: 16px;
    }  */

    button {
        margin-right: 8px;
    }

    /* library */
    .dialog-container,
    .loading-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        background: rgba(0, 0, 0, 0.4);
        z-index: 9999;
        opacity: 0;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
    }

    .dialog-container > div {
        position: relative;
        width: 90%;
        max-width: 500px;
        min-height: 25px;
        margin: 10% auto;
        z-index: 99999;
        padding: 16px 16px 0;
    }

    .dialog-button-bar {
        text-align: right;
        margin-top: 8px;
    }

    .loading-container > div {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 10% auto;
        z-index: 99999;
    }

    .loading-container > div > div {
        width: 100%;
        height: 100%;
    }
	.thumbnail > img, .thumbnail a > img{
      margin-left: 0px;
    }
  </style>

   <body>
     <div class="preloader" style='display:none;'></div>

      <!-- Canvas h/w Modal HTML -->
      <ul class='custom-menu'>
         <li data-action="selectall">Select All</li>
         <li data-action="cut">Cut</li>
         <li data-action="copy">Copy</li>
         <li data-action="paste">Paste</li>
      </ul>
      <div id="loadingpage" class="modal" data-backdrop="static" data-keyboard="false" style="background:#0170A8; opacity:1; display:block;"><i class="fa fa-cog fa-spin" style="position: absolute; top: 50%; left: 50%; margin-top: -75px; margin-left: -75px; font-size: 150px; color:#fff;"></i></div>
      <!-- /Header Starts -->
      <nav class="light-blue lighten-1 header" role="navigation">
         <div class="nav-wrapper">
            <div class="section">
               <div class="row">
                  <div class="col s12 m6">
                     <div class="col s12 m1 h-right">
                        <a id="logo-container" href="#" class="brand-logo">Logo</a>
                     </div>
                     <div class="col s12 m5 h-right">
                        <a class='dropdown-button btn' href='#' data-activates='dropdown6'><i class="material-icons">folder</i>File<span class="caret" style='border-top:0px;'>▼</span></a>
                        <!-- Dropdown Structure -->
                        <ul id='dropdown6' class='dropdown-content'>
                           <li><a onClick="javascript:savetemplate()" href="#">Save</a></li>
                           <li><a onClick="javascript:saveastemplate()" href="#">Save As</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col s12 m6 h-right">
                     <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="undo">replay</i></a>
                     <a class="btn-floating waves-effect waves-light btn-rotate"><i class="material-icons" id="redo">refresh</i></a> 
                     <!-- Dropdown Trigger -->
                     <a class='dropdown-button btn' href='#' data-activates='dropdown1'><i class="material-icons">file_download</i>Download<span class="caret" style='border-top:0px;'>▼</span></a>
                     <!-- Dropdown Structure -->
                     <ul id='dropdown1' class='dropdown-content'>
                        <li><a id="downloadAsPDF"; href="#">Save As PDF (For Print)</a></li>
                        <li><a id="downloadAsJPEG"; href="#">Save As JPEG (For Web)</a></li>
                        <li class="divider" style="background-color: #008CD3;"></li>
                        <li><a href="#!">More Options <span class="caret" style='border-top:0px;'>▼</span></a></li>
                     </ul>
					  <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="logout">open_in_new</i></a>
                  </div>
               </div>
            </div>
         </div>
      </nav>
      <!-- /Header Ends -->
      <div class="clear" /></div>
      <div class="section no-pad-bot" id="index-banner">
         <div class="row flexbox">
            <div class="col s12 m3 left-sidebar">
               <ul class="collapsible sidebar-acc" data-collapsible="accordion">
                  <li>
					<div class="collapsible-header">
					   <i class="material-icons">filter_open</i>Templates
					   <span style='float:right'>
						  <a class='dropdown-button' href='#' data-activates='tempmanipulate'><i class="material-icons">toc</i></a>
						  <ul id='tempmanipulate' class='dropdown-content'>
							 <li><a href="#" id="addTemplateCategory">New Category</a></li>
							 <li><a href="#" onClick='javascript:location.href="index.php?newtemplate";'>New Flyer</a></li>
							 <li><a href="#" id="deletetempcat">Delete Category</a></li>
						  </ul>
					   </span>
					</div>
					<div class="collapsible-body">
					   <!-- Dropdown Structure -->
					   <select id="tempcat-select" required>
						  <option value="">Select Category</option>
					   </select>
					   <ul id="template_container" style="height:300px;overflow:auto;">
					   </ul>
					</div>
                  </li>
					<li>
					   <div class="collapsible-header">
						  <i class="material-icons">text_fields</i>Text
						  <span style='float:right'>
							 <a class='dropdown-button' href='#' data-activates='textmanipulate' style='width: 10%;border-bottom:none;padding: 2px;'><i class="material-icons" style="margin-top:-6px; margin-left: 86px;">toc</i></a>          
							 <!-- Dropdown Structure -->
							 <ul id='textmanipulate' class='dropdown-content'>
								<li><a href="#" id="addTextCategory">New Category</a></li>
								<li><a href="#" id="saveText">Save from Selection</a></li>
								<li><a href="#" id="deletetextcat">Delete Category</a></li>
							 </ul>
						  </span>
					   </div>
					   <div class="collapsible-body">
						  <select id="textcat-select" required>
							 <option value="">Select Category</option>
						  </select>
						  <div id="addtextoptions" class="col-lg-12" style="text-align:center;">
							 <div id="addheading" style="font-size:24px; font-weight:900;"><a href="#" onClick="javascript:addheadingText();">Add heading</a></div>
							 <div id="addsubheading" style="font-size:16px; font-weight:bold;"><a href="#" onClick="javascript:addsubheadingText();">Add subheading</a></div>
							 <div id="addsometext" style="font-size:10px; font-weight:bold; margin:5px 0 10px 0;"><a href="#" onClick="javascript:addText();">Add some regular text</a></div>
						  </div>
						  <ul id="text_container" style="height:300px;overflow:auto;">
						  </ul>
					   </div>
					</li> 
					<li>
					   <div class="collapsible-header">
						  <i class="material-icons">filter_vintage</i>Background
						  <span style='float:right'>
							 <a class='dropdown-button' href='#' data-activates='bgmanipulate' style='width: 10%;border-bottom:none;padding: 2px;'><i class="material-icons" style="margin-top:-6px; margin-left: 35px;">toc</i></a>          
							 <!-- Dropdown Structure -->
							 <ul id='bgmanipulate' class='dropdown-content'>
								<li><a href="#" id="addBGCategory">New Category</a></li>
								<li><a href="#" id="addBackground">New Background</a></li>
								<li><a href="#" id="deleteBGCategory">Delete Category</a></li>
							 </ul>
						  </span>
					   </div>
					   <div class="collapsible-body">
						  <select id="bgcat-select" required>
							 <option value="">Select Category</option>
						  </select>
						  </br>
						  <button class="waves-effect waves-green btn"" type="button" id="bgcolorselect" style="margin-left: 35px;">Select Color</button>
						  <div class="col-lg-12 col-xs-12" style="text-align:center;">
							 <p>
								<label>Background Scale</label>
								<input type="range" min="25" max="100" value="100" id="img-width">
							 </p>
						  </div>
						  <ul id="background_container" style="height:300px;overflow:auto;">
						  </ul>
					   </div>
					</li> 
					<li>
					   <div class="collapsible-header">
						  <i class="material-icons">explore</i>Elements
						  <span style='float:right'>
						  <a class='dropdown-button' href='#' data-activates='elementmanipulate' style='width: 10%;border-bottom:none;padding: 2px;'><i class="material-icons" style="margin-top:-6px; margin-left: 52px;">toc</i></a>          
						  <!-- Dropdown Structure -->
						  <ul id='elementmanipulate' class='dropdown-content'>
							 <li><a href="#" id="addCategory">New Category</a></li>
							 <li><a href="#" id="addElement">New Element</a></li>
							 <li><a href="#" id="saveElement">Save from Selection</a></li>
							 <li><a href="#" id="deleteCategory">Delete Category</a></li>
						  </ul>
					   </div>
					   <div class="collapsible-body">
						  <select id="cat-select" required>
							 <option value="">Select Category</option>
						  </select>
						  <ul id="catimage_container" style="height:300px;overflow:auto;">
						  </ul>
					   </div>
					</li>
					<li>
					   <div class="collapsible-header"><i class="material-icons">image</i>Upload Images</div>
					   <div class="collapsible-body">
						  <br>
						  <a href="javascript:void(0);" id="upload_image" class="waves-effect waves-light btn modal-trigger" href="#Upload image" style="margin-left:35px;">Upload image</a>
					   </div>
					</li>
					<li>
					   <div class="collapsible-header"><i class="material-icons">help</i>Help</div>
					   <div class="collapsible-body">
						  <p>Lorem ipsum dolor sit amet.</p>
					   </div>
					</li>
               </ul>
            </div>
			  <!-- Modal Structure -->
				  <div id="modal3" class="modal" data-backdrop="static" data-keyboard="false" style="background:#0170A8; opacity:1; display:block;">
					<div class="modal-content" style="position: absolute; top: 50%; left: 50%; margin-top: -75px; margin-left: -75px; font-size: 150px; color:#fff;">
					  <div class="preloader-wrapper small active">
						<div class="spinner-layer spinner-white-only">
						  <div class="circle-clipper left">
							<div class="circle"></div>
						  </div><div class="gap-patch">
							<div class="circle"></div>
						  </div><div class="circle-clipper right">
							<div class="circle"></div>
						  </div>
						</div>
					  </div>
					</div>
				  </div>

            <div class="col s12 m8" style='background:darkgray;'>
               <div class="canvas-area" align='center'>
                  <div class="tab-content" id='canvasbox-tab' style='text-align: -webkit-center; display: inline-block;' align="center">
                     <span id='infotext' style='font-size: 10px; opacity: 0.8; position: relative; left: 0px; top: 0px; z-index: 1000;'></span>
                     <div id='canvaspages' tabindex="0" style='outline:none;'>
                        <div class="page" id='page0'>
                        </div>
                     </div>
                     <!--
                        <div id='divcanvas0' class="divcanvas" onClick='javascript:selectCanvas(this.id);'>
                        </div>
                        -->
                     <div style="display:none; float:right; margin-top: -240px; margin-right: 112px; color:#ffffff;">
                        <i id='duplicatecanvas' class="fa fa-files-o fa-lg duplicatecanvas" style='z-index:1000; cursor:pointer; color:#ffffff;'></i></br></br>
                        <i id='deletecanvas' class="fa fa-trash-o fa-lg deletecanvas" style='z-index:1000; cursor:pointer; color:#ffffff;'></i>
                     </div>
                     <div style="display:none;">
                        <canvas id="outputcanvas" width="750" height="600" class="canvas"></canvas>
                     </div>
                     <div style="display:none;">
                        <canvas id="tempcanvas" width="100" height="100" class="canvas"></canvas>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col s12 m2 right-sidebar">
               <div class="sections more-options">
                  <h5>Font Family:</h5>
                  <!-- Dropdown Trigger -->
                  <a class='dropdown-button btn' href='#' data-activates='dropdown4'>Arial<span class="caret" style='border-top:0px;'>▼</span></a>
                  <!-- Dropdown Structure -->
                  <ul id='dropdown4' class='dropdown-content'>
                     <li><a href="javascript:void(0);"><font face="Alfa Slab One" size="4">Alfa Slab One</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Droid Sans" size="4">Droid Sans</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Cabin" size="4">Cabin</font></a></li>
                     <li><a href="javascript:void(0);"><font face="PT Sans" size="4">PT Sans</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Cabin Sketch" size="4">Cabin Sketch</font></a></li>
                     <li><a href="javascript:void(0);"><font face="PT Sans Narrow" size="4">PT Sans Narrow</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Bitter" size="4">Bitter</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Allura" size="4">Allura</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Alex Brush" size="4">Alex Brush</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Calligraffitti" size="4">Calligraffitti</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Crimson Text" size="4">Crimson Text</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Open Sans" size="4">Open Sans</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Bevan" size="4">Bevan</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Dancing Script" size="4">Dancing Script</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Comfortaa" size="4">Comfortaa</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Gruppo" size="4">Gruppo</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Archivo Narrow" size="4">Archivo Narrow</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Amatic SC" size="4">Amatic SC</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Fjalla One" size="4">Fjalla One</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Cinzel" size="4">Cinzel</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Oswald" size="4">Oswald</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Montserrat" size="4">Montserrat</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Droid Seriff" size="4">Droid Seriff</font></a></li>
                     <li><a href="javascript:void(0);"><font face="Pt Seriff" size="4">Pt Seriff</font></a></li>
                  </ul>
               </div>
               <div class="sections more-options">
                  <h5>Font Size:</h5>
				  <select id='fontsize'>
				     <option value="8"><a href="javascript:void(0);">8px</a></option>
                     <option value="10"><a href="javascript:void(0);">10px</a></option>
                     <option value="12"><a href="javascript:void(0);">12px</a></option>
                     <option value="14"><a href="javascript:void(0);">14px</a></option>
                     <option value="18"><a href="javascript:void(0);">18px</a></option>
                     <option value="24"><a href="javascript:void(0);">24px</a></option>
                     <option value="36"><a href="javascript:void(0);">36px</a></option>
				  </select>
               </div>
               <div class="sections sec-align">
                  <h5>Alignment: </h5>
                  <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="objectalignleft">format_align_left</i></a>
                  <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="objectaligncenter">format_align_center</i></a>
                  <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="objectalignright">format_align_right</i></a>
               </div>
               <div class="sections sec-clrpicker sec-align">
                  <div class="row">
                     <div class="col s12 m6">
                        <h5>Color Picker:</h5>
                        <a class="btn-floating waves-effect waves-light btn-color"><i class="material-icons" id="colorSelector">format_color_text</i></a>
                     </div>
                     <div class="col s12 m6">
                        <h5>Delet Object:</h5>
                        <a class="btn-floating waves-effect waves-light obj-delete"><i class="material-icons" id="deleteitem">delete_forever</i></a>
                     </div>
                  </div>
               </div>
               <div class="sections more-options">
                  <h5>More Options:</h5>
                  <!-- Dropdown Trigger -->
                  <a class='dropdown-button btn' href='#' data-activates='dropdown3'>Clone Object<span class="caret" style='border-top:0px;'>▼</span></a>
                  <!-- Dropdown Structure -->
                  <ul id='dropdown3' class='dropdown-content'>
                     <li><a href="javascript:void(0);" id="sendbackward"><i class="material-icons">skip_previous</i>Send Backward</a></li>
                     <li><a href="javascript:void(0);" id="clone"><i class="material-icons">question_answer</i>Clone Object</a></li>
                     <li><a href="javascript:void(0);" id="bringforward"><i class="material-icons">skip_next</i>Bring Forward</a></li>
                     <li><a href="javascript:void(0);" id="objectfliphorizontal"><i class="material-icons">swap_horiz</i>Flip Horizontally</a></li>
                     <li><a href="javascript:void(0);" id="objectflipvertical"><i class="material-icons">swap_vert</i>Flip Vertically</a></li>
                     <li><a href="javascript:void(0);" id="objectlock"><i class="material-icons">lock</i>Lock Object</a></li>
                     <li><a href="javascript:void(0);" id="objectopacity"><i class="material-icons">opacity</i>Opacity</a></li>
                  </ul>
               </div>
               <div class="sections sec-clrpicker sec-align">
                  <div class="row">
                     <div class="col s12 m6">
                        <h5>Zoom in:</h5>
                        <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="btnZoomIn">zoom_in</i></a>
                     </div>
                     <div class="col s12 m6">
                        <h5>Zoom Out:</h5>
                        <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="btnZoomOut">zoom_out</i></a>
                     </div>
                  </div>
               </div>
               <div class="sections sec-align">
                  <h5>ImageCropOptions: </h5>
                  <span id="imagecropOptions">
                  <a href="javascript:zoomBy(-5,0,0);" class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_back</i></a>
                  <a href="javascript:zoomBy(5,0,0);" class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_forward</i></a>
                  <a href="javascript:zoomBy(0,-5,0);" class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_downward</i></a>
                  <a href="javascript:zoomBy(0,5,0);" class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_upward</i></a>
               </div>
            </div>
         </div>
      </div>
      </div>

	  <!-- Modal Structure -->
	  <div id="savetemplate_modal" class="modal">
		<div class="modal-content">
	       <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
			<h4>Save Flyer</h4>
			<form class="col s12" id="savetemplateform">
			  <div class="row">
				<div class="input-field col s6">
					<select id="template_category" required>
					  <option value="">Select Category</option>
					</select>
					<label>Select Template Category</label>
				</div>
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="templatename" type="text" class="validate">
				  <label for="templatename">Flyer Name</label>
				</div>
			  </div>
			<div class="modal-footer">
              <button class="modal-action modal-close waves-effect waves-green btn" type="submit">Submit</button>
			</div>
          </form>
		</div>
	  </div>
	  
	 <!-- Save Text Modal HTML -->
	  <div id="savetext_modal" class="modal">
		<div class="modal-content">
          <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
			<h4>Save Flyer</h4>
			  <div class="row">
				<div class="input-field col s6">
					<select id="text_category" required>
					  <option value="">Select Category</option>
					</select>
					<label>Select Category</label>
				</div>
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="textname" type="text" class="validate">
				  <label for="textname">Text Name :</label>
				</div>
			  </div>
			<div class="modal-footer">
              <button class="modal-action modal-close waves-effect waves-green btn" type="submit" onClick="javascript:savetextfromselection();">Submit</button>
			</div>
		</div>
	  </div>
	  	
      <!-- Modal Structure -->
      <div id="canvaswh_modal" class="modal">
        <div class="modal-content">
        <h4>Canvas Width / Height</h4>
        <form class="col s12" id="canvaswhForm">
            <div class="row">
              <div class="input-field col s6">
                <input id="loadCanvasWid" type="text" class="validate" required="" aria-required="true" value="5">
                <label for="loadCanvasWid">Canvas Width(in inches)</label>
              </div>
              <div class="input-field col s6">
                <input id="loadCanvasHei" type="text" class="validate" required="" aria-required="true" value="7">
                <label for="loadCanvasHei">Canvas Width(in inches)</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="numOfcanvasrows" type="text" class="validate" required="" aria-required="true" value="1"> 
                <label for="numOfcanvasrows">Number of Canvas rows</label>
              </div>
              <div class="input-field col s6">
                <input id="numOfcanvascols" type="text" class="validate"  required="" aria-required="true" value="1">
                <label for="numOfcanvascols">Number of Canvas columns</label>
              </div>
            </div>
            <div class="modal-footer">
              <button class="modal-action modal-close waves-effect waves-green btn" type="submit">Submit</button>
          </div>
          </form>
        </div>
      </div>

      <!-- Add Category Modal HTML -->
      <div id="AddTemplatecategoryModal" class="modal">
        <div class="modal-content">
         <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Add Category</h4>
        <form class="col s12" id="addtemplatecategoryform">
            <div class="row">
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="templatecategory" type="text" class="validate" required="" aria-required="true" >
				  <label for="templatecategory" data-error="wrong" data-success="right">Category</label>
				</div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="modal-action modal-close waves-effect waves-green btn">Cancel</button>&nbsp;&nbsp;
              <button class="btn waves-effect modal-close waves-green" type="submit">Submit</button>
    		</div>
          </form>
        </div>
      </div>
	  
      <!-- Add Element Category Modal HTML -->
      <div id="Addcategoryodal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Add Category</h4>
        <form class="col s12" id="addcategoryform">
            <div class="row">
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="category" type="text" class="validate" required="" aria-required="true" >
				  <label for="category" data-error="wrong" data-success="right">Category</label>
				</div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="modal-action modal-close waves-effect waves-green btn">Cancel</button>&nbsp;&nbsp;
              <button class="btn waves-effect modal-close waves-green" type="submit">Add</button>
    		</div>
          </form>
        </div>
      </div>
	
	<!-- Delete Template Category Modal HTML -->
	<div id="Del_templatecatmodal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Delete Category</h4>
			<div class="row">
				<div class="input-field col s6">
				  <span>Are you sure you want to delete the category?</span>
				</div>
			</div>
			<div class="modal-footer">
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn" onClick="javascript:proceed_tempcatdelete();">Yes</button>&nbsp;&nbsp;
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn">No</button>
			</div>
        </div>
      </div>
	  
	  <!-- Add Text Category Modal HTML -->
      <div id="AddTextcategoryModal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Add Text Category</h4>
        <form class="col s12" id="addtextcategoryform">
            <div class="row">
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="textcategory" type="text" class="validate" required="" aria-required="true" >
				  <label for="textcategory" data-error="wrong" data-success="right">Category</label>
				</div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="modal-action modal-close waves-effect waves-green btn">Cancel</button>&nbsp;&nbsp;
              <button class="btn waves-effect modal-close waves-green" type="submit">Add</button>
    		</div>
          </form>
        </div>
      </div>
	
	  <!-- Add BG-Category Modal HTML -->
      <div id="AddBGcategoryodal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Add Background Category</h4>
        <form class="col s12" id="addbgcategoryform">
            <div class="row">
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="bgcategory" type="text" class="validate" required="" aria-required="true" >
				  <label for="bgcategory" data-error="wrong" data-success="right">Category</label>
				</div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="modal-action modal-close waves-effect waves-green btn">Cancel</button>&nbsp;&nbsp;
              <button class="btn waves-effect modal-close waves-green" type="submit">Add</button>
    		</div>
          </form>
        </div>
      </div>

	  <!-- Add BG-Category Modal HTML -->
      <div id="AddbackgroundModal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Add Background</h4>
        <form class="col s12" id="addbackgroundform">
            <div class="row">
				<div class="input-field col s6">
					<select id="bg_category" required>
					  <option value="">Select Category</option>
					</select>
					<label>Select Category</label>
				</div>
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="bg_name" type="text" class="validate" required="" aria-required="true">
				  <label for="bg_name" data-error="wrong" data-success="right">Background Name</label>
				</div>
				<div class="input-field col s6">
				   <input id="bg_img" type="file" onchange="readBGIMG(this);">
				</div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="modal-action modal-close waves-effect waves-green btn">Cancel</button>&nbsp;&nbsp;
              <button class="btn waves-effect modal-close waves-green" type="submit">Add</button>
    		</div>
          </form>
        </div>
      </div>

	 <!-- Add Element Modal HTML -->
      <div id="AddelementModal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Add Element</h4>
        <form class="col s12" id="addelementform">
            <div class="row">
				<div class="input-field col s6">
					<select id="element_category" required>
					  <option value="">Select Category</option>
					</select>
					<label>Select Category</label>
				</div>
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="element_name" type="text" class="validate" required="" aria-required="true" >
				  <label for="element_name" data-error="wrong" data-success="right">Element Name</label>
				</div>
				<div class="input-field col s6">
				   <input id="element_img" type="file" onchange="readIMG(this);">
				</div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="modal-action modal-close waves-effect waves-green btn">Cancel</button>&nbsp;&nbsp;
              <button class="btn waves-effect modal-close waves-green" type="submit">Add</button>
    		</div>
          </form>
        </div>
      </div>

  	 <!-- Save Element Modal HTML -->
      <div id="saveelement_modal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Save Element</h4>
            <div class="row">
				<div class="input-field col s6">
					<select id="elmt_category" required>
					  <option value="">Select Category</option>
					</select>
					<label>Select Category</label>
				</div>
				<div class="input-field col s6">
				  <input placeholder="Enter Name" id="elmtname" type="text" class="validate" required="" aria-required="true" >
				  <label for="elmtname" data-error="wrong" data-success="right">Element Name</label>
				</div>
            </div>
            <div class="modal-footer">
              <button class="btn waves-effect modal-close waves-green" type="submit"  onClick="javascript:saveelementsfromselection();">Submit</button>
    		</div>
        </div>
      </div>

	<!-- Delete Text Category Modal HTML -->
	<div id="Del_textcatmodal" class="modal">
        <div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
        <h4>Delete Category</h4>
			<div class="row">
				<div class="input-field col s6">
				  <span>Are you sure you want to delete the category?</span>
				</div>
			</div>
			<div class="modal-footer">
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn" onClick="javascript:proceed_textcatdelete();">Yes</button>&nbsp;&nbsp;
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn">No</button>
			</div>
        </div>
      </div>

	<!-- Modal Structure -->
	 <div id="AdduploadimageModal" class="modal">
	  <div class="modal-content">
       <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
		<h5>Add image</h5>
		<div class="row">
		  <div class="col-lg-5 imageBG-upload">
			  <form id="upload" action="uploadimage.php" method="POST" enctype="multipart/form-data">
			   <input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="2000000" />
				<label for="fileselect" class="images-button btn btn-block btn-lg btn-primary"><i class="fa fa-cloud-upload"></i> Upload image</label>                                             
			   <input id="fileselect" type="file" name="fileselect[]" />
			  </form>
		   <div id="progress"></div>
		</div>
		<div id="image_container" style="position: relative;height:450px;"></div>
		<div class="pagination"></div>
	  </div>
	 </div>
	</div>

	<!-- Delete Bg Category Modal HTML -->
	<div id="Del_bgcatmodal" class="modal">
		<div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
		<h4>Delete Category</h4>
			<div class="row">
				<div class="input-field col s6">
				  <span>Are you sure you want to delete the category?</span>
				</div>
			</div>
			<div class="modal-footer">
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn" onClick="javascript:proceed_Bgcatdelete();">Yes</button>&nbsp;&nbsp;
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn">No</button>
			</div>
		</div>
	  </div>

	<!-- Delete Element Category Modal HTML -->
	<div id="Del_catmodal" class="modal">
		<div class="modal-content">
        <a class="btn-floating waves-effect waves-light modal-close"  style="float:right;"><i class="material-icons">close</i></a>
		<h4>Delete Category</h4>
			<div class="row">
				<div class="input-field col s6">
				  <span>Are you sure you want to delete the category?</span>
				</div>
			</div>
			<div class="modal-footer">
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn" onClick="javascript:proceed_catdelete();">Yes</button>&nbsp;&nbsp;
			  <button type="button" class="modal-action modal-close waves-effect waves-green btn">No</button>
			</div>
		</div>
	  </div>

	  
      <footer class="page-footer">
         <div class="footer-copyright">
            <div class="container">
               &copy;2016 Company Name. All Right Reserved.
            </div>
         </div>
      </footer>
<!--  Scripts-->
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js" type="text/javascript"></script>
<!--<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>-->
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.2/isotope.pkgd.min.js"></script>
<script src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script><script src="js/pagination.js"></script>
<script src="js/pagination.js"></script>
<!--<script type="text/javascript" src="js/bootstrap-slider.js"></script>-->
<script type="text/javascript" src="js/fabric1.6.js"></script>
<script type="text/javascript" src="js/aligning_guidelines.js"></script>
<script type="text/javascript" src="js/centering_guidelines.js"></script>
<script type="text/javascript" src="js/bootstrap-slider.js"></script>
<script src="js/jquery.validate.min.js"></script>
<!--<script src="js/jquery-validate.bootstrap-tooltip.js"></script>-->
<script src="js/filedrag.js" type="text/javascript"></script>
<script src="js/materialize.js"></script>
<script type="text/javascript" src="js/spectrum.js"></script>
<!--<script src="js/init.js"></script>  -->
<script type="text/javascript">
$(".preloader").show();
$(".preloader").fadeIn("slow");

var tempcanvas = new fabric.Canvas('tempcanvas');
var canvas = new fabric.Canvas('canvas0');
canvas.rotationCursor = 'url("img/rotatecursor2.png") 10 10, crosshair';
canvas.backgroundColor = '#ffffff';
var selectedFont = 'Tinos';
var fillColor = 'Black';
</script>
<script src="js/functions.js" type="text/javascript"></script>
<script src="js/canvasevents.js" type="text/javascript"></script> 
<script type="text/javascript">
$(window).load(function() {
    $(".preloader").fadeOut("slow");
	$('select').material_select();
    $('#canvaswh_modal').openModal({dismissible: false});
    if (window.location.href.indexOf('?newtemplate') != -1) {
        $("#canvaswh_modal").modal('show');
    }
    $('.deletecanvas').css('display', 'none');
	
	initDragDropables();
});
 
var Istempselected = false;
var Iscatselected = false;
var IsBgselected = false;
var IsTextselected = false;
$(document).ready(function() {
    setTimeout(function(){ getTemplates(''); }, 250);
    setTimeout(function(){ gettempcategory(); }, 500);
    setTimeout(function(){ gettempcatmat(); }, 500);
    setTimeout(function(){ getTemplatesName(); }, 750);
    setTimeout(function(){ getTexts(''); }, 250);
    setTimeout(function(){ getTextcategory(); }, 2000);
    setTimeout(function(){ getBgcategory(); }, 1500);
    setTimeout(function(){ getbgimages(''); }, 1750);
    setTimeout(function(){ getcategory(); }, 1000);
    setTimeout(function(){ getcatimages(''); }, 1250);
	setTimeout(function(){ getuploadimages(); }, 3000);
	$('#tempcat-select').on('change',  (function() {
		Istempselected = true;
        $('#template_container').empty();
        getTemplates($(this).val());
	}));
	$('#textcat-select').on('change',  (function() {
		Istextselected = true;
		$('#text_container').empty();
		getTexts($(this).val());
	}));
	$('#bgcat-select').on('change',  (function() {
		IsBgselected = true;
		$('#background_container').empty();
		getbgimages($(this).val());
	}));
	$('#cat-select').on('change',  (function() {
		Iscatselected = true;
		$('#catimage_container').empty();
		getcatimages($(this).val());
	}));

	$(document).on("click", ".catImage", function() {
    var imagepath = $(this).data('imgsrc');
    addSVGToCanvas(imagepath);
    return false;
	});
	$(document).on("click", ".bgImage", function() {
		var bgimagepath = $(this).data('imgsrc');
		setCanvasBg(canvas, bgimagepath);
		return false;
	});
	$(document).on("click", ".addImage", function() {
    var imgpath = $(this).data('imgsrc');
    addImage(imgpath);
    return false;
	});
	$('#logout').on('click',  (function() {
			<?php //session_destroy(); ?>
		window.location.href = 'login.php';
	}));
});
<!-- canvas Width and height Form Validation -->
$(document).ready(function() {
    $('#canvaswhForm').validate({
        rules: {
            loadCanvasWid: {
                required: true,
                number: true
            },
            loadCanvasHei: {
                required: true,
                number: true
            },
            numOfcanvasrows: {
                required: true,
                number: true
            },
            numOfcanvascols: {
                required: true,
                number: true
            },
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid')
                .closest('.form-group').removeClass('has-error').addClass('has-success');
            element.remove('label');
        },
        submitHandler: function(form) { // <- only fires when form is valid
            addCanvasToPage();
            setCanvasSize();
        }
    });
});

function handleContextmenu(e) {
    // prevents the usual context from popping up
    e.preventDefault();
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
        // In the right position (the mouse)
    css({
        top: e.pageY + "px",
        left: e.pageX + "px"
    });
}
//Disable context menu
$("#canvasbox-tab").bind('contextmenu', function(e) {
    handleContextmenu(e);
    return false;
});
// If the menu element is clicked
$(".custom-menu li").click(function() {
    // This is the triggered action name
    switch ($(this).attr("data-action")) {
        // A case for each action. Your actions here
        case "selectall":selectallobjs();
            break;
        case "copy":
            copyobjs();
            break;
        case "cut":
            cutobjs();
            break;
        case "paste":
            pasteobjs();
            break;
    }
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
});
$("#colorSelector").spectrum({
    showAlpha: false,
    showPalette: true,
    //maxSelectionSize: 2,
    preferredFormat: "hex",
    hideAfterPaletteSelect: true,
    showInput: true,
    move: function (color) {
      var colorVal = color.toHexString(); // #ff0000
      changeObjectColor(colorVal);
      $('#colorSelector').css('backgroundColor', colorVal);
    },
});
$("#bgcolorselect").spectrum({
      //flat: true,
      hideAfterPaletteSelect: true,
    move: function (color) {
        var colorVal = color.toHexString(); // #ff0000
        deleteCanvasBg(canvas);
        setCanvasBg(canvas, false, colorVal);
    },
});
var tempIdToDel = '';
$(document).on("click", ".deleteTemp", function() {
    tempIdToDel = $(this).attr('id');
	proceed_tempDelete();
});
function proceed_tempDelete() {
    var selectedTemp = tempIdToDel;
    if (selectedTemp != '') {
        $.post("actions/deleteTemplate.php", {
            "templateid": selectedTemp
        }, function(data) {
            $('#template_container').empty();
            getTemplates();
        });
    } else {
    }
}
var bgIdToDel = '';
$(document).on("click", ".deleteBg", function() {
    bgIdToDel = $(this).attr('id');
	proceed_bgDelete();
});
function proceed_bgDelete() {
    var selectedbg = bgIdToDel;
    if (selectedbg != '') {
        $.post("actions/deleteBackground.php", {
            "bgid": selectedbg
        }, function(data) {
            $('#background_container').empty();
            getBgcategory();
            getbgimages('');
        });
    } else {
    }
}
var uploadIdToDel = '';
$(document).on("click", ".deleteUploadImg", function() {
    uploadIdToDel = $(this).attr('id');
	proceed_uploadimgDelete();
});
function proceed_uploadimgDelete() {
    var selectedimg = uploadIdToDel;
    if (selectedimg != '') {
        $.post("actions/deleteimg.php", {
            "imgid": selectedimg
        }, function(data) {
            $('#image_container').empty();
            getuploadimages();
        });
    } else {
    }
}

var uploadimagesdata;
function getuploadimages() {

    var $grid = $('#image_container');
    $grid.empty();

    $grid.isotope({
        itemSelector: '.thumb',
        masonry: {
            columnWidth: '.thumb'
        }
    });

    $.ajax({
        type: 'GET',
        url: 'get_uploadimages.php',
        success: function(data) {
            if (data != '') {
                uploadimagesdata = $(data);
                var data = $(data);

                $grid.isotope()
                    .append(data)
                    .isotope('appended', data)
                    .isotope('layout');

                $grid.imagesLoaded().progress(function() {
                    $grid.isotope('layout');
                    $grid.isotope('reloadItems');
                });                
            }
        }
    });
}
$("#upload_image").click(function() {
$('#AdduploadimageModal').openModal();                        
});

$('#AdduploadimageModal').on('shown.bs.modal', function (e) {
      var $grid = $('#image_container');

      $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
        $grid.isotope('reloadItems');
      });
});
function addImage(imgpath) {

    var actObj = canvas.getActiveObject();
    if (isReplaceImage && actObj && actObj.type == 'cropzoomimage') {
        //replace image
        var img = new Image();
        img.onload = function() {
            var w = actObj.width * actObj.scaleX;
            var h = actObj.height * actObj.scaleY;
            actObj.setElement(img);

            scalex = w / this.width;
            scaley = h / this.height;

            actObj.scaleX = scalex;
            actObj.scaleY = scalex;

            actObj.orgSrc = img.src;
            actObj.src = img.src;

            actObj.cw = actObj.width;
            actObj.ch = actObj.height;

            $("#spinnerModal").modal('hide');
            $("#AdduploadimageModal").modal('hide');

            actObj.setCoords();
            canvas.renderAll();
        }
        img.src = imgpath;
        isReplaceImage = false;
    } else {
        fabric.util.loadImage(imgpath, function(img) {
            var object = new fabric.Cropzoomimage(img, {
                left: canvas.getWidth() / 2,
                top: canvas.getHeight() / 2,
                scaleX: canvasScale / 2,
                scaleY: canvasScale / 2
            });
            object.src = imgpath;
            canvas.add(object);
            canvas.setActiveObject(object);
            object.center();
            object.setCoords();
            setControlsVisibility(object);

            $("#spinnerModal").modal('hide');
            $("#AdduploadimageModal").modal('hide');

            canvas.renderAll();
            saveState();
        }, {
            crossOrigin: ''
        });
    }
}
$(document).ready(function() {
	$("#image_container").load("get_uploadimages.php");  //initial page number to load
	$(".pagination").bootpag({
	   total: <?php echo $pages; ?>,
	   page: 1,
	   maxVisible: 5 
	}).on("page", function(e, num){
		e.preventDefault();
		$("#image_container").load("get_uploadimages.php", {'page':num});
	});

});
	function initDragDropables() {
		$(".thumbnail img").draggable({
			revert: false,
			helper: 'clone',
			appendTo: 'body',
			containment: "#right",
			scroll: false,
			start: function() {
				$(this).data("startingScrollTop", $(this).parent().scrollTop());
			},
			drag: function(event, ui) {

				dragdataindex = $(this).data("index");
				dragdatalabel = $(this).data("label");
				dragdatasubtitle = $(this).data("subtitle");
				dragdatacontent = $(this).data("content");
				dragdatagroup = $(this).data("group");
				dragdataposition = $(this).data("position");
				dragdatacontainername = $(this).data("containername");
				dragdataconnection = $(this).data("connection");
				console.log(dragdataindex);
				if (jsonArray[dragdataindex] && jsonArray[dragdataindex].startComponent)
					dragstartcomponent = toBoolean(jsonArray[dragdataindex].startComponent);

				/*if (!dragstartcomponent && canvas.getObjects().length == 0) {
					document.getElementById("flowstatus" + selectedTab).innerHTML = "Selected component is not a start component.";
				} else {
					document.getElementById("flowstatus" + selectedTab).innerHTML = "";

					var st = parseInt($(this).data("startingScrollTop"));

					ui.position.top -= $(this).parent().scrollTop() - st;

					linkstartObject = "";
					linkendObject = "";
				}*/
			}
		});
	}
initCanvas('canvas0');
initCanvasEvents();

</script>
  </body>
</html>
