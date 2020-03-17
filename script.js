//Search city and add to log in console city name
$("#searchButton").on("click", function(){
    
let cityInput = $("#cityInput").val();
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=6e14dbb56496334f96d85f2b8fc4a0ed",
        method: "GET"
    }).then(function(response) {
        console.log(response);
        let createButton = $("<button type=\"button\" class=\"btn btn-info btn-lg btn-block\">Block level button</button>").text("");
        createButton.append(response.name);
        $("article").append(createButton);
        
       
    });


//Return city weather info seperate container

        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=6e14dbb56496334f96d85f2b8fc4a0ed",
            method: "GET"
        }).then(function(response) {
            console.log(response);
            let createButton = $("<button type=\"button\" class=\"btn btn-info btn-lg btn-block\">Block level button</button>").text("");
            createButton.append(response.name);
            $("#currentWeather").append(createButton);
            
           
        });
    });