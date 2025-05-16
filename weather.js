

const apiKey= "4f07908f71e8c4dad5a61f7d54f3b2a8";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiURL + city + '&appid=4f07908f71e8c4dad5a61f7d54f3b2a8');

    if(response.status == 404){
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
}
else{
    var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
document.querySelector(".weather1").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
}
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
}
    else if(data.weather[0].main == "Rainy"){
        weatherIcon.src = "rain.png";
}
    else if(data.weather[0].main == "Drizzle"){ 
        weatherIcon.src = "drizzle.png";
}
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "haze1.png";
}
if(data.weather[0].main == "Clouds"){
    document.querySelector(".weather1").innerHTML= "Cloudy";
}
else if(data.weather[0].main == "Clear"){
    document.querySelector(".weather1").innerHTML= "Clear";
}
else if(data.weather[0].main == "Rain"){
    document.querySelector(".weather1").innerHTML= "Rainy";
}
else if(data.weather[0].main == "Drizzle"){ a
    document.querySelector(".weather1").innerHTML= "Drizzly";
}
else if(data.weather[0].main == "Mist"){
    document.querySelector(".weather1").innerHTML= "Misty";
}
else if(data.weather[0].main == "Haze"){
    document.querySelector(".weather1").innerHTML= "Hazy";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}

}

searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);

})

checkWeather();
