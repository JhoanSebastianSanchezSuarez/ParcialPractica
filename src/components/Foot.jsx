import React, { useEffect, useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Foot() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const URL = "https://api.mockaroo.com/api/3c8adb70?count=1&key=8bebfe10";
        fetch(URL)
            .then(response => response.json())
            .then(data => setUserInfo(data[0])) // Acceder al primer elemento del array
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div id="bottom">
            <Row>
                {userInfo && (
                    <>
                        <Col>
                            <img src={userInfo.picture} alt="user-profile-pic"/>
                        </Col>
                        <Col>
                            <p>{userInfo.first_name} {userInfo.last_name}</p>
                        </Col>
                        <Col>
                            <p>Cycling: {userInfo.cycling}</p>
                        </Col>
                        <Col>
                            <p>Running: {userInfo.running}</p>
                        </Col>
                        <Col>
                            <p>Swimming: {userInfo.swimming}</p>
                        </Col>
                    </>
                )}
            </Row>
        </div>
    );
}

export default Foot;

