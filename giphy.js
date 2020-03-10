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


    $(document).on("click", ".car-button", function () {
        $("#cars").empty();
        $(".car-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data

                for (var i = 0; i < results.length; i++) {
                    var carDiv = $("<diev class=\"car-item\">");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    var carImage = $("<img>");
                    var carImage = $("<img>");
                    carImage.attr("src", still);
                    carImage.attr("data-still", still);
                    carImage.attr("data-animate", animated);
                    carImage.attr("data-state", "still");
                    carImage.addClass("car-image");

                    carDiv.append(p);
                    carDiv.append(carImage);

                    $("#cars").append(carDiv);
                }
            });
    });

    $(document).on("click", ".animal-image", function () {

        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-car").on("click", function (event) {
        event.preventDefault();
        var newCar = $("input").eq(0).val();

        if (newCar.length > 2) {
            cars.push(newCar);
        }

        populateButtons(cars, "car-button", "#car-buttons");

    });

    populateButtons(cars, "car-button", "#car-buttons");
});