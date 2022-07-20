import React, { useState } from 'react'
import { Container, Navbar, Offcanvas, Button, Dropdown, Badge, Row, Col, Form } from 'react-bootstrap'
import { BagCheckFill, BagHeartFill, BellFill, BoxArrowRight, HouseFill, StarFill } from 'react-bootstrap-icons'
import FormSearch from '../../Form/FormSearch/FormSearch'
import style from './NavbarUser.module.css'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import { dataCardProduct, dataNotification } from '../../../Views/DataDummy'
import CardNavbarFavorit from '../../Card/CardNavbarFavorit/CardNavbarFavorit'
import CardNavbarNotification from '../../Card/CardNavbarNotification/CardNavbarNotification'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert'

const NavbarUser = ({ dataUser }) => {

    const navigate = useNavigate()

    const [InputForm, setInputForm] = useState("")
    const [StatusAlert, setStatusAlert] = useState({ registerSeller: false, invalid: false, success: false })
    const { dataUserVerification } = useSelector(state => state.authUserReducer)

    const handleRegisterSeller = () => {
        if (InputForm) {
            console.log(InputForm)
            setStatusAlert({ success: true })
        } else {
            setStatusAlert({ registerSeller: true, invalid: true })
        }
    }

    const logout = () => {
        localStorage.removeItem("TokenSecondGadget")
        window.location.reload()
        navigate("/")
    }

    const RegisterSeller = () => {
        return (
            <SweetAlert
                showCancel
                cancelBtnBsStyle="light"
                confirmBtnBsStyle="dark"
                placeHolder="Deskripsi singkat tokomu"
                title="Pendaftaran Penjual"
                onConfirm={handleRegisterSeller}
                onCancel={() => setStatusAlert({ registerSeller: false })}
            >
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><b>Domain Toko</b></Form.Label>
                        <Form.Control type="text" placeholder={window.location.host + "/seller/" + dataUserVerification.data.username} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Deskripsi Toko</b></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Tuliskan deskripsi tokomu disini..." onChange={(e) => setInputForm(e.target.value)} isInvalid={StatusAlert.invalid} />
                        <Form.Control.Feedback type="invalid">
                            Masukkan deskripsi toko kamu.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </SweetAlert>
        )
    }

    return (
        <Navbar key="sm" bg="dark" expand="sm" variant="dark">
            {StatusAlert.registerSeller ?
                RegisterSeller()
                : null
            }
            {StatusAlert.success ? <SweetAlert success title="Pendaftaran Penjual Berhasil!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/dashboard/product/list")}></SweetAlert> : null}
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
                                            <span className="my-auto d-flex" style={{ color: "white" }}><BagHeartFill size={16} className="my-auto" /><Badge pill className="ms-1" bg="danger">{dataCardProduct.length}</Badge></span>
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
                                                            <Col xs={12} className='p-0' key={index}>
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
                                            <span className="my-auto d-flex" style={{ color: "white" }}><BellFill size={16} className="my-auto" /><Badge pill className="ms-1" bg="danger">{dataNotification.length}</Badge></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant="secondary" className="p-2" style={{ width: "20rem" }}>
                                            <div className="d-flex justify-content-between">
                                                <div><b>Notifikasi</b></div>
                                                <div className="my-auto"><a href="/dashboard/notification" style={{ fontSize: "0.75rem", color: "#8A8A8A", textDecoration: "underline" }}>Lihat Semua</a></div>
                                            </div>
                                            <hr className="p-0 m-0 mt-1 mb-3" />
                                            <div>
                                                <Row className='m-0 gap-2'>
                                                    {dataNotification?.map((value, index) => {
                                                        return (
                                                            <Col xs={12} className='p-0' key={index}>
                                                                {index > 0 ? <hr className="m-0 p-0 mt-1 mb-2" /> : null}
                                                                <CardNavbarNotification value={value} />
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
                                            {dataUser.roles[1] ? <Dropdown.Item href="/dashboard/product/list" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Dropdown.Item> : <Dropdown.Item href="/dashboard/transaction/list" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Dropdown.Item>}
                                            {dataUser.roles[1] ? <Dropdown.Item href={'/seller/' + dataUser.username} className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Lihat Toko</Dropdown.Item> : <Dropdown.Item onClick={() => setStatusAlert({ registerSeller: true })} className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Menjadi Penjual</Dropdown.Item>}
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
                                {dataUser.roles[1] ? <a href="/dashboard/product/list"><Button variant="transparant" size="lg" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Button></a> : <a href="/dashboard/notification/list"><Button variant="transparant" size="lg" className="d-flex w-100"><HouseFill size={18} className="me-3 my-auto" />Dashboard</Button></a>}
                                {dataUser.roles[1] ? <a href={'/seller/' + dataUser.username}><Button variant="transparant" size="lg" className="d-flex w-100"><BagCheckFill size={18} className="me-3 my-auto" />Lihat Toko</Button></a> : <Button variant="transparant" size="lg" className="d-flex w-100" onClick={() => setStatusAlert({ registerSeller: true })}><BagCheckFill size={18} className="me-3 my-auto" />Menjadi Penjual</Button>}
                                <a href={'/dashboard/notification/list'}><Button variant="transparant" size="lg" className="d-flex w-100"><BellFill size={18} className="me-3 my-auto" />Notifikasi</Button></a>
                                <a href={'/dashboard/favorit/list'}><Button variant="transparant" size="lg" className="d-flex w-100"><StarFill size={18} className="me-3 my-auto" />Favorit</Button></a>
                                <Button variant="transparant" size="lg" className="d-flex w-100" style={{ color: "red" }} onClick={logout}><BoxArrowRight size={18} className="me-3 my-auto" />Keluar</Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarUser