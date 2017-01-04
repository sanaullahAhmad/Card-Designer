var groupselobject;
var canvasScale = 1;
var roundedcanvasScale = 1;
var SCALE_FACTOR = 1.2;
var savestateaction = true;
var currentcanvasid = 0;
var canvasindex = 0;
var pageindex = 0;
var canvasarray = [];
var isdownloadpdf = false;
var issaveastemplate = false;
var issavetemplate = false;
var totalsvgs = 0;
var convertedsvgs = 0;
var loadedtemplateid = 0;
var activeObjectCopy, activeGroupCopy;
var keystring = "";
var isReplaceImage = false;
var remstring = "";
var savestatecount = 0;
function addheadingText() {
    var txtBox = new fabric.Textbox("Heading Text", {
        fontFamily: selectedFont,
        fontSize: 36 * 1.3,
        textAlign: "center",
        fill: fillColor,
        scaleX: canvasScale,
        scaleY: canvasScale,
        lineHeight: 1,
        width: 400,
    });
    canvas.add(txtBox);
    setControlsVisibility(txtBox);
    txtBox.center();
    txtBox.setCoords();
    canvas.calcOffset();
    saveState();
    canvas.renderAll();
}

function addsubheadingText() {
    var txtBox = new fabric.Textbox("Subheading text", {
        fontFamily: selectedFont,
        fontSize: 24 * 1.3,
        textAlign: "center",
        fill: fillColor,
        scaleX: canvasScale,
        scaleY: canvasScale,
        lineHeight: 1,
        width: 350,
    });
    canvas.add(txtBox);
    setControlsVisibility(txtBox);
    txtBox.center();
    txtBox.setCoords();
    canvas.calcOffset();
    saveState();
    canvas.renderAll();
}

function addText() {
    var txtBox = new fabric.Textbox("Text element", {
        fontFamily: selectedFont,
        fontSize: 12 * 1.3,
        textAlign: "center",
        fill: fillColor,
        scaleX: canvasScale,
        scaleY: canvasScale,
        lineHeight: 1,
        width: 150,
        fontWeight: "normal",
    });
    canvas.add(txtBox);
    setControlsVisibility(txtBox);
    txtBox.center();
    txtBox.setCoords();
    canvas.calcOffset();
    saveState();
    canvas.renderAll();
}

function saveState() {
    if (savestateaction && canvas.state) {
        var state = canvas.state;
        var index = canvas.index;
        console.log("savestate index" + index)
        state[++index] = JSON.stringify(canvas.toDatalessJSON(['logoid', 'selectable', 'evented', 'id']));
        canvas.state = state;
        canvas.index = index;
        savestatecount++;
    }
};

function addSVGToCanvas(logosvgimg, svgoptions) {
    fabric.loadSVGFromURL(logosvgimg, function(objects, options) {
        var loadedObject = fabric.util.groupSVGElements(objects, options);
        loadedObject.set({
            scaleX: canvasScale,
            scaleY: canvasScale
        });
        var objects = loadedObject.getObjects()
        loadedObject.src = logosvgimg;
        canvas.add(loadedObject);
        loadedObject.center();
        if (svgoptions) {
            loadedObject.left = svgoptions.left;
            loadedObject.top = svgoptions.top;
            loadedObject.scaleX = svgoptions.scaleX;
            loadedObject.scaleY = svgoptions.scaleY;
            loadedObject.angle = svgoptions.angle;
            loadedObject.flipX = svgoptions.flipX;
            loadedObject.flipY = svgoptions.flipY;
        }
        loadedObject.setCoords();
        saveState();
        loadedObject.hasRotatingPoint = true;
        canvas.renderAll();
    });
}

function addUploadedSVGToCanvas(svgimg) {
    var svgImgPath = "./uploads/" + svgimg;
    fabric.loadSVGFromURL(svgImgPath, function(objects, options) {
        var loadedObject = fabric.util.groupSVGElements(objects, options);
        loadedObject.set({
            left: 200,
            top: 200,
            scaleX: canvasScale,
            scaleY: canvasScale
        });
        loadedObject.src = svgImgPath;
        canvas.add(loadedObject);
        loadedObject.center();
        loadedObject.setCoords();
        saveState();
        loadedObject.hasRotatingPoint = true;
        canvas.renderAll();
    });
}

function setControlsVisibility(object) {
    object.setControlsVisibility({
        tl: true, // top left
        tr: true, // top right
        bl: true, // bottom left
        br: true, // bottom right
        mt: true, // middle top disable
        mb: true, // midle bottom disable
        ml: true, // middle left disable
        mr: true, // middle right disable
    });
    object.hasControls = true;
}

function addCanvasToPage(dupflag, pageid, jsonarray) {
    var rows = document.getElementById("numOfcanvasrows").value,
        cols = document.getElementById("numOfcanvascols").value;
    $('.deletecanvas').css('display', 'block');
    var rc = parseInt(rows) * parseInt(cols) * parseInt(pageid);
    var dupcount = 0;
    var jsonarrcount = 1;
    for (var i = 1; i <= rows; i++) {
        $("#page" + pageindex).append("<table><tr>");
        for (var j = 1; j <= cols; j++) {
            addNewCanvas();
            if (dupflag) {
                var currentcanvasjson = canvasarray[rc + dupcount].toDatalessJSON();
                canvas.loadFromDatalessJSON(currentcanvasjson);
                canvas.renderAll();
                dupcount++;
            }
        }
        $("#page" + pageindex).append("</tr></table>");
    }
    var dupcanvicon = $("#duplicatecanvas").clone(true).prop('id', 'duplicatecanvas' + pageindex);
    var delcanvicon = $("#deletecanvas").clone(true).prop('id', 'deletecanvas' + pageindex);
    dupcanvicon.appendTo("#page" + pageindex);
    delcanvicon.appendTo("#page" + pageindex);
    adjustIconPos(pageindex);
}

function setCanvasSize() {
    var width = document.getElementById("loadCanvasWid").value,
        height = document.getElementById("loadCanvasHei").value;
    //inch to pixel
    width = width * 96;
    height = height * 96;
    setCanvasWidthHeight(width, height);
    adjustIconPos(pageindex);
    $("#canvaswh_modal").modal('hide');
    $('.deletecanvas').css('display', 'none');
}

function addFileToCanvas(imagefile) {
	$(".preloader").show();
	$(".preloader").fadeIn("slow");

    var actObj = canvas.getActiveObject();
    if(isReplaceImage && actObj && actObj.type == 'cropzoomimage') {
        //replace image
        var img = new Image();
        img.onload = function() {
            var w = actObj.width;
            var h = actObj.height;
            actObj.setElement(img);
            actObj.setWidth(w);
            actObj.setHeight(h);

        }
        img.src = "./uploads/" + imagefile;
        isReplaceImage = false;

    } else {
        fabric.util.loadImage("./uploads/" + imagefile, function(img) {
            var object = new fabric.Cropzoomimage(img, {
                left: canvas.getWidth() / 2,
                top: canvas.getHeight() / 2,
                scaleX: canvasScale / 2,
                scaleY: canvasScale / 2
            });
            object.src = "uploads/" + imagefile;
            canvas.add(object);
            canvas.setActiveObject(object);
            object.center();
            object.setCoords();
            setControlsVisibility(object);
            canvas.renderAll();
            saveState();

        }, {
            crossOrigin: ''
        });
    }
    $(".preloader").hide();
	$('#image_container').empty();
	getuploadimages();


}

function setCanvasBg(lcanvas, bgsrc, bgcolor, scalex) {
    if(!scalex)
        $('#img-width').val(100);

    deleteCanvasBg(lcanvas);
    if (bgcolor) {
        var bg = new fabric.Rect({
            originX: "center",
            originY: "center",
            strokeWidth: 1,
            fill: bgcolor,
            opacity: 1,
            selectable: false,
            width: canvas.getWidth(),
            height: canvas.getHeight()
        });
        lcanvas.add(bg);
        bg.center();
        canvas.sendToBack(bg);
        lcanvas.bgcolor = bgcolor;
        bg.bg = true;
        saveState();
    }
    if (bgsrc) {
          if(!scalex) scalex = 1;
          var img = new Image();
          img.onload = function(){
              var imgwidth = this.width * scalex;
              var imgheight = this.height * scalex;
              for(var left=imgwidth/2;left < (canvas.width + (imgwidth/2));left+=imgwidth) {
                  for(var top=imgheight/2;top < (canvas.height + (imgheight/2));top+=imgheight) {
                        (function(leftpos, toppos) {
                              fabric.util.loadImage(bgsrc, function(img) {
                                    var bg = new fabric.Image(img);
                                    bg.set({
                                          originX: 'center',
                                          originY: 'center',
                                          opacity: 1,
                                          selectable: false,
                                          hasBorders: false,
                                          hasControls: false,
                                          hasCorners: false,
                                          width: img.width*scalex,
                                          height: img.height*scalex,
                                          left: leftpos,
                                          top: toppos
                                    });
                                    lcanvas.add(bg);
                                    canvas.sendToBack(bg);            
                                    lcanvas.bgsrc = bgsrc;
                                    bg.bg = true;
                                    saveState();
                              });
                        })(left, top);                  
                  }                  
              }

          };
          img.src = bgsrc;
    }
}

function deleteCanvasBg(lcanvas) {

    var objects = canvas.getObjects().filter(function(o) {
        return o.bg == true;
    });

    for(var i=0; i < objects.length; i++) {
        canvas.remove(objects[i]);
    }
    canvas.bgsrc = "";
    canvas.bgcolor = "";
    saveState();            
}

var bgscale;
$('#img-width').on("change", function() {

      if(this.value == bgscale) return;
      bgscale = this.value;

      bgsrc = canvas.bgsrc;

      deleteCanvasBg();
      
      console.log(this.value);

      setCanvasBg(canvas, bgsrc, false, this.value/100);
});

function setStyle(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
        var style = {};
        style[styleName] = value;
        object.setSelectionStyles(style);
        object.setCoords();
    } else {
        object[styleName] = value;
    }
    canvas.renderAll();
    saveState();
}
var fontBoldValue = "normal";
var fontBoldSwitch = document.getElementById('fontbold');
if (fontBoldSwitch) {
    fontBoldSwitch.onclick = function() {
        fontBoldValue = (fontBoldValue == "normal") ? "bold" : "normal";
        var activeObject = canvas.getActiveObject();
        if (activeObject && /text/.test(activeObject.type)) {
            setStyle(activeObject, 'fontWeight', fontBoldValue);
            canvas.renderAll();
        }
    };
}
var fontItalicValue = "normal";
var fontItalicSwitch = document.getElementById('fontitalic');
if (fontItalicSwitch) {
    fontItalicSwitch.onclick = function() {
        fontItalicValue = (fontItalicValue == "normal") ? "italic" : "normal";
        var activeObject = canvas.getActiveObject();
        if (activeObject && /text/.test(activeObject.type)) {
            setStyle(activeObject, 'fontStyle', fontItalicValue);
            canvas.renderAll();
        }
    };
}
var fontUnderlineValue = "normal";
var fontUnderlineSwitch = document.getElementById('fontunderline');
if (fontUnderlineSwitch) {
    fontUnderlineSwitch.onclick = function() {
        fontUnderlineValue = (fontUnderlineValue == "normal") ? "underline" : "normal";
        var activeObject = canvas.getActiveObject();
        if (activeObject && /text/.test(activeObject.type)) {
            setStyle(activeObject, 'textDecoration', fontUnderlineValue);
            canvas.renderAll();
        }
    };
}
$('#fontsize').on('change',  (function() {
var fontsize = this.value;
 var activeObject = canvas.getActiveObject();
 if (activeObject && /text/.test(activeObject.type)) {
		setStyle(activeObject, 'fontSize', fontsize);
		activeObject.setCoords();
		canvas.renderAll();
	}
}));
//Font line height
var ChangeLineHeight = function() {
    var activeObject = canvas.getActiveObject();
    setStyle(activeObject, 'lineHeight', clh.getValue());
    canvas.renderAll();
    saveState();
};
var clh = $("#changelineheight").slider().on('slide', ChangeLineHeight).data('slider');
var deleteitembtn = document.getElementById('deleteitem');
if (deleteitembtn) {
    deleteitembtn.onclick = function() {
        deleteItem();
    }
}

