$(document).ready(function(){
    $("#next").click(function(){
        $("#back").click(function(){
            
        var searchval= $("#search").val();
        var part1= "https://api.apixu.com/v1/current.json?"
        var part2= "key=a90bf5c92af543218bd212238170801&q="
        var URL= part1 + part2 + searchval ;
        })
    })
})