import React from 'react'
import { Navbar, Container, Offcanvas, Nav, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import style from './NavbarDefault.module.css'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'

const NavbarDefault = () => {

  const navigate = useNavigate()

  const handleSearch = (value) => {
    navigate("/search/" + value)
  }

  return (
    <Navbar key="sm" bg="dark" expand="sm" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="pe-3"><img src={LogoWhite} height="35" alt="SecondGadget" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Form className="d-flex gap-3 w-100">
          <Form.Control type="text" placeholder="Cari produk atau toko..." aria-label="Search" className="mt-2 mb-2" onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleSearch(e.target.value)
            }
          }} />
        </Form>
        <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" aria-labelledby="offcanvasNavbarLabel-expand-sm" placement="end" bg="dark">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              <img src={LogoBlack} height="35" alt="SecondGadget" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 gap-3">
              <a href="/register"><Button className="w-100" variant="dark">Daftar</Button></a>
              <a href="/login"><Button className="w-100" variant="light">Masuk</Button></a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarDefault