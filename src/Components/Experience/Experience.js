import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience">
            <Container>
                <h4 className="">Why Purchase Your Perfect Car From Our Company</h4>
                <p>Ridiculus sodales metus varius dictum fermentum ante <br /> dictumst eleifend quam. Taciti tortor aenean nisl dapibus. <br /> Elementum, condimentum, est consequat adipiscing accumsan.</p>
                <Row>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                        <i class="fas fa-car"></i>                            
                        <h2>Brand New Car</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus. 
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-globe"></i>
                            <h2>Worldwide</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-wallet"></i>
                            <h2>Cheap</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus.
                            </p>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                            <i className="fas fa-headphones"></i>
                            <h2>24/7 Service</h2>
                            <p>
                            Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experience;