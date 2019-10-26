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
$("#billing_country option").removeAttr("label");
$("#shipping_country option").removeAttr("label");
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
	
$("#cc-checkout-shipping-address-form h3").text("Shipping Address");
$(".j-checkout__shipping-address-checkbox__title").html("<input type='checkbox' class='j-checkout-address-checkbox__box' value='1' data-action='toggleAddressForm' name='shipping_address_differs'> Other Shipping Address");	
$("label[for*='firstname']").text("First Name *");
$("label[for*='lastname']").text("Last Name *");
$("label[for*='street']").text("Street Adress *");
$("label[for*='zip']").text("Postal Code *");
$("label[for*='city']").text("City *");
$("label[for*='telephone']").text("Telephone *");
$("label[for*='country']").text("Country * ");
$("#cc-checkout-form p").text("* Required");

$("div._stripecreditcard label span:eq(1)").text("Credit card");	
$("div.j-checkout-payment__secure-text").text("Your credit card payment is being transmitted securely.");
	
if($("div.j-checkout__overview-adress h3").text().indexOf("und")>= 0){
$("div.j-checkout__overview-adress h3").html("Billing and Shipping Address <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/data'>change</a></span>")
}
if($("div.j-checkout__overview-adress h3").text().indexOf("Rechnungsadresse")>= 0){
$("div.j-checkout__overview-adress h3").html("Billing Address <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/data'>change</a></span>")
}
$("#cc-checkout-wayofpayment h3").html("Payment Type <span class='j-checkout__overview-change-wrapper'><a class='j-checkout__overview-change-link' href='/j/checkout/payment'>change</a></span>");
$(".j-checkout__overview-adress-title").html("Shipping Address <span class='j-checkout__overview-change-wrapper'><a href='/j/checkout/data' class='j-checkout__overview-change-link'>change</a></span>");	
if($("p.cc-checkout-data").text().indexOf("Vorkasse")>= 0){
$("p.cc-checkout-data").text("Payment in Advance")
}
if($("p.cc-checkout-data").text().indexOf("karte")>= 0){
$("p.cc-checkout-data").text("Credit card")
}	
$(".j-checkout__data-privacy-for-shipping-checkbox-label").html("<input class='j-checkout__data-privacy-for-shipping-checkbox-input' type='checkbox' name='dataPrivacyForShipping' id='dataPrivacyForShipping'> I agree that my e-mail address will be shared with the shipping service listed in the  <a href='/j/privacy' target='_blank'>privacy policy</a> so that the shipping service provider can send me shipment status information via e-mail. I can revoke my consent at any time.")	
$(".j-checkout__withdrawal-checkbox-label").html("<input class='j-checkout__withdrawal-checkbox-input' type='checkbox' name='withdraw_right_of_withdrawal_services' id='sellservices'>I agree to waive my right of cancellation upon the completion of the agreed upon service. I understand that I will lose my right to cancel the service that I am paying for when the contract is fulfilled.")	
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

if($("p.cc-checkout-data").text().indexOf("Advance")>= 0){
$("p.cc-checkout-data").text("Gegen Vorkasse")
}
if($("p.cc-checkout-data").text().indexOf("card")>= 0){
$("p.cc-checkout-data").text("Kreditkarte")
}
$(".j-checkout__data-privacy-for-shipping-checkbox-label").html("<input class='j-checkout__data-privacy-for-shipping-checkbox-input' type='checkbox' name='dataPrivacyForShipping' id='dataPrivacyForShipping'> Ich bin damit einverstanden, dass meine E-Mail-Adresse an den in der <a href='/j/privacy' target='_blank'>Datenschutzerklärung</a> aufgelisteten Versanddienstleister weitergegeben wird, damit der Versanddienstleister Statusinformationen zur Sendungszustellung an mich per E-Mail übermitteln kann. Meine diesbezüglich erteilte Einwilligung kann ich jederzeit widerrufen.")	
$(".j-checkout__withdrawal-checkbox-label").html("<input class='j-checkout__withdrawal-checkbox-input' type='checkbox' name='withdraw_right_of_withdrawal_services' id='sellservices'> Ich bin einverstanden und verlange ausdrücklich, dass Sie vor Ende der Widerrufsfrist mit der Ausführung der beauftragten Dienstleistung beginnen. Mir ist bekannt, dass ich bei vollständiger Vertragserfüllung durch Sie mein Widerrufsrecht verliere.")	
}			
		
