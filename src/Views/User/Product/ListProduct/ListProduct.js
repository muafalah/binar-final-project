import React from 'react'
import { Button, Col, Nav, Row, Tab } from 'react-bootstrap'
import CardProduct from '../../../../Components/Card/CardProduct/CardProduct'
import { dataCardProduct } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListProduct.module.css'

const ListProduct = () => {
    return (
        <Dashboard menu="product">
            <Tab.Container defaultActiveKey="1">
                <Row className="m-0 gap-4">
                    <Col xs={12} className="p-0">
                        <Nav variant="tabs" className={style.scroll_menu}>
                            <Nav.Item className="d-flex">
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Sedang Dijual (3)</Nav.Link>
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Telah Terjual (2)</Nav.Link>
                                <Nav.Link style={{ color: "#1E1E1E" }} eventKey="3">Disimpan (1)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} className="p-0">
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                Sedang Dijual
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                Telah Terjual
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                Disimpan
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Dashboard>
    )
}

export default ListProduct