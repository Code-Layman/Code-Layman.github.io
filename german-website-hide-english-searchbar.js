$(document).ready(function(){
var webpage=window.location.href
var reg1 = RegExp(/laborglas/);
var reg2 = RegExp(/laborgeraete/);
var reg3 = RegExp(/laborzubehoer/);
var reg4 = RegExp(/lehrmittel/);
var reg5 = RegExp("/\de\/");
if(webpage.match(reg1) || webpage.match(reg2)|| webpage.match(reg3)|| webpage.match(reg4)|| webpage.match(reg5)){ 
$('div#cc-m-11191541098').hide(); 
}
});
