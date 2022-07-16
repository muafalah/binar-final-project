import React from 'react'
import Select from 'react-select'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ChevronRight, Collection, Folder, Person } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Layout'
import style from './DashboardAdmin.module.css'
import { dataAdmin } from '../../DataDummy'

const DashboardAdmin = ({ children, menu }) => {

    const navigate = useNavigate()

    const navigateMenu = (value) => {
        navigate("/dashboard/" + value)
    }

    const menuAdmin = [
        {
            value: 'category',
            label: 'Kategori',
            icon: <Folder className='my-auto me-2 me-lg-2' size={16} />
        },
        {
            value: 'carousel',
            label: 'Iklan',
            icon: <Collection className='my-auto me-2 me-lg-2' size={16} />
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
                            <Col lg={11} md={11} xs={10} className={'p-0'}>
                                <div className='d-flex gap-3 w-100 '>
                                    <div><img src={dataAdmin.image} alt="Profile Seller" width="60rem" style={{ borderRadius: "0.375rem" }} /></div>
                                    <div className='d-grid align-content-center'>
                                        <div style={{ fontSize: "1.5rem" }}><b>{dataAdmin.fullname}</b></div>
                                        <div style={{ color: "#6C757D" }}>{dataAdmin.email}</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={1} md={1} xs={2} className={'p-0 d-flex my-auto'}>
                                <Button href="/admin/profile/edit" variant="outline-secondary" className="w-100">Edit</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0'}>
                            <Col lg={3} className={'p-0 mt-4 pe-lg-3 ' + style.box_lg}>
                                <div className={'p-3 ' + style.box_temp}>
                                    <h5 className="mb-3">Menu</h5>
                                    <div className="d-grid gap-2 w-100">
                                        {menuAdmin.map((radio, idx) => (
                                            <Link className="p-0 m-0" key={idx} to={'/admin/' + radio.value}>
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
                                    <Select className="mt-2" options={menuAdmin} defaultValue={menuAdmin.filter(option => option.value == menu)} placeholder="Menu" theme={selectTheme} onChange={(e) => navigateMenu(e.value)} />
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

export default DashboardAdmin