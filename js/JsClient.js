/**
 * Author: Al-Mamun
 * Last Modify Date: 2017-01-21
 */

/**
 * Declare jsClient Namespace if not exist
 */
 var jsClient = jsClient || {};


 jsClient.isJSON = function (str) {
     try {
         JSON.parse(str);
     } catch (e) {
         return false;
     }
     return true;
 }

 jsClient.paramsToQueryString = function(obj){
      var str = [];
      for(var p in obj){
          if (obj.hasOwnProperty(p)) {
              str.push(p + "=" + obj[p]);
          }
      }
      return str.join("&");
 }
 
 jsClient.paramsToQueryStringEncode = function(obj){
      var str = [];
      for(var p in obj){
          if (obj.hasOwnProperty(p)) {
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
      }
      return str.join("&");
 }
 
 
 /**
  * Converts a list of arguments from window.location.search into an object
  * @param  {string} url [description]
  * @return {object}     [description]
  */
  // var params = jsClient.paramsToObj(window.location.search);
 jsClient.paramsToObj = function( url ) {
   var
     params = url.split('?')[1],
     results = {},
     splitparam = [];
 
   // Must check before trying to split
   if ( params === undefined ) return {};
 
   params = decodeURIComponent(params).split('&'); 
   for (var i = params.length - 1; i >= 0; i--) {
     splitparam = params[i].split('=');
     results[splitparam[0]] = splitparam[1];
   };
   return results;
 }
 
 jsClient.getURLParameter = function(sParam){
     var sPageURL = window.location.search.substring(1);
     var sURLVariables = sPageURL.split('&');
     for (var i = 0; i < sURLVariables.length; i++) 
     {
         var sParameterName = sURLVariables[i].split('=');
         if (sParameterName[0] == sParam) 
         {
             return sParameterName[1];
         }
     }
 }
 


 /**
  * Date functions
  * @returns 
  */
 jsClient.getTodayDate = function(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var todayDate = yyyy+'-'+mm+'-'+dd;
	return todayDate;
}

jsClient.getTodayDateTime = function(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

    var h = today.getHours() + ":"  
    var m = today.getMinutes() + ":" 
    var s = today.getSeconds();

	var todayDateTime = yyyy+'-'+mm+'-'+dd + " " + h + m + s;
	return todayDateTime;
}
jsClient.getYsterdayDate = function(){
    var today     = new Date();
    var yesterday = new Date();
    yesterday.setTime(today.getTime()-(24*3600000));

	var dd = yesterday.getDate();
	var mm = yesterday.getMonth()+1; //January is 0!
	var yyyy = yesterday.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var yesterdayDate = yyyy+'-'+mm+'-'+dd;
	return yesterdayDate;
}
jsClient.getLastWeekDate = function(){
    
    var today    = new Date();
    var lastWeek = new Date();
    lastWeek.setTime(today.getTime()-(7*24*3600000));

	var dd = lastWeek.getDate();
	var mm = lastWeek.getMonth()+1; //January is 0!
	var yyyy = lastWeek.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var lastWeekDate = yyyy+'-'+mm+'-'+dd;
	return lastWeekDate;
}

jsClient.getLastMonthDate = function(){
    
    var today    = new Date();
    var lastWeek = new Date();
    lastWeek.setTime(today.getTime()-(31*24*3600000));

	var dd = lastWeek.getDate();
	var mm = lastWeek.getMonth()+1; //January is 0!
	var yyyy = lastWeek.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var lastWeekDate = yyyy+'-'+mm+'-'+dd;
	return lastWeekDate;
}

jsClient.getLastYearDate = function(){
    
    var today    = new Date();
    var lastWeek = new Date();
    lastWeek.setTime(today.getTime()-(364*24*3600000));

	var dd = lastWeek.getDate();
	var mm = lastWeek.getMonth()+1; //January is 0!
	var yyyy = lastWeek.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var lastWeekDate = yyyy+'-'+mm+'-'+dd;
	return lastWeekDate;
}
jsClient.getNxDaysEarlierDate = function(nBackDay){

    var thisDate = new Date();
    thisDate.setDate(thisDate.getDate() - nBackDay);

	var dd = thisDate.getDate();
	var mm = thisDate.getMonth()+1; //January is 0!
	var yyyy = thisDate.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var thatDate = yyyy+'-'+mm+'-'+dd;
	return thatDate;
}

jsClient.getNxDaysFutureDate = function(nFutureDay){

    var thisDate = new Date();
    thisDate.setDate(thisDate.getDate() + nFutureDay);

	var dd = thisDate.getDate();
	var mm = thisDate.getMonth()+1; //January is 0!
	var yyyy = thisDate.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

	var thatDate = yyyy+'-'+mm+'-'+dd;
	return thatDate;
}

jsClient.getNxDaysFutureDateTime = function(nFutureDay){

    var thisDate = new Date();
    thisDate.setDate(thisDate.getDate() + nFutureDay);

	var dd = thisDate.getDate();
	var mm = thisDate.getMonth()+1; //January is 0!
	var yyyy = thisDate.getFullYear();
	if(dd<10){ dd='0'+dd} 
	if(mm<10){ mm='0'+mm} 

    var h = thisDate.getHours() + ":"  
    var m = thisDate.getMinutes() + ":" 
    var s = thisDate.getSeconds();

	var todayDateTime = yyyy+'-'+mm+'-'+dd + " " + h + m + s;
	return todayDateTime;
}

jsClient.getCurrentYear = function(){
	var today = new Date();
	var yyyy = today.getFullYear();
	return yyyy;
}

jsClient.getMonthStartDate = function(y, m, flag) {
	if(!!flag && flag == "full"){
		var startDate = new Date(y, m, 1).getDate();
		if(startDate.toString().length == 1) startDate = "0" + startDate;
		return y + '-' + m + "-" + startDate;
	}
	return  new Date(y, m, 1).getDate();
}

jsClient.getMonthEndDate = function(y, m, flag) {
	m = m-1;
	// if(m == 11) m = m-1;

	if(!!flag && flag == "full"){
		m = m + 1;
		var endDate = new Date(y, m, 0).getDate();
		if(m.toString().length == 1) m = "0" + m;
		return y + '-' + m + "-" + endDate;
	}
	return  new Date(y, m+1, 0).getDate();
}


jsClient.formatDisplayDateTime = function(strDateTime, flagStd){
    if(strDateTime == null) return "";
    if(strDateTime == "") return "";
    var date = new Date(strDateTime);
    var dispayDateTime = date.toLocaleString();
    if(!!flagStd && flagStd == "STD"){
        var dArr = dispayDateTime.split(",")[0].split("/");
        var displayTxt = dArr[2]+'-'+dArr[1]+'-'+dArr[0] + " " + dispayDateTime.split(",")[1];
        return displayTxt;
    }
    return dispayDateTime;
}
jsClient.formatDisplayDateTime2 = function(strDateTime, flagStd){
    if(strDateTime == null) return "";
    if(strDateTime == "") return "";
    var date = new Date(strDateTime);
    var dispayDateTime = date.toLocaleString();
    if(!!flagStd && flagStd == "STD"){
        var dArr = dispayDateTime.split(",")[0].split("/");
        var tArr = dispayDateTime.split(",")[1].split(":");
        var timeStr = tArr[0] + ":" + tArr[1] + " " + tArr[2].split(" ")[1];
        if(timeStr.length == 8) timeStr = " &nbsp;" + timeStr;
        var displayTxt = dArr[1]+'/'+dArr[0]+'/'+dArr[2] + " " + timeStr;
        return displayTxt;
    }
    return dispayDateTime;
}

jsClient.formatDisplayDate = function(strDateTime, flagStd){
    if(strDateTime == null) return "";
    if(strDateTime == "") return "";
    var date = new Date(strDateTime);
    var dispayDateTime = date.toLocaleString();
    if(!!flagStd && flagStd == "STD"){
        var dArr = dispayDateTime.split(",")[0].split("/");
        var displayTxt = dArr[2]+'-'+dArr[1]+'-'+dArr[0];
        return displayTxt;
    }
    return dispayDateTime;
}
jsClient.formatDisplayDate2 = function(strDateTime){
    if(strDateTime == null) return "";
    if(strDateTime == "") return "";
    var date = new Date(strDateTime);
    var dispayDateTime = date.toLocaleString();
    var dArr = dispayDateTime.split(",")[0].split("/");
    var displayTxt = dArr[1]+'/'+dArr[0]+'/'+dArr[2];
    return displayTxt;
}


jsClient.getDayFromDate = function(strDate){
    if(strDate == null) return "";
    if(strDate == "") return "";
    var date = new Date(strDate);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[date.getDay()];
    return dayName;
}


jsClient.getDDMMM_fromDate = function(strDate){
    if(strDate == null) return "";
    if(strDate == "") return "";
    var d = new Date(strDate);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[d.getMonth()];
    let dayDate = d.getDate();
    var ddMMM = dayDate + "-" + month;
    return ddMMM;
}


jsClient.setCookie = function(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
jsClient.getCookie = function(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

 /**
 * How to use 
 * var thisForm = $('#searchForm');
 * var searchParams = jsClient.formToSerializeObject(thisForm);
 */
jsClient.formToSerializeObject = function(thisForm){

    var arrayData, objectData;
    arrayData = thisForm.serializeArray();
    objectData = {};
  
    $.each(arrayData, function() {
      var value;
  
      if (this.value != null) {
        value = this.value;
      } else {
        value = '';
      }
  
      if (objectData[this.name] != null) {
        if (!objectData[this.name].push) {
          objectData[this.name] = [objectData[this.name]];
        }
  
        objectData[this.name].push(value);
      } else {
        objectData[this.name] = value;
      }
    });
  
    return objectData;
  
}
  


// var formId =  $("#"+formId);
// jsClient.resetForm(formId)
jsClient.resetForm = function(thisobj) {
    thisform = thisobj;
    selectbox_in_form = thisform.find('select');

    // completely remove selected when it has been assigned.
    selectbox_in_form.find('option:selected').removeAttr('selected');
    selectbox_in_form.val('');
    selectbox_in_form.change();

    delete selectbox_in_form;
    delete thisform;
}



jsClient.loadJavaScript = function(scriptName, scriptSrcPath) {

    // var cstFormJsURL = window.location.protocol + "//" + window.location.host + "" + ZERP.System.contextPath + "/PkgCustomJsCss/" + pkgName + "/js/" + entityFormCstJs + "?v=123";
    // var scriptSrcPath = "http://localhost/foodcraft-admin/assets/js/sidebar-menu.js";
    if(scriptSrcPath == null || scriptSrcPath == "") return;

    var jsScript = document.createElement('script');
    jsScript.type = 'text/javascript';
    jsScript.onload = function () {
        console.log("load done..." + scriptName);
    };
    jsScript.onerror = function (e) {
        console.error('script.onerror...' + scriptName);
    };
    jsScript.src = scriptSrcPath;
    document.getElementsByTagName('body')[0].appendChild(jsScript);

}

jsClient.loadInitialJavaScriptFiles = function(scriptFilesMap) {
    // var scriptFilesMap = {};
    // scriptFilesMap['sidebar-menu'] = 'assets/js/sidebar-menu.js';
    // scriptFilesMap['fc-cms-utils'] = 'assets/js/fc-cms-utils.js';
    for (const key in scriptFilesMap) {
        if (scriptFilesMap.hasOwnProperty(key)) {
            var scriptName = key;
            var scriptSrcPath = scriptFilesMap[key];
            jsClient.loadJavaScript(scriptName, scriptSrcPath);
        }
    }
}



jsClient.validatePositiveIntegerValue = function(evt, thisPtr){

    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        // Allow: backspace, delete, tab, escape, enter, ctrl+A and .
        // 46, 8, 9, 27, 13, 110, 190
        if(key == 48 || key == 8 || key == 9 || key == 27 || key == 13 || key == 110 || key == 19) return; // let it happen, don't do anything
        key = String.fromCharCode(key);
    }
  
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
  
    } else if ($(thisPtr).val().indexOf(".") >= -1) {
        if(key == '.'){
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
            return;
        } 
    }
  
  }
  
  
  // SRC:https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
  jsClient.validateNumberValue = function(evt, thisPtr){
  
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
  
        // https://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery?page=1&tab=votes#tab-top
        // Allow: backspace, delete, tab, escape, enter, ctrl+A and .
        // 46, 8, 9, 27, 13, 110, 190
        if(key == 48 || key == 8 || key == 9 || key == 27 || key == 13 || key == 110 || key == 19) return; // let it happen, don't do anything
  
        key = String.fromCharCode(key);
    }
  
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
  
    } else if ($(thisPtr).val().indexOf(".") >= 0) {
  
        if(key == '.'){
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
          return;
        } 
  
    }
  
  }
  
  jsClient.validateCellPhoneNumber = function(thisPtr){
      // var mob = /^[1-9]{1}[0-9]{9}$/;
      var mob = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (mob.test( $(thisPtr).val()) == false) {
          $(thisPtr).val('');
          $(thisPtr).attr('placeholder', 'Invalid phone');
          $(thisPtr).focus();
          return false;
      }
      return true;
  }
  

  jsClient.validateEmail = function(emailStr){
    var re = /\S+@\S+\.\S+/;
    return re.test(emailStr);
  }


