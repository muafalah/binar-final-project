import React from 'react'
import Select from 'react-select'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Bell, BoxSeam, ChevronRight, Person, Star, Tags } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import { dataDetailSeller, dataUser } from '../../DataDummy'
import Layout from '../../Layout'
import style from './Dashboard.module.css'

const Dashboard = ({ children, menu }) => {

    const navigate = useNavigate()

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

    return (
        <Layout>
            <Container>
                <Row className={'w-100 m-0 mt-4 mb-4'}>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0 p-3 ' + style.box_temp}>
                            <Col lg={10} md={9} xs={12} className={'p-0'}>
                                <div className='d-flex gap-3 w-100 '>
                                    <div><img src={dataDetailSeller.image} alt="Profile Seller" width="60rem" style={{ borderRadius: "0.375rem" }} /></div>
                                    <div className='d-grid align-content-center'>
                                        <div style={{ fontSize: "1.5rem" }}><b>{dataDetailSeller.fullname}</b></div>
                                        <div style={{ color: "#6C757D" }}>@{dataDetailSeller.username}</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={3} xs={12} className={'p-0 d-flex my-auto'}>
                                {dataUser.role[1] === "seller" ? <div className="w-100 mt-3 mt-md-0"><a href={'/seller/' + dataDetailSeller.username} ><Button variant="outline-secondary" className="w-100">Lihat Toko</Button></a></div> : <div className="w-100 mt-3 mt-md-0"><Button variant="outline-secondary" className="w-100">Buat Toko</Button></div>}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0'}>
                            <Col lg={3} className={'p-0 mt-4 pe-lg-3 ' + style.box_lg}>
                                <div className={'p-3 ' + style.box_temp}>
                                    <h5 className="mb-3">Menu</h5>
                                    <div className="d-grid gap-2 w-100">
                                        {dataUser.role[1] ?
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
                                            : null}
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
                                    {dataUser.role[1] === "seller" ? <Select className="mt-2" options={[...menuSeller, ...menuBuyer]} defaultValue={menuSeller.filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigateMenu(e.value)} /> : <Select className="mt-2" options={menuBuyer} defaultValue={menuSeller.filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigateMenu(e.value)} />}
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