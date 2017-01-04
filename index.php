<?php
      session_start();

      ini_set('max_execution_time', 300);
      //300 seconds = 5 minutes
      require("library/config.php");
   /*   require_once ($_SERVER['DOCUMENT_ROOT'].'/wp-config.php');
      global $current_user;
      get_currentuserinfo();
      if ( !is_user_logged_in() )
      {
        $_SESSION['redirecturl'] = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        header('Location: http://cartabel.com/login');
        exit;
      }dd

      // for pagination purpose	  
      $results = mysql_query("SELECT COUNT(*) FROM useruploads");
      $get_total_rows = mysqli_fetch_array($results); //total records

      //break total records into pages
      $pages = ceil($get_total_rows[0]/$item_per_page);	*/
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
   <link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous"> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
   <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
   <link href="admin/css/pagination.css" type="text/css"/>
   <!--<link href="css/bootstrap-slider.css" type="text/css" rel="stylesheet">-->
   <link href="css/spectrum.css" type="text/css" rel="stylesheet" media="screen,projection"/>
   <link href='http://fonts.googleapis.com/css?family=Alfa Slab One' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Arial' rel='stylesheet' type='text/css'>
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
   <link href='http://fonts.googleapis.com/css?family=Pt Serif' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Times New Roman' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Verdana' rel='stylesheet' type='text/css'> 
   <link href='css/fonts/scriptina/stylesheet.css' rel='stylesheet' type='text/css'>
   <link href='css/fonts/isabella-script/stylesheet.css' rel='stylesheet' type='text/css'>  
   <link href="css/custom.css" type="text/css" rel="stylesheet" media="screen,projection"> 
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
              <a class='dropdown-button btn' href='#' data-activates='dropdown6'><i class="material-icons">folder</i>File<span class="caret" style='border-top:0px;'>▼</span>              </a>
              <!-- Dropdown Structure -->
              <ul id='dropdown6' class='dropdown-content'>
                <li><a id="savetemplate" href="#!">Save</a></li>
                <li><a id="saveastemplate" href="#!">Save As</a></li>
              </ul>
            </div>
                             <a href="flyers.php" style="padding-left:20px;">My Account</a>  
                             <a href="<?php echo $base_url;?>login/" style="padding-left:20px;">Logout</a>
                             <a href="<?php echo $base_url;?>cart/?add-to-cart=<?php echo $_GET['proid']; ?>" style="margin-left:15px;">Add To Cart</a>
           </div>
         
          <div class="col s12 m6 h-right">
              <!--<button class="btn btn-warning" title="Undo" type="button" id="undo"><i class="fa fa-undo"></i></button>
              <button class="btn btn-warning" title="Redo" type="button" id="redo" ><i class="fa fa-repeat"></i></button>-->
              <a class="btn-floating waves-effect waves-light"><i class="material-icons" id="undo">replay</i></a>
              <a class="btn-floating waves-effect waves-light btn-rotate"><i class="material-icons" id="redo">refresh</i></a> 
              <a class="btn-floating waves-effect waves-light"><i class="material-icons" onClick="javascript:shareFlyer();">share</i></a>
              

              <!-- Dropdown Trigger -->
              <a class='dropdown-button btn' href='#' data-activates='dropdown1'><i class="material-icons">file_download</i>Download<span class="caret" style='border-top:0px;'>▼</span></a>
              <!-- Dropdown Structure -->
                <ul id='dropdown1' class='dropdown-content'>
                
                <li><a onClick="javascript:downloadAsPDF()"; href="#">Save As PDF (For Print)</a></li>
                <li><a onClick="javascript:downloadAsJPEG()"; href="#">Save As JPEG (For Web)</a></li>
                <li class="divider" style="background-color: #008CD3;"></li>
                <li><a href="#!">More Options <span class="caret" style='border-top:0px;'>▼</span></a></li>
                </ul>        
          </div>
        </div>
       </div>
     </div>
   </nav>
