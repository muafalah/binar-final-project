import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import { Button, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import style from './NavbarDefault.module.css'

const NavbarDefault = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">SecondGadget</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <Nav>
          <Button className={style.btn_daftar} variant="outline-success">Daftar</Button>
          <Button className={style.btn_masuk} variant="success">Masuk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default NavbarDefault