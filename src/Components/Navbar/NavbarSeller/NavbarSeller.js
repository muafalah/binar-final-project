import React from 'react'
import { Navbar, Container, Offcanvas, Nav, Button, Col } from 'react-bootstrap'
import FormSearch from '../../Form/FormSearch/FormSearch'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import { Basket3Fill } from 'react-bootstrap-icons'
import { BellFill } from 'react-bootstrap-icons'
import { PersonCircle } from 'react-bootstrap-icons'
import style from './NavbarSeller.module.css'

const NavbarSeller = () => {
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
              <Nav className="justify-content-end flex-grow-1 gap-3">
                <Col md={2}>
                  <Basket3Fill className={style.icon_chekout} />
                </Col>
                <Col md={2}>
                  <BellFill className={style.icon_notif} />
                </Col>
                <Col md={2}>
                  <PersonCircle className={style.icon_user}/>
                </Col>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default NavbarSeller