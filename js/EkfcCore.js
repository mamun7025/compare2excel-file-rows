var EKFC = EKFC || {};
EKFC.FC = EKFC.FC || {};                           // EKFC Foodcraft name space
EKFC.FC.ADM = EKFC.FC.ADM || {};                   // EKFC Foodcraft Admin name space
EKFC.FC.ADM.VENDOR = EKFC.FC.ADM.VENDOR || {};     // EKFC Foodcraft Admin Vendor name space

// common
EKFC.FC.ADM.baseURL = "";
EKFC.FC.ADM.baseURL = g_fc_ctx;


EKFC.getData = function(url, successCallback, failCallback, completeCallback){
    EKFC.getRequest(url, successCallback, failCallback, completeCallback);
}
EKFC.postData = function(url, payload, successCallback, failCallback, completeCallback){
    EKFC.postRequest(url, payload, successCallback, failCallback, completeCallback);
}


EKFC.httpGet = function(url, successCallback, failCallback, completeCallback){
    EKFC.getRequest(url, successCallback, failCallback, completeCallback);
}
EKFC.httpPost = function(url, payload, successCallback, failCallback, completeCallback){
    EKFC.postRequest(url, payload, successCallback, failCallback, completeCallback);
}


EKFC.getRequest = function(url, successCallback, failCallback, completeCallback){
    url = url + '?q=' + (new Date());
    $.get(url, function (data) {
        successCallback(data);
    }).fail(function (data) {
        failCallback(data);
    }).always(function (data) {
        if (completeCallback != null) {
            completeCallback(data);
        }
    });
}

EKFC.postRequest = function(uri, payload, successCallback, errorCallback, completeCallback){
    $.ajax({
        url: uri,
        type: "POST",
        data: payload,
        cache: false,
        contentType: 'application/json',
        processData: false,
        success: function (data, textStatus, xhr) {
            fcLoading(true, '80');
            try {
                var rsdat = null;
                try {
                    rsdat = JSON.parse(data);
                } catch (exs) {
                    rsdat = data;
                }
                // rsdat = fcabsec(rd,2);
                if (xhr.status == 200) {
                    successCallback(rsdat);
                } else if (xhr.status == 417) {
                    ekshownotification('top', 'right', '' + rsdat.mda, 'danger', 'fa-bell');
                } else {
                    ekshownotification('top', 'right', 'Unable to process, please try again or contact support service', 'danger', 'fa-bell');
                }
            } catch (exx) {
                ekshownotification('top', 'right', 'Unable to process, please try again or contact support service', 'danger', 'fa-bell');
            }
        },
        error: function (objAJAXRequest, strError) {
            errorCallback(objAJAXRequest);
        },
        complete: function (objAJAXRequest, data) {
           completeCallback(objAJAXRequest);
        }
    });
}



EKFC.base64ToArrayBuffer = function(base64){
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
        var ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes;
}


/**
 * Validate form fields
 * @param container
 * @returns {boolean}
 */
EKFC.validateFormContainerFields = function(container) {
    var error = false;
    $(container).find('input, select, textarea').each(function() {
      var type = $(this).attr('type');
      if(type == 'checkbox') return;
      if (!!$(this).prop('required')) {
        if ($(this).val() == '') {
          error = true;
          console.log($(this).attr('name'));
          EKFC.hightlightErrorField($(this));
          $(this).focus();
        }
      }
    });
    return error;
}
  
/**
 * Highlight error field for a certain period
 * @param field
 */
EKFC.hightlightErrorField = function(field) {
    field.addClass('error');
    setTimeout(function() {
      field.removeClass('error');
    }, 3000);
}

EKFC.focusFiledForValidData = function(fieldName){
    let elm = $('#formEntry input[name='+fieldName+']');
    EKFC.hightlightErrorField(elm);
}