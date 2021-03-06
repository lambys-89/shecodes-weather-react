import React, {useState} from "react";
import {Form, Button, ButtonGroup, ToggleButton, Container, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDetails from "./WeatherDetails.js";
import FutureForecast from "./FutureForecast.js";


export default function Forecast(props) {

    console.log(props.searchVal);

let [radioValue, setRadioValue] = useState('1');

const radios = [
    { name: '°C', value: '1' },
    { name: '°F', value: '2' },
  ];

        return(
    <Container>
        <Row className="forecast-header">
            <Col xs={12} sm={10} className="forecast-header-search">
                <Form>
                    <Form.Control
                    className="input"
                    id="forecast-searchbox"
                    placeholder="Enter City..."
                    onChange = {props.cityInput}
                    />
                    <Button type="submit" className="mb-2" id="forecast-search-but" onClick={props.loadState} >Submit</Button>
                    <Button type="submit" className="mb-2" id="forecast-location-but">📌</Button>
                </Form>
            </Col>
            <Col xs={12} sm={2} className="forecast-header-temp">
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                <ToggleButton
                id = "temp-toggle"
                key={idx}
                type="radio"
                variant="primary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup>
            </Col>
        </Row>
        <Row className="forecast-main">
            <Col xs={12} sm={12} className="forecast-main-details">
                <WeatherDetails locationType={props.entry} searchedCity={props.searchVal} units={radioValue} />
            </Col>
        </Row>
        <Row className="forecast-future">
            <Col xs={12} sm={12} className="forecast-future-details">
                <FutureForecast locationType={props.entry} searchedCity={props.searchVal} units={radioValue}/>
            </Col>
        </Row>
    </Container>
    )
}