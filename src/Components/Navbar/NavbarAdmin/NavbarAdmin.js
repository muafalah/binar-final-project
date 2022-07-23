import React from 'react'
import { Button, Container, Dropdown, Navbar, Offcanvas } from 'react-bootstrap'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import FormSearch from '../../Form/FormSearch/FormSearch'
import style from './NavbarAdmin.module.css'
import { BoxArrowRight, HouseFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const NavbarAdmin = ({ dataUser }) => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("TokenSecondGadget")
        navigate("/")
        window.location.reload()
    }

    return (
        <Navbar key="sm" bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="pe-3"><img src={LogoWhite} height="35" alt="SecondGadget" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                <div className="w-100 me-0 me-md-3"><FormSearch /></div>
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
                                    <Dropdown align="end" className="ms-auto p-0">
                                        <Dropdown.Toggle variant="transparant" className="pe-0">
                                            <img src={dataUser.img} alt="User Profile" style={{ borderRadius: "100px", width: "30px", height: "30px" }} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant="secondary" style={{ width: "15rem" }}>
                                            <Dropdown.Item href={'/dashboard/profile/edit'}>
                                                <div className="d-flex">
                                                    <div className="my-auto me-3"><img src={dataUser.img} alt="User Profile" style={{ borderRadius: "100px", width: "38px", height: "38px" }} /></div>
                                                    <div className='w-100'>
                                                        <div><b>{dataUser.fullName}</b></div>
                                                        <div style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>@{dataUser.username}</div>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="/admin/category/list" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Dropdown.Item>
                                            <Dropdown.Item className="d-flex w-100" style={{ color: "red" }} onClick={logout}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className={style.menu_sm}>
                            <div className='d-grid gap-2'>
                                <a href={'/dashboard/profile/edit'}>
                                    <Button variant="transparant" className="d-flex pt-3 pb-3">
                                        <div className='me-4'><img src={dataUser.img} alt="User Profile" style={{ borderRadius: "100px", width: "60px", height: "60px" }} /></div>
                                        <div className='w-100 text-start'>
                                            <div style={{ fontSize: "1.25rem" }}><b>{dataUser.fullName}</b></div>
                                            <div style={{ color: "#8A8A8A" }}>@{dataUser.username}</div>
                                        </div>
                                    </Button>
                                </a>
                                <Button href="/admin/category/list" variant="transparant" size="lg" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Button>
                                <Button variant="transparant" size="lg" className="d-flex w-100" style={{ color: "red" }} onClick={logout}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarAdmin