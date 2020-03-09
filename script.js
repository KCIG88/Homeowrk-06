
// $("#searchButton").on("click", function(){


// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=6e14dbb56496334f96d85f2b8fc4a0ed",
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
  
// });

// })
//Search city and add to log in console city name
$("#searchButton").on("click", function(){
    
let cityInput = $("#cityInput").val();
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=6e14dbb56496334f96d85f2b8fc4a0ed",
        method: "GET"
    }).then(function(response) {
        console.log(response);
        let createButton = $("<button>").text("");
        createButton.append(response.name);
        $("article").append(createButton);
    });
})
//create table of searched cities

let createButton = function(response){
    let cityButton =$("<button>");
    $("section").append(response);
}