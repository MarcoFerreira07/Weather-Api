let apiKey = '8f8c6da20ce2891419f3a9757fa8ba62';
let cityInput = document.querySelector("#cityInput");
let searchButton = document.querySelector("#searchButton");
let cityListButton = document.querySelector("#cityListButton");



let cityName;

let cityList = JSON.parse(localStorage.getItem("city")) || [];

let lat; 
let lon;
    function searchWeather(city){
        let cityName = city || cityInput.value;

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {
        
        return response.json()
        
    })
    .then(function (cityData){
        
        console.log(cityData[0]);
        console.log(cityData[0].lat);
        console.log(cityData[0].lon);
        
        lat = (cityData[0].lat);
        lon = (cityData[0].lon);
        
        return {lat:cityData[0].lat, lon:cityData[0].lon}

        
    })
    .then(function(){
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            
            return response.json()
            ch
        })
        .then(function (forecastData) {

            console.log(forecastData);
            let con1 = forecastData.list[8].dt * 1000;
            let con2 = new Date(con1);
            let con3 = con2.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#weather1").textContent = (con3);
            document.querySelector("#img1").src = "http://openweathermap.org/img/wn/" + forecastData.list[8].weather[0].icon + "@2x.png";
            document.querySelector("#temp1").textContent = ("Temp: " + forecastData.list[8].main.temp) + "℉";
            document.querySelector("#wind1").textContent = ("Wind: " + forecastData.list[8].wind.speed + "mph");
            document.querySelector("#humidity1").textContent = ("Humidity: " + forecastData.list[8].main.humidity + "%");

            let con4 = forecastData.list[16].dt * 1000;
            let con5 = new Date(con4);
            let con6 = con5.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#weather2").textContent = (con6);
            document.querySelector("#img2").src = "http://openweathermap.org/img/wn/" + forecastData.list[16].weather[0].icon + "@2x.png";
            document.querySelector("#temp2").textContent = ("Temp: " + forecastData.list[16].main.temp + "℉");
            document.querySelector("#wind2").textContent = ("Wind: " + forecastData.list[16].wind.speed) + "mph";
            document.querySelector("#humidity2").textContent = ("Humidity: " + forecastData.list[16].main.humidity + "%");

            let con7 = forecastData.list[24].dt * 1000;
            let con8 = new Date(con7);
            let con9 = con8.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#weather3").textContent = (con9);
            document.querySelector("#img3").src = "http://openweathermap.org/img/wn/" + forecastData.list[24].weather[0].icon + "@2x.png";
            document.querySelector("#temp3").textContent = ("Temp: " + forecastData.list[24].main.temp + "℉");
            document.querySelector("#wind3").textContent = ("Wind: " + forecastData.list[24].wind.speed + "mph");
            document.querySelector("#humidity3").textContent = ("Humidity: " + forecastData.list[24].main.humidity + "%");

            let con10 = forecastData.list[32].dt * 1000;
            let con11 = new Date(con10);
            let con12 = con11.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#weather4").textContent = (con12);
            document.querySelector("#img4").src = "http://openweathermap.org/img/wn/" + forecastData.list[32].weather[0].icon + "@2x.png";
            document.querySelector("#temp4").textContent = ("Temp: " + forecastData.list[32].main.temp + "℉");
            document.querySelector("#wind4").textContent = ("Wind: " + forecastData.list[32].wind.speed + "mph");
            document.querySelector("#humidity4").textContent = ("Humidity: " + forecastData.list[32].main.humidity + "%");

            let con13 = forecastData.list[39].dt * 1000;
            let con14 = new Date(con13);
            let con15 = con14.toLocaleString("en-US", {month: "numeric", day: "numeric"});
            document.querySelector("#weather5").textContent = (con15);
            document.querySelector("#img5").src = "http://openweathermap.org/img/wn/" + forecastData.list[39].weather[0].icon + "@2x.png";
            document.querySelector("#temp5").textContent = ("Temp: " + forecastData.list[39].main.temp + "℉");
            document.querySelector("#wind5").textContent = ("Wind: " + forecastData.list[39].wind.speed + "mph");
            document.querySelector("#humidity5").textContent = ("Humidity: " + forecastData.list[30].main.humidity + "%");        

        })
        
    })
    .then(function (){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            
            return response.json()
            
        })
        .then(function (currentData) {

            console.log(currentData);

            document.querySelector("#displayCity").textContent = (currentData.name);
            let con1 = currentData.dt * 1000;
            let con2 = new Date(con1);
            let con3 = con2.toLocaleString("en-US", {month: "numeric", day: "numeric", year: "numeric"});
            document.querySelector("#currentDate").textContent = (con3);
            document.querySelector("#currentIcon").src = 
            "https://openweathermap.org/img/wn/" + currentData.weather[0].icon + "@2x.png";
            document.querySelector("#temp").textContent = ("Temp: " + currentData.main.temp + "℉");
            document.querySelector("#Wind").textContent = ("Wind: " + currentData.wind.speed + "mph");
            document.querySelector("#Humidity").textContent = ("Humidity: " + currentData.main.humidity + "%");
        }
    )}
    )
 
    }

    searchButton.addEventListener('click', function(){
        searchWeather();
        cityList.push(cityInput.value);
        localStorage.setItem("city", JSON.stringify(cityList));
        citySearch();
    })

    function citySearch(){
        cityListButton.innerHTML = "";

        for (let i = 0; i < cityList.length; i++) {
        let cityBtn = document.createElement("button");
        cityBtn.addEventListener('click', function(){
            searchWeather(JSON.parse(localStorage.getItem("city"))[i]);
        })
        cityBtn.textContent = JSON.parse(localStorage.getItem("city"))[i];
        console.log(typeof(localStorage.getItem("city")));
        cityListButton.append(cityBtn);
        cityBtn.classList.add("cityBtn");
        cityInput.value = "";
    }}

    citySearch();