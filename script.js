const API_key = '9e66ac95c427459139c21ad5982b1b4a';
const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_key}&units=metric`;

const weather_icon= document.querySelector('.weather-icon'); 
async function ch(city) {
    
    var response = await fetch(url+`&q=${city}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = data.main.temp+'°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
    document.querySelector('.wind').innerHTML = data.wind.speed+'km/h';

    if(data.weather[0].main == 'Clouds') {
        weather_icon.src = 'Assets/clouds.png';
    }
    else if(data.weather[0].main == 'Clear') {
        weather_icon.src = 'Assets/clear.png';
    }
    else if(data.weather[0].main == 'Rain') {
        weather_icon.src = 'Assets/rain.png';
    }
    else if(data.weather[0].main == 'Drizzle') {
        weather_icon.src = 'Assets/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist') {
        weather_icon.src = 'Assets/mist.png';
    }
}

document.querySelector('.search button').addEventListener('click',function () {
    const city = document.querySelector('.search input').value;
    ch(city);
    document.querySelector('.weather').style.display = 'flex';
});


// const API_key = '9e66ac95c427459139c21ad5982b1b4a';
// const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_key}&units=metric`;

// const weather_icon = document.querySelector('.weather-icon'); 
// async function ch(city) {
//     var response = await fetch(url + `&q=${city}`);
//     var data = await response.json();
//     console.log(data);
    
//     document.querySelector('.temp').innerHTML = data.main.temp + '°C';
//     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
//     document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

//     // Change the icon based on the weather condition
//     const weatherCondition = data.weather[0].main.toLowerCase(); // Convert to lowercase for consistent comparison
    
//     if(weatherCondition === 'clouds') {
//         weather_icon.src = 'Assets/clouds.png';
//         console.log('clouds');
//     } else if(weatherCondition === 'clear') {
//         weather_icon.src = 'Assets/clear.png';
//         console.log('clear');
//     } else if(weatherCondition === 'rain') {
//         weather_icon.src = 'Assets/rain.png';
//         console.log('rain');
//     } else if(weatherCondition === 'drizzle') {
//         weather_icon.src = 'Assets/drizzle.png';
//         console.log('drizzle');
//     } else if(weatherCondition === 'mist') {
//         weather_icon.src = 'Assets/mist.png';
//         console.log('mist');
//     } else {
//         // Fallback for any other conditions
//         weather_icon.src = 'Assets/default.png';
//         console.log('default');
//     }
// }

// document.querySelector('.search button').addEventListener('click', function() {
//     const city = document.querySelector('.search input').value;
//     console.log(city);
//     ch(city);
// });
