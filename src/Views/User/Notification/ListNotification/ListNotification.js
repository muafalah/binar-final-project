import React from 'react'
import { Button, Col, Nav, Row, Tab } from 'react-bootstrap'
import CardNotification from '../../../../Components/Card/CardNotification/CardNotification'
import { dataNotification } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListNotification.module.css'

const ListNotification = () => {
    return (
        <Dashboard menu="notification">
            <Tab.Container defaultActiveKey="1">
                <Row className="m-0 gap-3">
                    <Col xs={12} className="p-0">
                        <Nav variant="tabs" className={style.scroll_menu}>
                            <Nav.Item className="d-flex">
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Notifikasi Pengguna (4)</Nav.Link>
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Notifikasi Toko (4)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} className="p-0">
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                <Row>
                                    <Col xs={12} className={'mb-3 '}>
                                        <div className='d-flex'>
                                            <div className='w-100 my-auto'>Menampilan semua notifikasi penawaran</div>
                                            <div className='w-50 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                                        </div>
                                    </Col>
                                    {dataNotification?.map((value, index) => {
                                        return (
                                            <Col xs={12} className={'mb-3 '} key={index}>
                                                <CardNotification value={value} type="buyer" />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                <Row>
                                    <Col xs={12} className={'mb-3 '}>
                                        <div className='d-flex'>
                                            <div className='w-100 my-auto'>Menampilan semua notifikasi penjualan</div>
                                            <div className='w-50 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                                        </div>
                                    </Col>
                                    {dataNotification?.map((value, index) => {
                                        return (
                                            <Col xs={12} className={'mb-3 '} key={index}>
                                                <CardNotification value={value} type="seller" />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            {/* <Row className="m-0 gap-3">
                <Col xs={12} className="p-0">
                    <div className='d-flex'>
                        <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Notifikasi</b></div>
                        <div className='w-100 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                    </div>
                    <hr className="mt-2 mb-1" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row>
                        {dataNotification?.map((value, index) => {
                            return (
                                <Col xs={12} className={'mb-3 '}>
                                    <CardNotification value={value} />
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row> */}
        </Dashboard>
    )
}

export default ListNotification