<!-- /Header Ends -->
            <div class="clear" /></div>
            <div class="section no-pad-bot" id="index-banner">
            <div class="row flexbox">
            <div class="col s12 m2 left-sidebar editor-page">
               <ul class="collapsible sidebar-acc" data-collapsible="accordion">
              <li>
                  <div class="collapsible-header"><i class="material-icons">filter_open</i>Templates</div>
                  <div class="collapsible-body">
                <!--<a class='dropdown-button btn' href='#' data-activates='tempcat-select'>Select&nbsp;Category</a>   -->       
              <!-- Dropdown Structure -->
                <!--<ul id='tempcat-select' class='dropdown-content'>
                </ul> -->
                <ul id="template_container" style="height:250px;overflow:auto;">
                </ul>
            </div>
             </li>
             <li>
                 <div class="collapsible-header"><i class="material-icons">text_fields</i>Text</div>
                 <div class="collapsible-body" style="display: none;">
                 <a class='dropdown-button btn' href='#' data-activates='textcat-select'>Select&nbsp;Category</a> 
               <!-- Dropdown Structure -->
                 <ul id='textcat-select' class='dropdown-content'>
                 </ul> 
                 <div id="addtextoptions" class="col-lg-12" style="text-align:center;">
				 <div id="addheading" style="font-size:24px; font-weight:900;"><a href="#" onClick="javascript:addheadingText();">Add heading</a></div>
				 <div id="addsubheading" style="font-size:16px; font-weight:bold;"><a href="#" onClick="javascript:addsubheadingText();">Add subheading</a></div>
				 <div id="addsometext" style="font-size:10px; font-weight:bold; margin:5px 0 10px 0;"><a href="#" onClick="javascript:addText();">Add some regular text</a></div>
                 <ul id="text_container">
                 </ul>
                 </div>
              </li>
              <li>
                  <div class="collapsible-header"><i class="material-icons">filter_vintage</i>Background</div>
                  <div class="collapsible-body">
                  <a class='dropdown-button btn' href='#' data-activates='bgcat-select'>Select&nbsp;Category</a>          
                    <!-- Dropdown Structure -->
                  <ul id='bgcat-select' class='dropdown-content'>
                  </ul> 
                  <ul id="background_container">
                  </ul>
                  <ul class="products">
                  </ul>                    
                  </div>
              </li>
              <li>
                  <div class="collapsible-header"><i class="material-icons">explore</i>Elements</div>
                   <div class="collapsible-body" style="display: none;">
                   <a class='dropdown-button btn' href='#' data-activates='cat-select'>Select&nbsp;Category</a> 
                  <!-- Dropdown Structure -->
                  <ul id='cat-select' class='dropdown-content'>
                  </ul> 
                  <ul id="catimage_container">
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
                 <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
              </ul>
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
				<!--<button onClick='javascript:addNewCanvasPage();' id="addnewpagebutton" class="btn" type="button" style="width:150px; margin:20px 0; padding:10px; border:1px solid #555;"> + Add a New Page</button>-->
				<!--<button onClick='javascript:toSVG();' id="tosvgbtn" class="btn" type="button" style="width:150px; margin:20px 0; padding:10px; border:1px solid #555;"> + Check SVG</button>-->
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
                <li><a href="#!"><font face="Alfa Slab One" size="4">Alfa Slab One</font></a></li>
                <li><a href="#!"><font face="Arial" size="4">Arial</font></a></li>
                <li><a href="#!"><font face="Droid Sans" size="4">Droid Sans</font></a></li>
                <li><a href="#!"><font face="Cabin Sketch" size="4">Cabin Sketch</font></a></li>
                <li><a href="#!"><font face="PT Sans Narrow" size="4">PT Sans Narrow</font></a></li>
                <li><a href="#!"><font face="Bitter" size="4">Bitter</font></a></li>
                <li><a href="#!"><font face="Allura" size="4">Allura</font></a></li>                
                <li><a href="#!"><font face="Alex Brush" size="4">Alex Brush</font></a></li>
                <li><a href="#!"><font face="Calligraffitti" size="4">Calligraffitti</font></a></li>
                <li><a href="#!"><font face="Crimson Text" size="4">Crimson Text</font></a></li>
                <li><a href="#!"><font face="Open Sans" size="4">Open Sans</font></a></li>
                <li><a href="#!"><font face="Bevan" size="4">Bevan</font></a></li>
                <li><a href="#!"><font face="Dancing Script" size="4">Dancing Script</font></a></li>
                <li><a href="#!"><font face="Comfortaa" size="4">Comfortaa</font></a></li>
                <li><a href="#!"><font face="Pt Serif" size="4">Pt Serif</font></a></li>
                <li><a href="#!"><font face="Droid Seriff" size="4">Droid Seriff</font></a></li>
                <li><a href="#!"><font face="Montserrat" size="4">Montserrat</font></a></li>
                <li><a href="#!"><font face="Oswald" size="4">Oswald</font></a></li>
                <li><a href="#!"><font face="Cinzel" size="4">Cinzel</font></a></li>
                <li><a href="#!"><font face="Fjalla One" size="4">Fjalla One</font></a></li>
                <li><a href="#!"><font face="Amatic SC" size="4">Amatic SC</font></a></li>
                <li><a href="#!"><font face="Archivo Narrow" size="4">Archivo Narrow</font></a></li>
                <li><a href="#!"><font face="Gruppo" size="4">Gruppo</font></a></li>
                <li><a href="#!"><font face="Verdana" size="4">Verdana</font></a></li>
                <li><a href="#!"><font face="Gruppo" size="4">Gruppo</font></a></li>
                <li><a href="#!"><font face="Times New Roman" size="4">Times New Roman</font></a></li>
                <li><a href="#!"><font face="Roboto" size="4">Roboto</font></a></li>
             </ul>            
            </div>
        
             <div class="sections more-options">
              <h5>Font Size:</h5>
              <a class='dropdown-button btn' href='#' data-activates='dropdown5'>Select Size<span class="caret" style='border-top:0px;'>▼</span></a>
              <ul id='dropdown5' class='dropdown-content'>
                <li value="8"><a href="javascript:void(0);">8px</a></li>
                <li value="10"><a href="javascript:void(0);">10px</a></li>
                <li value="12"><a href="javascript:void(0);">12px</a></li>
                <li value="14"><a href="javascript:void(0);">14px</a></li>
                <li value="18"><a href="javascript:void(0);">18px</a></li>
                <li value="24"><a href="javascript:void(0);">24px</a></li>
                <li value="36"><a href="javascript:void(0);">36px</a></li>
              </ul>            
            </div>             


            <div class="sections sec-align">
              <h5>Alignment: </h5>
              <a class="btn-floating waves-effect waves-light" id="objectalignleft"><i class="material-icons">format_align_left</i></a>
              <a class="btn-floating waves-effect waves-light" id="objectaligncenter"><i class="material-icons">format_align_center</i></a>
              <a class="btn-floating waves-effect waves-light" id="objectalignright"><i class="material-icons">format_align_right</i></a>
            </div>
            <div class="sections sec-clrpicker sec-align">
              <div class="row">
                <div class="col s12 m6">
                  <h5>Color Picker:</h5>
                  <a href="javascript:void(0);" id="colorSelector" class="btn-floating waves-effect waves-light btn-color"><i class="material-icons">format_color_text</i></a>
                </div>
                <div class="col s12 m6">
                <h5>Delet Object:</h5>
                  <a class="btn-floating waves-effect waves-light obj-delete" id="deleteitem"><i class="material-icons">delete_forever</i></a>
                </div>
              </div>
            </div>
            <div class="sections more-options">
            <h5>More Options:</h5>
              <!-- Dropdown Trigger -->
              <a class='dropdown-button btn' href='#' data-activates='dropdown3'>Clone Object<span class="caret" style='border-top:0px;'>▼</span></a>
              <!-- Dropdown Structure -->
              <ul id='dropdown3' class='dropdown-content'>
                <li><a href="#!" id="sendbackward"><i class="material-icons">skip_previous</i>Send Backward</a></li>
                <li><a href="#!;" id="clone"><i class="material-icons">question_answer</i>Clone Object</a></li>
                <li><a href="#!" id="bringforward"><i class="material-icons">skip_next</i>Bring Forward</a></li>
                <li><a href="#!" id="objectfliphorizontal"><i class="material-icons">swap_horiz</i>Flip Horizontally</a></li>
                <li><a href="#!" id="objectflipvertical"><i class="material-icons">swap_vert</i>Flip Vertically</a></li>
                <li><a href="#!" id="objectlock"><i class="material-icons">lock</i>Lock Object</a></li>
                <li><a href="#!"><i class="material-icons">opacity</i>Opacity</a></li>
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
              <a class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_back</i></a>
              <a class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_forward</i></a>
              <a class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_downward</i></a>
              <a class="btn-floating waves-effect waves-light"><i class="material-icons">arrow_upward</i></a>
              </div> 
              </div>    
             </div>
            </div>
      <div id="spinnerModal" class="modal fade" data-backdrop="static" data-keyboard="false"><i class="fa fa-cog fa-spin" style="position: absolute; top: 50%; left: 50%; margin-top: -75px; margin-left: -75px; font-size: 150px;"></i></div>
	  <!-- Modal Structure -->
	  <div id="savetemplate_modal" class="modal">
		<div class="modal-content">
			<h4>Save Flyer</h4>
			<form class="col s12" id="savetemplateform">
				<!--<input type="hidden" id="productid" name="productid" value="<?php //echo $_GET['productid']; ?>">-->
			  <div class="row">
  				<!--<div class="input-field col s6">
					<select id="template_category" required>
					  <option value="">Select Category</option>
					</select>
					<label>Select Template Category</label>
  				</div>-->
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
     
    <footer class="page-footer">
     <div class="footer-copyright">
      <div class="container">
      &copy;2016 Company Name. All Right Reserved.
      </div>
     </div>
    </footer>
