import React, { useState} from 'react';
import {Col, Container, Image, Nav, NavItem, Row} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import gear from './../images/left-aside/gear.png'
import {NavLink, useLocation} from "react-router-dom";
import {routeList} from "../routes/routes.ts";

const LeftAside: React.FC = () => {
    const location = useLocation();
    const [showAnimation, setShowAnimation] = useState(false);
    const [hidden, isHidden] = useState(false)

    const handleClickHidden = () => {
        isHidden(!hidden)
    }




    return (
        <aside className={`aside ${hidden ? 'hidden-aside' : ''}`} onClick={handleClickHidden}>
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
                            <TransitionGroup className="nav-list">
                                {routeList.map((item) => (
                                    <CSSTransition
                                        key={item.id}
                                        in={location.pathname === item.to && showAnimation}
                                        timeout={500}
                                        classNames="nav-item"
                                        unmountOnExit
                                    >
                                        <NavItem>
                                            <NavLink
                                                to={item.to}
                                                onClick={() => {
                                                    setShowAnimation(true);
                                                    setTimeout(() => setShowAnimation(false), 500);
                                                }}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </aside>
    );
};

export default LeftAside;
