// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const body = document.querySelector("body");
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }
  const city = inputBox.value;


  // Fetch Details

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b39b119ab9714388b7c115829231602 &q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  if(inputBox.value!=data){
    alert("Please enter valid city name");
  }
  // Displaying the data in HTML
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;

  // onclick event
  
};

let search = document.querySelector(".Search");

