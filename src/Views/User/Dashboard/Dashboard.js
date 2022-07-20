import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'
import { Bell, BoxSeam, ChevronRight, ClipboardCheck, Person, Star, Tags } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Layout'
import style from './Dashboard.module.css'
import SweetAlert from 'react-bootstrap-sweetalert'

const Dashboard = ({ children, menu }) => {

    const navigate = useNavigate()
    const [InputForm, setInputForm] = useState("")
    const [StatusAlert, setStatusAlert] = useState({ registerSeller: false, invalid: false, success: false })
    const { dataUserVerification } = useSelector(state => state.authUserReducer)

    const navigateMenu = (value) => {
        navigate("/dashboard/" + value)
    }

    const menuSeller = [
        {
            value: 'product',
            label: 'Semua Produk',
            icon: <BoxSeam className='my-auto me-2 me-lg-2' size={16} />
        },
        {
            value: 'offer',
            label: 'Penawaran',
            icon: <Tags className='my-auto me-2 me-lg-2' size={16} />
        },
    ]

    const menuBuyer = [
        {
            value: 'transaction',
            label: 'Transaksi',
            icon: <ClipboardCheck className='my-auto me-2 me-lg-2' size={16} />
        },
        {
            value: 'notification',
            label: 'Notifikasi',
            icon: <Bell className='my-auto me-2 me-lg-2' size={16} />
        },
        {
            value: 'favorit',
            label: 'Favorit',
            icon: <Star className='my-auto me-2 me-lg-2' size={16} />
        },
        {
            value: 'profile',
            label: 'Akun Saya',
            icon: <Person className='my-auto me-2 me-lg-2' size={16} />
        },
    ]

    const selectTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

    const handleRegisterSeller = () => {
        if (InputForm) {
            console.log(InputForm)
            setStatusAlert({ success: true })
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
        <Layout>
            <Container>
                {StatusAlert.registerSeller ?
                    RegisterSeller()
                    : null
                }
                {StatusAlert.success ? <SweetAlert success title="Pendaftaran Penjual Berhasil!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/dashboard/product/list")}></SweetAlert> : null}
                <Row className={'w-100 m-0 mt-4 mb-4'}>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0 p-3 ' + style.box_temp}>
                            <Col lg={10} md={9} xs={12} className={'p-0'}>
                                <div className='d-flex gap-3 w-100 '>
                                    <div><img src={dataUserVerification ? dataUserVerification.data.img : null} alt="Profile Seller" width="60rem" style={{ borderRadius: "0.375rem" }} /></div>
                                    <div className='d-grid align-content-center'>
                                        <div style={{ fontSize: "1.5rem" }}><b>{dataUserVerification ? dataUserVerification.data.fullName : null}</b></div>
                                        <div style={{ color: "#6C757D" }}>@{dataUserVerification ? dataUserVerification.data.username : null}</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={3} xs={12} className={'p-0 d-flex my-auto'}>
                                {dataUserVerification ? dataUserVerification.data.roles[1] ? <div className="w-100 mt-3 mt-md-0"><a href={'/seller/' + dataUserVerification ? dataUserVerification.data.username : null} ><Button variant="outline-secondary" className="w-100">Lihat Toko</Button></a></div> : <div className="w-100 mt-3 mt-md-0"><Button variant="outline-secondary" className="w-100" onClick={() => setStatusAlert({ registerSeller: true })}>Buat Toko</Button></div> : null}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0'}>
                            <Col lg={3} className={'p-0 mt-4 pe-lg-3 ' + style.box_lg}>
                                <div className={'p-3 ' + style.box_temp}>
                                    <h5 className="mb-3">Menu</h5>
                                    <div className="d-grid gap-2 w-100">
                                        {dataUserVerification ?
                                            dataUserVerification.data.roles[1] ?
                                                menuSeller.map((radio, idx) => (
                                                    <Link className="p-0 m-0" key={idx} to={'/dashboard/' + radio.value}>
                                                        <Button
                                                            variant={menu === radio.value ? 'dark' : 'outline-secondary'}
                                                            value={radio.value}
                                                            style={{ borderRadius: "0.25rem" }}
                                                            className="w-100 d-flex align-content-center justify-content-center ps-3 pe-3"
                                                        >
                                                            <div className="w-100 text-start d-flex gap-2 align-content-center">{radio.icon} {radio.label}</div>
                                                            <div><ChevronRight size={16} /></div>
                                                        </Button>
                                                    </Link>
                                                ))
                                                : null
                                            : null
                                        }
                                        {menuBuyer.map((radio, idx) => (
                                            <Link className="p-0 m-0" key={idx} to={'/dashboard/' + radio.value}>
                                                <Button
                                                    variant={menu === radio.value ? 'dark' : 'outline-secondary'}
                                                    value={radio.value}
                                                    style={{ borderRadius: "0.25rem" }}
                                                    className="w-100 d-flex align-content-center justify-content-center ps-3 pe-3"
                                                >
                                                    <div className="w-100 text-start d-flex gap-2 align-content-center">{radio.icon} {radio.label}</div>
                                                    <div><ChevronRight size={16} /></div>
                                                </Button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} className={'p-0 mt-4 pe-lg-3 ' + style.box_sm}>
                                <div className={'p-3 ' + style.box_temp}>
                                    <h5 className="mb-3">Menu</h5>
                                    {dataUserVerification ? dataUserVerification.data.roles[1] ? <Select className="mt-2" options={[...menuSeller, ...menuBuyer]} defaultValue={[...menuSeller, ...menuBuyer].filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigateMenu(e.value)} /> : <Select className="mt-2" options={menuBuyer} defaultValue={menuBuyer.filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigateMenu(e.value)} /> : null}
                                </div>
                            </Col>
                            <Col lg={9} className={'p-0 mt-4 ps-lg-3'}>
                                <div>
                                    {children}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Dashboard