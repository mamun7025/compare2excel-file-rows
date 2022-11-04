var EKFC = EKFC || {};
EKFC.FC = EKFC.FC || {};                           // EKFC Foodcraft name space
EKFC.FC.ADM = EKFC.FC.ADM || {};                   // EKFC Foodcraft Admin name space
EKFC.FC.ADM.VENDOR = EKFC.FC.ADM.VENDOR || {};     // EKFC Foodcraft Admin Vendor name space
EKFC.Utils = EKFC.Utils || {};                     // EKFC Utils name space


EKFC.collectSearchParams = function(container){

    var searchParams = {};
    $(container).find('input, select, textarea').each(function(index, element) {
        var attributeType = $(element).attr('type');
        var attributeName = $(element).attr('name');
        var attributeValue = $(element).val();
        // console.log(index);
        // console.log(attributeType);

        if(attributeType == "checkbox"){
            var isChecked = $(element).prop('checked');
            attributeValue = (isChecked === true) ? '1' : '0';
        }
        searchParams[attributeName] = attributeValue;
      });

      return searchParams;

}

EKFC.collectFormData = function(container){

  var formData = {};
  $(container).find('input, select, textarea').each(function(index, element) {
      var attributeType = $(element).attr('type');
      var attributeName = $(element).attr('name');
      var attributeValue = $(element).val();
      // console.log(index);
      // console.log(attributeType);

      if(attributeType == "checkbox"){
          var isChecked = $(element).prop('checked');
          attributeValue = (isChecked === true) ? '1' : '0';
      }
      formData[attributeName] = attributeValue;
    });

    return formData;

}

EKFC.populateFormData = function(container, formData){
  for(var fieldName in formData){
    var fieldValue = formData[fieldName];
    $(container).find('input[name='+fieldName+']').val(fieldValue);
    $(container).find('select[name='+fieldName+']').val(fieldValue);
    $(container).find('textarea[name='+fieldName+']').val(fieldValue);
  }
}

EKFC.resetSearchForm = function(container){
  $(container).find('input, select, textarea').each(function(index, element) {
      $(element).val("");
  });
}



EKFC.Utils.showProcessinOverlay = function(messageStr = ""){
    if(messageStr == "") messageStr = "Processing, please wait";
  
    $('body').find('#myProcessinOverlay').remove();
    var processinOverlay = '<div id="myProcessinOverlay" class="myProcessinOverlay">\
      <div class="myProcessinOverlay-content" id="myProcessinOverlay-content">\
        <div id="myProcessinOverlay-loadingDiv">\
          <center><div class="loader-box"><div class="loader-19"></div></div></center>\
        </div>\
        <div class="myProcessinOverlay-body" id="myProcessinOverlay-body">\
          <div id="myProcessinOverlay-message" style="color:black; font-weight:bold; font-size:20px;"><center><span>'+messageStr+'</span></center></div>\
        </div>\
      </div>\
    </div>';
    $('body').append(processinOverlay);
  
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowHeight_XX =  (windowHeight/2) - 200;
  
    // apply css ---------
    $('.myProcessinOverlay').css({
    'position':'fixed',
    'z-index':'9999',
    'padding-top': windowHeight_XX+'px',
    'left':'0',
    'top':'0',
    'width':'100%',
    'height':'100%'
    });

    $('.myProcessinOverlay .loader-19').css({
      "font-size": "27px",
    });
    $('#myProcessinOverlay-content').css({
      'background': 'white',
      'max-width': '500px',
      'min-height': '200px',
      'margin': 'auto',
      'opacity': '0.8',
    })
    
    return;
}

EKFC.Utils.removeProcessingOverlay = function(){
    $('body').find('#myProcessinOverlay').remove();  
}



EKFC.Utils.closeSwalLoading = function(){
    // $('.swal-modal .swal-button--confirm').click();
    // setTimeout(function() {
    //     swal("", {
    //         icon: "success",
    //     });
    // }, 1000);
    swal.close();
}

EKFC.Utils.addSuccessSwalLoading = function(){
    swal("", {
        icon: "success",
    });
}

EKFC.Utils.addSwalLoading = function(){
    var loadingHTML = `
    <div class="loader-box">
        <div class="loader-19"></div>
    </div>`;

    // swal("", "", "success");
    swal({
        title: 'Are you sure?',
        text: "",
        type: 'warning',
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: true,
        allowEscapeKey: false,
        // allowEnterKey: false,
        buttons: false,
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        
        // confirmButtonText: 'Yes',
        // cancelButtonText: 'No'
        });
        $('.swal-modal .swal-title').empty().append(loadingHTML);
}



EKFC.Utils.collectListTableData = function(){
  var listData = [];
  $('#mainListTable > tbody  > tr').each(function(index, tr) { 
      var rowBean = {};
      $(tr).find('td').each(function(){
          var fieldName = $(this).attr('fieldname');
          var fieldValue = $(this).text().trim();
          rowBean[fieldName] = fieldValue;
      });
      listData.push(rowBean);
  });
  console.log(listData);
  return listData;
}