import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { Button, Col, Container, Row, Form, Spinner } from 'react-bootstrap'
import { Bell, BoxSeam, ChevronRight, ClipboardCheck, Person, Star, Tags } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Layout'
import style from './Dashboard.module.css'
import SweetAlert from 'react-bootstrap-sweetalert'
import { formatCamelCase } from '../../../Utils/helper'
import { postRegisterSeller } from '../../../Redux/features/authUser'
import Aos from 'aos'

const Dashboard = ({ children, menu }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [InputForm, setInputForm] = useState({ description: "", password: "" })
    const [StatusAlert, setStatusAlert] = useState({ registerSeller: false, invalid: false, success: false })
    const { isLoading, isSuccess, isError, dataRegisterSeller, dataUserVerification } = useSelector(state => state.authUserReducer)

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

    useEffect(() => {
        if (isSuccess) {
            if (dataRegisterSeller) {
                if (dataRegisterSeller.status === 200) {
                    setStatusAlert({ success: true })
                }
            }
        }
        Aos.init({ duration: 1800 })
    }, [isSuccess, dataRegisterSeller])

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

    return (
        <Layout>
            {dataUserVerification ?
                <Container>
                    {StatusAlert.registerSeller ? RegisterSeller() : null}
                    {StatusAlert.success ? <SweetAlert success title="Pendaftaran Penjual Berhasil!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/dashboard/product/list")}></SweetAlert> : null}
                    <Row className={'w-100 m-0 mt-4 mb-4'}>
                        <Col xs={12} className={'p-0'}>
                            <Row className={'m-0 p-3 ' + style.box_temp} data-aos="zoom-out">
                                <Col lg={10} md={9} xs={12} className={'p-0'}>
                                    <div className='d-flex gap-3 w-100 '>
                                        <div><img src={dataUserVerification.data.img} alt="Profile Seller" width="60rem" style={{ borderRadius: "0.375rem" }} /></div>
                                        <div className='d-grid align-content-center'>
                                            <div style={{ fontSize: "1.5rem" }}><b>{formatCamelCase(dataUserVerification.data.fullName)}</b></div>
                                            <div style={{ color: "#6C757D" }}>@{dataUserVerification.data.username}</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} md={3} xs={12} className={'p-0 d-flex my-auto'}>
                                    {dataUserVerification.data.roles[1] ? <div className="w-100 mt-3 mt-md-0"><a href={'/seller/' + dataUserVerification.data.username} ><Button variant="outline-secondary" className="w-100">Lihat Toko</Button></a></div> : <div className="w-100 mt-3 mt-md-0"><Button variant="outline-secondary" className="w-100" onClick={() => setStatusAlert({ registerSeller: true })}>Buat Toko</Button></div>}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className={'p-0'}>
                            <Row className={'m-0'}>
                                <Col lg={3} className={'p-0 mt-4 pe-lg-3 ' + style.box_lg} data-aos="fade-right">
                                    <div className={'p-3 ' + style.box_temp}>
                                        <h5 className="mb-3">Menu</h5>
                                        <div className="d-grid gap-2 w-100">
                                            {dataUserVerification.data.roles[1] ?
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
                                <Col xs={12} className={'p-0 mt-4 pe-lg-3 ' + style.box_sm} data-aos="fade-right">
                                    <div className={'p-3 ' + style.box_temp}>
                                        <h5 className="mb-3">Menu</h5>
                                        {dataUserVerification.data.roles[1] ? <Select className="mt-2" options={[...menuSeller, ...menuBuyer]} defaultValue={[...menuSeller, ...menuBuyer].filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigate("/dashboard/" + e.value)} /> : <Select className="mt-2" options={menuBuyer} defaultValue={menuBuyer.filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigate("/dashboard/" + e.value)} />}
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
                : null
            }
        </Layout>
    )
}

export default Dashboard