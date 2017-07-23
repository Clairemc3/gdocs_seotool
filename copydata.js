function copymsmdata() { //Copies calculated data from sheet MSM data into sheet Mailspeed Marine; creating a sheet with clean values (no forumlas)

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheetFrom = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("MSMData");
var sheetTo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Mailspeed Marine");
var sheetCalc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("calcSheet");

sheetTo.getRange("A1:F4000").clearContent();//deletes all Data from sheet Mailspeed Marine

// Because columns B:G contain extra formulas to allow for the additon of keywords, 
//values from first column have to be copied into calcSheet in order to get the num of total rows of column A
// (getLastRow function records last record in last column with any data)
  
//Copies all values from column 1 into sheetCalc:
 var valuesToCopyFirst = sheetFrom.getRange(1, 1, sheetFrom.getLastRow(), 1).getValues();
sheetCalc.getRange(1,sheetCalc.getLastColumn()+1,valuesToCopyFirst.length,1).setValues(valuesToCopyFirst);
  
//Copies data from MSMdata, using num of rows in Sheet calc as numRows
var valuesToCopy = sheetFrom.getRange(1, 1, sheetCalc.getLastRow(), 7).getValues();
  
//Paste to sheet Mailspeed Marine from first cell onwards
sheetTo.getRange(1,1,valuesToCopy.length,7).setValues(valuesToCopy);

//Clear data from calcSheet
  sheetCalc.getRange("A:A").clearContent();
}