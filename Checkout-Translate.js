$(document).ready(function(){
$("span").attr("class","trn");
		
var local = {
    "Warenkorb":{en:"Shipping cart"},
    "Adresse angeben":{en:"Shipping address"},
    "Bezahlen":{en:"Payment"},
    "Bestätigen":{en:"Confirm"},
    "Herr":{en:"Mr"},
    "Frau": {en:"Mrs"},
};	

var translator = $('body').translate({
    lang: "de", 
    t: local
});
		
$("#TranslateCheckout").change(function(){
var country=$("#TranslateCheckout").children('option:selected').val()
        
if(country == "en") {
$("#cc-checkout-submit-0").attr("Value","Next step");
translator.lang("en")
}
else if(country == "de") {
$("#cc-checkout-submit-0").attr("Value","Nächster Schritt");
translator.lang("de")
}
});	
});
