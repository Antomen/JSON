console.log("hej");



$(document).ready(function() {
    
    $(".petagg").click(function() {
        $.getJSON(
            "newjson.json",
            function(newjson) {
                console.log(newjson.elever);
                
                $("body").append(newjson.elever[0].namn);
            }
    );
    
    });
});