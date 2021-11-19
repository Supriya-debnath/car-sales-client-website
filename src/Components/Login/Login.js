import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import "./Login.css";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { logInError, loading, handleUserLogin, signInWithGoogle } =
        useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        handleUserLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <>
            <div className="login-style">
                <Container className="py-4">
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={6}>
                                {!loading && (
                                    <>
                                        <Form
                                            className="mx-auto pt-4 pb-4 w-75"
                                            onSubmit={handleLoginSubmit}
                                        >
                                            <h2 className="text-center fw-bold">
                                                LOG IN
                                            </h2>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    onBlur={handleOnBlur}
                                                    placeholder="Your Email"
                                                    required
                                                    className="login-input"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="BasicPassword"
                                            >
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    onBlur={handleOnBlur}
                                                    placeholder="Your Pass"
                                                    required
                                                    className="login-input"
                                                />
                                            </Form.Group>
                                            {/* <span>{logInError}</span> */}
                                            <div className="d-grid gap-2 my-4 login-input">
                                                <Button
                                                    variant="secondary"
                                                    type="submit"
                                                    className="submit-forms"
                                                >
                                                    Sign In
                                                </Button>
                                            </div>
                                            <p className="text-center text-primary">
                                                New User?
                                                <Link
                                                    to="/register"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    &nbsp;Please Register
                                                </Link>
                                            </p>
                                        </Form>
                                        <div className="google-btn">
                                            <button 
                                                onClick={handleGoogleSignIn}
                                            >
                                                Google Sign in
                                            </button>
                                        </div>
                                    </>
                                )}

                                {loading && (
                                    <div className="text-center">
                                        <Spinner
                                            animation="border"
                                            variant="info"
                                        />
                                    </div>
                                )}
                                {logInError && (
                                    <Alert
                                        variant="danger"
                                        className="w-75 mx-auto"
                                    >
                                        {logInError}
                                    </Alert>
                                )}
                            </Col>
                            <Col xs={12} md={6}>
                                {/* <h2 className="fw-bold">Car</h2> */}
                                <img
                                    className="img-fluid"
                                    src="https://media.istockphoto.com/photos/businessman-logging-on-to-a-password-protected-website-picture-id1325306868?b=1&k=20&m=1325306868&s=170667a&w=0&h=Nclr6aupv-xVdn6qZkHN_sPPsVFd_CLfWNyVbUVUUnI="
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Login;



















// import React from 'react';
// import { useHistory, useLocation } from 'react-router';
// import useAuth from '../hooks/useAuth';

// const Login = () => {
//     const {signInUsingGoogle} = useAuth();
//     const history = useHistory();
//     const location = useLocation();
    

//     return (
//         <div>
//             <h2>Please Login</h2>
//             <button onClick={() => signInUsingGoogle(history, location)} className="btn btn-warning">Sign In with Google</button>
//         </div>
//     );
// };

// export default Login;




