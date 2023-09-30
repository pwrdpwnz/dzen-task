import React from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import gear from './../images/left-aside/gear.png'

const LeftAside: React.FC = () => {
    return (
        <aside className="aside">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={3} className="text-center">
                        <div className="image-container">
                            <Image
                                src="https://img.freepik.com/premium-photo/serious-man-face-bearded-guy-human-expression-emotion-concept-portrait-of-serious-man_265223-31915.jpg" // Путь к вашей картинке
                                alt="avatar"
                                className="border-image"
                                roundedCircle
                            />
                            <div className="gear-icon">
                                <img src={gear} alt="gear"/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#">Arrival of goods</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Groups</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Users</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">Settings</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </aside>
    );
};

export default LeftAside;