<!--  Scripts-->
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity=    "sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.2/isotope.pkgd.min.js"></script>
  <script src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>
 <!-- <script type="text/javascript" src="js/bootstrap-slider.js"></script>-->
  <script type="text/javascript" src="js/fabric1.6.js"></script>
  <script type="text/javascript" src="js/aligning_guidelines.js"></script>
  <script type="text/javascript" src="js/centering_guidelines.js"></script>
  <script type="text/javascript" src="js/bootstrap-slider.js"></script>
  <script src="js/jquery.validate.min.js"></script>
  <script src="admin/js/pagination.js"></script>
<!--<script src="js/jquery-validate.bootstrap-tooltip.js"></script>-->
  <script src="js/filedrag.js" type="text/javascript"></script>
  <script src="js/materialize.js"></script>
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
    <script type = "text/javascript" src = "js/spectrum.js" > </script> 
    <script src = "js/functions.js" type = "text/javascript" > </script> 
    <script src = "js/canvasevents.js" type = "text/javascript" > </script>  
    <script type = "text/javascript">
        $(window).load(function() {
            $('select').material_select();
            addCanvasToPage();
            setCanvasSize();
            if (window.location.href.indexOf('?newtemplate') != -1) {
                $("#canvaswh_modal").modal('show');
            }
            $('.deletecanvas').css('display', 'none');
        });

    $(document).ready(function() {

      $(".preloader").fadeOut("slow");

      <?php
       if (isset($_GET['tempid']) && $_GET['tempid'] != '') {
         $templateid = $_GET['tempid'];
      ?>
        $("#canvaswh_modal").modal('hide');
        loadTemplate(<?php echo $templateid;?>);
      <?php
       }
      ?>
      

      <?php
       if (isset($_GET['admintempid']) && $_GET['admintempid'] != '') {
         $adtemplateid = $_GET['admintempid'];
      ?>
        $("#canvaswh_modal").modal('hide');
        loadAdminTemplate(<?php echo $adtemplateid;?>);
      <?php
       }
      ?>
    });

    var Istempselected = false;
    var IsBgselected = false;
    var Iscatselected = false;
    var IsTextselected = false;

    $(document).ready(function() {
        setTimeout(function() {
            getTemplates('');
        }, 250);

        setTimeout(function() {
            gettempcategory();
        }, 500);
        /* setTimeout(function(){ gettempcatmat(); }, 500); */
        setTimeout(function() {
            getTemplatesName();
        }, 750);
        setTimeout(function() {
            getBgcategory();
        }, 1500);
        setTimeout(function() {
            getbgimages('');
        }, 1750);
        setTimeout(function() {
            getcategory();
        }, 1000);
        setTimeout(function() {
            getcatimages('');
        }, 1250);
        setTimeout(function() {
            getTextcategory();
        }, 2500);
        setTimeout(function() {
            getTexts('');
        }, 2750);
       setTimeout(function(){ 
           getuploadimages(); 
       }, 3000);
        /* $(document).on('click', '#tempcat-select li', function() {
      Istempselected = true;
            $('#template_container').empty();
            getTemplates(this.id);
      });*/
        $(document).on('click', '#bgcat-select li', function() {
            IsBgselected = true;
            $('#background_container').empty();
            getbgimages(this.id);
        });
        $(document).on('click', '#cat-select li', function() {
            var selectedID = $(this).val();
            Iscatselected = true;
            $('#catimage_container').empty();
            getcatimages(this.id);
        });
        $(document).on('click', '#textcat-select li', function() {
            IsTextselected = true;
            $('#text_container').empty();
            getTexts(this.id);
        });
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
            case "selectall":
                selectallobjs();
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
        move: function(color) {
            var colorVal = color.toHexString(); // #ff0000
            changeObjectColor(colorVal);
            $('#colorSelector').css('backgroundColor', colorVal);
        },
    });
    $(function() {
        $(".fzbutton").on("click", function() {
            var $button = $(this);
            var oldValue = $("#fontsize").val();
            if ($button.attr("id") == "fontsizeInc") {
                if (oldValue.toString().indexOf('.') != -1) {
                    var newVal = Math.ceil(parseFloat(oldValue));
                } else {
                    var newVal = parseFloat(oldValue) + 1;
                }
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    if (oldValue.toString().indexOf('.') != -1) {
                        var newVal = Math.floor(parseFloat(oldValue));
                    } else {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                } else {
                    newVal = 0;
                }
            }
            $("#fontsize").val(newVal);
            $("#fontsize").change();
        });
    });

    function getuploadimages() {

        var $grid = $('#image_container');
        $grid.empty();

        $.ajax({
            type: 'GET',
            url: 'get_uploadimages.php',
            success: function(data) {
                if (data != '') {
                    var data = $(data);
                    $grid.append(data);
                }
            }
        });
    }
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
                /*$('#spinnerModal').modal('hide');
                document.getElementById("successMessage").innerHTML = data;
                $('#successModal').modal('show');*/
                //location.reload();
                $('#template_container').empty();
                getTemplates();
            });
        } else {
            /*  $("#alertModal").modal('show');
              $('#responceMessage').html('Please select the Flyer(s), you wish to delete.');*/
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
/*$(document).ready(function() {
	$("#image_container").load("get_uploadimages.php");  //initial page number to load
	$(".pagination").bootpag({
	   total: <?php echo $pages; ?>,
	   page: 1,
	   maxVisible: 5 
	}).on("page", function(e, num){
		e.preventDefault();
		$("#image_container").load("get_uploadimages.php", {'page':num});
	});

});*/

function shareFlyer() {  
  if(loadedtemplateid != 0)
    location.href = 'http://cartabel.com/newdesign/editor/flyer.php?flyerid=' + loadedtemplateid;
  else 
    alert('Please SAVE the template before Sharing.');
}
var get_var = "<?php echo $_GET['proid']; ?>";


</script>
</body>
</html>
