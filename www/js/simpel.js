/*
var server="http://nujessie.mugeno.org/ngh/dpupr/mobapp/";
var imgsrc="http://nujessie.mugeno.org/ngh/dpupr/img/";
*/ 

var server="http://dpupr.banjarnegara-foss.web.id/mobapp/";
var imgsrc="http://dpupr.banjarnegara-foss.web.id/img/";
$('document').ready(function(){

	var totHeight = window.innerHeight;
	var headerHeight = $("#default-app-title").height();
	var footerHeight = $("#simpel-footer").height();
	var contenHeight = parseInt(totHeight) - (parseInt(headerHeight)+parseInt(footerHeight)+5);
	
	$("#simpel-content").css({"height":contenHeight,"max-height":contenHeight,"overflow":"scroll"});

});
