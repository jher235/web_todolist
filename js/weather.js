const API_KEY= "8d4ead1a92be687d39e16ff080a804f1";




function onGeoOk(position){
    const lat = position.coords.latitude  ;
    const log = position.coords.longitude   ;
    console.log("You live in ", lat, log)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url).then(response => response.json()).then((data)=>{
       const weather= document.querySelector("#weather span:last-child");
       const city = document.querySelector("#weather span:first-child")
       
       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })

    }

function onGeoError(){
    alert("Can't find you. No weather for you.")

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);







