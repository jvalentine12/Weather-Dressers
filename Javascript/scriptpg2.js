$(document).ready(function(){
    $("#search-button").click(function(){
       
        var searchval= $("#searchpg2").val();
        var part1= "https://api.apixu.com/v1/current.json?"
        var part2= "key=a90bf5c92af543218bd212238170801&q="
        var URL= part1 + part2 + searchval ;
        
    
        $.getJSON(URL,function(response){
            var temperatureC = response.current.temp_c;
            var temperatureF = response.current.temp_f;
            var windspeed = response.current.wind_mph;
            var humidity = response.current.humidity;
        $("#weather-results").append("<br>" + searchval + ":" + "<br>" + "Temp F: "+ temperatureF + " ,Temp C: " + temperatureC + "<br>" + "Windspeed: " + windspeed + "<br>" + "Humidity: " + humidity);
        });
    });
});