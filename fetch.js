  
async function uploadFile() {
    var formData = new FormData();
    formData.append("image", $("#fileupload")[0].files[0]);
    $.ajax({
      method: "POST",
      url: "https://api.api-ninjas.com/v1/imagetotext",
      data: formData,
      headers: { "x-api-key": "b/2nnHP1k6eJEQZjD+Govw==3f5SkWL0WGI2PKPW" },
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      success: function (result) {
        let extractedTxt = "";
        result.map(
          (element) => (extractedTxt = extractedTxt + " " + element.text)
        );

        document.querySelector(".result").innerHTML = extractedTxt;
      },
      error: function ajaxError(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText);
        
      },
    });
    
  }
