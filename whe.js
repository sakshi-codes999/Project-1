const apiKey = "d0954b022db0a0f8051c27afe45c9755";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metricmetric&q=";// q= → means query, i.e. he city name add next in the code.

// sThe input box where user types a city.
const searchBox=document.querySelector(".search input");
//The search button they click.
const searchBtn=document.querySelector(".search button");
//The weather icon image that changes based on weather.
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);//getch data from API
//for showing error msg after enetering wrong city name
 if(response.status==404){
  document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
 }else{
     const data = await response.json();//convert fetched data format into js object
    
    //to display fetched API data into app
    document.querySelector(".city").innerHTML=data.name;//from js inspect
      document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
                                              //for rounf off temperature used Math
                                              //°C add to showntemp in °C
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
          document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";


    // changing weather img as per weather      
          if(data.weather[0].main=="clouds"){
  weatherIcon.src="images/clouds.png"
}
else if(data.weather[0].main=="clear"){
   weatherIcon.src="images/clear.png"
}
else if(data.weather[0].main=="Rain"){
   weatherIcon.src="images/rain.png"
}
else if(data.weather[0].main=="Drizzle"){
   weatherIcon.src="images/drizzle.png"
}
else if(data.weather[0].main=="Mist"){
   weatherIcon.src="images/mist.png"
}
//showing weather details after enetring city name 
document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";
 }    
}
searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
//searchBox.value → gets the text typed in the input box.
//checkWeather(...) → calls the function with the entered city name.
})


