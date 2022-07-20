import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button, ButtonGroup, ToggleButton, Tab, Nav } from 'react-bootstrap'
import { ChatDotsFill, StickiesFill } from 'react-bootstrap-icons'
import CardProduct from '../../../Components/Card/CardProduct/CardProduct'
import { formatDate } from '../../../Utils/helper'
import { dataCardProduct, dataDetailSeller } from '../../DataDummy'
import Layout from '../../Layout'
import style from './DetailSeller.module.css'

const DetailSeller = () => {

    useEffect(() => {
        Aos.init({ duration: 1800 })
    }, []);

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Semua Produk', value: '1' },
        { name: 'Produk Diminati', value: '2' },
        { name: 'Produk Terjual', value: '3' },
    ];

    return (
        <Layout>
            <Container>
                <Row className="mt-3 mb-3">
                    <Col md={12} className="mt-3 ps-4 pe-4">
                        <Row data-aos="zoom-out" className="ps-3 pe-3 pt-4 pb-4" style={{ backgroundColor: "white", borderRadius: "0.375rem", border: "1px solid rgba(0,0,0,.125)" }}>
                            <Col lg={8} className="mb-lg-0 mb-3">
                                <div className='d-md-flex gap-4 w-100'>
                                    <div className={style.profile_lg}><img src={dataDetailSeller.image} alt="Profile Seller" width="130rem" style={{ borderRadius: "0.375rem" }} /></div>
                                    <div className={'mb-3 ' + style.profile_sm}><img src={dataDetailSeller.image} alt="Profile Seller" width="100%" style={{ borderRadius: "0.375rem" }} /></div>
                                    <div className="d-grid align-content-around">
                                        <div>
                                            <h3>{dataDetailSeller.fullname}</h3>
                                            <span style={{ color: "#fb374f" }}>@{dataDetailSeller.username}</span>
                                        </div>
                                        <div className='mt-3 mt-md-0' style={{ color: "#8A8A8A" }}>Lokasi di {dataDetailSeller.city.name} | Bergabung sejak {formatDate(dataDetailSeller.createdAt)}</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className='d-flex gap-3 my-auto'>
                                <Button className="w-100 d-flex align-content-center justify-content-center" variant="dark"><StickiesFill className='my-auto me-2' size={16} /> Catatan</Button>
                                <Button href={'https://wa.me/' + dataDetailSeller.no_hp} target="_blank" className="w-100 d-flex align-content-center justify-content-center" variant="success"><ChatDotsFill className='my-auto me-2' size={18} /> Hubungi</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Tab.Container defaultActiveKey={1}>
                                <Col lg={3} className={'mt-3 ' + style.category_lg} data-aos="fade-right">
                                    <div className={'mt-1 ' + style.box}>
                                        <h5 className="mb-3">Kategori</h5>
                                        <ButtonGroup vertical className="w-100">
                                            <Nav className="d-grid gap-2 w-100">
                                                {radios.map((radio, idx) => (
                                                    <Nav.Link eventKey={radio.value} className="p-0 m-0" key={idx}>
                                                        <ToggleButton
                                                            key={idx}
                                                            id={`radio-${idx}`}
                                                            type="radio"
                                                            variant={radioValue === radio.value ? 'dark' : 'outline-secondary'}
                                                            value={radio.value}
                                                            checked={radioValue === radio.value}
                                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                            style={{ borderRadius: "0.25rem" }}
                                                            className="w-100"
                                                        >
                                                            {radio.name}
                                                        </ToggleButton>
                                                    </Nav.Link>
                                                ))}
                                            </Nav>
                                        </ButtonGroup>
                                    </div>
                                </Col>
                                <Col lg={3} className={'mt-4 ' + style.category_sm} data-aos="fade-right">
                                    <Nav className={style.scroll_menu}>
                                        <ButtonGroup className="d-flex gap-3">
                                            {radios.map((radio, idx) => (
                                                <Nav.Link eventKey={radio.value} className={'p-0 m-0'} key={idx}>
                                                    <ToggleButton
                                                        key={idx}
                                                        id={`radio-${idx}`}
                                                        type="radio"
                                                        variant={radioValue === radio.value ? 'dark' : 'outline-secondary'}
                                                        value={radio.value}
                                                        checked={radioValue === radio.value}
                                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                        style={{ borderRadius: "0.25rem" }}
                                                    >
                                                        {radio.name}
                                                    </ToggleButton>
                                                </Nav.Link>
                                            ))}
                                        </ButtonGroup>
                                    </Nav>
                                </Col>
                                <Col lg={9} className="mt-3">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="1">
                                            <Row>
                                                {dataCardProduct?.map((value, index) => {
                                                    return (
                                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'mb-3'} data-aos="fade-up">
                                                            <CardProduct value={value} type="default" />
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2">
                                            <Row>
                                                {dataCardProduct?.map((value, index) => {
                                                    return (
                                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'mb-3'} data-aos="fade-up">
                                                            <CardProduct value={value} type="default" />
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3">
                                            <Row>
                                                {dataCardProduct?.map((value, index) => {
                                                    return (
                                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'mb-3'} data-aos="fade-up">
                                                            <CardProduct value={value} type="default" />
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Tab.Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default DetailSeller