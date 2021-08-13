import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Navbar scroll</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="mr-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>   
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </header>
    )
}

export default Header
