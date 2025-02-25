import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">MyFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!user ? (
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link onClick={() => onLoggedOut()}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );
};

NavigationBar.propTypes = {
    user: PropTypes.string,
    onLoggedOut: PropTypes.func.isRequired
};