function deleteItem() {
    var activeObject = canvas.getActiveObject();
    if (!activeObject) activeObject = canvas.getActiveGroup();
    if (!activeObject) return;
    if (activeObject.type == "group") {
        activeObject.forEachObject(function(object) {
            canvas.remove(object);
        });
    } else {
        canvas.remove(activeObject);
    }
    canvas.deactivateAllWithDispatch().renderAll();
    saveState();
}
var objectalignleftSwitch = document.getElementById('objectalignleft');
if (objectalignleftSwitch) {
    objectalignleftSwitch.onclick = function() {
        activeGroup = canvas.getActiveGroup();
        activeObject = canvas.getActiveObject();
        if (activeGroup) {
            activeGroup.forEachObject(function(object) {
                object.left = -(activeGroup.width * activeGroup.scaleX) / 2 + (object.width * object.scaleX) / 2;
                object.originX = 'center';
                if (object && /textbox/.test(object.type)) {
                    setStyle(object, 'textAlign', "left");
                    canvas.renderAll();
                }
            });
            canvas.renderAll();
            objectalignrightSwitch.click();
        } else if (activeObject) {
            if (activeObject && /textbox/.test(activeObject.type)) {
                setStyle(activeObject, 'textAlign', "left");
                canvas.renderAll();
            }
        }
    };
}
var objectaligncenterSwitch = document.getElementById('objectaligncenter');
if (objectaligncenterSwitch) {
    objectaligncenterSwitch.onclick = function() {
        activeGroup = canvas.getActiveGroup();
        activeObject = canvas.getActiveObject();
        if (activeGroup) {
            activeGroup.forEachObject(function(object) {
                object.left = 0;
                object.originX = 'center';
                if (object && /textbox/.test(object.type)) {
                    setStyle(object, 'textAlign', "center");
                    canvas.renderAll();
                }
            });
            canvas.renderAll();
            objectaligncenterSwitch.click();
            objectaligncenterSwitch.click();
        } else if (activeObject) {
            if (activeObject && /textbox/.test(activeObject.type)) {
                setStyle(activeObject, 'textAlign', "center");
                canvas.renderAll();
            }
        }
    };
}
var objectalignrightSwitch = document.getElementById('objectalignright');
if (objectalignrightSwitch) {
    objectalignrightSwitch.onclick = function() {
        activeGroup = canvas.getActiveGroup();
        activeObject = canvas.getActiveObject();
        if (activeGroup) {
            activeGroup.forEachObject(function(object) {
                object.left = activeGroup.width / 2 - (object.width * object.scaleX) / 2;
                object.originX = 'center';
                if (object && /textbox/.test(object.type)) {
                    setStyle(object, 'textAlign', "right");
                    canvas.renderAll();
                }
            });
            canvas.renderAll();
            objectalignleftSwitch.click();
        } else if (activeObject) {
            if (activeObject && /textbox/.test(activeObject.type)) {
                setStyle(activeObject, 'textAlign', "right");
                canvas.renderAll();
            }
        }
    };
}
var horizcenterIndentSwitch = document.getElementById('horizcenterindent');
if (horizcenterIndentSwitch) {
    horizcenterIndentSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        var activeGroup = canvas.getActiveGroup();
        if (activeGroup) {
            var objs = activeGroup.getObjects();
            var group = new fabric.Group(objs, {
                originX: 'center',
                originY: 'center',
                top: activeGroup.top
            });
            canvas._activeObject = null;
            canvas.setActiveGroup(group.setCoords()).renderAll();
            var activeGroup = canvas.getActiveGroup();
            canvas.centerObjectH(activeGroup);
            activeGroup.setCoords();
            canvas.renderAll();
            saveState();
        } else if (activeObject) {
            activeObject.centerH();
            activeObject.setCoords();
            canvas.renderAll();
            saveState();
        }
    };
}
var verticenterIndentSwitch = document.getElementById('verticenterindent');
if (verticenterIndentSwitch) {
    verticenterIndentSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        var activeGroup = canvas.getActiveGroup();
        if (activeGroup) {
            var objs = activeGroup.getObjects();
            var group = new fabric.Group(objs, {
                originX: 'center',
                originY: 'center',
                left: activeGroup.left
            });
            canvas._activeObject = null;
            canvas.setActiveGroup(group.setCoords()).renderAll();
            var activeGroup = canvas.getActiveGroup();
            canvas.centerObjectV(activeGroup);
            activeGroup.setCoords();
            canvas.renderAll();
            saveState();
        } else if (activeObject) {
            activeObject.centerV();
            activeObject.setCoords();
            canvas.renderAll();
            saveState();
        }
    };
}

var leftIndentSwitch = document.getElementById('leftindent');
if (leftIndentSwitch) {
    leftIndentSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        var activeGroup = canvas.getActiveGroup();
        if (activeGroup) {
            var objs = activeGroup.getObjects();
            var group = new fabric.Group(objs, {
                originX: 'center',
                originY: 'center',
                top: activeGroup.top
            });
            canvas._activeObject = null;
            canvas.setActiveGroup(group.setCoords()).renderAll();
            var activeGroup = canvas.getActiveGroup();
            canvas.centerObjectH(activeGroup);
            activeGroup.left = activeGroup.width / 2 * activeGroup.scaleX + (12 * canvasScale);
            activeGroup.setCoords();
            canvas.renderAll();
            saveState();
        } else if (activeObject) {
            activeObject.centerH();
            activeObject.setCoords();
            activeObject.originX = 'left';
            // left/right object align should leave 1mm space to the outer edges of the label
            // 1mm = 6px approx;
            activeObject.left = (12 * canvasScale);
            activeObject.setCoords();
            canvas.renderAll();
            saveState();
        }
    };
}

var rightIndentSwitch = document.getElementById('rightindent');
if (rightIndentSwitch) {
    rightIndentSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        var activeGroup = canvas.getActiveGroup();
        if (activeGroup) {
            var objs = activeGroup.getObjects();
            var group = new fabric.Group(objs, {
                originX: 'center',
                originY: 'center',
                top: activeGroup.top
            });
            canvas._activeObject = null;
            canvas.setActiveGroup(group.setCoords()).renderAll();
            var activeGroup = canvas.getActiveGroup();
            canvas.centerObjectH(activeGroup);
            activeGroup.left = canvas.width - (activeGroup.width / 2 * activeGroup.scaleX) - (12 * canvasScale);
            activeGroup.setCoords();
            canvas.renderAll();
            saveState();
        } else if (activeObject) {
            activeObject.centerH();
            activeObject.setCoords();
            activeObject.originX = 'left';
            activeObject.left = canvas.width - (activeObject.width * activeObject.scaleX) - (12 * canvasScale);
            activeObject.setCoords();
            canvas.renderAll();
            saveState();
        }
    };
}

var undoSwitch = document.getElementById('undo');
if (undoSwitch) {
    undoSwitch.onclick = function() {

        savestateaction = false;
        var index = canvas.index;
        var state = canvas.state;
        index--;
        if (index <= 0) {
            index = 0;
            canvas.index = index;
            if(!state[index]) {
                return;
            }    
            var json = jQuery.parseJSON(state[index]).objects;
            json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
            canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
            return;
        }
        canvas.index = index;
        if(!state[index]) {
            return;
        }    
        var json = jQuery.parseJSON(state[index]).objects;
        json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
        canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
        savestateaction = true;
        canvas.renderAll();
    };
}

var redoSwitch = document.getElementById('redo');
if (redoSwitch) {
    redoSwitch.onclick = function() {
        var index = canvas.index;
        var state = canvas.state;
        savestateaction = false;
        index++;
        if (index >= state.length - 1) {
            index = state.length - 1;
            canvas.index = index;
            if(!state[index]) {
                return;
            }    
            var json = jQuery.parseJSON(state[index]).objects;    
            json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
            canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
            return;
        }
        canvas.index = index;
        if(!state[index]) {
            return;
        }    
        var json = jQuery.parseJSON(state[index]).objects;
        json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
        canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
        savestateaction = true;
    };
}

function changeObjectColor(hex) {
    var obj = canvas.getActiveObject();
    if(obj) {
        if (groupselobject) groupselobject.setFill(hex);
        else if (obj.paths) {
            for (var i = 0; i < obj.paths.length; i++) {
                obj.paths[i].setFill(hex);
            }
		}
			else if (obj.type == "rect" || obj.type == "circle" || obj.type == "triangle"|| obj.type == "square") {
            obj.setFill(hex);
        } else obj.setFill(hex);
    }
    var grpobjs = canvas.getActiveGroup();
    if(grpobjs) {
        grpobjs.forEachObject(function(object) {

            if(object.paths) {
                for (var i = 0; i < object.paths.length; i++) {
                    object.paths[i].setFill(hex);
                }                
            } else object.setFill(hex);
        }); 
    }
    canvas.renderAll();
    saveState();
}

