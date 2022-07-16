import React from 'react'
import { Navbar, Container, Offcanvas, Nav, Button, } from 'react-bootstrap'
import style from './NavbarDefault.module.css'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import FormSearch from '../../Form/FormSearch/FormSearch'

const NavbarDefault = () => {
    return (
        <Navbar key="sm" bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="pe-3"><img src={LogoWhite} height="35" alt="SecondGadget" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                <FormSearch />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" aria-labelledby="offcanvasNavbarLabel-expand-sm" placement="end" bg="dark">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                            <img src={LogoBlack} height="35" alt="SecondGadget" />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto gap-3">
                            <Button href="/register" className="w-100" variant="dark">Daftar</Button>
                            <Button href="/login" className="w-100" variant="light">Masuk</Button>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarDefault