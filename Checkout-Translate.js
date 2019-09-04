$(document).ready(function(){

var local = {
    "Herr": {
      en: "Mr"
    },
	
	  "Frau": {
      en: "Mrs"
    },
};	

var translator = $('body').translate({
    lang: "de", 
    t: local
});
		
$("#languageSelector").change(function(){
var country=$("#languageSelector").children('option:selected').val()
        
if(country == "en") {translator.lang("en")}
else if(country == "de") {translator.lang("de")}
});	
});