function setCanvasWidthHeight(width, height) {
    if (width) {
        for (var i = 0, j = 0; i <= canvasindex; i++) {
            if (!canvasarray[i]) continue;
            canvasarray[i].width = width;
            var canvasDOM = document.getElementById('canvas' + i);
            canvasDOM.style.width = width / 1.2 + "px";
            canvasDOM.width = width;
            var elem = document.getElementsByClassName('upper-canvas')[i];
            elem.style.width = width / 1.2 + "px";
            elem.width = width;
            var elem = document.getElementsByClassName('canvas-container')[i];
            elem.style.width = width / 1.2 + "px";
            elem.width = width;
            var elem = document.getElementsByClassName('canvascontent')[i];
            elem.style.width = width / 1.2 + "px";
            elem.width = width;
            var elem = document.getElementById('divcanvas' + i);
            elem.style.width = width / 1.2 + "px";
            elem.width = width;
            j++;
            canvasarray[i].calcOffset();
            canvasarray[i].renderAll();
        }
    }
    if (height) {
        for (var i = 0, j = 0; i <= canvasindex; i++) {
            if (!canvasarray[i]) continue;
            canvasarray[i].height = height;
            var canvasDOM = document.getElementById('canvas' + i);
            canvasDOM.style.height = height / 1.2 + "px";
            canvasDOM.height = height;
            var elem = document.getElementsByClassName('upper-canvas')[i];
            elem.style.height = height / 1.2 + "px";
            elem.height = height;
            var elem = document.getElementsByClassName('canvas-container')[i];
            elem.style.height = height / 1.2 + "px";
            elem.height = height;
            var elem = document.getElementsByClassName('canvascontent')[i];
            elem.style.height = height / 1.2 + "px";
            elem.height = height;
            var elem = document.getElementById('divcanvas' + i);
            elem.style.height = height / 1.2 + "px";
            elem.height = height;
            j++;
            canvasarray[i].calcOffset();
            canvasarray[i].renderAll();
        }
    }
    canvas.calcOffset();
    canvas.renderAll();
    $("#canvaswidth").val('');
    $("#canvaswidth").val(Math.round(canvas.getWidth()));
    $("#canvasheight").val('');
    $("#canvasheight").val(Math.round(canvas.getHeight()));
}
// button Zoom In
$("#btnZoomIn").click(function() {
    zoomIn();
    for (var i = 0; i <= pageindex; i++) {
        adjustIconPos(i);
    }
    initCenteringGuidelines(canvas);
});
// button Zoom Out
$("#btnZoomOut").click(function() {
    zoomOut();
    for (var i = 0; i <= pageindex; i++) {
        adjustIconPos(i);
    }
    initCenteringGuidelines(canvas);
});
// Zoom In
function zoomIn() {
    // Set max zoom at 500%
    if (canvasScale * SCALE_FACTOR > 5) {
        $("#zoomperc").html(Math.round(5 * 100) + '%');
        return;
    }
    canvas.deactivateAllWithDispatch().renderAll();
    canvasScale = canvasScale * SCALE_FACTOR;
    setCanvasWidthHeight(canvas.getWidth() * SCALE_FACTOR, canvas.getHeight() * SCALE_FACTOR);
    for (var j = 0; j < canvasindex; j++) {
        if (!canvasarray[j]) continue;
        var objects = canvasarray[j].getObjects();
        for (var i in objects) {
            var scaleX = objects[i].scaleX;
            var scaleY = objects[i].scaleY;
            var left = objects[i].left;
            var top = objects[i].top;
            var tempScaleX = scaleX * SCALE_FACTOR;
            var tempScaleY = scaleY * SCALE_FACTOR;
            var tempLeft = left * SCALE_FACTOR;
            var tempTop = top * SCALE_FACTOR;
            objects[i].scaleX = tempScaleX;
            objects[i].scaleY = tempScaleY;
            objects[i].left = tempLeft;
            objects[i].top = tempTop;
            objects[i].setCoords();
        }
        canvasarray[j].renderAll();
    }
    $("#zoomperc").html('');
    $("#zoomperc").html(Math.round(canvasScale * 100) + '%');
}
// Reset Zoom
function resetZoom() {
    setCanvasWidthHeight(canvas.getWidth() * (1 / canvasScale), canvas.getHeight() * (1 / canvasScale));
    for (var j = 0; j < canvasindex; j++) {
        if (!canvasarray[j]) continue;
        var objects = canvasarray[j].getObjects();
        for (var i in objects) {
            var scaleX = objects[i].scaleX;
            var scaleY = objects[i].scaleY;
            var left = objects[i].left;
            var top = objects[i].top;
            var tempScaleX = scaleX * (1 / canvasScale);
            var tempScaleY = scaleY * (1 / canvasScale);
            var tempLeft = left * (1 / canvasScale);
            var tempTop = top * (1 / canvasScale);
            objects[i].scaleX = tempScaleX;
            objects[i].scaleY = tempScaleY;
            objects[i].left = tempLeft;
            objects[i].top = tempTop;
            objects[i].setCoords();
        }
        canvasarray[j].renderAll();
    }
    canvasScale = 1;
    $("#zoomperc").html('');
    $("#zoomperc").html(Math.round(canvasScale * 100) + '%');    
    initCenteringGuidelines(canvas);
}
// Zoom Out
function zoomOut() {
    canvas.deactivateAllWithDispatch().renderAll();
    canvasScale = canvasScale / SCALE_FACTOR;
    setCanvasWidthHeight(canvas.getWidth() * (1 / SCALE_FACTOR), canvas.getHeight() * (1 / SCALE_FACTOR));
    for (var j = 0; j < canvasindex; j++) {
        if (!canvasarray[j]) continue;
        var objects = canvasarray[j].getObjects();
        for (var i in objects) {
            var scaleX = objects[i].scaleX;
            var scaleY = objects[i].scaleY;
            var left = objects[i].left;
            var top = objects[i].top;
            var tempScaleX = scaleX * (1 / SCALE_FACTOR);
            var tempScaleY = scaleY * (1 / SCALE_FACTOR);
            var tempLeft = left * (1 / SCALE_FACTOR);
            var tempTop = top * (1 / SCALE_FACTOR);
            objects[i].scaleX = tempScaleX;
            objects[i].scaleY = tempScaleY;
            objects[i].left = tempLeft;
            objects[i].top = tempTop;
            objects[i].setCoords();
        }
        canvasarray[j].renderAll();
    }
    $("#zoomperc").html('');
    $("#zoomperc").html(Math.round(canvasScale * 100) + '%');
}
function savetemplate() {
	$(".preloader").show();
	$(".preloader").fadeIn("slow");
    issavetemplate = true;
    proceed_savetemplate();
}
function saveastemplate() {
    issaveastemplate = true;
	$('#savetemplate_modal').openModal(); 
}
$("#downloadtemplate").click(function() {
    $('#downloadtemplate_modal').modal('show');
});
$("#downloadAsJPEG").click(function() {
    downloadImage();
});
$("#downloadAsPDF").click(function() {
    isdownloadpdf = true;
    resetZoom();
    processSVGs();
});

function downloadTemplateFile() {
    $("#spinnerModal").modal('show');
    $('#downloadtemplate_modal').modal('hide');
    var jsonCanvasArray = [];
    var width = document.getElementById("loadCanvasWid").value,
        height = document.getElementById("loadCanvasHei").value,
        rows = document.getElementById("numOfcanvasrows").value,
        cols = document.getElementById("numOfcanvascols").value;
    //inch to pixel
    width = width * 96;
    height = height * 96;
    var wh = '{"width": ' + width + ', "height": ' + height + ', "rows": ' + rows + ', "cols": ' + cols + '}';
    jsonCanvasArray.push(wh);
    for (var i = 0; i < canvasindex; i++) {
        if (!canvasarray[i]) continue;
        canvasarray[i].deactivateAll().renderAll();
        if ($("#divcanvas" + i).is(":visible")) {
            jsonCanvasArray.push(canvasarray[i].toDatalessJSON());
        }
    }
    var jsonData = JSON.stringify(jsonCanvasArray);
    console.log(jsonData);
    var filename = $('#downtemplatename').val();
    var path = "uploads/savetemplate/";
    $.ajax({
        type: 'POST',
        url: 'downloadtemplate.php',
        data: {
            path: path,
            filename: filename,
            jsonData: jsonData
        },
        success: function(msg) {
            window.location.href = 'downloadfile.php?file=uploads/savetemplate/' + filename + '.ype';
            $("#spinnerModal").modal('hide');
        }
    })    
}

function saveTemplateFile() {
    if (totalsvgs == convertedsvgs && loadedtemplateid != 0) {
        issavetemplate = false;
        var jsonCanvasArray = [];
        var width = document.getElementById("loadCanvasWid").value,
            height = document.getElementById("loadCanvasHei").value,
            rows = document.getElementById("numOfcanvasrows").value,
            cols = document.getElementById("numOfcanvascols").value;
        //inch to pixel
        width = width * 96;
        height = height * 96;
        var wh = '{\"width\": ' + width + ', \"height\": ' + height + ', \"rows\": ' + rows + ', \"cols\": ' + cols + '}';
        jsonCanvasArray.push(wh);
        var firstcanvas;
        for (var i = 0; i < canvasindex; i++) {
            if (!canvasarray[i]) continue;
            canvasarray[i].deactivateAll().renderAll();
            if ($("#divcanvas" + i).is(":visible")) {
                if (!firstcanvas || (firstcanvas.getObjects().length < canvasarray[i].getObjects().length)) firstcanvas = canvasarray[i];
                jsonCanvasArray.push(canvasarray[i].toDatalessJSON());
            }
        }
        var jsonData = JSON.stringify(jsonCanvasArray);
        var pngdataURL = firstcanvas.toDataURL("image/png");
        var path = "templates";
        $.ajax({
            type: 'POST',
            url: 'savetemplate.php',
            data: {
                pngimageData: pngdataURL,
                path: path,
                jsonData: jsonData,
                templateid: loadedtemplateid
            },
            success: function(msg) {
                getTemplates('', true);
				$(".preloader").hide();
            }
        })
    } else if(totalsvgs == convertedsvgs && loadedtemplateid == 0) {
        issavetemplate = false;
        issaveastemplate = true;
		$(".preloader").hide();
    }
}


function saveAsTemplateFile() {
    if (totalsvgs == convertedsvgs) {
        issaveastemplate = false;
        var jsonCanvasArray = [];
        var width = document.getElementById("loadCanvasWid").value,
            height = document.getElementById("loadCanvasHei").value,
            rows = document.getElementById("numOfcanvasrows").value,
            cols = document.getElementById("numOfcanvascols").value;
        //inch to pixel
        width = width * 96;
        height = height * 96;
        var wh = '{\"width\": ' + width + ', \"height\": ' + height + ', \"rows\": ' + rows + ', \"cols\": ' + cols + '}';
        jsonCanvasArray.push(wh);
        var firstcanvas;
        for (var i = 0; i < canvasindex; i++) {
            if (!canvasarray[i]) continue;
            canvasarray[i].deactivateAll().renderAll();
            if ($("#divcanvas" + i).is(":visible")) {
                if (!firstcanvas || (firstcanvas.getObjects().length < canvasarray[i].getObjects().length)) firstcanvas = canvasarray[i];
                jsonCanvasArray.push(canvasarray[i].toDatalessJSON());
            }
        }

        var jsonData = JSON.stringify(jsonCanvasArray);
        var pngdataURL = firstcanvas.toDataURL("image/png");
        var filename = $('#templatename').val();
        var categoryId = $('#template_category option:selected').val();
        var path = "templates";

        $.ajax({
            type: 'POST',
            url: 'saveastemplate.php',
            data: {
                pngimageData: pngdataURL,
                path: path,
                filename: filename,
                category: categoryId,
                jsonData: jsonData
            },
            success: function(msg) {
                getTemplates('', true);
				$(".preloader").hide();
            }
        })
    }
}

function savetextfromselection() {
    var actobj = canvas.getActiveObject();
    var actgroupobjs = canvas.getActiveGroup();
    if (actobj && actobj.type == 'textbox') {
        var clone = actobj.clone();
        var jsonData = JSON.stringify(clone.toJSON());
        var pngdataURL = clone.toDataURL("image/png");
        console.log(jsonData);
        var path = "uploads/savetext/";
        var filename = $('#textname').val();
        var categoryId = $('#text_category option:selected').val();
        $.ajax({
            type: 'POST',
            url: 'savetext.php',
            data: {
                path: path,
                pngimageData: pngdataURL,
                filename: filename,
                category: categoryId,
                jsonData: jsonData
            },
            success: function(msg) {
                getTexts('');
            }
        })
    } else if (actgroupobjs) {
        var jsonData = "";
        var objects = actgroupobjs.getObjects();
        jsonData += JSON.stringify(actgroupobjs.toJSON());
        var pngdataURL = actgroupobjs.toDataURL("image/png");
        console.log(jsonData);
        var path = "uploads/savetext/";
        var filename = $('#textname').val();
        var categoryId = $('#text_category option:selected').val();
        $.ajax({
            type: 'POST',
            url: 'savetext.php',
            data: {
                path: path,
                pngimageData: pngdataURL,
                filename: filename,
                category: categoryId,
                jsonData: jsonData
            },
            success: function(msg) {
                getTexts('');
            }
        })
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Text object, you wish to save.');
    }
}

