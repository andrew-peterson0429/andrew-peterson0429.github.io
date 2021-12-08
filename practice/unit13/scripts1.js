const apiURL = '//api.openweathermap.org/data/2.5/weather?id=5780026&appid=37933eeecc2aa2f82d2f070336b953c5&units=imperial';

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    const iconCode = weatherInfo.weather[0].icon;
    console.log(iconCode);
    const icon_path = `//openweathermap.org/img/w/${iconCode}.png`;
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;
   /*  document.getElementById('puppy').innerHTML = mydata.name;

    let sample = document.createElement('h1');
    sample.textContent = mydata.name;
    document.getElementById('puppy').appendChild(sample); */
});

const mydate = new Date();

const y = mydate.getDate();
console.log(y);

const myweekday = new Array(7);
myweekday[0] = 'Sunday';
myweekday[1] = 'Monday';
myweekday[2] = 'Tuesday';
myweekday[3] = 'Wednesday';
myweekday[4] = 'Thursday';
myweekday[5] = 'Friday';
myweekday[6] = 'Saturday';

