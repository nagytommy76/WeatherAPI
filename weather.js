class Weather{
    constructor(city, country){
        this.access_key = 'ef9cef3f0abdc13ab5c8e880072d4256';
        this.city = city;
        this.country = country;
    }

    async getWeather(){
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.access_key}&query=${this.city},${this.country}`);

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}