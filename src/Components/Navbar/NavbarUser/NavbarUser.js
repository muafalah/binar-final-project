import React from 'react'
import { Container, Navbar, Offcanvas, Button, Dropdown, Badge, Row, Col } from 'react-bootstrap'
import { BagCheckFill, BagHeartFill, BellFill, BoxArrowRight, HouseFill, StarFill, XCircle } from 'react-bootstrap-icons'
import FormSearch from '../../Form/FormSearch/FormSearch'
import style from './NavbarUser.module.css'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import { dataCardProduct } from '../../../Views/DataDummy'
import { formatRupiah } from '../../../Utils/helper'
import CardNavbarFavorit from '../../Card/CardNavbarFavorit/CardNavbarFavorit'

const NavbarUser = ({ dataUser }) => {
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
                                        <Dropdown.Toggle variant="transparant" className="pe-0 h-100 d-flex">
                                            <span className="my-auto d-flex" style={{ color: "white" }}><BagHeartFill size={16} className="my-auto" /><Badge pill className="ms-1" bg="danger">10</Badge></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant="secondary" className="p-2" style={{ width: "20rem" }}>
                                            <div className="d-flex justify-content-between">
                                                <div><b>Favorit</b></div>
                                                <div className="my-auto"><a href="/dashboard/favorit" style={{ fontSize: "0.75rem", color: "#8A8A8A", textDecoration: "underline" }}>Lihat Semua</a></div>
                                            </div>
                                            <hr className="p-0 m-0 mt-1 mb-3" />
                                            <div>
                                                <Row className='m-0 gap-2'>
                                                    {dataCardProduct?.map((value, index) => {
                                                        return (
                                                            <Col xs={12} className='p-0'>
                                                                <CardNavbarFavorit value={value} />
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown align="end" className="ms-auto p-0">
                                        <Dropdown.Toggle variant="transparant" className="pe-0 h-100 d-flex">
                                            <span className="my-auto d-flex" style={{ color: "white" }}><BellFill size={16} className="my-auto" /><Badge pill className="ms-1" bg="danger">10</Badge></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant="secondary" className="p-2" style={{ width: "20rem" }}>
                                            <div className="d-flex justify-content-between">
                                                <div><b>Notifikasi</b></div>
                                                <div className="my-auto"><a href="/dashboard/notification" style={{ fontSize: "0.75rem", color: "#8A8A8A", textDecoration: "underline" }}>Lihat Semua</a></div>
                                            </div>
                                            <hr className="p-0 m-0 mt-1 mb-3" />
                                            <div>
                                                <Row className='m-0 gap-2'>
                                                    <Col xs={12} className='p-0'>
                                                        a
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown align="end" className="ms-auto p-0">
                                        <Dropdown.Toggle variant="transparant" className="pe-0">
                                            <img src={dataUser.image} alt="User Profile" style={{ borderRadius: "100px", width: "30px", height: "30px" }} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant="secondary" style={{ width: "15rem" }}>
                                            <Dropdown.Item href={'/dashboard/profile/edit'}>
                                                <div className="d-flex">
                                                    <div className="my-auto me-3"><img src={dataUser.image} alt="User Profile" style={{ borderRadius: "100px", width: "38px", height: "38px" }} /></div>
                                                    <div className='w-100'>
                                                        <div><b>{dataUser.fullname}</b></div>
                                                        <div style={{ fontSize: "0.75rem", color: "#8A8A8A" }}>@{dataUser.username}</div>
                                                    </div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            {dataUser.role[1] ? <Dropdown.Item href="/dashboard/product/list" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Dropdown.Item> : <Dropdown.Item href="/dashboard/notification/list" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Dropdown.Item>}
                                            {dataUser.role[1] ? <Dropdown.Item href={'/seller/' + dataUser.username} className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Lihat Toko</Dropdown.Item> : <Dropdown.Item href="#" className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Menjadi Penjual</Dropdown.Item>}
                                            <Dropdown.Item href="#" className="d-flex w-100" style={{ color: "red" }}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className={style.menu_sm}>
                            <div className='d-grid gap-2'>
                                <a href={'/dashboard/profile/edit'}>
                                    <Button variant="transparant" className="d-flex pt-3 pb-3">
                                        <div className='me-4'><img src={dataUser.image} alt="User Profile" style={{ borderRadius: "100px", width: "60px", height: "60px" }} /></div>
                                        <div className='w-100 text-start'>
                                            <div style={{ fontSize: "1.25rem" }}><b>{dataUser.fullname}</b></div>
                                            <div style={{ color: "#8A8A8A" }}>@{dataUser.username}</div>
                                        </div>
                                    </Button>
                                </a>
                                {dataUser.role[1] ? <a href="/dashboard/product/list"><Button variant="transparant" size="lg" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Button></a> : <a href="/dashboard/notification/list"><Button variant="transparant" size="lg" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Button></a>}
                                {dataUser.role[1] ? <a href={'/seller/' + dataUser.username}><Button variant="transparant" size="lg" className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Lihat Toko</Button></a> : <Button variant="transparant" size="lg" className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Menjadi Penjual</Button>}
                                <a href={'/dashboard/notification/list'}><Button variant="transparant" size="lg" className="d-flex w-100"><BellFill size={18} className="me-3 my-auto" />Notifikasi</Button></a>
                                <a href={'/dashboard/favorit/list'}><Button variant="transparant" size="lg" className="d-flex w-100"><StarFill size={18} className="me-3 my-auto" />Favorit</Button></a>
                                <Button variant="transparant" size="lg" className="d-flex w-100" style={{ color: "red" }}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarUser