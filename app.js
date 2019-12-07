// Init Storage
const storage = new Storage();
// Get weather location
const weatherLocation = storage.getLocationData();
// Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-location').addEventListener('click', () =>{
    const city = document.getElementById('city-name').value;
    const country = document.getElementById('country-name').value;

    weather.changeLocation(city, country);

    // Set location in LS
    storage.setLocationData(city,country);

    getWeather();

    $('#locModal').modal('hide');
});



function getWeather(){
    weather.getWeather()
    .then(weather => {
        console.log(weather);
        ui.showWeather(weather);
    })
    .catch(err => console.log(err));
}

// https://weatherstack.com/documentation#language_parameter
