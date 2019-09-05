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
$("#option").attr("class","trn");	
$(".j-checkout__input-label j-checkout__addressform-mandatory").attr("class","j-checkout__input-label j-checkout__addressform-mandatory trn");		
$(".j-checkout__input-label ").attr("class","j-checkout__input-label trn");
$(".cc-checkout-adressform-mandatory j-checkout__input-label optional").attr("class","cc-checkout-adressform-mandatory j-checkout__input-label optional trn");		
$("#cc-checkout-form p").attr("class","trn");	

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
	
	"Rechnungs- und Lieferadresse":{en:"Billing and shipping address"},
	"Rechnungsadresse":{en:"Billing address"},
	"Anrede":{en:"Title"},
	'Vorname <em class="j-checkout__required">*</em>':{en:"First name *"},
	'Nachname <em class="j-checkout__required">*</em>':{en:"Last name *"},
	"Firma":{en:"Company"},
	'Straße, Nr. <em class="j-checkout__required">*</em>':{en:"Street, No. *"},
	"Adresszusatz":{en:"Address addition"},	
	'Postleitzahl <em class="j-checkout__required">*</em>':{en:"Zip Code"},	
	'Stadt <em class="j-checkout__required">*</em>':{en:"City *"},	
	"Bundesland/Kanton":{en:"State"},	
	'Telefon <em class="j-checkout__required">*</em>':{en:"Telephone *"},		
	'E-Mail <em class="j-checkout__required">*</em>':{en:"E-Mail *"},	
	"USt-IdNr.":{en:"VAT No."},	
	"Bundesland/Kanton":{en:"State"},
	'Land <em class="j-checkout__required">*</em>':{en:"Country *"},	
	' <em class="j-checkout__required">*</em> Pflichtfeld':{en:"* Required"},
	
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
