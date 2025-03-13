
const apiKey = "420e0944676244487496bdee5638d347";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector("#search input");
const button = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city) {
   const response = await fetch(apiURL + city + `&appid=${apiKey}`);

   if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector("#weather").style.display = "none";

   } else {

      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      switch(data.weather[0].main){
         case 'Clouds':
            weatherIcon.src = "images/clouds.png";
            break;
         case 'Clear':
            weatherIcon.src = "images/clear.png";
            break;
         case 'Drizzle':
            weatherIcon.src = "images/drizzle.png";
            break;
         case 'Mist':
            weatherIcon.src = "images/mist.png";
            break;
         case 'Rain':
            weatherIcon.src = "images/rain.png";
            break;
         case 'Snow':
            weatherIcon.src = "images/snow.png";
            break;
         default :
            weatherIcon.src = "images/clear.png";
      }

      document.querySelector("#weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
   }
   
}

button.addEventListener("click", ()=>{
   checkWeather(input.value);
})