jsClient.renderTableFromJSON_tdRender = function(fieldName, fieldValue, fWhere){
    return fieldValue;
}
jsClient.renderTableFromJSON = function(myList, selector){
    buildHtmlTable(myList, selector);
    // Builds the HTML Table out of myList.
    function buildHtmlTable(myList, selector) {
        var columns = addAllColumnHeaders(myList, selector);
        for (var i = 0; i < myList.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = myList[i][columns[colIndex]];
                cellValue = jsClient.renderTableFromJSON_tdRender(columns[colIndex], cellValue, selector);
                if (cellValue == null) cellValue = "";
                row$.append($('<td/>').html(cellValue));
            }
            $(selector + " tbody").append(row$);
        }
    }
  
    function addAllColumnHeaders(myList, selector) {
        var columnSet = [];
        var headerTr$ = $('<tr/>');
    
        for (var i = 0; i < myList.length; i++) {
            var rowHash = myList[i];
            for (var key in rowHash) {
                if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
                }
            }
        }
        $(selector + " thead").append(headerTr$);
        return columnSet;
    }
}


jsClient.renderTableFromJSON_bodyOnly = function(myList, selector){
    buildHtmlTable(myList, selector);
    // Builds the HTML Table out of myList.
    function buildHtmlTable(myList, selector) {
        var columns = addAllColumnHeaders(myList, selector);
        for (var i = 0; i < myList.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = myList[i][columns[colIndex]];
                cellValue = jsClient.renderTableFromJSON_tdRender(columns[colIndex], cellValue, selector);
                if (cellValue == null) cellValue = "";
                row$.append($('<td/>').html(cellValue));
            }
            $(selector + " tbody").append(row$);
        }
    }
    function addAllColumnHeaders(myList, selector) {
        var columnSet = [];
        for (var i = 0; i < myList.length; i++) {
            var rowHash = myList[i];
            for (var key in rowHash) {
                if ($.inArray(key, columnSet) == -1) {
                    columnSet.push(key);
                }
            }
        }
        return columnSet;
    }
}


