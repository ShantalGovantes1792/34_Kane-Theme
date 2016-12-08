$(document).ready(function(){
	console.log("hola");
	$("#logo").mouseover(function(){
		console.log("pepe");
		$(this).animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
         });	

});