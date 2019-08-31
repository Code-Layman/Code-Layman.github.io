$(document).ready(function(){
var webpage=window.location.href
var reg = RegExp(/blog/)
if(webpage.match(reg)){ 
$('div#cc-m-11009725498').hide(); 
$('div#cc-m-11191541098').hide(); 
}
});
