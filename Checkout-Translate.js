$(document).ready(function(){
$("#cc-checkout-steps li span").attr("class","trn");	
$("h3").attr("class","trn");
$("label.j-checkout__product-single-price").attr("class","trn");
$("label.j-checkout__product-amount").attr("class","trn");
$("label.j-checkout__product-price").attr("class","trn");
$("label.j-checkout__products-subtotal-label").attr("class","trn");
$("label.j-checkout__shipping-costs-label").attr("class","trn");	
$("label.j-checkout__products-total-label").attr("class","trn");	
$("label.j-checkout__customer-order-note__label").attr("class","trn");	

function toEnglish(){
$("#cc-checkout-submit-0").attr("Value","Next step");	
}
	
function toGerman(){
$("#cc-checkout-submit-0").attr("Value","Nächster Schritt");		
}		
		
var local = {
        "Warenkorb":{en:"Shipping cart"},
        "Adresse angeben":{en:"Shipping address"},
        "Bezahlen":{en:"Payment"},
        "Bestätigen":{en:"Confirm"},
        "Einzelpreis":{en:"Single price"},
	"Anzahl":{en:"Amount"},
	"Preis":{en:"Price"},
	"Zwischensumme":{en:"Subtotal"},
	"Versandkosten*<small></small>:":{en:"Shipping costs*:"},
	" Gesamtsumme<small></small>:":{en:" Total:"},
	"Anmerkung zur Bestellung":{en:"Customer order note"},
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
translator.lang("en")
toEnglish()
}
else if(country == "de") {
translator.lang("de")
toGerman()	
}
});	
});
