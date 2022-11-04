var EKFC = EKFC || {};
EKFC.FC  = EKFC.FC || {};                           // EKFC name space

EKFC.dataSrc1   = null;
EKFC.dataSrc2   = null;
EKFC.resultData = null;



const toCsv = function (table) {
    // Query all rows
    const rows = table.querySelectorAll('tr');

    return [].slice
        .call(rows)
        .map(function (row) {
            // Query all cells
            const cells = row.querySelectorAll('th,td');
            return [].slice
                .call(cells)
                .map(function (cell) {
                    return cell.textContent;
                })
                .join(',');
        })
        .join('\n');
};
const download = function (text, fileName) {
    const link = document.createElement('a');
    link.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`);
    link.setAttribute('download', fileName);

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
};


EKFC.exportResultCsv = function(){
    const table = document.getElementById('mainListTable3');
     // Export to csv
    const csv = toCsv(table);
    // Download it
    var filename = "Compare-Result_"+jsClient.getTodayDateTime();
    download(csv, filename+'.csv');
} 
EKFC.exportResultExcel = function(){
    var elt = document.getElementById('mainListTable3');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    var filename = "Compare-Result_"+jsClient.getTodayDateTime();
    XLSX.writeFile(wb, filename+'.xlsx');
}


EKFC.getAnotherSrcColumnData = function(rIndx, columnName, columnValue){
    var myList = EKFC.dataSrc2;
    var rowData = myList[rIndx];
    var columnValue2 = rowData[columnName];
    if (columnValue2 == null) columnValue2 = "";
    return columnValue2;
}

EKFC.doCompare = function(){

    var myList = EKFC.dataSrc1;
    addAllColumnHeaders(myList, "#mainListTable3");
    for (var i = 0; i < myList.length; i++) {
        var row$ = $('<tr/>');
        var rowData = myList[i];

        for (var key in rowData) {
            var columnName = key;
            var columnValue = rowData[key];
            if (columnValue == null) columnValue = "";
            var columnValue2s = EKFC.getAnotherSrcColumnData(i, columnName, columnValue);
            if(columnValue == columnValue2s){
                 row$.append( $('<td/>').html(columnValue) );
            } else {
                var td$ = $('<td/>').html(columnValue);
                td$.css('color', 'red');
                td$.css('background', 'antiquewhite');
                row$.append( td$ );
            }
        }

        $("#mainListTable3" + " tbody").append(row$);
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
    }
}


EKFC.renderPreviewTable = function(jsonData, fFlag) {
    console.log(fFlag);
    console.log(jsonData);
    try {
        var tableId = "";
        if(fFlag == "f1"){
            EKFC.dataSrc1 = jsonData;
            tableId = "#mainListTable";
        } 
        if(fFlag == "f2"){
            EKFC.dataSrc2 = jsonData;
            tableId = "#mainListTable2";
        } 
        jsClient.renderTableFromJSON(jsonData, tableId);
    } catch(er){
        console.log(er);
    }

    // $('#tbl_top_customer_by_order_value tbody').find('tr').each(function(indx, tr){
    //     $(tr).find('td').eq(2).css('text-align', 'end');
    // });
}

EKFC.previewUploadData = function(thisEl){
    var filename = $(thisEl).val().toLowerCase();
    var fileExt = filename.split('.').pop();

    // Checks whether the file is a valid excel file 
    if (fileExt != "xlsx" && fileExt != "xls") {
        alert("Please upload a valid Excel file!");
        return;
    }

    var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/
    if ($(thisEl).val().toLowerCase().indexOf(".xlsx") > 0) {
        xlsxflag = true;
    }
    /*Checks whether the browser supports HTML5*/
    if (typeof (FileReader) != "undefined") {
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            /*Converts the excel data in to object*/
            if (xlsxflag) {
                var workbook = XLSX.read(data, { type: 'binary' });
            } else {
                var workbook = XLS.read(data, { type: 'binary' });
            }
            /*Gets all the sheetnames of excel in to a variable*/
            var sheet_name_list = workbook.SheetNames;
            console.log(sheet_name_list);

            var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
            sheet_name_list.forEach(function (y) { /*Iterate through all sheets*/
                /*Convert the cell value to Json*/
                var excelJson;
                if (xlsxflag) {
                    excelJson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                }
                else {
                    excelJson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                }
                console.log(excelJson);
                if (excelJson.length > 0 && cnt == 0) {
                    EKFC.renderPreviewTable(excelJson, $(thisEl).attr("data-attr"));
                    cnt++;
                }
            });
            $('#exceltable').show();
        }
        if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/
            reader.readAsArrayBuffer($(thisEl)[0].files[0]);
        }
        else {
            reader.readAsBinaryString($(thisEl)[0].files[0]);
        }


    } else {
        alert("Sorry! Your browser does not support HTML5!");
    }

}
