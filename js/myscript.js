$(document).ready(function () {

    $("#sortall").click(function () {
        console.log("this works");
        
            $("#car").show();
            $("#news").show();
            $("#time").show();
            $("#survey").show();
            $("#coin").show();
            $("#fetch").show();
        
    });

    $("#sortclass").click(function () {
        console.log("this works");
        
            $("#car").hide();
            $("#news").hide();
            $("#time").hide();
            $("#survey").hide();
            $("#coin").hide();

            $("#fetch").show();
        
    });

    $("#sortper").click(function () {
        console.log("this works");
        
            $("#car").show();
            $("#news").show();
            $("#time").show();
            $("#survey").show();
            $("#coin").show();

            $("#fetch").hide();
        
    });

});