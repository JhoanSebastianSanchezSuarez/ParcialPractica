import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Deporte from "./Deporte";
import DeporteModal from "./DeporteModal";
import Foot from "./Foot";
import 'bootstrap/dist/css/bootstrap.min.css';

function Deportes() {
    const [deportes, setDeportes] = useState([]);
    const [selectedDeporte, setSelectedDeporte] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const URL = "https://api.mockaroo.com/api/80299e30?count=30&key=8bebfe10";
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const updatedData = data.map((deporte, index) => {
                    if (index < 10) {
                        return { ...deporte, category: "Cycling" };
                    } else if (index < 20) {
                        return { ...deporte, category: "Running" };
                    } else {
                        return { ...deporte, category: "Swimming" };
                    }
                });
                setDeportes(updatedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCardClick = (deporte) => {
        setSelectedDeporte(deporte);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDeporte(null);
    };

    const cyclingDeportes = deportes.slice(0, 10);
    const runningDeportes = deportes.slice(10, 20);
    const swimmingDeportes = deportes.slice(20, 30);

    const renderDeportes = (deportes) => {
        return deportes.map((deporte, index) => (
            <Col key={index} xs={12} md={6} onClick={() => handleCardClick(deporte)}>
                <Deporte deporte={deporte} />
            </Col>
        ));
    };

    return (
        <div className='main-content'>
            <div className='container'>
                <Row>
                    <Col>
                        <h1>Cycling</h1>
                        <Row>
                            {renderDeportes(cyclingDeportes)}
                        </Row>
                    </Col>
                    <Col>
                        <h1>Running</h1>
                        <Row>
                            {renderDeportes(runningDeportes)}
                        </Row>
                    </Col>
                    <Col>
                        <h1>Swimming</h1>
                        <Row>
                            {renderDeportes(swimmingDeportes)}
                        </Row>
                    </Col>
                </Row>
                <DeporteModal show={showModal} handleClose={handleCloseModal} deporte={selectedDeporte} />
            </div>
            <footer>
                <Foot />
            </footer>
        </div>
    );
}

export default Deportes;


