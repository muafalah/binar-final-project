import React, { useState, useEffect } from 'react'
import { Container, Navbar, Offcanvas, Button, Dropdown, Badge, Row, Col, Form, Spinner, Tab, Nav } from 'react-bootstrap'
import { BagCheckFill, BagHeartFill, BellFill, BoxArrowRight, HouseFill, StarFill } from 'react-bootstrap-icons'
import FormSearch from '../../Form/FormSearch/FormSearch'
import style from './NavbarUser.module.css'
import LogoWhite from '../../../Assets/image/Logo/img-logo-landscape-white.svg'
import LogoBlack from '../../../Assets/image/Logo/img-logo-landscape-black.svg'
import { dataNotification } from '../../../Views/DataDummy'
import CardNavbarFavorit from '../../Card/CardNavbarFavorit/CardNavbarFavorit'
import CardNavbarNotification from '../../Card/CardNavbarNotification/CardNavbarNotification'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert'
import { postRegisterSeller } from '../../../Redux/features/authUser'
import Aos from 'aos'
import { getMiniWishlist } from '../../../Redux/features/wishlistSlice'
import { getMiniBuyerNotification, getMiniSellerNotification } from '../../../Redux/features/notificationSlice'
import { formatCamelCase } from '../../../Utils/helper'

