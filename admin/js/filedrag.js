/*
filedrag.js - HTML5 File upload
*/
(function() {

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}


	// output information
	function Output(msg) {
		console.log(msg);
	}


	// file selection
	function FileSelectHandler(e) {

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;
		
		if(files && files.length > 0) {
			$(".se-pre-con").fadeIn("slow");
		}

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
			var fileuploaded = UploadFile(f);
			if(fileuploaded == false) {
				$(".se-pre-con").fadeOut("slow");
				$("#imagealertModal").modal('show');
			}
		}
	}


	// output file information
	function ParseFile(file) {

		Output(
			"<p>File information: <strong>" + file.name +
			"</strong> type: <strong>" + file.type +
			"</strong> size: <strong>" + file.size +
			"</strong> bytes</p>"
		);
		// display an image
		if (file.type.indexOf("image") == 0) {
			var reader = new FileReader();
			/*reader.onload = function(e) {
				Output(
					"<p><strong>" + file.name + ":</strong><br />" +
					'<img src="' + e.target.result + '" /></p>'
				);
			}*/
			reader.readAsDataURL(file);
		}

		// display text
		if (file.type.indexOf("text") == 0) {
			var reader = new FileReader();
			reader.onload = function(e) {
				Output(
					"<p><strong>" + file.name + ":</strong></p><pre>" +
					e.target.result.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
					"</pre>"
				);
			}
			reader.readAsText(file);
		}

	}


	// upload image files
	function UploadFile(file) {

		var xhr = new XMLHttpRequest();
		//if (xhr.upload && file.size <= $id("MAX_FILE_SIZE").value) {
		if (xhr.upload && (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif" || file.type =="image/svg+xml") && file.size <= $id("MAX_FILE_SIZE").value) {

			// create progress bar
			var o = $id("progress");
			var progress = o.appendChild(document.createElement("p"));
			//progress.appendChild(document.createTextNode("upload " + file.name));
			progress.appendChild(document.createTextNode(""))

			// progress bar
			xhr.upload.addEventListener("progress", function(e) {
				var pc = parseInt(100 - (e.loaded / e.total * 100));
				progress.style.backgroundPosition = pc + "% 0";
			}, false);

			// file received/failed
			xhr.onreadystatechange = function(e) {
				if (xhr.readyState == 4) {
					progress.className = (xhr.status == 200 ? "success" : "failure");
				}
			};

			// start upload
			xhr.open("POST", $id("upload").action, true);
			xhr.onreadystatechange = function() {
				if(file.type =="image/svg+xml" && xhr.readyState == 4)
				{		
					 $(".se-pre-con").fadeOut("slow");
					 addUploadedSVGToCanvas(file.name);
				}else if ( xhr.readyState == 4) {
					 $(".se-pre-con").fadeOut("slow");
					 addFileToCanvas(file.name);
					// getuploadimages();
				}
			}
			xhr.setRequestHeader("X-FILENAME", file.name);
			xhr.send(file);

		} else 
		return false;
	}


	// initialize
	function Init() {

		var fileselect = $id("fileselect");

		// file select
		fileselect.addEventListener("change", FileSelectHandler, false);

		// is XHR2 available?
		var xhr = new XMLHttpRequest();

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}


})();