function saveelementsfromselection() {
    var actobj = canvas.getActiveObject();
    var actgroupobjs = canvas.getActiveGroup();
    tempcanvas.clear();
    if (actobj) {
        if (fabric.util.getKlass(actobj.type).async) {
            actobj.clone(function(clone) {
                tempcanvas.width = clone.width * clone.scaleX;
                tempcanvas.height = clone.height * clone.scaleY;
                clone.originX = 'center';
                clone.originY = 'center';
                tempcanvas.add(clone);
                clone.center();
                var svgData = tempcanvas.toSVG();
                var jsonData = JSON.stringify(clone.toJSON());
                saveassvg(svgData, jsonData);
            });
        } else {
            var clone = actobj.clone();
            tempcanvas.width = clone.width * clone.scaleX;
            tempcanvas.height = clone.height * clone.scaleY;
            clone.originX = 'center';
            clone.originY = 'center';
            tempcanvas.add(clone);
            clone.center();
            var svgData = tempcanvas.toSVG();
            var jsonData = JSON.stringify(clone.toJSON());
            saveassvg(svgData, jsonData);
        }
    } else if (actgroupobjs) {
        tempcanvas.width = actgroupobjs.width * actgroupobjs.scaleX;
        tempcanvas.height = actgroupobjs.height * actgroupobjs.scaleY;
        var totalobjs = actgroupobjs.getObjects().length;
        var loadedobjs = 0;
        var jsonData = "";
        actgroupobjs.forEachObject(function(object) {
            if (fabric.util.getKlass(object.type).async) {
                object.clone(function(clone) {
                    tempcanvas.add(clone);
                    clone.setLeft(clone.left + tempcanvas.width / 2);
                    clone.setTop(clone.top + tempcanvas.height / 2);
                    loadedobjs++;
                    if (loadedobjs >= totalobjs) {
                        var svgData = tempcanvas.toSVG();
                        var objects = actgroupobjs.getObjects();
                        jsonData += JSON.stringify(actgroupobjs.toJSON());
                        saveassvg(svgData, jsonData);
                    }
                });
            } else {
                var clone = object.clone();
                tempcanvas.add(clone);
                clone.setLeft(clone.left + tempcanvas.width / 2);
                clone.setTop(clone.top + tempcanvas.height / 2);                
                loadedobjs++;
                if (loadedobjs >= totalobjs) {
                    var svgData = tempcanvas.toSVG();
                    var objects = actgroupobjs.getObjects();
                    jsonData += JSON.stringify(actgroupobjs.toJSON());
                    saveassvg(svgData, jsonData);
                }
            }
        });
    } else {
        alert('Please select the object, you wish to save.');
    }
}

function saveassvg(svgData, jsonData) {
    console.log(jsonData)
    var filename = $('#elmtname').val();
    var categoryId = $('#elmt_category option:selected').val();
    var path = "uploads/";
    $.ajax({
        type: 'POST',
        url: 'saveassvg.php',
        data: {
            path: path,
            filename: filename,
            svgData: svgData,
            jsonData: jsonData,
            category: categoryId,
        },
        success: function(msg) {
            getcatimages('');
        }
    })
}

function proceed_savetemplate() {
    resetZoom();
    canvas.deactivateAllWithDispatch().renderAll();
    processSVGs();
}

function downloadImage() {
	$(".preloader").show();
	$(".preloader").fadeIn("slow");

    resetZoom();
    $('#publishModal').modal('hide');
    $("#spinnerModal").modal('show');
    var cwidth = document.getElementById("loadCanvasWid").value;
    var cheight = document.getElementById("loadCanvasHei").value;
    var cols = document.getElementById("numOfcanvascols").value;
    var rows = document.getElementById("numOfcanvasrows").value;
    //inch to pixel
    cwidth = cwidth * 96;
    cheight = cheight * 96;
    var buffer = document.getElementById("outputcanvas");
    var buffer_context = buffer.getContext("2d");
    buffer.width = parseInt(cwidth) * parseInt(cols);
    var hiddencanvascount = parseInt(cols) * parseInt(rows) * (pageindex + 1) - $(".divcanvas:visible").length;
    buffer.height = parseInt(cheight) * ((parseInt(rows) * (pageindex + 1)) - hiddencanvascount/parseInt(cols));

    var h = 0;
    var writtenpages = 0;
    var processpages = 0;
    var rowcount = 0;
    var colcount = 0;
    for (var i = 0; i < canvasindex; i++) {
        if (!canvasarray[i]) continue;

        hideshowobjects(canvasarray[i], false);
        canvasarray[i].deactivateAll().renderAll();
        var ito = getinfotextobj(canvasarray[i]);
        if (ito) ito.opacity = 0;
        if ($("#divcanvas" + i).is(":visible")) {
            processpages++;
            if (colcount >= cols) {
                colcount = 0;
                rowcount++;
            }
            w = cwidth * colcount;
            h = cheight * rowcount;
            colcount++;
            (function(li, c, r) {
                var img = new Image();
                img.onload = function() {
                    buffer_context.drawImage(this, c, r);
                    writtenpages++;
                    if (writtenpages == processpages) {
                        var jpegdataURL = buffer.toDataURL("image/jpeg");
                        jpegdataURL = jpegdataURL.replace('data:image/jpeg;base64,', '');
                        var jsonCanvas = canvas.toDatalessJSON();;
                        var currentTime = new Date();
                        var month = currentTime.getMonth() + 1;
                        var day = currentTime.getDate();
                        var year = currentTime.getFullYear();
                        var hours = currentTime.getHours();
                        var minutes = currentTime.getMinutes();
                        var seconds = currentTime.getSeconds();
                        var filename = month + '' + day + '' + year + '' + hours + '' + minutes + '' + seconds;
                        var path = "uploads/savetemplate/";
                        $.ajax({
                            type: 'POST',
                            url: 'saveimage.php',
                            data: {
                                jpegimageData: jpegdataURL,
                                path: path,
                                filename: filename
                            },
                            success: function(msg) {
                                window.location.href = 'downloadfile.php?file=uploads/savetemplate/' + filename + '.jpeg';
                                setTimeout(function() {
                                    deleteImage(msg);
                                }, 8000);
								$(".preloader").hide();

                                hideshowobjects(canvasarray[li], true);
                            }
                        })
                    }
                };
                img.src = canvasarray[li].toDataURL("image/png");
            })(i, w, h);
        }
    }
}

function hideshowobjects(lcanvas, showflag) {

    var objs = lcanvas.getObjects().map(function(o) {
        if(!o.selectable && !o.bg) {
            o.opacity = showflag;
        }
        return o;
    });
    
    canvas.renderAll();
}

function savesvg(svgobj) {    
    tempcanvas.clear();
    (function(lsvgobj) {
        if (fabric.util.getKlass(lsvgobj.type).async) {
            lsvgobj.clone(function(clone) {
                tempcanvas.width = clone.width * clone.scaleX;
                tempcanvas.height = clone.height * clone.scaleY;
                clone.originX = 'center';
                clone.originY = 'center';
                clone.angle = 0;
                tempcanvas.add(clone);
                clone.center();
                svgData = tempcanvas.toSVG();
                console.log(svgData);
                //save new svg to server
                var filename = Math.floor((Math.random() * 100000) + 1); //for unique file name.
                var path = "newsvgs/";
                lsvgobj.visible = path + filename + '.svg';
				
                $.ajax({
                    type: 'POST',
                    url: 'savesvg.php',
                    data: {
                        path: path,
                        filename: filename,
                        svgData: svgData
                    },
                    success: function(msg) {
                        convertedsvgs++;
                        setTimeout(function() {
                            deleteImage(msg);
                        }, 8000);
                        if (isdownloadpdf) downloadPdf();
                        if (issaveastemplate) saveAsTemplateFile();
                        if (issavetemplate) saveTemplateFile();
                    }
                })
            });
        }
    })(svgobj);
    if (isdownloadpdf) downloadPdf();
    if (issaveastemplate) saveAsTemplateFile();
    if (issavetemplate) saveTemplateFile();
}
var savecrop = false;

function downloadPdf() {
    if (totalsvgs == convertedsvgs) {
        isdownloadpdf = false;
        if ($('input#savecrop').is(':checked')) {
            savecrop = true;
        }
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var filename = month + '' + day + '' + year + '' + hours + '' + minutes + '' + seconds;
        filename = filename + ".pdf";
        var jsonCanvasArray = [];
        for (var i = 0; i < canvasindex; i++) {
            if ($("#divcanvas" + i).is(":visible")) {
                hideshowobjects(canvasarray[i], false);
                //jsonCanvasArray.push(canvasarray[i].toDatalessJSON());                
                jsonCanvasArray.push(canvasarray[i].toSVG());
            }
        }
        var jsonData = JSON.stringify(jsonCanvasArray);
        console.log(jsonData);
        var cwidth = document.getElementById("loadCanvasWid").value;
        var cheight = document.getElementById("loadCanvasHei").value;
        var rows = document.getElementById("numOfcanvasrows").value;
        var cols = document.getElementById("numOfcanvascols").value;
        //inch to pixel
        cwidth = cwidth * 96;
        cheight = cheight * 96;
        var path = "uploads/savetemplate/";
        $.ajax({
            type: 'POST',
            url: 'pdf.php',
            data: {
                filename: filename,
                jsonData: jsonData,
                cwidth: cwidth,
                cheight: cheight,
                rows: rows,
                cols: cols,
                savecrop: savecrop
            },
            success: function(msg) {
                window.location.href = "downloadfile.php?file=" + msg;
                savecrop = false;
                setTimeout(function() {
                    deleteImage(msg);
                }, 8000);
                for (var i = 0; i < canvasindex; i++) {
                    if ($("#divcanvas" + i).is(":visible")) {
                        hideshowobjects(canvasarray[i], true);
                    }
                }
                $("#spinnerModal").modal('hide');
            }
        })
    }
}

function processSVGs() {
    totalsvgs = 0;
    convertedsvgs = 0;
    $('#publishModal').modal('hide');
    $('#pdfdownloadModal').modal('hide');
    $("#spinnerModal").modal('show');
    for (var i = 0; i < canvasindex; i++) {
        if ($("#divcanvas" + i).is(":visible")) {
            var objects = canvasarray[i].getObjects();
            for (var j = 0; j < objects.length; j++) {
                if (objects[j] && objects[j].type == 'path-group') {
                    totalsvgs++;
                    savesvg(objects[j]);
                }
            }
        }
    }
    if (isdownloadpdf) downloadPdf();
    if (issaveastemplate) saveAsTemplateFile();
    if (issavetemplate) saveTemplateFile();
}

function deleteImage(file_name) {
    $.ajax({
        type: 'POST',
        url: 'deleteimage.php',
        url: 'deleteimage.php',
        data: {
            filename: file_name,
        },
        success: function(msg) {
        }
    });
}
// JavaScript Document
$("#addCategory").click(function() {
    $("#Addcategoryodal").openModal();
});
$("#addTemplateCategory").click(function() {
    $("#AddTemplatecategoryModal").openModal();
});
$("#addBGCategory").click(function() {
    $("#AddBGcategoryodal").openModal();
});
$("#addTextCategory").click(function() {
    $("#AddTextcategoryModal").openModal();
});
$("#saveText").click(function() {
    $('#savetext_modal').openModal();
});
$("#saveElement").click(function() {
    $('#saveelement_modal').openModal();
});
$("#addElement").click(function() {
    $("#AddelementModal").openModal();
});

$("#upload_image").click(function() {
    $("#AdduploadimageModal").modal('show');
});

