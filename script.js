const API_key = '9e66ac95c427459139c21ad5982b1b4a';
const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_key}&units=metric`;

const weather_icon= document.querySelector('.weather-icon'); 
async function ch(city) {
    
    var response = await fetch(url+`&q=${city}`);
    var data = await response.json();
    document.querySelector('.temp').innerHTML = data.main.temp+'°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
    document.querySelector('.wind').innerHTML = data.wind.speed+'km/h';

    if(data.weather[0].main == 'Clouds') {
        weather_icon.src = './Assets/clouds.png';
    }
    else if(data.weather[0].main == 'Clear') {
        weather_icon.src = './Assets/clear.png';
    }
    else if(data.weather[0].main == 'Rain') {
        weather_icon.src = './Assets/rain.png';
    }
    else if(data.weather[0].main == 'Drizzle') {
        weather_icon.src = './Assets/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist') {
        weather_icon.src = './Assets/mist.png';
    }
}

document.querySelector('.search button').addEventListener('click',function () {
    const city = document.querySelector('.search input').value;
    ch(city);
    document.querySelector('.weather').style.display = 'flex';
});

