import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <header>
            <Navbar collapseOnSelect expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                        List Listy List Lists
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <LinkContainer to="#">
                            <Nav.Link>Create New List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/my-lists">
                            <Nav.Link>My Lists</Nav.Link>
                        </LinkContainer>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </header>
    )
}

export default Header;