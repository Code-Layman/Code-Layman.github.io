$(document).ready(function(){
var webpage=window.location.href
var reg1 = RegExp(/lab-glasses/);
var reg2 = RegExp(/lab-equipments/);
var reg3 = RegExp(/lab-accessories/);
var reg4 = RegExp("/\en\/");
if(webpage.match(reg1) || webpage.match(reg2)|| webpage.match(reg3)|| webpage.match(reg4)){ 
$('div#cc-m-11009725498').hide();
}
});
