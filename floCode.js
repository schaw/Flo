var viz,workbook,activeSheet,Worksheet,worksheet;function initializeViz(){var e=document.getElementById("tableauViz"),t={width:"100%",height:"80%",hideTabs:!0,hideToolbar:!0,onFirstInteractive:function(){workbook=viz.getWorkbook(),activeSheet=workbook.getActiveSheet()}};viz=new tableauSoftware.Viz(e,"https://public.tableau.com/views/BetaMovie/Ratings",t)}function floSays(e){responsiveVoice.speak(e)}function toPascalCase(e){return e.toLowerCase().replace(/\b[a-z]/g,function(e){return e.toUpperCase()})}function addToHistory(e,t){$("<span><li>"+e+"&nbsp;"+t+"</li></span>").appendTo("#SearchHistory ul"),$("#snackbar").html("We heard "+t),showSnackbar()}function showSnackbar(){var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)}if($(document).ready(function(){initializeViz(),$(document).keydown(function(e){var t=String.fromCharCode(e.keyCode).toLowerCase();if(e.ctrlKey&&("c"==t||"u"==t))return!1}),$(".disableEvent").on("contextmenu",function(){return!1}),$(".disableEvent").bind("cut copy paste",function(e){e.preventDefault()})}),floSays("Welcome to Flow"),annyang){var startOver=function(){viz.revertAllAsync(),responsiveVoice.speak("starting over")},selectStudio=function(e){var t=toPascalCase(e);addToHistory("",t),activeSheet.getWorksheets()[1].selectMarksAsync("Lead Studio",t,"REPLACE")},unSelectStudio=function(e){var t=toPascalCase(e);addToHistory("",t),activeSheet.getWorksheets()[1].selectMarksAsync("Lead Studio",t,"REMOVE")},addSelectStudio=function(e){var t=toPascalCase(e);addToHistory("",t),activeSheet.getWorksheets()[1].selectMarksAsync("Lead Studio",t,"ADD")},clearSelect=function(){activeSheet.getWorksheets()[1].clearSelectedMarksAsync()},filterGenre=function(e){var t=toPascalCase(e);addToHistory("",t),activeSheet.getWorksheets()[1].applyFilterAsync("Genre",t,"REPLACE")},addFilterGenre=function(e){var t=toPascalCase(e);addToHistory("",t),activeSheet.getWorksheets()[1].applyFilterAsync("Genre",t,"ADD")},removeFilterGenre=function(e){var t=toPascalCase(e);addToHistory("",t),activeSheet.getWorksheets()[1].applyFilterAsync("Genre",t,"REMOVE")},clearFilterGenre=function(e){var t=toPascalCase(e);addToHistory("",t),"Type"==t&&(t="Genre"),activeSheet.getWorksheets()[1].clearFilterAsync(t)},exportPDF=function(){addToHistory("","Heard Export PDF"),viz.showExportPDFDialog(),responsiveVoice.speak("Exporting this dashboard as PDF")},exportImage=function(){addToHistory("","Heard Export Image"),viz.showExportImageDialog(),responsiveVoice.speak("Exporting this dashboard as Image")},commands={"select *search":selectStudio,"unselect *search":unSelectStudio,"add to selection *search":addSelectStudio,"clear selection":clearSelect,"filter *genre":filterGenre,"add filter *genre":addFilterGenre,"remove *genre":removeFilterGenre,"clear filter *filtername":clearFilterGenre,"export to PDF":exportPDF,"export to image":exportImage,"start over":startOver,Reset:startOver};annyang.debug(),annyang.addCommands(commands),annyang.setLanguage("en"),annyang.start()}else $(document).ready(function(){$("#unsupported").fadeIn("fast")});