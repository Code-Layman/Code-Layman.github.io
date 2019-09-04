$(document).ready(function(){
$("#cc-checkout-steps li span").attr("class","trn");	
$("h3").attr("class","trn");
$("label").attr("class","trn");	
		
var local = {
        "Warenkorb":{en:"Shipping cart"},
        "Adresse angeben":{en:"Shipping address"},
        "Bezahlen":{en:"Payment"},
        "Bestätigen":{en:"Confirm"},
        "Einzelpreis":{en:"Single price"},
	"Anzahl":{en:"Amount"},
	"Preis":{en:"Price"},
	"Zwischensumme":{en:"Subtotal"},
	"Versandkosten":{en:"Shipping costs"},
	"Gesamtsumme":{en:"Total"},
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
}
else if(country == "de") {
translator.lang("de")
}
});	
});
