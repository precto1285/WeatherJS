// Create a weather class to fetch the data from the API
class Weather {
  constructor(city) {
    this.apiKey = '627f1e8d79c26c3231e320d95186c323';
    this.city = city.name;
  }

  // Fetch wather from API
  async getWeather() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city.name}.json`);

    const responseData = await response.json();

    return responseData.current;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city.name;
  }
}