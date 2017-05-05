$(document).ready(function(){
    $("#search-button").click(function(){
       
        var searchval= $("#searchpg2").val();
        var part1= "https://api.apixu.com/v1/current.json?";
        var part2= "key=a90bf5c92af543218bd212238170801&q=";
        var URL= part1 + part2 + searchval ;
        
    
        $.getJSON(URL,function(response){
            var temperatureC = response.current.temp_c;
            var temperatureF = response.current.temp_f;
            var windspeed = response.current.wind_mph;
            var humidity = response.current.humidity;
            $("#weather-results").append("<br>" + searchval + ":" + "<br>" + "Temp F: "+ temperatureF + " ,Temp C: " + temperatureC + "<br>" + "Windspeed: " + windspeed + "<br>" + "Humidity: " + humidity + "<br>");
            if (temperatureF<50){
                    var part3= "http://api.shopstyle.com/api/v2/products?";
                    var part4= "pid=uid8969-39322563-72&";
                    var searches= "fts=winter+boots&";
                    var  part5= "offset=0&";
                    var part6="limit=12";
                    var URL_c= part3 + part4 + searches + part5 + part6; 
                   
                    $.getJSON(URL_c)
                alert("COLD")    
                    
                }
             else{
                alert("WARM") ;
            }
                
            });
    });

 });
// $("#search-button2").click(function(){
//         var 
// });