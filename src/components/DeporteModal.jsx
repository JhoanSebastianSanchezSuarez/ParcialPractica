import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DeporteModal({ show, handleClose, deporte }) {
    const modalClass = deporte ? deporte.category : '';

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                {deporte && (
                    <Card className={modalClass} style={{height:"200px", color:"white"}}>
                        <Card.Body>
                            <Card.Title>{deporte.category} Session</Card.Title>
                            <Card.Text>Route around {deporte.place}</Card.Text>
                            <Card.Text>{deporte.distance} Km - {deporte.time}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeporteModal;


