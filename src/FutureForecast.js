import React, {useState} from "react";
import {Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


export default function FutureForecast(props) {

    <h1>Entry point {props.entry} button</h1>
    {props.entry === "city" && props.searchVal.length > 0 &&
    <h1>Searched value was {props.searchVal}</h1>}

    return(
        <div className="card-group">
            <div className="card day1">
                <div className="card-body">
                    <h5 id="day-1-title" className="card-title">Monday</h5>
                    <i id="day-1-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                    <p id="day-1-max-min" className="card-text">6°C/12°C</p>
               </div>
            </div>
            <div className="card day2">
                <div className="card-body">
                    <h5 id="day-2-title" className="card-title">Tuesday</h5>
                    <i id="day-2-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                    <p id="day-2-max-min" className="card-text">9°C/16°C</p>
                </div>
            </div>
            <div className="card day3">
                <div className="card-body">
                    <h5 id="day-3-title" className="card-title">Wednesday</h5>
                    <i id="day-3-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                    <p id="day-3-max-min" className="card-text">11°C/18°C</p>
                </div>
            </div>
            <div className="card day4">
                <div className="card-body">
                    <h5 id="day-4-title" className="card-title">Thursday</h5>
                    <i id="day-4-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                    <p id="day-4-max-min" className="card-text">7°C/10°C</p>
                </div>
            </div>
            <div className="card day5">
                <div className="card-body">
                    <h5 id="day-5-title" className="card-title">Friday</h5>
                    <i id="day-5-img" className="fas fa-cloud-sun-rain" aria-hidden="true"></i>
                    <p id="day-5-max-min" className="card-text">4°C/7°C</p>
                </div>
            </div>
        </div>
    )

}




