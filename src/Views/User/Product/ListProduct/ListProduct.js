import React from 'react'
import { Button, Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import { Plus, PlusCircleFill } from 'react-bootstrap-icons'
import CardProduct from '../../../../Components/Card/CardProduct/CardProduct'
import { dataCardProduct } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListProduct.module.css'

const ListProduct = () => {
    return (
        <Dashboard menu="product">
            <Tab.Container defaultActiveKey="1">
                <Row className="m-0 gap-3">
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
                                <Row>
                                    <Col lg={4} md={6} sm={12} xs={12} className={'pt-2 pb-2'}>
                                        <a href={'/dashboard/product/add'}>
                                            <Card className={'mt-1 mb-1 ' + style.add_product_lg}>
                                                <div className={'w-100 h-100 d-grid gap-4 align-content-center justify-content-center '}>
                                                    <div className='d-flex'><PlusCircleFill className="mx-auto" size="6rem" /></div>
                                                    <div><h5>Tambah Produk Baru</h5></div>
                                                </div>
                                            </Card>
                                            <div className={style.add_product_sm}>
                                                <Button className={'w-100 d-flex align-content-center justify-content-center '} size="lg" variant="secondary" style={{ fontSize: "1.125rem" }}><PlusCircleFill className='my-auto me-2' size={18} /> Tambah Produk Baru</Button>
                                            </div>
                                        </a>
                                    </Col>
                                    {dataCardProduct?.map((value, index) => {
                                        return (
                                            <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                                <CardProduct value={value} type="available" />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                {/* <Row>
                                    {dataCardProduct?.map((value, index) => {
                                        return (
                                            <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                                <CardProduct value={value} type="sold" />
                                            </Col>
                                        )
                                    })}
                                </Row> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                {/* <Row>
                                    {dataCardProduct?.map((value, index) => {
                                        return (
                                            <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                                <CardProduct value={value} type="archive" />
                                            </Col>
                                        )
                                    })}
                                </Row> */}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Dashboard>
    )
}

export default ListProduct