$("#replace_image").click(function() {
    isReplaceImage = true;
    $("#AdduploadimageModal").modal('show');
});
$("#addBackground").click(function() {
    $("#AddbackgroundModal").openModal();
});
$("#deletetempcat").click(function() {
    var sel_tempcatid = $("#tempcat-select option:selected").val();
    if (sel_tempcatid != '') {
        $("#Del_templatecatmodal").openModal();
    } else {
        alert('Please select the Category, you wish to delete.');
    }
});
$("#deleteCategory").click(function() {
    var sel_catid = $("#cat-select option:selected").val();
    if (sel_catid != '') {
        $("#Del_catmodal").openModal();
    } else {
        alert('Please select the Category, you wish to delete.');
    }
});
$("#deleteBGCategory").click(function() {
    var sel_bgcatid = $("#bgcat-select option:selected").val();
    if (sel_bgcatid != '') {
        $("#Del_bgcatmodal").openModal();
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Category, you wish to delete.');
    }
});
$("#deletetextcat").click(function() {
    var sel_textcatid = $("#textcat-select option:selected").val();
    if (sel_textcatid != '') {
        $("#Del_textcatmodal").openModal();
    } else {
       alert('Please select the Category, you wish to delete.');
    }
});
$('#deleteEle').click(function() {
    $('#spinnerModal').modal('hide');
    var selectedImg = [];
    $('.catimg-checkbox:checked').each(function() {
        selectedImg.push($(this).val());
    });
    if (selectedImg != '') {
        selectedImg = selectedImg.join(',');
        $.post("actions/deleteElement.php", {
            "elementid": selectedImg
        }, function(data) {
            $('#spinnerModal').modal('hide');
            $('#catimage_container').empty();
            getcategory();
            getcatimages('');
            document.getElementById("successMessage").innerHTML = data;
            $('#successModal').modal('show');
        });
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Element(s), you wish to delete.');
    }
});
$('#deleteText').click(function() {
    $('#spinnerModal').modal('hide');
    var selectedTxt = [];
    $('.textimg-checkbox:checked').each(function() {
        selectedTxt.push($(this).val());
    });
    if (selectedTxt != '') {
        selectedTxt = selectedTxt.join(',');
        $.post("actions/deleteText.php", {
            "textid": selectedTxt
        }, function(data) {
            $('#spinnerModal').modal('hide');
            $('#text_container').empty();
            getTexts();
            document.getElementById("successMessage").innerHTML = data;
            $('#successModal').modal('show');
        });
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Text(s), you wish to delete.');
    }
});
$('#deleteBackground').click(function() {
    $('#spinnerModal').modal('hide');
    var selectedImg = [];
    $('.bgimg-checkbox:checked').each(function() {
        selectedImg.push($(this).val());
    });
    if (selectedImg != '') {
        selectedImg = selectedImg.join(',');
        $.post("actions/deleteBackground.php", {
            "bgid": selectedImg
        }, function(data) {
            $('#spinnerModal').modal('hide');
            $('#background_container').empty();
            //IsBgselected = true;
            getBgcategory();
            getbgimages('');
            document.getElementById("successMessage").innerHTML = data;
            $('#successModal').modal('show');
        });
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Background(s), you wish to delete.');
    }
});
$('#deleteTemp').click(function() {
    $('#spinnerModal').modal('hide');
    var selectedTemp = [];
    $('.templateimg-checkbox:checked').each(function() {
        selectedTemp.push($(this).val());
    });

    if (selectedTemp != '') {
        selectedTemp = selectedTemp.join(',');
        $.post("actions/deleteTemplate.php", {
            "templateid": selectedTemp
        }, function(data) {
            $('#spinnerModal').modal('hide');
            document.getElementById("successMessage").innerHTML = data;
            $('#successModal').modal('show');
            $('#template_container').empty();
            getTemplates();
        });
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Flyer(s), you wish to delete.');
    }
});

function getcategory() {
    $.ajax({
        type: "GET",
        url: "actions/getCategory.php",
        success: function(data) {
            $("#cat-select").empty();
            $("#cat-select").html(data);
			$("#cat-select").material_select();
            $("#element_category").empty();
            $("#element_category").html(data);
			$("#element_category").material_select();
            $("#elmt_category").empty();
            $("#elmt_category").html(data);
            $("#elmt_category").material_select();
        }
    });
}

function gettempcategory() {
    $.ajax({
        type: "GET",
        url: "actions/gettempCategory.php",
        success: function(data) {
            $("#tempcat-select").empty();
            $("#tempcat-select").html(data);
            $("#tempcat-select").material_select();
        }
    });
}
function gettempcatmat() {
    $.ajax({
        type: "GET",
        url: "actions/gettempCatmat.php",
        success: function(data) {
            $("#template_category").empty();
            $("#template_category").html(data);
            $('#template_category').material_select();
        }
    });
}

function getBgcategory() {
    $.ajax({
        type: "GET",
        url: "actions/getBgCategory.php",
        success: function(data) {
            $("#bgcat-select").empty();
            $("#bgcat-select").html(data);
            $("#bgcat-select").material_select();
            $("#bg_category").empty();
            $("#bg_category").html(data);
            $('#bg_category').material_select();
        }
    });
}

function getTextcategory() {
    $.ajax({
        type: "GET",
        url: "actions/getTextCategory.php",
        success: function(data) {
            $("#textcat-select").empty();
            $("#textcat-select").html(data);
            $("#textcat-select").material_select();
			$("#text_category").empty();
            $("#text_category").html(data);
            $('#text_category').material_select();
        }
    });
}

function getTemplatesName() {
    $.ajax({
        type: "GET",
        url: "actions/getTemplate_name.php",
        success: function(data) {
            $("#template-select").empty();
            $("#template-select").html(data);
        }
    });
}
<!-- Category form validate -->
$(document).ready(function() {
    $('#addcategoryform').validate({
        rules: {
            category: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) { // <- only fires when form is valid
            var newcategory = $("#category").val();
			$.ajax({
				type: 'POST',
				url: 'actions/addcategory.php',
				data: {
					categoty: newcategory
				},
				success: function(data) {
					getcategory();
					getcatimages('');
				}
			});
        }
    });
});
<!-- Save Template  form validate -->
$(document).ready(function() {
    $('#savetemplateform').validate({
        rules: {
            template_category: {
                required: true
            },
            templatename: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) {
			$(".preloader").show();
			$(".preloader").fadeIn("slow");
			proceed_savetemplate();
        }
    });
});

function proceed_tempcatdelete() {
    var sel_tmpcatid = $("#tempcat-select option:selected").val();
	$.ajax({
		type: 'POST',
		url: 'actions/deletetempcategory.php',
		data: {
			categoty: sel_tmpcatid
		},
		success: function(data) {
			getTemplates();
			gettempcategory('');
		}
	});
}
function proceed_textcatdelete() {
    var sel_textcatid = $("#textcat-select option:selected").val();
	$.ajax({
		type: 'POST',
		url: 'actions/deletetextcategory.php',
		data: {
			textcategoty: sel_textcatid
		},
		success: function(data) {
			getTextcategory();
		}
	});
}

function proceed_catdelete() {
    var sel_catid = $('#cat-select option:selected').val();
	$.ajax({
		type: 'POST',
		url: 'actions/deletecategory.php',
		data: {
			categoty: sel_catid
		},
		success: function(data) {
			getcategory();
			getcatimages('');
		}
	});

}

function proceed_Bgcatdelete() {
    var sel_bgcatid = $("#bgcat-select option:selected").val();
	$.ajax({
		type: 'POST',
		url: 'actions/deletebgcategory.php',
		data: {
			bgcategoty: sel_bgcatid
		},
		success: function(data) {
			getBgcategory();
			getbgimages('');
		}
	});

}

$(document).ready(function() {
    $('#addbgcategoryform').validate({
        rules: {
            bgcategory: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) { // <- only fires when form is valid
            var newcategory = $("#bgcategory").val();
            $('#AddBGcategoryodal').modal('hide');
            $("#spinnerModal").modal('show');
            $.post("actions/addcategory.php", {
                "bgcategoty": newcategory
            }, function(data) {
                $('#spinnerModal').modal('hide');
                $('#background_container').empty();
                getBgcategory();
                getbgimages('');
                document.getElementById("successMessage").innerHTML = data;
                $('#successModal').modal('show');
                $('#addbgcategoryform')[0].reset();
            });
        }
    });
});
<!-- Teremplate Category form validate -->
$(document).ready(function() {
    $('#addtemplatecategoryform').validate({
        rules: {
            templatecategory: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) {
		// <- only fires when form is valid
            var tempcategory = $("#templatecategory").val();
			$.ajax({
				type: 'POST',
				url: 'actions/addcategory.php',
				data: {
					templatecat: tempcategory
				},
				success: function(templateid) {
					gettempcategory();
					getTemplates('');
					 $('#addtemplatecategoryform')[0].reset();
				}
			});
        }
    });
});
$(document).ready(function() {
    $('#addtextcategoryform').validate({
        rules: {
            textcategory: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) { // <- only fires when form is valid
            var newTxtcategory = $("#textcategory").val();
			$.ajax({
				type: 'POST',
				url: 'actions/addcategory.php',
				data: {
					textcategoty: newTxtcategory
				},
				success: function(templateid) {
					getTextcategory('');
					$('#addtextcategoryform')[0].reset();
				}
			});
        }
    });
});


