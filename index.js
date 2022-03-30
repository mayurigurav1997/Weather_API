//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key:"de3fcf47f266be61e0cf74cedc96b583",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const inputBox = document.getElementById("input-box");

//Event Listner Function
inputBox.addEventListener("keypress" , (event) => {
    //keyCode 13 is Enter
    if(event.keyCode == 13){
        console.log(inputBox.value);
        getWeatherReport(inputBox.value);
    }
})

//Get Weather Report 
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
//Show Weather Report
            //textContents is all text contained by an element for formatting purposes only.
            // innerText returns all text contained by an element and all its child elements.
            // innerHtml returns all text, including html tags, that is contained by an element.
function showWeatherReport(weather){
    console.log(weather);
    //set the name and country
    let city = document.getElementById("city");
    city.innerText = `${weather.name},  ${weather.sys.country}`;

    //set the temperature
    let temperature = document.getElementById("temperature");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    //set min-max temperature
    let minmax = document.getElementById("min-max");
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max) `

    //set weather type
    let weatherType = document.getElementById("weather");
    weatherType.innerHTML = `${weather.weather[0].main}`;

    //set the date format
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate);

    //change background Image
    if(weatherType.textContent == 'Sunny'){
        document.body.style.backgroundImage = "url('Images/sunny.jpg)')";
    }
    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('Images/sunny.jpg')";
    }
    else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('Images/cloud.jpg')";
    }
    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('Images/rain.jpg')";
    }
    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('Images/snow.jpg')";
    }
    else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('Images/thunderstorm.jpg')";
    }
    else{
        document.body.style.backgroundImage = "url('Images/clear.jpg')";
    }

}
//Date Manage
function dateManage(dateObject) {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","Octomber","November","December"];

    let year = dateObject.getFullYear();
    let month = months[dateObject.getMonth()];
    let date = dateObject.getDate();
    let day = days[dateObject.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}

