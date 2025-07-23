const WEATHER_API_KEY = "7c73a51065c400b1324c2c75d1b4b91b";
const temperatureElem = document.getElementById("temperature");
const cityElem = document.getElementById("city");
const windElem = document.getElementById("windValue");
const humidity = document.getElementById("humidityValue");
const image = document.getElementById("heroImage");

function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    document.getElementById("warning").classList.remove("hidden")
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById("warning").classList.add("hidden")
                resolve(data)
            })
            .catch(error => reject(error));
    });
}

function displayWeatherDetails(data) {
    cityElem.innerHTML = data.name;
    temperatureElem.innerHTML = `${data.main.temp}&deg;c`;
    humidity.innerHTML = `${data.main.humidity} %`;
    const windspeed = data.wind.speed * 1.6;
    windElem.innerHTML = `${windspeed.toFixed(2)} kmph`;
    console.log(data.weather[0].main);
    image.innerHTML = `<img src="/Weather App/images/${data.weather[0].main}.png" alt="We dont have image for this weather">`

}

async function initialData() {
    const data = await fetchWeatherData("delhi");
    displayWeatherDetails(data);
    
}

document.getElementById("searchButton").addEventListener("click", async (e) => {
    const city = document.getElementById("searchText").value;
    const data = await fetchWeatherData(city);
    displayWeatherDetails(data);
})

initialData();
