import React, {useState} from "react";
import {Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "react-loader-spinner";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";


export default function WeatherDetails(props) {

    console.log(props.searchedCity);

    let [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {

        console.log(response.data.timezone);
        
        
        setWeatherData(
            {
                ready: true,
                temp: Math.round(response.data.main.temp),
                feelsLike: Math.round(response.data.main.feels_like),
                type: response.data.weather[0].description,
                humid: response.data.main.humidity,
                wind: Math.round(response.data.wind.speed),
                cityName: response.data.name,
                country: response.data.sys.country,
                date: response.data.dt,
                timezone: response.data.timezone
            }
        )

    }

    if(weatherData.ready) {

    return (
        <div>
            <Row xs={12} sm={10} className="city-time">
                <div className="header-group">
                <h1>{weatherData.cityName}, {weatherData.country} (via {props.locationType}) </h1>
                <h2><FormattedDate currentDate = {weatherData.date} timezone = {weatherData.timezone}/></h2>
                </div>
            </Row>
            <Row className="list-details">
                <Col xs={12} sm={4} className="weather-icon-current">
                <i id="current-weather-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                </Col>
                <Col xs={12} sm={8} className="weather-details-current">
                    <div className="list-group">
                        <h3>Currently: {weatherData.temp}</h3>
                        <h3>Feels like: {weatherData.feelsLike}</h3>
                        <h3 className="text-capitalize">Type: {weatherData.type}</h3>
                        <h3>Humidity: {weatherData.humid}%</h3>
                        <h3>Wind speed: {weatherData.wind} mph</h3>
                    </div>
                </Col>
            </Row>
        </div>
        )} else {
        const apiKey = "d4005dcd287a291e84d25dc6afec0b1c";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.searchedCity}&appid=${apiKey}&units=metric`;

            console.log(apiUrl);

        axios.get(apiUrl).then(handleResponse);        
        

        return(
        <Loader
        type="Puff"
        color="#105160"
        height={100}
        width={100}
        timeout={3000}
        />
        )
    }

}