$(document).ready(function(){
    $("hoover").hover(function(){
        $(buffet).css("background-color", "black");
        }, function(){
        $(buffet).css("background-color", "white");

    });
});
