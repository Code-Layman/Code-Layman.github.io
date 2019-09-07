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
$(".j-checkout__message-warning").attr("class","trn");	

$("span.j-checkout__payment-method-paypal-text").attr("class","j-checkout__payment-method-paypal-text trn");	
$("span.j-checkout__payment-method-default-text").attr("class","j-checkout__payment-method-default-text trn");	
	
$(".j-checkout__overview-adress-data-paragraph-two strong").attr("class","trn");	
	
function toEnglish(){
if($(".j-checkout__button--step-forward").val().indexOf("Schritt")>= 0){
$("input[id*='cc-checkout-submit']").attr("Value","Next step");
}	
if($(".j-checkout__button--step-forward").val().indexOf("Kauf")>= 0){
$("input[id*='cc-checkout-submit']").attr("Value","Confirm");
}	
	
$("#cc-checkout-shipping-address-form h3").text("Shipping address");
$(".j-checkout__shipping-address-checkbox__title").html("<input type='checkbox' class='j-checkout-address-checkbox__box' value='1' data-action='toggleAddressForm' name='shipping_address_differs'> Other shipping address");	
$("label[for*='firstname']").text("First Name *");
$("label[for*='lastname']").text("Last Name *");
$("label[for*='street']").text("Street, No. *");
$("label[for*='zip']").text("Post code *");
$("label[for*='city']").text("City *");
$("label[for*='telephone']").text("Telephone *");
$("label[for*='country']").text("Country * ");
$("#cc-checkout-form p").text("* Required");

$("div._stripecreditcard label span:eq(1)").text("Credit card");	
$("div.j-checkout-payment__secure-text").text("The credit card data will be encrypted transmit.");
	
if($("div.j-checkout__overview-adress h3").text().indexOf("und")>= 0){
$("div.j-checkout__overview-adress h3").html("Billing and shipping address <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/data'>Change</a></span>")
}
if($("div.j-checkout__overview-adress h3").text().indexOf("Rechnungsadresse")>= 0){
$("div.j-checkout__overview-adress h3").html("Billing address <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/data'>Change</a></span>")
}
$("#cc-checkout-wayofpayment h3").html("Payment <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/payment'>Change</a></span>");
$(".j-checkout__overview-adress-title").html("Shipping address <span class='j-checkout__overview-change-wrapper'><a href='/j/checkout/data' class='j-checkout__overview-change-link'>Change</a></span>");	
if($("p.cc-checkout-data").text().indexOf("Vorkasse")>= 0){
$("p.cc-checkout-data").text("Bank transfer")
}
if($("p.cc-checkout-data").text().indexOf("karte")>= 0){
$("p.cc-checkout-data").text("Credit card")
}	

}
	
function toGerman(){
if($(".j-checkout__button--step-forward").val().indexOf("step")>= 0){
$("input[id*='cc-checkout-submit']").attr("Value","Nächster Schritt");
}		
if($(".j-checkout__button--step-forward").val().indexOf("firm")>= 0){
$("input[id*='cc-checkout-submit']").attr("Value","Kaufen");
}

$("#cc-checkout-shipping-address-form h3").text("Lieferadresse");
$(".j-checkout__shipping-address-checkbox__title").html("<input type='checkbox' class='j-checkout-address-checkbox__box' value='1' data-action='toggleAddressForm' name='shipping_address_differs'> Andere Lieferadresse");
$("label[for*='firstname']").text("Vorname *");
$("label[for*='lastname']").text("Nachname *");
$("label[for*='street']").text("Straße, Nr. *");
$("label[for*='zip']").text("Postleitzahl *");
$("label[for*='city']").text("Stadt *");
$("label[for*='telephone']").text("Telefon *");
$("label[for*='country']").text("Land * ");
$("#cc-checkout-form p").text("* Pflichtfeld");
	
	
$("div._stripecreditcard label span:eq(1)").text("Kreditkarte");	
$("div.j-checkout-payment__secure-text").text("Die Kreditkartendaten werden verschlüsselt übertragen.");

if($("div.j-checkout__overview-adress h3").text().indexOf("and")>= 0){
$("div.j-checkout__overview-adress h3").html("Rechnungs- und Lieferadresse <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/data'>Ändern</a></span>");	
}
if($("div.j-checkout__overview-adress h3").text().indexOf("Billing address")>= 0){
$("div.j-checkout__overview-adress h3").html("Rechnungsadresse <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/data'>Ändern</a></span>")
}
$("#cc-checkout-wayofpayment h3").html("Zahlungsart <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/payment'>Ändern</a></span>");
$(".j-checkout__overview-adress-title").html("Lieferadresse <span class='j-checkout__overview-change-wrapper'><a href='/j/checkout/data' class='j-checkout__overview-change-link'>Ändern</a></span>");	

if($("p.cc-checkout-data").text().indexOf("transfer")>= 0){
$("p.cc-checkout-data").text("Gegen Vorkasse")
}

if($("p.cc-checkout-data").text().indexOf("card")>= 0){
$("p.cc-checkout-data").text("Kreditkarte")
}	
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
	"Anmerkung":{en:"Customer order note"},
	
	"Rechnungs- und Lieferadresse":{en:"Billing and shipping address"},
	"Rechnungsadresse":{en:"Billing address"},
	"Anrede":{en:"Title"},
	"Firma":{en:"Company"},
	"Adresszusatz":{en:"Address addition"},	
	"Bundesland/Kanton":{en:"State"},	
	"USt-IdNr.":{en:"VAT No."},	
	"Bundesland/Kanton":{en:"State"},
	"Bitte einen Vornamen eingeben.":{en:"Please enter a first name."},
	"Bitte einen Nachnamen eingeben.":{en:"Please enter a last name."},
	"Bitte eine Straße eingeben.":{en:"Please enter a street."},
	"Bitte eine Postleitzahl eingeben.":{en:"Please enter a postal code."},
	"Bitte eine Stadt eingeben.":{en:"Please enter a city."},
	"Bitte eine Telefonnummer eingeben.":{en:"Please enter a phone number."},
	"Bitte eine E-Mail-Adresse eingeben.":{en:"Please enter an e-mail address."},
	
	"Herr":{en:"Mr"},
	"Frau": {en:"Mrs"},
	
	"Zahlungsmethode auswählen.": {en:"Select a payment method."},
	"PayPal (Kreditkarte, Lastschrift, Überweisung)": {en:"PayPal (credit card, direct debit, bank transfer)"},
	"Gegen Vorkasse": {en:"Bank transfer"},
	
	"Versandkosten<small></small>:":{en:"Shipping costs:"},
	"Telefon:":{en:"Telephone:"},
	
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
