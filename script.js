const apiKey = "4c843c6f7ccb947395cb425a851bdc86"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather-img")
const weather = document.querySelector(".weather")
const error =document.querySelector(".error")
const errorBtn =document.querySelector(".error button")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status == 404) {
        weather.style.display = "none"
        error.style.display="block"
    }
    else {
        var data = await response.json()
        console.log(data)
        const tempEle = document.querySelector(".temp")
        const cityEle = document.querySelector(".city")
        const humidityEle = document.querySelector(".humidity")
        const windEle = document.querySelector(".wind")
        const rainEle = document.querySelector(".rain")
        cityEle.innerHTML = data.name
        tempEle.innerHTML = Math.round(data.main.temp) + "°c"
        humidityEle.innerHTML = data.main.humidity + "%"
        windEle.innerHTML = data.wind.speed + "km/h"
        rainEle.innerHTML = data.weather[0].main

        if (response.status == 404) {
            weather.style.display = "none"
        }
        if (data.weather[0].main === "Clouds") {
            weatherImg.src = "sun cloud.svg"
        }
        else if (data.weather[0].main === "Clear") {
            weatherImg.src = "sun.svg"
        }
        else if (data.weather[0].main === "Rain") {
            weatherImg.src = "rain.svg"
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherImg.src = "drizzle.svg"
        }
        else if (data.weather[0].main === "Mist") {
            weatherImg.src = "mist.svg"
        }
        weather.style.display = "block"
        error.style.display="none"
    }



}
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value)
    }
});
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)

})

errorBtn.addEventListener("click",()=>{
    error.style.display="none"
})