
$(document).ready(function(){
var webpage=window.location.href
var reg = RegExp(/checkout/)
if(webpage.match(reg)){ 
$('div#cc-checkout-wrapper').before($('<select id="TranslateCheckout"><\/select>')); 
$("#TranslateCheckout").append("<option value='de'>Checkout in Deutsch<\/option>");     
$("#TranslateCheckout").append("<option value='en'>Checkout in English<\/option>");
}
});
