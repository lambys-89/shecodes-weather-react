import React from "react";
import {Form, Button, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.css";

export default function EntryForm() {
    return (
    <Form id="entry-form">
        <Form.Row className="align-items-center">
            <Col xs={12}>
                <Button type="submit" className="mb-2" id="current-location-but">Current Location</Button>
            </Col>
        </Form.Row>
        <Form.Row className="align-items-center">
            <Col xs={12} sm={8} className="split-half-1-2">
                <Form.Control
                className="input"
                id="inlineFormInput"
                placeholder="Enter City..."
                />
            </Col>
            <Col xs={12} sm={4} className="split-half-2-2">
                <Button type="submit" className="mb-2" id="city-search-but">Submit</Button>
            </Col>
        </Form.Row>
    </Form>
    );
}