jsClient.getPagination = function(showLimit, rows, page){ 
    var limit = showLimit;
    var adjacents = 3;
    show = showLimit;

    pagination='';
    if (page == 0) page = 1;                    //if no page var is given, default to 1.
    prev = page - 1;                            //previous page is page - 1
    next = page + 1;                            //next page is page + 1
    prev_='';
    first='';
    lastpage = Math.ceil(rows/limit);  
    next_='';
    last='';

    console.log("@lastpage:");
    console.log(lastpage);

    if(lastpage > 1)
    {   
        //previous button
        if (page > 1) {
            prev_  += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+prev+`" data-bs-original-title="" title="">Previous</a></li>`;
        }
        else {
            prev_  += `<li class="page-item disabled"><a class="page-link" href="javascript:void(0);" data-page="`+prev+`" data-bs-original-title="" title="">Previous</a></li>`;
        }
        
        //pages 
        // 1 // condition  row < 11
        if (lastpage < 5 + (adjacents * 2)) //not enough pages to bother breaking it up
        {   
            first='';
            for (counter = 1; counter <= lastpage; counter++){
                if (counter == page){
                    pagination+= `<li class="page-item active"><a class="page-link" href="javascript:void(0);" data-bs-original-title="" title="">`+counter+` <span class="sr-only">(current)</span></a></li>`;
                }
                else {
                    pagination  += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+counter+`" data-bs-original-title="" title="">`+counter+`</a></li>`;
                }
            }
            last='';
        }

        // 2 // condition row > 9
        else if(lastpage > 3 + (adjacents * 2))  //enough pages to hide some
        {
            // 2.1
            //close to beginning; only hide later pages
            first = '';
            if(page < 1 + (adjacents * 2))      
            {
                for (counter = 1; counter < 4 + (adjacents * 2); counter++)
                {
                    if (counter == page){
                        pagination+= `<li class="page-item active"><a class="page-link" href="javascript:void(0)" data-bs-original-title="" title="">`+counter+` <span class="sr-only">(current)</span></a></li>`;
                    }
                    else {
                        pagination  += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+counter+`" data-bs-original-title="" title="">`+counter+`</a></li>`;
                    }
                }
                // last+= "<a class='page-numbers' href='?page="+lastpage + "' " + ">Last</a>";          
                last+= `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+lastpage+`" data-bs-original-title="" title="">Last</a></li>`;
            }
            
            // 2.2
            //in middle; hide some front and some back
            else if(lastpage - (adjacents * 2) > page && page > (adjacents * 2))
            {
                first+= `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="1" data-bs-original-title="" title="">First</a></li>`;
                for (counter = page - adjacents; counter <= page + adjacents; counter++)
                {
                    if (counter == page){
                        // pagination+= "<span class=current>" + counter + "</span>";
                    }
                    else {
                        pagination  += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+counter+`" data-bs-original-title="" title="">`+counter+`</a></li>`;
                    }
                }
                // last+= "<a class='page-numbers' href='?page='"+lastpage +"' " + ">Last</a>";    
                last+= `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+lastpage+`" data-bs-original-title="" title="">Last</a></li>`;      
            }

            // 2.3
            //close to end; only hide early pages
            else
            {
                first+= `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="1" data-bs-original-title="" title="">First</a></li>`;
                for (counter = lastpage - (2 + (adjacents * 2)); counter <= lastpage; counter++)
                {
                    if (counter == page) {
                        pagination+= `<li class="page-item active"><a class="page-link" href="javascript:void(0)" data-bs-original-title="" title="">`+counter+` <span class="sr-only">(current)</span></a></li>`;
                    }
                    else {
                        pagination  += `<li class="page-item"><a class="page-link" href="javascript:void(0);" data-page="`+counter+`" data-bs-original-title="" title="">`+counter+`</a></li>`;
                    }
                }
                last='';
            }
            
        }



        if (page < counter - 1) {
            next_  += `<li class="page-item"><a class="page-link" href="#" data-page="`+next+`" data-bs-original-title="" title="">Next</a></li>`;
        }
        else {
            next_  += `<li class="page-item disabled"><a class="page-link" href="#" data-page="`+next+`" data-bs-original-title="" title="">Next</a></li>`;
        }


        pagination = "<ul class='pagination pagination-primary'>" + first + prev_ + pagination + next_ + last;
        pagination += "</ul>";

    }
    
    return pagination;  
}
