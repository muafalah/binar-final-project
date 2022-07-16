import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import CardOffer from '../../../../Components/Card/CardOffer/CardOffer'
import { dataOffer } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListOffer.module.css'

const ListOffer = () => {
    return (
        <Dashboard menu="offer">
            <Tab.Container defaultActiveKey="1">
                <Row className="m-0 gap-3">
                    <Col xs={12} className="p-0">
                        <Nav variant="tabs" className={style.scroll_menu}>
                            <Nav.Item className="d-flex">
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Belum Direspon (1)</Nav.Link>
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Diterima (2)</Nav.Link>
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="3">Ditolak (1)</Nav.Link>
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="4">Selesai (2)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} className="p-0">
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                <Row>
                                    {dataOffer?.map((value, index) => {
                                        return (
                                            <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                <CardOffer value={value} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" id="accepted">
                                <Row>
                                    {dataOffer?.map((value, index) => {
                                        return (
                                            <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                <CardOffer value={value} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                <Row>
                                    {dataOffer?.map((value, index) => {
                                        return (
                                            <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                <CardOffer value={value} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4">
                                <Row>
                                    {dataOffer?.map((value, index) => {
                                        return (
                                            <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                <CardOffer value={value} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Dashboard>
    )
}

export default ListOffer