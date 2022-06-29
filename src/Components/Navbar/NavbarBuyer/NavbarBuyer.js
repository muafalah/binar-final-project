import React from 'react'
import { Container, Nav, Navbar, Offcanvas, Button, Dropdown } from 'react-bootstrap'
import FormSearch from '../../Form/FormSearch/FormSearch'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import style from './NavbarBuyer.module.css'
import { BagCheckFill, Basket3Fill, BellFill, BoxArrowRight, HouseFill, Shop } from 'react-bootstrap-icons'

const NavbarBuyer = ({ user }) => {
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
                        <div className="ms-auto">
                            <div className={style.menu_lg}>
                                <div className={'d-flex gap-2'}>
                                    <Button variant="transparant" style={{ color: "white" }}><Basket3Fill size={18} /></Button>
                                    <Button variant="transparant" style={{ color: "white" }}><BellFill size={18} /></Button>
                                    <Dropdown align="end" className="ms-auto p-0">
                                        <Dropdown.Toggle variant="transparant" className="pe-0">
                                            <img src={user.image} alt="User Profile" style={{ borderRadius: "100px", width: "30px", height: "30px" }} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ width: "15rem" }}>
                                            <Dropdown.Item href="#">
                                                <div className="d-flex">
                                                    <div className="my-auto me-3"><img src={user.image} alt="User Profile" style={{ borderRadius: "100px", width: "38px", height: "38px" }} /></div>
                                                    <div className='w-100'>
                                                        <div><b>{user.fullname}</b></div>
                                                        <div style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>@{user.username}</div>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Dropdown.Item>
                                            <Dropdown.Item href="#" className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Menjadi Penjual</Dropdown.Item>
                                            <Dropdown.Item href="#" className="d-flex w-100" style={{ color: "red" }}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className={style.menu_sm}>
                            <div className='d-grid gap-2'>
                                <Button variant="transparant" className="d-flex pt-3 pb-3">
                                    <div className='me-4'><img src={user.image} alt="User Profile" style={{ borderRadius: "100px", width: "60px", height: "60px" }} /></div>
                                    <div className='w-100 text-start'>
                                        <div style={{ fontSize: "1.25rem" }}><b>{user.fullname}</b></div>
                                        <div style={{ color: "#8A8A8A" }}>@{user.username}</div>
                                    </div>
                                </Button>
                                <Button variant="transparant" size="lg" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Button>
                                <Button variant="transparant" size="lg" className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Menjadi Penjual</Button>
                                <Button variant="transparant" size="lg" className="d-flex w-100"><Basket3Fill size={18} className="me-3 my-auto" />Keranjang Belanja</Button>
                                <Button variant="transparant" size="lg" className="d-flex w-100"><BellFill size={18} className="me-3 my-auto" />Notifikasi</Button>
                                <Button variant="transparant" size="lg" className="d-flex w-100" style={{ color: "red" }}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarBuyer