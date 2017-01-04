var groupselobject;
var canvasScale = 1;
var roundedcanvasScale = 1;
var SCALE_FACTOR = 1.2;
var state = [];
var statearray = [];
var index = 0;
var indexarray = [];
var savestateaction = true;
var currentcanvasid = 0;
var canvasindex = 0;
var pageindex = 0;
var canvasarray = [];
var isdownloadpdf = false;
var isdownloadype = false;
var totalsvgs = 0;
var convertedsvgs = 0;
function addText() {
    var iText = new fabric.IText('Text Element', {
        fontFamily: selectedFont,
        fontSize: 12 * 2,
        fill: fillColor,
        scaleX: canvasScale,
        scaleY: canvasScale
    });
    canvas.add(iText);
    setControlsVisibility(iText);
    iText.center();
    iText.setCoords();
    canvas.calcOffset();
    saveState();
    canvas.renderAll();
}
function saveState() {
    if (savestateaction) {
        console.log("savestate index" + index)
        state[++index] = JSON.stringify(canvas.toDatalessJSON(['logoid', 'selectable', 'evented', 'id']));
    }
};
saveState();
function addSVGToCanvas(logosvgimg, svgoptions) {
alert('test');
    fabric.loadSVGFromURL(logosvgimg, function (objects, options) {
        var loadedObject = fabric.util.groupSVGElements(objects, options);
        loadedObject.set({
                scaleX: canvasScale,
                scaleY: canvasScale
            });
        var objects = loadedObject.getObjects()
        loadedObject.src = logosvgimg;
        canvas.add(loadedObject);
        loadedObject.center();
        if(svgoptions) {
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
	var svgImgPath= "./uploads/" +svgimg;
    fabric.loadSVGFromURL(svgImgPath, function (objects, options) {
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
    for(var i = 1;i <= rows; i++)  {
        $("#page" + pageindex).append("<table><tr>");
        for(var j = 1;j <= cols; j++) {
            addNewCanvas();
            if(dupflag) {
                var currentcanvasjson = canvasarray[ rc + dupcount ].toDatalessJSON();
                canvas.loadFromDatalessJSON(currentcanvasjson);     
                canvas.renderAll();
                dupcount++;
            }
            if(jsonarray) {
                canvas.loadFromDatalessJSON(jsonarray[ jsonarrcount + (rc*pageid) ]);
                canvas.renderAll();
                jsonarrcount++;
            }
        }
        $("#page" + pageindex).append("</tr></table>");
    }
    var dupcanvicon = $( "#duplicatecanvas" ).clone(true).prop('id', 'duplicatecanvas' + pageindex );
    var delcanvicon = $( "#deletecanvas" ).clone(true).prop('id', 'deletecanvas' + pageindex );
    dupcanvicon.appendTo( "#page" + pageindex );
    delcanvicon.appendTo( "#page" + pageindex );
    adjustIconPos(pageindex);
    $("#addnewpagebutton").before("</br>");
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
    fabric.util.loadImage("./uploads/" + imagefile, function (img) {
        var object = new fabric.Cropzoomimage(img, {
           left: canvas.getWidth()/2,
           top: canvas.getHeight()/2,
           scaleX: canvasScale / 2,
           scaleY: canvasScale / 2
        });
        object.src = "uploads/" + imagefile;
        canvas.add(object);
        canvas.setActiveObject(object);
        object.center();
        object.setCoords();
        setControlsVisibility(object);
        $("#spinnerModal").modal('hide');
        canvas.renderAll();
        saveState();
    }, {
        crossOrigin: ''
    });
}
function setCanvasBg(lcanvas, bgsrc) {
    var tmpImg = new Image();
    tmpImg.src = bgsrc;
	deleteCanvasBg(lcanvas);
    lcanvas.bg = bgsrc;
    $(tmpImg).one('load', function() {
        imgWidth = tmpImg.width;
        imgHeight = tmpImg.height;
        if (imgWidth > lcanvas.width || imgHeight > lcanvas.height) {
			var aspect = lcanvas.width / imgWidth;
			var canvasWidth = (imgWidth * aspect);
			var canvasHeight = (imgHeight * aspect);
            lcanvas.setBackgroundImage(bgsrc, lcanvas.renderAll.bind(lcanvas), {
                width: canvasWidth,
                height: canvasHeight,
                repeat: 'repeat'
            });
        } else {
            lcanvas.setBackgroundColor({source: bgsrc, repeat: 'repeat'}, function () {
			 	lcanvas.renderAll();
			});
        }
    });
}
function deleteCanvasBg(lcanvas) {
	lcanvas.backgroundImage = 0;
	lcanvas.setBackgroundColor('#ffffff', lcanvas.renderAll.bind(lcanvas));
}
function setStyle(object, styleName, value) {
    if (object.setSelectionStyles && object.isEditing) {
        var style = {};
        style[styleName] = value;
        object.setSelectionStyles(style);
        object.setCoords();
    } else {
        object[styleName] = value;
    }
    saveState();
    canvas.renderAll();
}
var fontBoldValue = "normal";
var fontBoldSwitch = document.getElementById('fontbold');
if (fontBoldSwitch) {
    fontBoldSwitch.onclick = function () {
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
    fontItalicSwitch.onclick = function () {
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
    fontUnderlineSwitch.onclick = function () {
        fontUnderlineValue = (fontUnderlineValue == "normal") ? "underline" : "normal";
        var activeObject = canvas.getActiveObject();
        if (activeObject && /text/.test(activeObject.type)) {
            setStyle(activeObject, 'textDecoration', fontUnderlineValue);
            canvas.renderAll();
        }
    };
}
var fontSizeSwitch = document.getElementById('fontsize');
if (fontSizeSwitch) {
    fontSizeSwitch.onchange = function () {
        // Fontsize min/max is 6pt/72pt
        if (this.value > 72)
            this.value = 72;
        if (this.value < 6)
            this.value = 6;
        var fontsize = Math.round(this.value.toLowerCase() * 2);
        var activeObject = canvas.getActiveObject();
        if (activeObject && /text/.test(activeObject.type)) {
            setStyle(activeObject, 'fontSize', fontsize);
            canvas.renderAll();
        }
    };
}
//Font line height
var ChangeLineHeight = function() {
	        var activeObject = canvas.getActiveObject();
	        setStyle(activeObject, 'lineHeight', clh.getValue());
            canvas.renderAll();
            saveState();
};
var clh = $("#changelineheight").slider()
					.on('slide', ChangeLineHeight)
					.data('slider');
var deleteitembtn = document.getElementById('deleteitem');
if (deleteitembtn) {
    deleteitembtn.onclick = function () {
        deleteItem();
    }
}
function deleteItem() {
    var activeObject = canvas.getActiveObject();
    if(!activeObject)
        activeObject = canvas.getActiveGroup();
    if(!activeObject) return;
    if (activeObject.type == "group") {
        activeObject.forEachObject(function (object) {
            canvas.remove(object);
        });
    } else {
        canvas.remove(activeObject);
    }
    canvas.deactivateAll().renderAll(); 
}
var objectalignleftSwitch = document.getElementById('objectalignleft');
if (objectalignleftSwitch) {
    objectalignleftSwitch.onclick = function () {
        activeGroup = canvas.getActiveGroup();
        activeObject = canvas.getActiveObject();
        if (activeGroup) {
            activeGroup.forEachObject(function (object) {
                console.log(object.left);
                object.left = -(activeGroup.width * activeGroup.scaleX) / 2 + (object.width * object.scaleX) / 2;
                //object.originX = 'center';
                if (object && /text/.test(object.type)) {
                    setStyle(object, 'textAlign', "left");
                    canvas.renderAll();
                }
            });
            canvas.renderAll();
            objectalignrightSwitch.click();
        } else if (activeObject) {
            if (activeObject && /text/.test(activeObject.type)) {
                setStyle(activeObject, 'textAlign', "left");
                canvas.renderAll();
            }
        }
    };
}
var objectaligncenterSwitch = document.getElementById('objectaligncenter');
if (objectaligncenterSwitch) {
    objectaligncenterSwitch.onclick = function () {
        activeGroup = canvas.getActiveGroup();
        activeObject = canvas.getActiveObject();
        if (activeGroup) {
            activeGroup.forEachObject(function (object) {
                object.left = 0;
                object.originX = 'center';
                if (object && /text/.test(object.type)) {
                    setStyle(object, 'textAlign', "center");
                    canvas.renderAll();
                }
            });
            canvas.renderAll();
            objectaligncenterSwitch.click();
            objectaligncenterSwitch.click();
        } else if (activeObject) {
            if (activeObject && /text/.test(activeObject.type)) {
                setStyle(activeObject, 'textAlign', "center");
                canvas.renderAll();
            }
        }
    };
}
var objectalignrightSwitch = document.getElementById('objectalignright');
if (objectalignrightSwitch) {
    objectalignrightSwitch.onclick = function () {
        activeGroup = canvas.getActiveGroup();
        activeObject = canvas.getActiveObject();
        if (activeGroup) {
            activeGroup.forEachObject(function (object) {
                object.left = activeGroup.width / 2 - (object.width * object.scaleX) / 2;
                //object.originX = 'center';
                if (object && /text/.test(object.type)) {
                    setStyle(object, 'textAlign', "right");
                    canvas.renderAll();
                }
            });
            canvas.renderAll();
            objectalignleftSwitch.click();
        } else if (activeObject) {
            if (activeObject && /text/.test(activeObject.type)) {
                setStyle(activeObject, 'textAlign', "right");
                canvas.renderAll();
            }
        }
    };
}
var horizcenterIndentSwitch = document.getElementById('horizcenterindent');
if (horizcenterIndentSwitch) {
    horizcenterIndentSwitch.onclick = function () {
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
    verticenterIndentSwitch.onclick = function () {
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
    leftIndentSwitch.onclick = function () {
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
    rightIndentSwitch.onclick = function () {
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
    undoSwitch.onclick = function () {
        console.log(index)
        savestateaction = false;
        index--;
        if (index <= 0) {
            index = 0;
            var json = jQuery.parseJSON(state[index]).objects;
            json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
            canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
            //myEditor.changeView(myEditor.currentView);
            return;
        }
        var json = jQuery.parseJSON(state[index]).objects;
        json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
        canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
        if (index == 0) {
        }
        savestateaction = true;
        canvas.renderAll();
    };
}
var redoSwitch = document.getElementById('redo');
if (redoSwitch) {
    redoSwitch.onclick = function () {
        console.log(index)
        index++;
        savestateaction = false;
        if (index >= state.length - 1) {
            index = state.length - 1;
            var json = jQuery.parseJSON(state[index]).objects;
            json = '{"objects":' + JSON.stringify(json) + ',"background":""}';
            canvas.loadFromDatalessJSON(json, canvas.renderAll.bind(canvas));
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
    if (groupselobject)
        groupselobject.setFill(hex);
    else if (obj.paths) {
      for (var i = 0; i < obj.paths.length; i++) {
        obj.paths[i].setFill(hex);
      }
    } else
        obj.setFill(hex);
    canvas.renderAll();
}
function setCanvasWidthHeight(width, height) {
    if (width) {
        //if (canvasScale == 1)
        //$("#productWidth").html(Math.round((width * 2.54 / 300) * 10));
        for (var i = 0, j = 0; i <= canvasindex; i++) {
            if (!canvasarray[i]) continue;
            canvasarray[i].width = width;
            var canvasDOM = document.getElementById('canvas' + i);
            canvasDOM.style.width = width / 1.5 + "px";
            canvasDOM.width = width;
            var elem = document.getElementsByClassName('upper-canvas')[i];
            elem.style.width = width / 1.5 + "px";
            elem.width = width;
            var elem = document.getElementsByClassName('canvas-container')[i];
            elem.style.width = width / 1.5 + "px";
            elem.width = width;
            var elem = document.getElementsByClassName('canvascontent')[i];
            elem.style.width = width / 1.5 + "px";
            elem.width = width;
            var elem = document.getElementById('divcanvas' + i);
            elem.style.width = width / 1.5 + "px";
            elem.width = width;
            j++;
            canvasarray[i].calcOffset();
            canvasarray[i].renderAll();
        }
    }
    if (height) {
        //if (canvasScale == 1)
        //$("#productHeight").html(Math.round((height * 2.54 / 300) * 10));
        for (var i = 0, j = 0; i <= canvasindex; i++) {
            if (!canvasarray[i]) continue;
            canvasarray[i].height = height;
            var canvasDOM = document.getElementById('canvas' + i);
            canvasDOM.style.height = height / 1.5 + "px";
            canvasDOM.height = height;
            var elem = document.getElementsByClassName('upper-canvas')[i];
            elem.style.height = height / 1.5 + "px";
            elem.height = height;
            var elem = document.getElementsByClassName('canvas-container')[i];
            elem.style.height = height / 1.5 + "px";
            elem.height = height;
            var elem = document.getElementsByClassName('canvascontent')[i];
            elem.style.height = height / 1.5 + "px";
            elem.height = height;
            var elem = document.getElementById('divcanvas' + i);
            elem.style.height = height / 1.5 + "px";
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
$("#btnZoomIn").click(function () {
    zoomIn();
    for (var i = 0; i < pageindex; i++) {
        adjustIconPos(i);
    }
});
// button Zoom Out
$("#btnZoomOut").click(function () {
    zoomOut();
    for (var i = 0; i < pageindex; i++) {
        adjustIconPos(i);
    }
});
// Zoom In
function zoomIn() {
    // Set max zoom at 500%
    if(canvasScale * SCALE_FACTOR > 5) {
        $("#zoomperc").html(Math.round(5 * 100) + '%');
        return;
    }
    canvas.deactivateAll().renderAll();
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
		if(canvasarray[j].bg != '') {
			setCanvasBg(canvasarray[j], canvasarray[j].bg);
		}
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
		if(canvasarray[j].bg != '') {
			setCanvasBg(canvasarray[j], canvasarray[j].bg);
		}
    }
    canvasScale = 1;
    $("#zoomperc").html('');
    $("#zoomperc").html(Math.round(canvasScale * 100) + '%');
}
// Zoom Out
function zoomOut() {
    canvas.deactivateAll().renderAll();
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
		if(canvasarray[j].bg != '') {
			setCanvasBg(canvasarray[j], canvasarray[j].bg);
		}
    }
    $("#zoomperc").html('');
    $("#zoomperc").html(Math.round(canvasScale * 100) + '%');
}
$("#saveimage").click(function () {
    $('#templateSaveModal').modal('hide');
    $('#savetemplate_modal').modal('show');
});
$("#downloadAsJPEG").click(function () {
    downloadImage();
});
$("#downloadAsPDF").click(function () {
    isdownloadpdf = true;
	processSVGs();
});
function downloadTemplateFile() {
    if(totalsvgs == convertedsvgs) {
        isdownloadype = false;

        var jsonCanvasArray = [];
        var width = document.getElementById("loadCanvasWid").value,
            height = document.getElementById("loadCanvasHei").value,
            rows = document.getElementById("numOfcanvasrows").value,
            cols = document.getElementById("numOfcanvascols").value;
        //inch to pixel
        width = width * 96;
        height = height * 96;
        var wh = '{\"width\": '+ width + ', \"height\": ' + height + ', \"rows\": ' + rows + ', \"cols\": ' + cols + '}';
        jsonCanvasArray.push(wh);

        var firstcanvas;

        for (var i = 0; i < canvasindex; i++) {

            if (!canvasarray[i]) continue;
                canvasarray[i].deactivateAll().renderAll();

            if ($("#divcanvas" + i).is(":visible")) {

                if(!firstcanvas) 
                    firstcanvas = canvasarray[i];

                jsonCanvasArray.push(canvasarray[i].toDatalessJSON());
            }
        }

        var jsonData = JSON.stringify(jsonCanvasArray);
        var pngdataURL = firstcanvas.toDataURL("image/png");
        var filename = $('#templatename').val();
        var categoryId = $('#template_category option:selected').val();
        var path = "uploads/savetemplate/";
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
            success: function (msg) {}
        })
        var jsonCanvasArray = [];
        var width = document.getElementById("loadCanvasWid").value,
            height = document.getElementById("loadCanvasHei").value,
            rows = document.getElementById("numOfcanvasrows").value,
            cols = document.getElementById("numOfcanvascols").value;
        //inch to pixel
        width = width * 96;
        height = height * 96;
        var wh = '{"width": '+ width + ', "height": ' + height + ', "rows": ' + rows + ', "cols": ' + cols + '}';
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
        var path = "uploads/savetemplate/";
        $.ajax({
            type: 'POST',
            url: 'saveimage.php',
            data: {
                path: path,
                filename: filename,
                jsonData: jsonData
            },
            success: function (msg) {
                window.location.href = 'downloadfile.php?file=uploads/savetemplate/' + filename + '.ype';
            }
        })
    }
}
function proceed_savetemplate() {
    $("#savetemplate_modal").modal('hide');
    $('#spinnerModal').modal('show');
    isdownloadype = true;
    processSVGs();
	$('#template_container').empty();
    getTemplatesName();
    getTemplates('');
    $('#spinnerModal').modal('hide');
}
function downloadImage() {
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

    buffer.height = parseInt(cheight) * parseInt(rows) * parseInt(pageindex + 1);

    var h = 0;
    var writtenpages = 0;
    var processpages = 0;
    var rowcount = 0;
    var colcount = 0;

    for (var i = 0; i < canvasindex; i++) {
        if (!canvasarray[i]) continue;
        canvasarray[i].deactivateAll().renderAll();
        if ($("#divcanvas" + i).is(":visible")) {
            processpages++;

            if(colcount >= cols) {
                colcount = 0;
                rowcount++;
            }

            w = cwidth * colcount;
            h = cheight * rowcount;

            colcount++;

            (function (li, c, r) {
                var img = new Image();
                img.onload = function() {
                    
                    buffer_context.drawImage(this, c, r);
                    
                    writtenpages++;
                    if(writtenpages == processpages) {
                        var pngdataURL = buffer.toDataURL("image/png");
                        pngdataURL = pngdataURL.replace('data:image/png;base64,', '');
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
                                pngimageData: pngdataURL,
                                path: path,
                                filename: filename
                            },
                            success: function (msg) {
                                window.location.href = 'downloadfile.php?file=uploads/savetemplate/' + filename + '.jpeg';
                                $('#spinnerModal').modal('hide');
                            }
                        })                        
                    }
                };
                img.src = canvasarray[li].toDataURL("image/png");
            })(i, w, h);
        }
    }
}
function savesvg(svgobj) {
    tempcanvas.clear();    
    (function (lsvgobj) {
        if (fabric.util.getKlass(lsvgobj.type).async) {
            lsvgobj.clone(function (clone) {
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
                    success: function (msg) {
                        convertedsvgs++;
                        if(isdownloadpdf)
                        downloadPdf();
                        if(isdownloadype)
                        downloadTemplateFile();
                    }
                })
            });
        }
    })(svgobj);
    if(isdownloadpdf)
    downloadPdf();
    if(isdownloadype)
    downloadTemplateFile();
}
var savecrop = false;
function downloadPdf() {
    if(totalsvgs == convertedsvgs) {
        resetZoom();
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
                jsonCanvasArray.push(canvasarray[i].toDatalessJSON());
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
            success: function (msg) {
                window.location.href = "downloadfile.php?file=" + msg;
				savecrop = false;
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
                if(objects[j] && objects[j].type == 'path-group') {
                        totalsvgs++;
                        savesvg(objects[j]);
                }
            }
        }
    }
    if(isdownloadpdf)
    downloadPdf();
    if(isdownloadype)
    downloadTemplateFile();
}
// JavaScript Document
$("#addCategory").click(function () {
    $("#Addcategoryodal").modal('show');
});
$("#addTemplateCategory").click(function () {
    $("#AddTemplatecategoryModal").modal('show');
});
$("#addBGCategory").click(function () {
    $("#AddBGcategoryodal").modal('show');
});
$("#addElement").click(function () {
    $("#AddelementModal").modal('show');
});
$("#addBackground").click(function () {
    $("#AddbackgroundModal").modal('show');
});
$("#deleteCategory").click(function () {
    var sel_catid = $('#cat-select').val();
    if (sel_catid != '') {
        $("#Del_catmodal").modal('show');
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Category, you wish to delete.');
    }
});
$("#deleteBGCategory").click(function () {
    var sel_bgcatid = $('#bgcat-select').val();
    if (sel_bgcatid != '') {
        $("#Del_bgcatmodal").modal('show');
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Category, you wish to delete.');
    }
});
$('#deleteEle').click(function () {
    $('#spinnerModal').modal('hide');
    var selectedImg = [];
    $('.catimg-checkbox:checked').each(function () {
        selectedImg.push($(this).val());
    });
    if (selectedImg != '') {
        selectedImg = selectedImg.join(',');
        $.post(
            "actions/deleteElement.php", {
                "elementid": selectedImg
            },
            function (data) {
                $('#spinnerModal').modal('hide');
				$('#catimage_container').empty();
                getcategory();
                getcatimages('');
                document.getElementById("successMessage").innerHTML = data;
                $('#successModal').modal('show');
            }
        );
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Element(s), you wish to delete.');
    }
});
$('#deleteBackground').click(function () {
    $('#spinnerModal').modal('hide');
    var selectedImg = [];
    $('.bgimg-checkbox:checked').each(function () {
        selectedImg.push($(this).val());
    });
    if (selectedImg != '') {
        selectedImg = selectedImg.join(',');
        $.post(
            "actions/deleteBackground.php", {
                "bgid": selectedImg
            },
            function (data) {
                $('#spinnerModal').modal('hide');
                getBgcategory();
                getbgimages('');
                document.getElementById("successMessage").innerHTML = data;
                $('#successModal').modal('show');
            }
        );
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Background(s), you wish to delete.');
    }
});
$('#deleteTemp').click(function () {
    $('#spinnerModal').modal('show');
    var selectedTemp = [];
    $('.templateimg-checkbox:checked').each(function () {
        selectedTemp.push($(this).val());
    });
    if (selectedTemp != '') {
        selectedTemp = selectedTemp.join(',');
        $.post("actions/deleteTemplate.php", {
                "templateid": selectedTemp
            },function (data) {
                $('#spinnerModal').modal('hide');
                document.getElementById("successMessage").innerHTML = data;
                $('#successModal').modal('show');
				$('#template_container').empty();
                getTemplates('');
            }
        );
    } else {
        $("#alertModal").modal('show');
        $('#responceMessage').html('Please select the Template(s), you wish to delete.');
    }
});
function getcategory() {
    $.ajax({
        type: "post",
        url: "actions/getCategory.php",
        success: function (data) {
            $("#cat-select").empty();
            $("#cat-select").html(data);
            $("#element_category").empty();
            $("#element_category").html(data);
        }
    });
}
function gettempcategory() {
    $.ajax({
        type: "post",
        url: "actions/gettempCategory.php",
        success: function (data) {
            $("#tempcat-select").empty();
            $("#tempcat-select").html(data);
            $("#template_category").empty();
            $("#template_category").html(data);
        }
    });
}
function getBgcategory() {
    $.ajax({
        type: "post",
        url: "actions/getBgCategory.php",
        success: function (data) {
            $("#bgcat-select").empty();
            $("#bgcat-select").html(data);
            $("#bg_category").empty();
            $("#bg_category").html(data);
        }
    });
}
function getTemplatesName() {
    $.ajax({
        type: "post",
        url: "actions/getTemplate_name.php",
        success: function (data) {
            $("#template-select").empty();
            $("#template-select").html(data);
        }
    });
}
<!-- Category form validate -->
$(document).ready(function () {
    $('#addcategoryform').validate({
        rules: {
            category: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            element.text('').addClass('valid')
                .closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function (form) { // <- only fires when form is valid
            var newcategory = $("#category").val();
            $('#Addcategoryodal').modal('hide');
            $("#spinnerModal").modal('show');
            $.post(
                "actions/addcategory.php", {
                    "categoty": newcategory
                },
                function (data) {
                    $('#spinnerModal').modal('hide');
					$('#catimage_container').empty();
                    getcategory();
                    getcatimages('');
                    document.getElementById("successMessage").innerHTML = data;
                    $('#successModal').modal('show');
                    $('#addcategoryform')[0].reset();
                }
            );
        }
    });
});
function proceed_catdelete() {
    var sel_catid = $('#cat-select').val();
    $('#Del_catmodal').modal('hide');
    $("#spinnerModal").modal('show');
    $.post(
        "actions/deletecategory.php", {
            "categoty": sel_catid
        },
        function (data) {
            $('#spinnerModal').modal('hide');
            getcategory();
            getcatimages('');
            document.getElementById("successMessage").innerHTML = data;
            $('#successModal').modal('show');
        }
    );
}
function proceed_Bgcatdelete() {
    var sel_bgcatid = $('#bgcat-select').val();
    $('#Del_bgcatmodal').modal('hide');
    $("#spinnerModal").modal('show');
    $.post(
        "actions/deletebgcategory.php", {
            "bgcategoty": sel_bgcatid
        },
        function (data) {
            $('#spinnerModal').modal('hide');
			$('#background_container').empty();
            getBgcategory();
            getbgimages('');
            document.getElementById("successMessage").innerHTML = data;
            $('#successModal').modal('show');
        }
    );
}
$(document).ready(function () {
    $('#addbgcategoryform').validate({
        rules: {
            bgcategory: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            element.text('').addClass('valid')
                .closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function (form) { // <- only fires when form is valid
            var newcategory = $("#bgcategory").val();
            $('#AddBGcategoryodal').modal('hide');
            $("#spinnerModal").modal('show');
            $.post(
                "actions/addcategory.php", {
                    "bgcategoty": newcategory
                },
                function (data) {
                    $('#spinnerModal').modal('hide');
					$('#background_container').empty();
                    getBgcategory();
                    getbgimages('');
                    document.getElementById("successMessage").innerHTML = data;
                    $('#successModal').modal('show');
                    $('#addbgcategoryform')[0].reset();
                }
            );
        }
    });
});
<!-- Teremplate Category form validate -->
$(document).ready(function () {
    $('#addtemplatecategoryform').validate({
        rules: {
            templatecategory: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            element.text('').addClass('valid')
                .closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function (form) { // <- only fires when form is valid
            var tempcategory = $("#templatecategory").val();
            $('#AddTemplatecategoryModal').modal('hide');
            $("#spinnerModal").modal('show');
            $.post(
                "actions/addcategory.php", {
                    "templatecat": tempcategory
                },
                function (data) {
                    $('#spinnerModal').modal('hide');
                    gettempcategory();
                    getcatimages('');
                    document.getElementById("successMessage").innerHTML = data;
                    $('#successModal').modal('show');
                    $('#addtemplatecategoryform')[0].reset();
                }
            );
        }
    });
});
<!-- File Upload --->
function readIMG(input) {
    //console.log(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewImage').show();
            $('#previewImage')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
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
    $.each(files, function (key, value) {
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
        success: function (data) {
            alert(data)
        }
    });
}
<!-- File Upload --->
function readBGIMG(input) {
    //console.log(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewBGImage').show();
            $('#previewBGImage')
                .attr('src', e.target.result)
                .width(150)
                .height(150);
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
    $.each(bgfiles, function (key, value) {
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
        success: function (data) {
            alert(data)
        }
    });
}
function addNewCanvasPage(dupflag, pageid) {
    pageindex++;
    $( "#canvaspages" ).append("<div class='page' id='page" + pageindex + "'></div>");
    addCanvasToPage(dupflag, pageid);
}
function addNewCanvas() {
    statearray[currentcanvasid] = state;
    indexarray[currentcanvasid] = index;
    var ito = getinfotextobj();
    if(ito)
        ito.opacity = 0;
    canvas.deactivateAll().renderAll();
    var objects = canvas.getObjects();
    for(var i = 0;i < objects.length;i++) {
        objects[i].selectable = false;
    }
    $( "#page" + pageindex ).append("<td align='center' id='divcanvas" + canvasindex + "' onClick='javascript:selectCanvas(this.id);' class='divcanvas'><div class='canvascontent'  style='border: dotted 1px;'><canvas id='canvas" + canvasindex + "' width='480' height='672' class='canvas'></canvas></div></td>");
    canvas = new fabric.Canvas('canvas' + canvasindex);
    canvas.rotationCursor = 'url("img/rotatecursor2.png") 10 10, crosshair';
    canvas.backgroundColor = '#ffffff';
    canvasarray.push(canvas);
    var width = document.getElementById("loadCanvasWid").value,
        height = document.getElementById("loadCanvasHei").value;
    //inch to pixel
    width = width * 96;
    height = height * 96;
    setCanvasWidthHeight(width * canvasScale, height * canvasScale);
    initCanvasEvents();
    initAligningGuidelines(canvas);
    initCenteringGuidelines(canvas);
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
    if(ito)
        ito.opacity = 0;
    id = id.replace("divcanvas", "");
    if (currentcanvasid == parseInt(id)) return;
    canvas.deactivateAll().renderAll();
    for (var i = 0, j = 0; i < canvasindex; i++) {
        $("#canvas" + i).css( "box-shadow", "" );
    }
    $("#canvas" + id).css( "box-shadow", "5px 5px 5px #888888" ); 
    if (currentcanvasid == parseInt(id)) return;
    statearray[currentcanvasid] = state;
    indexarray[currentcanvasid] = index;
    var tempcanvas = canvasarray[parseInt(id)];
    if (tempcanvas)
        canvas = tempcanvas;
    var tempstate = statearray[parseInt(id)];
    if (tempstate)
        state = tempstate;
    var tempindex = indexarray[parseInt(id)];
    if (tempindex)
        index = tempindex;
    currentcanvasid = parseInt(id);
    var ito = getinfotextobj();
    if(ito)
        ito.opacity = 1;
    var objects = canvas.getObjects();
    for(var i = 0;i < objects.length;i++) {
        objects[i].selectable = true;
    }
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
    if ($(".page").length == 1) {
        $('.deletecanvas').css('display', 'none');
    }
 /*   pageid = parseInt(pageid);
    var rows = document.getElementById("numOfcanvasrows").value;
    var cols = document.getElementById("numOfcanvascols").value;
    var rc = parseInt(rows) * parseInt(cols);
    var temparray = [];
    for(var i = 0; i < canvasarray.length;i++)
    {
        if((i >= ((pageid-1) * rc)) && (i < (pageid * rc))) {
        } else {
            temparray.push(canvasarray[i]);
        }
    }
    canvasarray = temparray;*/
});
function openTemplate(jsons) {
    var jsonCanvasArray = JSON.parse(jsons);
    if (!jsonCanvasArray || jsonCanvasArray.length <= 0) return;
    var wh = jsonCanvasArray[0];
    wh = JSON.parse(wh);    
    //pixel to inch
    document.getElementById("loadCanvasWid").value = parseInt(wh.width / 96);
    document.getElementById("loadCanvasHei").value = parseInt(wh.height / 96);
    document.getElementById("numOfcanvasrows").value = parseInt(wh.rows);
    document.getElementById("numOfcanvascols").value = parseInt(wh.cols);
    var rc = parseInt(wh.rows) * parseInt(wh.cols);
    $("#canvaspages").html('');
    pageindex = 0;
    canvasindex = 0;
    canvasarray = [];
    for (var i = 0; i < (jsonCanvasArray.length-1)/rc; i++) {
        pageindex = i;
        $( "#canvaspages" ).append("<div class='page' id='page" + pageindex + "'></div>");
        addCanvasToPage(false, i, jsonCanvasArray);
    }
    setCanvasSize();
}
$(".duplicatecanvas").click(function () {
    var id = this.id;
    id = id.replace("duplicatecanvas", "");
    addNewCanvasPage(true, id);
});
$('html').keyup(function (e) {
    var activeobject = canvas.getActiveObject();
    if (!activeobject)
        activeobject = canvas.getActiveGroup();
    if (!activeobject)
        return;
    if (activeobject.isEditing)
        return
    switch (e.keyCode) {
    case 8:
        e.preventDefault();
        deleteItem();
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
    case 46:
        e.preventDefault();
        deleteItem();
        break;
    case 38:
        e.preventDefault();
        activeobject.top = activeobject.top - 2;
        activeobject.setCoords();
        break;
    case 40:
        e.preventDefault();
        activeobject.top = activeobject.top + 2;
        activeobject.setCoords();
        break;
    case 37:
        e.preventDefault();
        activeobject.left = activeobject.left - 2;
        activeobject.setCoords();
        break;
    case 39:
        e.preventDefault();
        activeobject.left = activeobject.left + 2;
        activeobject.setCoords();
        break;
    default:
        break;
    }
    canvas.renderAll();
});
<!-- Element form validate -->
$(document).ready(function () {
    sortUnorderedList("fonts-dropdown");
    $("#fonts-dropdown li a").click(function () {
        var selText = $(this).text();
        var activeObject = canvas.getActiveObject();
        if (activeObject && /i-text/.test(activeObject.type)) {
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
            element.text('').addClass('valid')
                .closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function(form) { // <- only fires when form is valid
            var newelmcategory = $("#element_category").val();
            var newelementName = $("#element_name").val();
            var newelement = $("#element_img").val();

            var isValid = /\.sv?g$/i.test(newelement);
            if (!isValid) {
                alert('Only svg files allowed!');
            } else {

                var elementpath = 'uploads/' + newelement;
                $.post(
                    "actions/addelement.php", {
                        "elementCategoty": newelmcategory,
                        "elementName": newelementName,
                        "element": elementpath
                    },
                    function(data) {
                        $('#AddelementModal').modal('hide');
                        uploadimage();
                        document.getElementById("successMessage").innerHTML = data;
                        $('#successModal').modal('show');
                        setTimeout(function() {
                            getcategory();
                            getcatimages('');
                        }, 2000);
                        $('#previewImage').hide();
                        $('#addelementform')[0].reset();
                    }
                );
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
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        success: function (element) {
            element.text('').addClass('valid')
                .closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        submitHandler: function (form) { // <- only fires when form is valid
            var newbgcategory = $("#bg_category").val();
            var newbgName = $("#bg_name").val();
            var newbackground = $("#bg_img").val();
            var bgpath = 'uploads/' + newbackground;
            $.post(
                "actions/addbackground.php", {
                    "bgCategoty": newbgcategory,
                    "bgName": newbgName,
                    "background": bgpath
                },
                function(data) {
                    $('#AddbackgroundModal').modal('hide');
                    uploadBgimage();
                    document.getElementById("successMessage").innerHTML = data;
                    $('#successModal').modal('show');
                    setTimeout(function () {
                        getBgcategory();
                        getbgimages('');
                    }, 2000);
                    $('#previewBGImage').hide();
                    $('#addbackgroundform')[0].reset();
                }
            );
        }
    });
function sortUnorderedList(ul, sortDescending) {
    if (typeof ul == "string")
        ul = document.getElementById(ul);
    // Idiot-proof, remove if you want
    if (!ul) {
        alert("The UL object is null!");
        return;
    }
    // Get the list items and setup an array for sorting
    var lis = ul.getElementsByTagName("LI");
    var vals = [];
    // Populate the array
    for (var i = 0, l = lis.length; i < l; i++)
        vals.push(lis[i].innerHTML);
    // Sort it
    vals.sort();
    // Sometimes you gotta DESC
    if (sortDescending)
        vals.reverse();
    // Change the list on the page
    for (var i = 0, l = lis.length; i < l; i++)
        lis[i].innerHTML = vals[i];
}
function loadTemplate(templateid) {
    $("#spinnerModal").modal('show');
	deleteCanvasBg(canvas);
    canvas.clear();
    $.ajax({
        url: "loadtemplate.php",
        type: "get",
        data: {
            id: parseInt(templateid)
        },
        success: function (data) {
            console.log(data)
            if (data != "empty") {
                openTemplate(data)
                /*var jsonArr = $.parseJSON(data);
                wh = JSON.parse(jsonArr[0]);
                document.getElementById("loadCanvasWid").value = wh.width;
                document.getElementById("loadCanvasHei").value = wh.height;
                setCanvasSize();
                for (var i = 0; i < jsonArr[1].objects.length; i++) {
                    var object = jsonArr[1].objects[i];
                    if (object.type == "i-text") {
                        object = new fabric.IText(object.text, object);
                        canvas.add(object);
                    }
                    if (object.type == "cropzoomimage") {
                        (function (imgoptions) {
                            fabric.util.loadImage(imgoptions.src, function (img) {
                                var img = new fabric.Image(img);
                                img.set({
                                    left: imgoptions.left,
                                    top: imgoptions.top,
                                    originX: imgoptions.originX,
                                    originY: imgoptions.originY,
                                    scaleX: imgoptions.scaleX,
                                    scaleY: imgoptions.scaleY
                                });
                                canvas.add(img);
                                img.hasRotatingPoint = true;
                                canvas.bringToFront(img);
                                canvas.calcOffset();
                                canvas.renderAll();
                            });
                        })(object);
                    }
                    if (object.type == "path-group") {
                        (function (lobject) {
                            addSVGToCanvas(lobject.visible, lobject);
                        })(object);
                    }
                }*/
                canvas.calcOffset();
                canvas.renderAll();
                $("#spinnerModal").modal('hide');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
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
    objectFlipHorizontalSwitch.onclick = function () {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if(activeObject.flipX)
                activeObject.flipX = false;
            else
                activeObject.flipX = true;
            canvas.renderAll();
            saveState();
        }
    };
}
var objectFlipVerticalSwitch = document.getElementById('objectflipvertical');
if (objectFlipVerticalSwitch) {
    objectFlipVerticalSwitch.onclick = function () {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if(activeObject.flipY) 
                activeObject.flipY = false;
            else
                activeObject.flipY = true;
            canvas.renderAll();
            saveState();
        }
    };
}
//Lock object
var objectLock = document.getElementById('objectlock');
if (objectLock) {
    objectLock.onclick = function () {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            if(activeObject.lockMovementY && activeObject.lockMovementX) 
                activeObject.lockMovementY = activeObject.lockMovementX = false;
            else
                activeObject.lockMovementY = activeObject.lockMovementX = true;
            canvas.renderAll();
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
var co = $("#changeopacity").slider()
					.on('slide', ChangeOpacity)
					.data('slider');
var clonebtn = document.getElementById('clone');
if (clonebtn) {
    clonebtn.onclick = function () {
        var activeObject = canvas.getActiveObject();
        if (!activeObject)
            activeObject = canvas.getActiveGroup();
        if (!activeObject) return;
        if (activeObject.type == "group") {
            activeObject.forEachObject(function (object) {
                cloneSelObject(object);
            });
        } else {
            cloneSelObject(activeObject);
        }
    }
}
function cloneSelObject(actobj) {
    if (fabric.util.getKlass(actobj.type).async) {
        actobj.clone(function (clone) {
            clone.set({
                left: 100,
                top: 200
            });
            canvas.add(clone);
        });
    } else {
        canvas.add(actobj.clone().set({
            left: 100,
            top: 200
        }));
    }
}
var sendLayerBackSwitch = document.getElementById('sendbackward');
if (sendLayerBackSwitch) {
    sendLayerBackSwitch.onclick = function () {
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
    bringLayerFrontSwitch.onclick = function () {
        var activeObject = canvas.getActiveObject();
        if (activeObject) {
            canvas.bringForward(activeObject);
            canvas.renderAll();
            saveState();
        }
    }
}
fabric.Cropzoomimage = fabric.util.createClass(fabric.Image, 
{
    type: 'cropzoomimage',
    zoomedXY: false,
    initialize: function(element, options) 
    {
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
    zoomBy: function(x, y, z, callback) 
    {
        if (x || y) { this.zoomedXY = true; }
        this.cx += x;
        this.cy += y;
        if (z) {
            this.cw -= z;
            this.ch -= z/(this.width/this.height);
        }
        if (z && !this.zoomedXY) { 
            // Zoom to center of image initially
            this.cx = this.width / 2 - (this.cw / 2);
            this.cy = this.height / 2 - (this.ch / 2);
        }
        if (this.cw > this.width) { this.cw = this.width; }
        if (this.ch > this.height) { this.ch = this.height; }
        if (this.cw < 1) { this.cw = 1; }
        if (this.ch < 1) { this.ch = 1; }
        if (this.cx < 0) { this.cx = 0; }
        if (this.cy < 0) { this.cy = 0; }
        if (this.cx > this.width - this.cw) { this.cx = this.width - this.cw; }
        if (this.cy > this.height - this.ch) { this.cy = this.height - this.ch; }
        this.rerender(callback);
    },
    rerender: function(callback) 
    {
        var img = new Image(), obj = this;
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
                if (callback) { callback(obj); }
            };
            img.src = canvas.toDataURL('image/png');
        };
        img.src = this.orgSrc;
    },
    toObject: function()
    {
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
            if (callback) { callback(instance); }
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
    if (!obj) {
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
            obj.set(prop, obj.get(prop) + value);
            break;
    }
    if ('left' === prop || 'top' === prop) {
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
function getinfotextobj() {
    var objs = canvas.getObjects();
    var infotextobj;
    for (var i in objs) {
        if(objs[i].type == 'text') {
            infotextobj = objs[i];
            infotextobj.selectable = false;
        }
    }
    return infotextobj;
}