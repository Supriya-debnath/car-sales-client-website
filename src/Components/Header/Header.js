import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    console.log(user);


    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                         src="https://img.freepik.com/free-vector/car-logo-vector_25327-40.jpg?size=338&ext=jpg"
                         width="30"
                         height="30"
                        className="d-inline-block align-top"
                    />
                    CarWorld
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                       
                       {user.email?
                       <>
                        <Nav.Link as={Link} to="/home">{user.displayName}</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <button onClick={() => logOut()}>logout</button>
                       </>
                       :
                       <Nav.Link as={Link} to="/login">Login</Nav.Link>
                       }
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
         </>
    );
};

export default Header;