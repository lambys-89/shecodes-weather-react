import React from "react";
import {Form, Button, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function CityForecast(props) {
    return (
        <div>
            <h1>Entry from {props.entry}</h1>
        </div>
    )
}