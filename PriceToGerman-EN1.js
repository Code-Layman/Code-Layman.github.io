function toEnglish(){
$(".cc-product-delivery-time-info").text("7 - 14 days delivery");
$("button.cc-shop-addtocard").text("Add to cart");
$(".cc-shop-product-pool").text("available");
$(".cc-product-tax-and-shipping-info").text("Final price, plus Shipping cost"); 
var content=$("div.j-cart--hover-popup--cart-sum").text().trim();
var num=content.replace(/[^0-9,","]/ig,"");
$("div.j-cart--hover-popup--cart-sum").text("Subtotal: "+num+" €")
$("span.cc-shop-addtocard").text("Checkout")
$("div.j-cart--hover-popup--empty-message").text("Your shopping cart is empty.") 
};
function latertoenglish(){
var t=setTimeout(function(){toEnglish();},1)
}
$(document).ready(function(){
var webpage=window.location.href
var reg1 = RegExp(/lab-glasses/);
var reg2 = RegExp(/lab-equipments/);
var reg3 = RegExp(/lab-accessories/);
var reg4 = RegExp("/\en\/");
if(webpage.match(reg1) || webpage.match(reg2)|| webpage.match(reg3)|| webpage.match(reg4)){ 
toEnglish();
$(".cc-product-variant-selectbox").change(function(){ 
latertoenglish();
});
}
});