var local = {
"Shopping Cart":{de:"Warenkorb"},
"Enter address":{de:"Adresse angeben"},
"Pay":{de:"Bezahlen"},
"Confirm":{de:"Bestätigen"},
"Unit Price":{de:"Einzelpreis"},
"Number":{de:"Anzahl"},
"Price":{de:"Preis"},
"Subtotal":{de:"Zwischensumme"},
"Shipping Costs*<small></small>:":{de:"Versandkosten*"},
" Total<small></small>:":{de:" Gesamtsumme:"},
"Notes about this order":{de:"Anmerkung zur Bestellung"},
"Notes":{de:"Anmerkung"},
"Billing and Shipping Address":{de:"Rechnungs- und Lieferadresse"},
"Billing Address":{de:"Rechnungsadresse"},
"Title":{de:"Anrede"},
"Company":{de:"Firma"},
"Address 2nd Line ":{de:"Adresszusatz"},
"State/Province":{de:"Bundesland/Kanton"},
"VAT ID Number":{de:"USt-IdNr."},
"Please enter a first name.":{de:"Bitte einen Vornamen eingeben."},
"Please enter a last name.":{de:"Bitte einen Nachnamen eingeben."},
"Please enter your street address.":{de:"Bitte eine Straße eingeben."},
"Please enter your postal code.":{de:"Bitte eine Postleitzahl eingeben."},
"Please enter your city or town.":{de:"Bitte eine Stadt eingeben."},
"Please enter a telephone number.":{de:"Bitte eine Telefonnummer eingeben."},
"Please enter an email address.":{de:"Bitte eine E-Mail-Adresse eingeben."},

"Mr.":{de:"Herr"},
"Ms.":{de:"Frau"},

"Afghanistan":{de:"Afghanistan"},
"Albania":{de:" Albanien"},
"American Pacific":{de:"Amerikanisch-Ozeanien"},
"Andorra":{de:"Andorra"},
"Armenia":{de:"Armenien"},
"Azerbaijan":{de:"Aserbaidschan"},
"Australia":{de:"Australien"},
"Bangladesh":{de:"Bangladesch"},
"Belarus":{de:"Belarus"},
"Belgium":{de:"Belgien"},
"Bhutan":{de:"Bhutan"},
"Bosnia and Herzegovina":{de:"Bosnien und Herzegowina"},
"Brunei Darussalam":{de:"Brunei Darussalam"},
"Bulgaria":{de:"Bulgarien"},
"China":{de:"China"},
"Denmark":{de:"Dänemark"},
"North Korea":{de:"Demokratische Volksrepublik Korea"},
"Germany":{de:"Deutschland"},
"Estonia":{de:"Estland"},
"Faroe Islands":{de:"Färöer"},
"Finland":{de:"Finnland"},
"France":{de:"Frankreich"},
"Georgia":{de:"Georgien"},
"Gibraltar":{de:"Gibraltar"},
"Greece":{de:"Griechenland"},
"Greenland":{de:"Grönland"},
"India":{de:"Indien"},
"Indonesia":{de:"Indonesien"},
"Ireland":{de:"Irland"},
"Iceland":{de:"Island"},
"Italy":{de:"Italien"},
"Japan":{de:"Japan"},
"Cambodia":{de:"Kambodscha"},
"Canada":{de:"Kanada"},
"Kazakhstan":{de:"Kasachstan"},
"Kyrgyzstan":{de:"Kirgisistan"},
"Croatia":{de:"Kroatien"},
"Laos":{de:"Laos"},
"Latvia":{de:"Lettland"},
"Liechtenstein":{de:"Liechtenstein"},
"Lithuania":{de:"Litauen"},
"Luxembourg":{de:"Luxemburg"},
"Malaysia":{de:"Malaysia"},
"Maldives":{de:"Malediven"},
"Malta":{de:"Malta"},
"Macedonia":{de:"Mazedonien"},
"Mexico":{de:"Mexiko"},
"Monaco":{de:"Monaco"},
"Mongolia":{de:"Mongolei"},
"Montenegro":{de:"Montenegro"},
"Montserrat":{de:"Montserrat"},
"Myanmar [Burma]":{de:"Myanmar"},
"Nepal":{de:"Nepal"},
"New Zealand":{de:"Neuseeland"},
"Netherlands":{de:"Niederlande"},
"Northern Mariana Islands":{de:"Nördliche Marianen"},
"Norway":{de:"Norwegen"},
"Austria":{de:"Österreich"},
"Timor-Leste":{de:"Osttimor"},
"Pakistan":{de:"Pakistan"},
"Philippines":{de:"Philippinen"},
"Poland":{de:"Polen"},
"Portugal":{de:"Portugal"},
"South Korea":{de:"Republik Korea"},
"Republic of Moldova":{de:"Republik Moldau"},
"Romania":{de:"Rumänien"},
"Russia":{de:"Russische Föderation"},
"San Marino":{de:"San Marino"},
"Sweden":{de:"Schweden"},
"Switzerland":{de:"Schweiz"},
"Serbia and Montenegro":{de:"Serbien und Montenegro"},
"Singapore":{de:"Singapur"},
"Slovakia":{de:"Slowakei"},
"Slovenia":{de:"Slowenien"},
"Hong Kong SAR China":{de:"Sonderverwaltungszone Hongkong"},
"Macao":{de:"Sonderverwaltungszone Macao"},
"Spain":{de:"Spanien"},
"Sri Lanka":{de:"Sri Lanka"},
"St. Pierre and Miquelon":{de:"St. Pierre und Miquelon"},
"suriname":{de:"Suriname"},
"Svalbard and Jan Mayen":{de:"Svalbard und Jan Mayen"},
"Tajikistan":{de:"Tadschikistan"},
"Taiwan":{de:"Taiwan"},
"Thailand":{de:"Thailand"},
"Czech Republic":{de:"Tschechische Republik"},
"Turkey":{de:"Türkei"},
"Turkmenistan":{de:"Turkmenistan"},
"Ukraine":{de:"Ukraine"},
"Hungary":{de:"Ungarn"},
"Uzbekistan":{de:"Usbekistan"},
"Vatican City":{de:"Vatikanstadt"},
"United Kingdom":{de:"Vereinigtes Königreich"},
"United States":{de:"Vereinigte Staaten"},
"Vietnam":{de:"Vietnam"},
"Cyprus":{de:"Zypern"},

"Choose payment option":{de:"Zahlungsmethode auswählen."},
"PayPal (including credit card, debit card, and bank transfer)":{de:"PayPal (Kreditkarte, Lastschrift, Überweisung)"},
"Payment in Advance":{de:"Gegen Vorkasse"},
"Shipping Costs<small></small>:":{de:"Versandkosten:"},
"Telephone:":{de:"Telefon:"},
	};	

var translator = $('body').translate({
    lang: "en", 
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
