$(document).ready(function(){
var webpage=window.location.href
var reg = RegExp(/checkout/)
if(webpage.match(reg)){ 	
$("#cc-checkout-steps li span").attr("class","trn");	
$("#cc-checkout-paymentmethod-form h3").attr("class","trn");
$("label.j-checkout__product-single-price").attr("class","j-checkout__product-single-price trn");
$("label.j-checkout__product-amount").attr("class","j-checkout__product-amount trn");
$("label.j-checkout__product-price").attr("class","j-checkout__product-price trn");
$("label.j-checkout__products-subtotal-label").attr("class","trn");
$("label.j-checkout__shipping-costs-label").attr("class","trn");	
$("label.j-checkout__products-total-label").attr("class","trn");	
$("label.j-checkout__customer-order-note__label").attr("class","trn");	
	
$("#cc-checkout-address-head-same").attr("class","trn");
$("#cc-checkout-address-head-differs").attr("class","trn");	
$("option").attr("class","trn");		
$(".j-checkout__input-label ").attr("class","j-checkout__input-label trn");

function toEnglish(){
$("input[id*='cc-checkout-submit']").attr("Value","Next step");
$("label[for*='firstname']").text("First Name *");
$("label[for*='lastname']").text("Last Name *");
$("label[for*='street']").text("Street, No. *");
$("label[for*='zip']").text("Post code *");
$("label[for*='city']").text("City *");
$("label[for*='telephone']").text("Telephone *");
$("label[for*='country']").text("Country * ");
$("#cc-checkout-form p").text("* Required");
}
	
function toGerman(){
$("input[id*='cc-checkout-submit']").attr("Value","Nächster Schritt");
$("label[for*='firstname']").text("Vorname *");
$("label[for*='lastname']").text("Nachname *");
$("label[for*='street']").text("Straße, Nr. *");
$("label[for*='zip']").text("Postleitzahl *");
$("label[for*='city']").text("Stadt *");
$("label[for*='telephone']").text("Telefon *");
$("label[for*='country']").text("Land * ");
$("#cc-checkout-form p").text("* Pflichtfeld");
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
	
	"Rechnungs- und Lieferadresse":{en:"Billing and shipping address"},
	"Rechnungsadresse":{en:"Billing address"},
	"Anrede":{en:"Title"},
	"Firma":{en:"Company"},
	"Adresszusatz":{en:"Address addition"},	
	"Bundesland/Kanton":{en:"State"},	
	"USt-IdNr.":{en:"VAT No."},	
	"Bundesland/Kanton":{en:"State"},
	
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
}	
});
