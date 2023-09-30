import React from 'react';
import {Container, Row, Col, Image, Nav, NavItem} from 'react-bootstrap';
import gear from './../images/left-aside/gear.png'
import {NavLink} from "react-router-dom";
import {routes} from "../routes/routes.ts";

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
                            {routes.map((route) => {
                                return <NavItem id={route.id}>
                                    <NavLink to={route.to}>{route.name}</NavLink>
                                </NavItem>
                            })}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </aside>
    );
};

export default LeftAside;