<!-- File Upload --->
function readIMG(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#previewImage').show();
            $('#previewImage').attr('src', e.target.result).width(150).height(150);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
var files;
$('#element_img').on('change', prepareUpload);

function prepareUpload(event) {
    files = event.target.files;
}

function uploadimage() {
    var data = new FormData();
    //adding file content to data
    $.each(files, function(key, value) {
        data.append("element_img", value);
    });
    $.ajax({
        url: 'upload.php?files',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(data) {
            alert(data)
        }
    });
}
<!-- File Upload --->
function readBGIMG(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#previewBGImage').show();
            $('#previewBGImage').attr('src', e.target.result).width(150).height(150);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
var bgfiles;
$('#bg_img').on('change', prepareBGUpload);

function prepareBGUpload(event) {
    bgfiles = event.target.files;
}

function uploadBgimage() {
    var data = new FormData();
    //adding file content to data
    $.each(bgfiles, function(key, value) {
        data.append("bg_img", value);
    });
    $.ajax({
        url: 'upload.php?files',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(data) {
            alert(data)
        }
    });
}

function addNewCanvasPage(dupflag, pageid) {
    pageindex++;
    $("#canvaspages").append("<div class='page' id='page" + pageindex + "'></div>");
    addCanvasToPage(dupflag, pageid);
}

function addNewCanvas() {
    var ito = getinfotextobj();
    if (ito) ito.opacity = 0;
    canvas.deactivateAllWithDispatch().renderAll();
    $("#page" + pageindex).append("<td align='center' id='divcanvas" + canvasindex + "' onmousedown='javascript:selectCanvas(this.id);' onClick='javascript:selectCanvas(this.id);' oncontextmenu='javascript:selectCanvas(this.id);' class='divcanvas'><div class='canvascontent' ><canvas id='canvas" + canvasindex + "' class='canvas'></canvas></div></td>");
    canvas = new fabric.Canvas('canvas' + canvasindex);
    canvas.index = 0;
    canvas.state = [];
    canvas.rotationCursor = 'url("/gentellala/images/rotatecursor2.png") 10 10, crosshair';
    canvas.backgroundColor = '#ffffff';
    canvas.selectionColor = 'rgba(255,255,255,0.3)';
    canvas.selectionBorderColor = 'rgba(0,0,0,0.1)';
    canvas.hoverCursor = 'pointer';
    canvasarray.push(canvas);
    var width = document.getElementById("loadCanvasWid").value,
        height = document.getElementById("loadCanvasHei").value;
    //inch to pixel
    width = width * 96;
    height = height * 96;
    setCanvasWidthHeight(width * canvasScale, height * canvasScale);
    
    initCanvasEvents(canvas);
    initAligningGuidelines(canvas)
    initCenteringGuidelines(canvas);
    initKeyboardEvents();

    addinfotext();
    canvas.calcOffset();
    canvas.renderAll();
    state = [];
    index = 0;
    currentcanvasid = canvasindex;
    canvasindex++;
    saveState();
}

function selectCanvas(id) {
    var ito = getinfotextobj();
    if (ito) ito.opacity = 0;
    id = id.replace("divcanvas", "");
    if (currentcanvasid == parseInt(id)) return;
    
    savestateaction = true;

    canvas.deactivateAllWithDispatch().renderAll();
    for (var i = 0, j = 0; i < canvasindex; i++) {
        $("#canvas" + i).css("box-shadow", "");
    }
    $("#canvas" + id).css("box-shadow", "3px 3px 3px #888888");
    if (currentcanvasid == parseInt(id)) return;

    currentcanvasid = parseInt(id);
    var tempcanvas = canvasarray[parseInt(id)];
    if (tempcanvas) canvas = tempcanvas;

    var obj = canvas.getActiveObject();
    if(obj)
        canvas.setActiveObject(obj);

    canvas.renderAll();
}

function adjustIconPos(id) {
    //set duplicate / delete icons left top positions.
    var p = $("#page" + id);
    var position = p.position();
    // .outerWidth() takes into account border and padding.
    var width = p.outerWidth();
    var height = p.outerHeight();
    $("#duplicatecanvas" + id).css({
        position: "absolute",
        top: (position.top + height / 2) + "px",
        left: (position.left + width + 10) + "px"
    }).show();
    $("#deletecanvas" + id).css({
        position: "absolute",
        top: (position.top + height / 2 + 25) + "px",
        left: (position.left + width + 10) + "px"
    }).show();
    if ($(".page:visible").length == 1) {
        $('.deletecanvas').css('display', 'none');
    }
}
$(".deletecanvas").click(function() {
    var id = this.id;
    id = id.replace("deletecanvas", "");
    var pageid = id;
    id = "#page" + id;
    //$(id).detach();
    $(id).hide();
    $("#canvaspages").find(".page").each(function() {
        var nextid = this.id;
        nextid = nextid.replace("page", "");
        adjustIconPos(nextid);
    });
    if ($(".page:visible").length == 1) {
        $('.deletecanvas').css('display', 'none');
    }
});

function openTemplate(jsons) {
    var jsonCanvasArray = JSON.parse(jsons);
    if (!jsonCanvasArray || jsonCanvasArray.length <= 0) return;
    var wh = jsonCanvasArray[0];
    wh = JSON.parse(wh);
    //pixel to inch
    document.getElementById("loadCanvasWid").value = parseFloat(wh.width / 96);
    document.getElementById("loadCanvasHei").value = parseFloat(wh.height / 96);
    document.getElementById("numOfcanvasrows").value = parseInt(wh.rows);
    document.getElementById("numOfcanvascols").value = parseInt(wh.cols);
    var rc = parseInt(wh.rows) * parseInt(wh.cols);
    $("#canvaspages").html('');
    pageindex = 0;
    canvasindex = 0;
    canvasarray = [];
    for (var i = 0; i < (jsonCanvasArray.length - 1) / rc; i++) {
        pageindex = i;
        $("#canvaspages").append("<div class='page' id='page" + pageindex + "'></div>");
        addCanvasToPage(false, i, jsonCanvasArray);
    }
    setCanvasSize();

    WebFont.load({
        google: {
          families: ['Alex Brush', 'Alfa Slab One', 'Allura', 'AMATIC SC', 'Archivo Narrow', 'Bevan', 'Bitter', 'Cabin Sketch', 'Cabin', 'Calligraffitti', 'Cinzel', 'Comforta', 'Crimson Text', 'Dancing Script', 'Droid Sans', 'Droid Seriff', 'Fjalla One', 'Gruppo', 'Montserrat', 'Open Sans', 'Oswald', 'PT Sans narrow', 'PT sans', 'Pt Seriff']
        },
		active: function() {
			for (var i = 0; i < canvasindex; i++) {
				(function(lcanvas, json) {
					lcanvas.clear();
					lcanvas.loadFromJSON(json, lcanvas.renderAll.bind(lcanvas));
					lcanvas.renderAll();
		
					initCanvasEvents(lcanvas);
					initAligningGuidelines(lcanvas);
					initCenteringGuidelines(lcanvas);

					saveState();
				})(canvasarray[i], jsonCanvasArray[i+1]);
			}

			initKeyboardEvents();
		    $(".preloader").hide();
			setCanvasSize();
		},
        classes: false
    });
}

$(".duplicatecanvas").click(function() {
    var id = this.id;
    id = id.replace("duplicatecanvas", "");
    addNewCanvasPage(true, id);
});

function initKeyboardEvents() {

    $('#canvaspages').keyup(function(e) {

        switch (e.keyCode) {
        case 17:
            remstring = 'ctrl ';
            break;

        case 67:
            remstring = ' c';
            break;

        case 88:
            remstring = ' x';
            break;

        case 86:
            remstring = ' v';
            break;

        default:
            break;
        }
    
        if (keystring.indexOf(remstring) != -1)
            keystring = keystring.replace(remstring, '');
    });

    $('#canvaspages').keydown(function(e) {
        
        if(e.target && e.target.nodeName == 'INPUT') return false;

        var activeobject = canvas.getActiveObject();
        if (!activeobject) activeobject = canvas.getActiveGroup();
        if (!activeobject && !activeObjectCopy && !activeGroupCopy) return;
        if (activeobject && activeobject.isEditing) return;
        switch (e.keyCode) {
            case 8:
                e.preventDefault();
                deleteItem();
                break;
            case 17://ctrl
                e.preventDefault();
                keystring = 'ctrl';
                break;
            case 173:
            case 109: // -
                e.preventDefault();
                if (e.ctrlKey || e.metaKey) {
                    return objManip('zoomBy-z', -10);
                }
                return true;
            case 61:
            case 107: // +
                if (e.ctrlKey || e.metaKey) {
                    return demo.objManip('zoomBy-z', 10);
                }
                return true;
            case 37: // left
                if (e.shiftKey) {
                    return objManip('zoomBy-x', -1);
                    return false;
                }
                if (e.ctrlKey || e.metaKey) {
                    return objManip('angle', -1);
                }
                return objManip('left', -1);
            case 39: // right
                if (e.shiftKey) {
                    return objManip('zoomBy-x', 1);
                    return false;
                }
                if (e.ctrlKey || e.metaKey) {
                    return objManip('angle', 1);
                }
                return objManip('left', 1);
            case 38: // up
                if (e.shiftKey) {
                    return objManip('zoomBy-y', -1);
                }
                if (!e.ctrlKey && !e.metaKey) {
                    return objManip('top', -1);
                }
                return true;
            case 40: // down
                if (e.shiftKey) {
                    return objManip('zoomBy-y', 1);
                }
                if (!e.ctrlKey && !e.metaKey) {
                    return objManip('top', 1);
                }
                return true;

            case 67: // ctrl + c

                e.preventDefault();
                keystring += ' c';
                if (keystring == "ctrl c") {
                    copyobjs();
                }
                break;

            case 88: // ctrl + x
                e.preventDefault();
                keystring += ' x';
                if (keystring == "ctrl x") {
                    cutobjs();
                }
                break;

            case 86: // ctrl + v
                e.preventDefault();
                keystring += ' v';
                if (keystring == "ctrl v") {
                    pasteobjs();
                }
                break;

            case 46:
                e.preventDefault();
                deleteItem();

                break;
            default:
                break;
        }
        canvas.renderAll();  
        return true;
    });
}

<!-- Element form validate -->
$(document).ready(function() {
    sortUnorderedList("dropdown4");
    $("#dropdown4 li a").click(function() {
        var selText = $(this).text();
        var activeObject = canvas.getActiveObject();
        if (activeObject && /textbox/.test(activeObject.type)) {
            selectedFont = selText;
            setStyle(activeObject, 'fontFamily', selectedFont);
            canvas.renderAll();
        }
        $(this).parents('.btn-group').find('.dropdown-toggle').html('<span style="overflow:hidden"><font face="' + selText + '" size="3">' + selText + '</font>&nbsp;&nbsp;<span class="caret"></span></span>');
    });
    $('#addelementform').validate({
        rules: {
            element_category: {
                required: true
            },
            element_name: {
                required: true
            },
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function(element) {
            element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) { // <- only fires when form is valid
            var newelmcategory = $("#element_category").val();
            var newelementName = $("#element_name").val();
            var newelement = $("#element_img").val();
			if (!(/\.(svg|jpg|jpeg|png)$/i).test(newelement)) {              
				alert('Only svg, jpeg and png files allowed!');       
            } else {
                var elementpath = 'uploads/' + newelement;
				$.ajax({
					type: 'POST',
					url: 'actions/addelement.php',
					data: {
						elementCategoty: newelmcategory,
						elementName: newelementName,
						element: elementpath
					},
					success: function(msg) {
						uploadimage();
						setTimeout(function() {
							getcategory();
							getcatimages('');
						}, 2000);
						 $('#addelementform')[0].reset();
					}
				});

            }
        }
    });
});
$('#addbackgroundform').validate({
    rules: {
        bg_category: {
            required: true
        },
        bg_name: {
            required: true
        },
    },
    highlight: function(element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
        element.text('').addClass('valid').closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    submitHandler: function(form) { // <- only fires when form is valid
        var newbgcategory = $("#bg_category").val();
        var newbgName = $("#bg_name").val();
        var newbackground = $("#bg_img").val();
        var bgpath = 'uploads/' + newbackground;
		$.ajax({
			type: 'POST',
			url: 'actions/addbackground.php',
			data: {
				bgCategoty: newbgcategory,
				bgName: newbgName,
				background: bgpath
			},
			success: function(msg) {
				uploadBgimage();
				setTimeout(function() {
					 getBgcategory();
					getbgimages('');
				}, 2000);
				 $('#addbackgroundform')[0].reset();
			}
		});
    }
});

function sortUnorderedList(ul, sortDescending) {
    if (typeof ul == "string") ul = document.getElementById(ul);
    // Idiot-proof, remove if you want
    if (!ul) {
       /* alert("The UL object is null!"); */
        return;
    }
    // Get the list items and setup an array for sorting
    var lis = ul.getElementsByTagName("LI");
    var vals = [];
    // Populate the array
    for (var i = 0, l = lis.length; i < l; i++) vals.push(lis[i].innerHTML);
    // Sort it
    vals.sort();
    // Sometimes you gotta DESC
    if (sortDescending) vals.reverse();
    // Change the list on the page
    for (var i = 0, l = lis.length; i < l; i++) lis[i].innerHTML = vals[i];
}

function loadTemplate(templateid) {
    $(".preloader").show();
	$(".preloader").fadeIn("slow");

    loadedtemplateid = templateid;
    deleteCanvasBg(canvas);
    canvas.clear();
    $.ajax({
        url: "loadtemplate.php",
        type: "get",
        data: {
            id: parseInt(templateid)
        },
        success: function(data) {
            console.log(data)
            if (data != "empty") {

                savestateaction = false;

                openTemplate(data)
                canvas.calcOffset();
                canvas.renderAll();

                savestateaction = true;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            switch (jqXHR.status) {
                case 400:
                    var excp = $.parseJSON(jqXHR.responseText).error;
                    console.log("UnableToComplyException:" + excp.message, 'warning');
                    break;
                case 500:
                    var excp = $.parseJSON(jqXHR.responseText).error;
                    console.log("PanicException:" + excp.message, 'panic');
                    break;
                default:
                    console.log("HTTP status=" + jqXHR.status + "," + textStatus + "," + errorThrown + "," + jqXHR.responseText);
            }
        }
    });
}

function loadText(textid) {
    $("#spinnerModal").modal('show');
    $.ajax({
        url: "loadtext.php",
        type: "get",
        data: {
            id: parseInt(textid)
        },
        success: function(data) {
            console.log(data)
            if (data != "empty") {
                var json = JSON.parse(data);
                var objects = json.objects;
                console.log(objects.length);
                for (var i = 0; i < objects.length; i++) {
                    var object = objects[i];
                    console.log(object)
                    if (object.type == 'textbox') {
                        var txtBox = new fabric.Textbox(object.text, object);
                        canvas.add(txtBox);
                        setControlsVisibility(txtBox);
                        txtBox.setCoords();
                        canvas.calcOffset();
                        txtBox.center();
                        saveState();
                        canvas.renderAll();
                    }
                    if (object.type == 'group') {
                        var group = object;
                        var groupleft = group.left;
                        var grouptop = group.top;
                        var grpobjects = group.objects;
                        for (var j = 0; j < grpobjects.length; j++) {
                            var object = grpobjects[j];
                            if (object.type == 'textbox') {
                                var txtBox = new fabric.Textbox(object.text, object);
                                canvas.add(txtBox);
                                txtBox.setLeft(txtBox.left + canvas.width / 2);
                                txtBox.setTop(txtBox.top + canvas.height / 2);
                                txtBox.setCoords();
                            }
                        }
                        canvas.calcOffset();
                        saveState();
                        canvas.renderAll();
                    }
                }
                $("#spinnerModal").modal('hide');
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            switch (jqXHR.status) {
                case 400:
                    var excp = $.parseJSON(jqXHR.responseText).error;
                    console.log("UnableToComplyException:" + excp.message, 'warning');
                    break;
                case 500:
                    var excp = $.parseJSON(jqXHR.responseText).error;
                    console.log("PanicException:" + excp.message, 'panic');
                    break;
                default:
                    console.log("HTTP status=" + jqXHR.status + "," + textStatus + "," + errorThrown + "," + jqXHR.responseText);
            }
        }
    });
}

function loadElement(elementid) {
    $("#spinnerModal").modal('show');
    $.ajax({
        url: "loadelement.php",
        type: "get",
        data: {
            id: parseInt(elementid)
        },
        success: function(data) {
            var json = JSON.parse(data);
            fabric.util.enlivenObjects([json], function(objects) {
                var origRenderOnAddRemove = canvas.renderOnAddRemove;
                canvas.renderOnAddRemove = false;
                objects.forEach(function(o) {
                    canvas.add(o);
                    o.setCoords();
                    o.center();
                    var items = o._objects;
                    o._restoreObjectsState();
                    canvas.remove(o);
                    for(var i = 0; i < items.length; i++) {
                      canvas.add(items[i]);
                    }
                });
                canvas.renderOnAddRemove = origRenderOnAddRemove;
                canvas.renderAll();
            });
            $("#spinnerModal").modal('hide');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            switch (jqXHR.status) {
                case 400:
                    var excp = $.parseJSON(jqXHR.responseText).error;
                    console.log("UnableToComplyException:" + excp.message, 'warning');
                    break;
                case 500:
                    var excp = $.parseJSON(jqXHR.responseText).error;
                    console.log("PanicException:" + excp.message, 'panic');
                    break;
                default:
                    console.log("HTTP status=" + jqXHR.status + "," + textStatus + "," + errorThrown + "," + jqXHR.responseText);
            }
        }
    });
}
var objectFlipHorizontalSwitch = document.getElementById('objectfliphorizontal');
if (objectFlipHorizontalSwitch) {
    objectFlipHorizontalSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if (activeObject.flipX) activeObject.flipX = false;
            else activeObject.flipX = true;
            canvas.renderAll();
            saveState();
        }
    };
}
var objectFlipVerticalSwitch = document.getElementById('objectflipvertical');
if (objectFlipVerticalSwitch) {
    objectFlipVerticalSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if (activeObject.flipY) activeObject.flipY = false;
            else activeObject.flipY = true;
            canvas.renderAll();
            saveState();
        }
    };
}
//Lock object
var objectLock = document.getElementById('objectlock');
if (objectLock) {
    objectLock.onclick = function() {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if (activeObject.lockMovementY) {
                activeObject.lockMovementY = activeObject.lockMovementX = activeObject.lockScalingY = activeObject.lockScalingX = false;
                activeObject.hasControls = true;
                activeObject.hoverCursor = 'pointer';
                activeObject.locked = false;
            } else {
                activeObject.lockMovementY = activeObject.lockMovementX = activeObject.lockScalingY = activeObject.lockScalingX = true;
                activeObject.hasControls = false;
                activeObject.hoverCursor = 'url("../img/lockcursor.png") 10 10, pointer';
                activeObject.locked = true;
                activeObject.lockedleft = activeObject.left;
                activeObject.lockedtop = activeObject.top;
            }
            canvas.renderAll();
            saveState();
        }
    };
}
//Changes opacity of active object
var ChangeOpacity = function() {
    var activeObject = canvas.getActiveObject();
    activeObject.setOpacity(co.getValue());
    canvas.renderAll();
    saveState();
};
var co = $("#changeopacity").slider().on('slide', ChangeOpacity).data('slider');
var clonebtn = document.getElementById('clone');
if (clonebtn) {
    clonebtn.onclick = function() {
        var activeObject = canvas.getActiveObject();
        if (!activeObject) activeObject = canvas.getActiveGroup();
        if (!activeObject) return;
        if (activeObject.type == "group") {
            activeObject.forEachObject(function(object) {
                cloneSelObject(object);
            });
        } else {
            cloneSelObject(activeObject);
        }
    }
}

function cloneSelObject(actobj) {
    if (fabric.util.getKlass(actobj.type).async) {
        actobj.clone(function(clone) {
            clone.set({
                left: actobj.getLeft() + 20,
                top: actobj.getTop() + 20
            });
            canvas.add(clone);
        });
    } else {
        canvas.add(actobj.clone().set({
            left: actobj.getLeft() + 20,
            top: actobj.getTop() +20
        }));
    }
}
var sendLayerBackSwitch = document.getElementById('sendbackward');
if (sendLayerBackSwitch) {
    sendLayerBackSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.sendBackwards(activeObject);
            canvas.renderAll();
            saveState();
        }
    }
}
var bringLayerFrontSwitch = document.getElementById('bringforward');
if (bringLayerFrontSwitch) {
    bringLayerFrontSwitch.onclick = function() {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.bringForward(activeObject);
            canvas.renderAll();
            saveState();
        }
    }
}
fabric.Cropzoomimage = fabric.util.createClass(fabric.Image, {
    type: 'cropzoomimage',
    zoomedXY: false,
    initialize: function(element, options) {
        options || (options = {});
        this.callSuper('initialize', element, options);
        this.set({
            orgSrc: element.src,
            cx: 0, // clip-x
            cy: 0, // clip-y
            cw: element.width, // clip-width
            ch: element.height // clip-height
        });
    },
    zoomBy: function(x, y, z, callback) {
        if (x || y) {
            this.zoomedXY = true;
        }
        this.cx += x;
        this.cy += y;
        if (z) {
            this.cw -= z;
            this.ch -= z / (this.width / this.height);
        }
        if (z && !this.zoomedXY) {
            // Zoom to center of image initially
            this.cx = this.width / 2 - (this.cw / 2);
            this.cy = this.height / 2 - (this.ch / 2);
        }
        if (this.cw > this.width) {
            this.cw = this.width;
        }
        if (this.ch > this.height) {
            this.ch = this.height;
        }
        if (this.cw < 1) {
            this.cw = 1;
        }
        if (this.ch < 1) {
            this.ch = 1;
        }
        if (this.cx < 0) {
            this.cx = 0;
        }
        if (this.cy < 0) {
            this.cy = 0;
        }
        if (this.cx > this.width - this.cw) {
            this.cx = this.width - this.cw;
        }
        if (this.cy > this.height - this.ch) {
            this.cy = this.height - this.ch;
        }
        this.rerender(callback);
    },
    rerender: function(callback) {
        var img = new Image(),
            obj = this;
        img.onload = function() {
            var canvas = fabric.util.createCanvasElement();
            canvas.width = obj.width;
            canvas.height = obj.height;
            canvas.getContext('2d').drawImage(this, obj.cx, obj.cy, obj.cw, obj.ch, 0, 0, obj.width, obj.height);
            img.onload = function() {
                obj.setElement(this);
                obj.applyFilters(canvas.renderAll);
                obj.set({
                    left: obj.left,
                    top: obj.top,
                    angle: obj.angle
                });
                obj.setCoords();
                if (callback) {
                    callback(obj);
                }
            };
            img.src = canvas.toDataURL('image/png');
        };
        img.src = this.orgSrc;
    },
    toObject: function() {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            orgSrc: this.orgSrc,
            cx: this.cx,
            cy: this.cy,
            cw: this.cw,
            ch: this.ch
        });
    }
});
fabric.Cropzoomimage.async = true;
fabric.Cropzoomimage.fromObject = function(object, callback) {
    fabric.util.loadImage(object.src, function(img) {
        fabric.Image.prototype._initFilters.call(object, object, function(filters) {
            object.filters = filters || [];
            var instance = new fabric.Cropzoomimage(img, object);
            if (callback) {
                callback(instance);
            }
        });
    }, null, object.crossOrigin);
};
zoomBy = function(x, y, z) {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.zoomBy(x, y, z, function() {
            canvas.renderAll()
        });
    }
};
objManip = function(prop, value) {
    var obj = canvas.getActiveObject();
    var grpobjs = canvas.getActiveGroup();
    if (!obj && !grpobjs) {
        return true;
    }
    switch (prop) {
        case 'zoomBy-x':
            obj.zoomBy(value, 0, 0, function() {
                canvas.renderAll()
            });
            break;
        case 'zoomBy-y':
            obj.zoomBy(0, value, 0, function() {
                canvas.renderAll()
            });
            break;
        case 'zoomBy-z':
            obj.zoomBy(0, 0, value, function() {
                canvas.renderAll()
            });
            break;
        default:
            if(obj && obj.lockMovementX == false) {
                obj.set(prop, obj.get(prop) + value);
            }
            if(grpobjs) {
                grpobjs.set(prop, grpobjs.get(prop) + value);
                grpobjs.setCoords();
            }
            break;
    }
    if (obj && ('left' === prop || 'top' === prop)) {
        obj.setCoords();
    }
    canvas.renderAll();
    return false;
};

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function addinfotext() {
    var itext = new fabric.Text('', {
        fontFamily: selectedFont,
        fontSize: 8 * 2,
        fill: 'black',
        scaleX: canvasScale,
        scaleY: canvasScale,
        selectable: false,
        hasControls: false,
        hasBorders: false,
        hasCorners: false,
        opacity: 0
    });
    itext.setCoords();
    canvas.add(itext);
    canvas.renderAll();
}

