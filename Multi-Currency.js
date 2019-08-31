$(document).ready(function(){
 
fx.base = "EUR";
fx.rates = {
        "GBP" : 0.9115,
        "CHF" : 1.0987,
        "USD" : 1.1033,
        "EUR" : 1,        
        } 
        
function eurTocurrencys(amount) {       
EUR = accounting.formatMoney(fx.convert(amount, {from:"EUR",to: "EUR"}), "€ ", 2, ".", ",");
USD = accounting.formatMoney(fx.convert(amount, {from:"EUR",to: "USD"}), "$ ", 2, ".", ",");
GBP= accounting.formatMoney(fx.convert(amount, {from:"EUR",to: "GBP"}), "￡", 2, ".", ",");      
CHF= accounting.formatMoney(fx.convert(amount, {from:"EUR",to: "CHF"}), "CHF ", 2, ".", ",");
currency = $("#currencySelector").children('option:selected').val();    
}

function getAmount(title) {
amount=title.substr(title.indexOf("€")-8,title.indexOf("€")-1).replace(/€/,"").replace(/,/,".");
}       

$(".cc-product-variant-selectbox").change(function(){
var title=$(".cc-product-variant-selectbox").children('option:selected').attr("title");
getAmount(title)
eurTocurrencys(amount)
        
if(currency == "usd") { setTimeout(function(){$(".cc-shop-product-price-current").text(USD)},1)}
else if(currency == "eur") { setTimeout(function(){$(".cc-shop-product-price-current").text(EUR)},1)}
else if(currency == "gbp") { setTimeout(function(){$(".cc-shop-product-price-current").text(GBP)},1)}
else if(currency == "chf") { setTimeout(function(){$(".cc-shop-product-price-current").text(CHF)},1)}  
});     

$("#currencySelector").click(function(){

var title=$(".cc-product-variant-selectbox").children('option:selected').attr("title");
if(typeof(title)=="undefined"){
var title="     "+$(".cc-shop-product-price-current").attr("content")+" €"
}
getAmount(title)
eurTocurrencys(amount)

if(currency == "usd") { $(".cc-shop-product-price-current").text(USD)} 
else if(currency == "eur") { $(".cc-shop-product-price-current").text(EUR)}
else if(currency == "gbp") { $(".cc-shop-product-price-current").text(GBP)}
else if(currency == "chf") { $(".cc-shop-product-price-current").text(CHF)}
        
$(".j-product__variants__item").each(function(){
var title=$(this).attr("title");
getAmount(title)
eurTocurrencys(amount)
var content=$(this).attr("content");

if(currency == "usd") { $(this).text(content+"     "+USD)} 
else if(currency == "eur") { $(this).text(content+"     "+EUR)}
else if(currency == "gbp") { $(this).text(content+"     "+GBP)}
else if(currency == "chf") { $(this).text(content+"     "+CHF)}   
});
});
});