const NavbarUser = ({ dataUser }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [InputForm, setInputForm] = useState({ description: "", password: "" })
    const [StatusAlert, setStatusAlert] = useState({ registerSeller: false, invalid: false, success: false })
    const { isLoading, isSuccess, isError, dataRegisterSeller, dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataMiniWishlist } = useSelector(state => state.wishlistReducer)
    const { dataMiniBuyerNotification, dataMiniSellerNotification } = useSelector(state => state.notificationReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataRegisterSeller) {
                if (dataRegisterSeller.status === 200) {
                    setStatusAlert({ success: true })
                }
            }
        }
    }, [isSuccess, dataRegisterSeller])

    useEffect(() => {
        dispatch(getMiniWishlist({ idUser: dataUserVerification.data.userId }))
        dispatch(getMiniBuyerNotification({ idUser: dataUserVerification.data.userId }))
        dispatch(getMiniSellerNotification({ idUser: dataUserVerification.data.userId }))
        Aos.init({ duration: 1800 })
    }, [])

    const handleRegisterSeller = async () => {
        if (InputForm.description && InputForm.password) {
            await dispatch(postRegisterSeller({ dataProfile: dataUserVerification.data, description: InputForm.description, password: InputForm.password }))
        } else {
            setStatusAlert({ registerSeller: true, invalid: true })
        }
    }

    const RegisterSeller = () => {
        return (
            <SweetAlert
                showCancel
                cancelBtnBsStyle="light"
                confirmBtnBsStyle="dark"
                placeHolder="Deskripsi singkat tokomu"
                title=""
                onConfirm={handleRegisterSeller}
                onCancel={() => setStatusAlert({ registerSeller: false })}
            >
                {isLoading ?
                    <Spinner animation="border" size="lg" />
                    :
                    <Form>
                        <img className="pt-2 pb-2" src="https://cdn-icons-png.flaticon.com/512/610/610365.png" alt="store" width="20%" />
                        <h3 className="mt-3">Pendaftaran Toko</h3>
                        <Form.Group className="mt-4 text-start" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontSize: "1rem" }}><b>Domain Toko</b></Form.Label>
                            <Form.Control type="text" placeholder={window.location.host + "/seller/" + dataUserVerification.data.username} readOnly />
                        </Form.Group>
                        <Form.Group className="mt-3 text-start">
                            <Form.Label style={{ fontSize: "1rem" }}><b>Deskripsi Toko</b> <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" placeholder="Tuliskan deskripsi tokomu disini..." onChange={(e) => setInputForm({ ...InputForm, description: e.target.value })} isInvalid={StatusAlert.invalid} />
                            <Form.Control.Feedback type="invalid">
                                Masukkan deskripsi toko kamu.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mt-3 text-start">
                            <Form.Label style={{ fontSize: "1rem" }}><b>Kata Sandi</b> <span style={{ color: "red" }}>*</span></Form.Label>
                            <Form.Control type="password" name="password" placeholder="Pastikan kata sandi benar" onChange={(e) => setInputForm({ ...InputForm, password: e.target.value })} isInvalid={StatusAlert.invalid} />
                            <Form.Control.Feedback type="invalid">
                                Masukkan kata sandi kamu.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                }
            </SweetAlert>
        )
    }

    const logout = () => {
        localStorage.removeItem("TokenSecondGadget")
        navigate("/")
        window.location.reload()
    }

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    return (
        <Navbar key="sm" bg="dark" expand="sm" variant="dark" data-aos="fade-down">
            {StatusAlert.registerSeller ?
                RegisterSeller()
                : null
            }
            {StatusAlert.success ? <SweetAlert success title="Pendaftaran Penjual Berhasil!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {dataMiniWishlist && dataMiniBuyerNotification && dataMiniSellerNotification ?
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
                                                <span className="my-auto d-flex" style={{ color: "white" }}><BagHeartFill size={16} className="my-auto" /><Badge pill className="ms-1" bg="danger">{dataMiniWishlist.data.length}</Badge></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu variant="secondary" className="p-2" style={{ width: "20rem" }}>
                                                <div className="d-flex justify-content-between">
                                                    <div><b>Favorit</b></div>
                                                    <div className="my-auto"><a href="/dashboard/favorit" style={{ fontSize: "0.75rem", color: "#8A8A8A", textDecoration: "underline" }}>Lihat Semua</a></div>
                                                </div>
                                                <hr className="p-0 m-0 mt-1 mb-3" />
                                                <div>
                                                    <Row className='m-0 gap-2'>
                                                        {dataMiniWishlist.data.length > 0 ?
                                                            dataMiniWishlist.data?.map((value, index) => {
                                                                return (
                                                                    <Col xs={12} className='p-0' key={index}>
                                                                        <CardNavbarFavorit value={value} />
                                                                    </Col>
                                                                )
                                                            })
                                                            :
                                                            <div className={'mt-1 ' + style.box} data-aos="fade-zoom-out">
                                                                <img src={noProduct} width="100%" alt="product not found" />
                                                            </div>
                                                        }
                                                    </Row>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown align="end" className="ms-auto p-0">
                                            <Dropdown.Toggle variant="transparant" className="pe-0 h-100 d-flex">
                                                <span className="my-auto d-flex" style={{ color: "white" }}><BellFill size={16} className="my-auto" /><Badge pill className="ms-1" bg="danger">{dataMiniBuyerNotification.data.length + dataMiniSellerNotification.data.length}</Badge></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu variant="secondary" className="p-2" style={{ width: "20rem" }}>
                                                <Tab.Container defaultActiveKey="1">
                                                    <Row className="m-0 gap-3">
                                                        <Col xs={12} className="p-0">
                                                            <Nav variant="tabs" className={style.scroll_menu}>
                                                                <Nav.Item className="d-flex">
                                                                    <Nav.Link style={{ color: "#1E1E1E", fontSize: "0.875rem" }} eventKey="1">Notifikasi Pengguna ({dataMiniBuyerNotification.data.length})</Nav.Link>
                                                                    <Nav.Link style={{ color: "#1E1E1E", fontSize: "0.875rem" }} eventKey="2">Notifikasi Toko ({dataMiniSellerNotification.data.length})</Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>
                                                        </Col>
                                                        <Col xs={12} className="p-0">
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="1">
                                                                    <Row className='m-0 gap-2'>
                                                                        {dataMiniBuyerNotification.data.length > 0 ?
                                                                            dataMiniBuyerNotification.data?.map((value, index) => {
                                                                                return (
                                                                                    <Col xs={12} className='p-0' key={index}>
                                                                                        {index > 0 ? <hr className="m-0 p-0 mt-1 mb-2" /> : null}
                                                                                        <CardNavbarNotification value={value} type="buyer" />
                                                                                    </Col>
                                                                                )
                                                                            })
                                                                            :
                                                                            <div className={'mt-1 ' + style.box} data-aos="fade-zoom-out">
                                                                                <img src={noProduct} width="100%" alt="product not found" />
                                                                            </div>
                                                                        }
                                                                    </Row>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="2">
                                                                    <Row className='m-0 gap-2'>
                                                                        {dataMiniSellerNotification.data.length > 0 ?
                                                                            dataMiniSellerNotification.data?.map((value, index) => {
                                                                                return (
                                                                                    <Col xs={12} className='p-0' key={index}>
                                                                                        {index > 0 ? <hr className="m-0 p-0 mt-1 mb-2" /> : null}
                                                                                        <CardNavbarNotification value={value} type="seller" />
                                                                                    </Col>
                                                                                )
                                                                            })
                                                                            :
                                                                            <div className={'mt-1 ' + style.box} data-aos="fade-zoom-out">
                                                                                <img src={noProduct} width="100%" alt="product not found" />
                                                                            </div>
                                                                        }
                                                                    </Row>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Col>
                                                    </Row>
                                                </Tab.Container>
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
                                                            <div><b>{formatCamelCase(dataUser.fullName)}</b></div>
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
                                                <div style={{ fontSize: "1.25rem" }}><b>{formatCamelCase(dataUser.fullName)}</b></div>
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
                : null
            }
        </Navbar>
    )
}

export default NavbarUser