function getinfotextobj(lcanvas) {
    if (lcanvas) canvas = lcanvas;
    var objs = canvas.getObjects();
    var infotextobj;
    for (var i in objs) {
        if (objs[i].type == 'text') {
            infotextobj = objs[i];
            infotextobj.selectable = false;
        }
    }
    return infotextobj;
}

function cutobjs() {
    activeObjectCopy = canvas.getActiveObject();
    activeGroupCopy = canvas.getActiveGroup();
    if (activeObjectCopy || activeGroupCopy) {
        var jsonData;
        if (activeGroupCopy) {
            var jsonCanvas = activeGroupCopy.toJSON();
            jsonData = JSON.stringify(jsonCanvas);
        } else if (activeObjectCopy) {
            var jsonCanvas = activeObjectCopy.toJSON();
            jsonData = JSON.stringify(jsonCanvas);
        }
    }
    if (activeGroupCopy) {
        var objectsInGroup = activeGroupCopy.getObjects();
        canvas.discardActiveGroup();
        objectsInGroup.forEach(function(object) {
            canvas.remove(object);
        });
    } else if (activeObjectCopy) {
        canvas.remove(activeObjectCopy);
    }
}

function selectallobjs() {
    var objs = canvas.getObjects().map(function(o) {
        return o.set('active', true);
    });

    var objs = canvas.getObjects().filter(function(o) {
        return o.bg != true;
    });

    var group = new fabric.Group(objs, {
        originX: 'center',
        originY: 'center'
    });
    canvas._activeObject = null;
    canvas.setActiveGroup(group.setCoords()).renderAll();
}

function copyobjs() {
    activeObjectCopy = canvas.getActiveObject();
    activeGroupCopy = canvas.getActiveGroup();
    if (activeObjectCopy || activeGroupCopy) {
        var jsonData;
        if (activeGroupCopy) {
            var jsonCanvas = activeGroupCopy.toJSON();
            jsonData = JSON.stringify(jsonCanvas);
        } else if (activeObjectCopy) {
            var jsonCanvas = activeObjectCopy.toJSON();
            jsonData = JSON.stringify(jsonCanvas);
        }
    }
}

function pasteobjs() {
    if (activeGroupCopy) {
        var objectsInGroup = activeGroupCopy.getObjects();
        canvas.discardActiveGroup();
        objectsInGroup.forEach(function(object) {
            if (fabric.util.getKlass(object.type).async) {
                object.clone(function(clone) {
                    canvas.add(clone);
                });
            } else {
                canvas.add(object.clone());
            }
        });
    } else if (activeObjectCopy) {
        if (fabric.util.getKlass(activeObjectCopy.type).async) {
            activeObjectCopy.clone(function(clone) {
                canvas.add(clone);
            });
        } else {
            canvas.add(activeObjectCopy.clone());
        }
    }
    canvas.renderAll();
}

function toSVG() {    
    window.open(
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(canvas.toSVG()));
}

function resizeDownCanvas() {
    canvasScale = Math.round(canvasScale*10)/10;
    if(Math.round(canvas.width) - 20 >= $("#rightsection").width()) {
        zoomOut();
        resizeDownCanvas();
    }
}

$('#strokeline').spectrum({
	parts: ['header', 'cmyk', 'preview', 'swatches', 'footer'],
	alpha: true,
	layout: {
		preview: [0, 0, 0, 1],
	  //  swatches: [2, 2, 1, 4],
	  //  cmyk:       [1, 5, 1, 2]
	},
	position: {
		my: 'top+5%',
		at: 'left+100',
		of: '#strokeline'
	},
	init: function() {
		var activeobject = canvas.getActiveObject();
		if (activeobject) {
			$('#strokeline i').css('color', activeobject.fill);
		}
	},
	move: function(color) {
        var colorVal = color.toHexString(); // #ff0000
        var activeobject = canvas.getActiveObject();
        if (activeobject) {
            changeStorkColor(colorVal);
            $('#strokeline i').css('color', colorVal);
        } else {
            changeStorkColor('#000000');
        }
    },
	select: function(event, color) {
		var colorval = ('#' + color.formatted);
		$('#strokeline i').css('color', colorval);
		changeStorkColor(colorval);
	}
});

$('#nofill').click(function () {
    var isShapeNoFill = $('#nofill').is(":checked");
    var obj = canvas.getActiveObject();
    if (obj && obj.type == "rect" || obj.type == "circle" || obj.type == "triangle") {
        if (obj && isShapeNoFill == true) {
            obj.prevfill = obj.fill;
            obj.fill = 'Transparent';
            obj.set('onfill', true);
        } else if (obj && isShapeNoFill == false) {            
            if(obj.prevfill) {
                obj.setFill(obj.prevfill);
            } else
            obj.set('onfill', false);
        }
        saveState();
    }
    canvas.renderAll();
});

$('#storkewidth').change(function () {
    var strokeWidth = $(this).val();
    var obj = canvas.getActiveObject();
    if (obj) {
        obj.strokeWidth = parseInt(strokeWidth);
        obj.setCoords();
    }
    canvas.calcOffset();
    canvas.renderAll();
});

function addShape(shape) {
    var stroke = $('#strokeline i').css('color');
    var fill = $('#fillshape i').css('color');
    var strokewidth = parseInt($('#storkewidth').val());

    var isShapeNoFill = $('#nofill').is(":checked");

    $('#shapeselectdropdown').val("");

    if(isShapeNoFill) 
        fill = 'Transparent';

    if(!fill) fill = 'black';

    if (shape == 'circle') {

        var circle = new fabric.Circle({
            radius: 40,
            originX: "center",
            originY: "center",
            strokeWidth: strokewidth,
            fill: fill,
            stroke: stroke,
            onfill: false
                //opacity: 0.5
        });

        savestateaction = false;
        canvas.add(circle);        
        savestateaction = true;
        circle.center();
        circle.setCoords();
        canvas.setActiveObject(circle);
        canvas.renderAll();
    } else if (shape == 'rectangle') {
        var rectangle = new fabric.Rect({

            width: 100,
            height: 60,
            originX: 'left',
            originY: 'top',
            strokeWidth: strokewidth,
            fill: fill,
            stroke: stroke,
            onfill: false
                //opacity: 0.5

        });

        savestateaction = false;
        canvas.add(rectangle);    
        savestateaction = true;
        rectangle.center();
        rectangle.setCoords();
        canvas.renderAll();
        canvas.setActiveObject(rectangle);

    } else if (shape == 'square') {
        var square = new fabric.Rect({
            width: 60,
            height: 60,
            originX: 'left',
            originY: 'top',
            strokeWidth: strokewidth,
            fill: fill,
            stroke: stroke,
            onfill: false
                //opacity: 0.5
        });

        savestateaction = false;
        canvas.add(square);
        savestateaction = true;
        square.center();
        square.setCoords();
        canvas.renderAll();
        canvas.setActiveObject(square);

    } else if (shape == 'triangle') {
        var triangle = new fabric.Triangle({
            top: 250,
            left: 300,
            width: 100,
            height: 100,
            strokeWidth: strokewidth,
            fill: fill,
            stroke: stroke,
            onfill: false
                //opacity: 0.5
        });
        savestateaction = false;
        canvas.add(triangle);
        savestateaction = true;
        triangle.center();
        triangle.setCoords();
        canvas.renderAll();
        canvas.setActiveObject(triangle);
    }
}
function changeStorkColor(hex) {
    var obj = canvas.getActiveObject();
    if (obj) {
        obj.setStroke(hex);
        saveState();
    }
    canvas.renderAll();
}

function changefillColor(hex) {
    var obj = canvas.getActiveObject();
    if(!obj) return;
    if (obj.onfill == false) {
        obj.setFill(hex);
    } else if (obj.onfill == true) {
        obj.fill = 'Transparent';
    }
    saveState();
    canvas.renderAll();
}
var files;
$('#bg_uploadimg').on('change', prepareimageBGUpload);

function prepareimageBGUpload(event) {
    files = event.target.files;
}

function upload_imge() {
    var data = new FormData();
    //adding file content to data
    $.each(files, function(key, value) {
        data.append("bg_uploadimg", value);
    });
    $.ajax({
        url: 'uploadimage.php?files',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function(data) {
            alert(data)
        }
    });
}
var tempoffset = 0;

var templatesloading = false;

function getTemplates(id, refresh) {

    if (templatesloading) return;

    templatesloading = true;

    var $grid = $('#template_container');

    if (refresh) {
        $('#template_container').empty();
        tempoffset = 0;
    }


    if (typeof id != 'undefined') {
        var tempid = id;
    } else {
        var tempid = '';
        tempoffset = 0;
    }

    if (Istempselected == false) {
        var lasttemplate = $grid.children().last().attr('id');
        if (typeof lasttemplate != 'undefined') {
            tempoffset = lasttemplate;
        }
    } else {
        tempoffset = 0;
    }

    $.ajax({
        type: 'GET',
        url: 'get_templates.php?offset=' + tempoffset + '&limit=12&tempid=' + tempid + '&refresh=' + refresh,
        success: function(data) {
            if (data != '') {
                var responsedata = data;

                $('#template_container').empty();
                $('#template_container').html(responsedata);


                Istempselected = false;
            } else {
                tempoffset = 0;
            }

            templatesloading = false;
        }
    });
}
var textoffset = 0;
// get Text Images
function getTexts(id) {
      if(typeof id != 'undefined') {
            var textid = id;
      } else {
            var textid = '';
      }
    if (IsTextselected == false) {
        var lasttext = $('#text_container').children().last().attr('id');
        if (typeof lasttext != 'undefined') {
            textoffset = lasttext;
        }
    } else {
        textoffset = 0;
    }
    $.ajax({
        type: 'GET',
        url: 'get_texts.php?offset=' + textoffset + '&limit=12&textid=' + textid,
        success: function (data) {
	      if (data != '') {
            $('#text_container').append(data);
			IsTextselected = false;
            } else {
                textoffset = 0;
            }
            //$('#template_container').empty();
        }
    });
}
var bgoffset = 0;
// get bg Images
function getbgimages(id) {
      if(typeof id != 'undefined') {
            var bgcatId = id;
      } else {
            var bgcatId = '';
      }
    if (IsBgselected == false) {
        var lastbackground = $('#background_container').children().last().attr('id');
        if (typeof lastbackground != 'undefined') {
            bgoffset = lastbackground;
        }
    } else {
        bgoffset = 0;
    }
    $.ajax({
        type: 'GET',
        url: 'get-bgimages.php?offset=' + bgoffset + '&limit=12&category=' + bgcatId,
        success: function (data) {
                  if (data != '') {
               $('#background_container').append(data);
                        IsBgselected = false;
            } else {
                bgoffset = 0;
            }
            //$('#background_container').empty();
        }
    });
}
var catoffset = 0;
// get Category Images
function getcatimages(id) {
    if (typeof id != 'undefined') {
        var catId = id;
    } else {
        var catId = '';
    }
    if (Iscatselected == false) {
        var lastelement = $('#catimage_container').children().last().attr('id');
        if (typeof lastelement != 'undefined') {
            catoffset = lastelement;
        }
    } else {
        catoffset = 0;
    }
    $.ajax({
        type: 'GET',
        url: 'get-catimages.php?offset=' + catoffset + '&limit=12&category=' + catId,
        success: function(data) {
            if (data != '') {
				$('#catimage_container').append(data);
				Iscatselected = false;
            } else {
                catoffset = 0;
            }
            //$('#catimage_container').empty();
        }
    });
}