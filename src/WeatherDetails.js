import React, {useState} from "react";
import {Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


export default function WeatherDetails(props) {

    <h1>Entry point {props.entry} button</h1>
    {props.entry === "city" && props.searchVal.length > 0 &&
    <h1>Searched value was {props.searchVal}</h1>}

    return(
        <div>
            <Row xs={12} sm={10} className="city-time">
                <div className="header-group">
                <h1>London, UK (via {props.locationType}) </h1>
                <h2>Sunday 28th February 2021 0:59AM</h2>
                </div>
            </Row>
            <Row className="list-details">
                <Col xs={12} sm={4} className="weather-icon-current">
                <i id="current-weather-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                </Col>
                <Col xs={12} sm={8} className="weather-details-current">
                    <div className="list-group">
                        <h3>Currently:</h3>
                        <h3>Feels like:</h3>
                        <h3>Type:</h3>
                        <h3>Humidity:</h3>
                        <h3>Wind speed:</h3>
                    </div>
                </Col>
            </Row>
        </div>
    )

}