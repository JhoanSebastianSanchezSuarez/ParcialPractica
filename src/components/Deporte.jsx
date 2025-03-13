import React from "react";
import Card from 'react-bootstrap/Card';

function Deporte(props){
    return (
        <Card style={{ width: '200px', height: '200px', color:"white"}} className={props.deporte.category}>
            <Card.Body>
            <Card.Title>{props.deporte.category} Session</Card.Title>
            <Card.Text>
                Route around {props.deporte.place}
            </Card.Text>
            <Card.Text>
                {props.deporte.distance}Km - {props.deporte.time}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Deporte