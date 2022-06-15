import React from 'react'
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap'
import style from './NavbarDefault.module.css'

const NavbarDefault = () => {
    return (
        <Navbar key="sm" expand="sm" className={style.navbar}>
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" aria-labelledby="offcanvasNavbarLabel-expand-sm" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                            <b>Logo</b>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className={'ms-auto'}>
                            <Nav.Link href="/register"><Button variant="outline-primary">Daftar</Button></Nav.Link>
                            <Nav.Link href="/login"><Button variant="primary">Masuk</Button></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarDefault