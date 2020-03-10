$(document).ready(function () {

    var cars = [
        "bmw", "toyota", "maserati", "lamborghini", "audi",
        "rollsroyce", "lexus", "mercedes", "saab", "tesla",
        "buick", "honda", "jaguar", "chrysler", "ford",
        "ferrari", "mclaren", "kia", "scion", "hyundai"
    ];

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }
    
    $(document).on("click", ".car-button", function() {
        $("#cars").empty();
        $(".car-button").removeClass("active");
        $(this).addClass("active");
    }