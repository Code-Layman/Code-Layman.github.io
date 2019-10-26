function toGerman(){
$(".cc-product-delivery-time-info").text("7 - 14 Tage Lieferzeit");
$("button.cc-shop-addtocard").text("In den Warenkorb");
$(".cc-shop-product-pool").text("Verfügbar");
$(".cc-product-tax-and-shipping-info").html("Endpreis <a rel='nofollow' href='/j/shop/info/m/?productId=mfd90626c5aaf0991' class='cc-no-clickable-arrow'>zzgl. Versandkosten</a>"); 
var content=$("div.j-cart--hover-popup--cart-sum").text().trim();
var num=content.replace(/[^0-9,","]/ig,"");
$("div.j-cart--hover-popup--cart-sum").text("Zwischensumme: "+num+" €")
$("span.cc-shop-addtocard").text("Zur Kasse")
$("div.j-cart--hover-popup--empty-message").text("Ihr Warenkorb ist leer.") 
};
function latertoGerman(){
var t=setTimeout(function(){toGerman();},1)
}
$(document).ready(function(){
var webpage=window.location.href
var reg1 = RegExp(/laborglas/);
var reg2 = RegExp(/laborgeraete/);
var reg3 = RegExp(/laborzubehoer/);
var reg4 = RegExp(/lehrmittel/); 
var reg5 = RegExp("/\de\/");
if(webpage.match(reg1) || webpage.match(reg2)|| webpage.match(reg3)|| webpage.match(reg4)|| webpage.match(reg5)){ 
toGerman();
$(".cc-product-variant-selectbox").change(function(){ 
latertoGerman();
});
}
});
