class UI{
    constructor(){
        this.city = document.getElementById('w-city');
        this.country = document.getElementById('w-country');
        this.temp = document.getElementById('temp');
        this.icon = document.getElementById('w-icon');
        this.time = document.getElementById('w-time');
        this.details = document.getElementById('w-details');
        this.description = document.getElementById('w-weather_descriptions');
        this.feelslike = document.getElementById('w-feelslike');
        this.wind_speed = document.getElementById('w-wind_speed');
        this.pressure = document.getElementById('w-pressure');
    }

    showWeather(weather){
        this.city.innerText = weather.location.name;
        this.country.innerText = weather.location.country;
        this.temp.innerText = weather.current.temperature +' °C';
        this.icon.setAttribute('src',weather.current.weather_icons);
        this.time.innerText = weather.location.localtime;
        this.description.innerText = 'Description: '+weather.current.weather_descriptions;
        this.feelslike.innerText = 'Feels like: '+weather.current.feelslike+' °C';
        this.wind_speed.innerText = 'Wind speed: '+weather.current.wind_speed+' km/h';
        this.pressure.innerText = 'Pressure: '+weather.current.pressure;
    }
}