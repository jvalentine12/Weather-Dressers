var temp="";
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
                    var part3= "https://api.shopstyle.com/api/v2/products?";
                    var part4= "pid=uid8969-39322563-72&";
                    var searches= "fts=winter+boots+winter+coat+winter+pants&";
                    var part5= "offset=0&";
                    var part6="limit=5";
                    var URL_c= part3 + part4 + searches + part5 + part6; 
                    
                    $.getJSON(URL_c,function(response){
                        console.log(response);
                            //for (i = 0, i<response.length,i++)
                            var P_name = response.products[0].name;
                            var P_img = response.products[0].image.sizes.Medium.url;
                            var P_price= response.products[0].priceLabel;
                            var P_size= response.products[0].sizes.Medium;
                   
                    $("#clothing").append("<br>" + "<img src=" + P_img + "></img>");  
                    $("#clothing").append("<br>" + P_name + "<br>" + P_size + "<br>" + P_price);
                        
                    });
            }
                 else {
                    var part3= "https://api.shopstyle.com/api/v2/products?";
                    var part4= "pid=uid8969-39322563-72&";
                    var searches= "fts=summer+shorts+summer+shirts&";
                    var part5= "offset=0&";
                    var part6="limit=5";
                    var URL_c= part3 + part4 + searches + part5 + part6; 
                    
                    $.getJSON(URL_c,function(response){
                            //for (i = 0, i)
                            var P_name = response.products[0].name;
                            var P_img = response.products[0].image.sizes.Medium.url;
                            var P_price= response.products[0].priceLabel;
                            var P_size= response.products[0].sizes.Medium;
                   
                    $("#clothing").append("<br>" + "<img src=" + P_img + "></img>");  
                    $("#clothing").append("<br>" + P_name + "<br>" + P_size + "<br>" + P_price);
                 
                   
                    });

                }
    });
        
});

            
            
            
            
            
// $("#search-button2").click(function(){
//         alert("working");
//         alert(temp);
        
                  
         
                
          

 
