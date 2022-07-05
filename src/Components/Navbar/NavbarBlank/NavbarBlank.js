import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'

const NavbarBlank = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="pe-3"><img src={LogoWhite} height="35" alt="SecondGadget" /></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarBlank